import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':reportType')
  getAllIncomeReport(
		@Param('reportType') reportType: 'string'
	): string {
    return this.appService.getAllIncomeReport(reportType);
  }

	@Get(':id')
	getIncomeReportById(): string {
		return this.appService.getIncomeReportById();
	};

	@Post()
	createIncomeReport(): string {
		return this.appService.createIncomeReport();
	};

	@Put(':id')
	upateIncomeReport(): string {
		return this.appService.updateIncomeReport();
	};

	@Delete(':id')
	deleteIncomeReportById(): string {
		return this.appService.deleteIncomeReportById();
	};

}
