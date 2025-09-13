import { Injectable } from '@nestjs/common';
import { data, ReportType } from 'src/data';

@Injectable()
export class AppService {
	getAllReports(reportType: ReportType): string {
		const filteredReport = data.report.filter(
			(report) => report.reportType === reportType,
		);
		return JSON.stringify(filteredReport);
	}

	getReportById(): string {
		return 'Report for ID...';
	}

	createReport(): string {
		return 'Creating new data ...';
	}

	updateReport(): string {
		return 'Updating data for ID...';
	}

	deleteReportById(): string {
		return 'Deleting data for ID...';
	}
}
