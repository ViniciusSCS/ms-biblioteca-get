import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Work } from './work.entity';

@Injectable()
export class WorkService {
    constructor(
        @Inject('WORK_REPOSITORY')
        private workRepository: Repository<Work>,
    ) { }

    async findAll(): Promise<Work[]> {
        return this.workRepository.find();
    }
}