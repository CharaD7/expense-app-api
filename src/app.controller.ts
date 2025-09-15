import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Param,
	BadRequestException,
	ParseEnumPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './data';
import { ApiTags, ApiParam, ApiResponse, ApiOperation } from '@nestjs/swagger';

@ApiTags('Reports')
@Controller('report/')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get(':reportType')
	@ApiOperation({ summary: 'Get all reports of a specific type' })
	@ApiParam({
		name: 'type',
		enum: ReportType,
		required: true,
		description: 'Type of report to retrieve',
	})
	@ApiResponse({ status: 200, description: 'Reports retrieved successfully' })
	@ApiResponse({ status: 400, description: 'Invalid report type' })
	getAllReports(
		@Param(
			'type',
			new ParseEnumPipe(ReportType, {
				exceptionFactory: (error) =>
					new BadRequestException(
						'Invalid report type. Allowed values are: income, and expense.',
					),
			}),
		)
		type: ReportType,
	): string {
		return this.appService.getAllReports(type);
	}

@Get(':type/:id')
	@ApiOperation({ summary: 'Get a report by its ID' })
	@ApiParam({ name: 'id', description: 'ID of the report to retrieve' })
	@ApiParam({ name: 'type', description: 'Type of the report to retrieve' })
	@ApiResponse({ status: 200, description: 'Reports retrieved successfully' })
	@ApiResponse({ status: 400, description: 'Invalid report type/id' })
	@ApiResponse({ status: 404, description: 'Report not found' })
	getReportById(
		@Param('id') id: string,
		@Param('type',
			new ParseEnumPipe(ReportType,
				{
					exceptionFactory: () => new BadRequestException('Invalid report type. Allowed values are: income, expense.'),
				}
			)
		) type: ReportType
	): string {
		return this.appService.getReportById(id, type);
	}

	@Post()
	@ApiOperation({ summary: 'Create a new report' })
	createReport(): string {
		return this.appService.createReport();
	}

	@Put(':id')
	@ApiOperation({ summary: 'Update a report by its ID' })
	upateReport(
		@Param('id') id: string
	): string {
		return this.appService.updateReport(id);
	}

	@Delete(':id')
	@ApiOperation({ summary: 'Delete a report by its ID' })
	deleteReportById(
		@Param('id') id: string
	): string {
		return this.appService.deleteReportById(id);
	}
}
