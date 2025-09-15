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

	getReportById(id: string, type: string): string {
		const reportType = type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
		const report = 
			data.report
			.filter((report) => report.type === reportType)
			.find((report) => report.id === id) ;
		return report ? JSON.stringify(report) : `Report with ID ${id} and type ${type} not found.`;
	}

	createReport(): string {
		return 'Creating new data ...';
	}

	updateReport(id: string): string {
		return 'Updating data for ID...';
	}

	deleteReportById(id: string): string {
		return 'Deleting data for ID...';
	}
}
