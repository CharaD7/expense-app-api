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

	updateReport(
		id: string,
		type: ReportType,
		body: { amount: number, source: string }
	): string {

		const report = data.report.find((report) => report.id === id);
		if (!report) {
			throw new Error(`Report with ID ${id} not found.`);
		}
		if (report.type !== type) {
			throw new Error(
				`Report type mismatch. Expected income, or expense, got ${type}`
			)
		}
		// Security: Only allow update if amount and source are valid
		if (typeof body.amount !== 'number' || body.amount < 0 || !body.source || typeof body.source !== 'string') {
			throw new Error('Invalid input data.');
		}
		report.amount = body.amount;
		report.source = body.source;
		report.updatedAt = new Date();
		return JSON.stringify(report);
	}

	deleteReportById(id: string, type: ReportType): string {
		const index = data.report.findIndex((report) => report.id === id);
		if (index === -1) {
			throw new Error(`Report with ID ${id} not found.`);
		}
		if (data.report[index].type !== type) {
			throw new Error(
				`Report type mismatch. Expected ${data.report[index].type}, got ${type}`,
			)
		}
		data.report.splice(index, 1);
		return `Report with ID ${id} deleted successfully.`;
	}
}
