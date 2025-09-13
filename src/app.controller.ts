import { Controller, Get, Post, Put, Delete, Param, ParseEnumPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './data';

@Controller('report/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':reportType')
  getAllReports(
		@Param('reportType', new ParseEnumPipe(ReportType)) reportType: ReportType
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
