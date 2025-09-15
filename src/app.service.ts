import { Injectable } from '@nestjs/common';
import { data, ReportType } from 'src/data';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
	getAllReports(type: ReportType): string {
		const reportType = type === 'expense' ? ReportType.EXPENSE : ReportType.INCOME;
		const filteredReport = data.report.filter(
			(report) => report.type === reportType
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

	createReport(amount: number, source: string, type: ReportType): string {
		const newReport = {
			id: uuid(),
			amount,
			source,
			createdAt: new Date(),
			updatedAt: new Date(),
			type,
		};
		data.report.push(newReport);
		return JSON.stringify(newReport);
	}

	updateReport(id: string): string {
		return 'Updating data for ID...';
	}

	deleteReportById(id: string): string {
		return 'Deleting data for ID...';
	}
}
