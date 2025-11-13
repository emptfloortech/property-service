import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(@InjectDataSource() private dataSource: DataSource) {}

  async query(query: string, parameters?: any[]): Promise<any> {
    const start = Date.now();
    try {
      const result = await this.dataSource.query(query, parameters);
      const duration = Date.now() - start;
      console.log('Executed raw query', { query, duration, rows: result.length });
      return result;
    } catch (error) {
      console.error('Database query error:', { query, error: error.message });
      throw error;
    }
  }

  getQueryRunner() {
    return this.dataSource.createQueryRunner();
  }

  async transaction<T>(callback: (queryRunner: any) => Promise<T>): Promise<T> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const result = await callback(queryRunner);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }
}
