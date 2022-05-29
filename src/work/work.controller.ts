import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('work')
export class WorkController {
    constructor(private readonly workService: WorkService) { }

    @Get()
    postLibrary(@Body() body: any) {
        return this.workService.findAll()
    }
}
