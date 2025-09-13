import { Injectable } from '@nestjs/common';
import { data, ReportType } from 'src/data';

@Injectable()
export class AppService {
  getAllIncomeReport(reportType: string): string {
		const resolvedType =
			reportType === 'income'  ? ReportType.INCOME : ReportType.EXPENSE;
		const filteredReport =
			data.report.filter((report) => report.reportType === resolvedType);
		return JSON.stringify(filteredReport);
  }

	getIncomeReportById(): string {
		return 'Report for ID...';;
	}

	createIncomeReport(): string {
		return 'Creating new data ...';;
	}

	updateIncomeReport(): string {
		return 'Updating data for ID...';;
	}

	deleteIncomeReportById(): string {
		return 'Deleting data for ID...';;
	}
}
