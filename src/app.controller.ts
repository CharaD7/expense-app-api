import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':reportType')
  getAllReports(
		@Param('reportType') reportType: 'string'
	): string {
    return this.appService.getAllReports(reportType);
  }

	@Get(':id')
	getReportById(): string {
		return this.appService.getReportById();
	};

	@Post()
	createReport(): string {
		return this.appService.createReport();
	};

	@Put(':id')
	upateReport(): string {
		return this.appService.updateReport();
	};

	@Delete(':id')
	deleteReportById(): string {
		return this.appService.deleteReportById();
	};

}
