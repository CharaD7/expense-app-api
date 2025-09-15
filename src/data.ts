interface Data {
	report: {
		id: string;
		source: string;
		amount: number;
		createdAt: Date;
		updatedAt: Date;
		type: ReportType;
	}[];
}

export enum ReportType {
	EXPENSE = 'expense',
	INCOME = 'income',
}

export const data: Data = {
	report: [
		{
			id: 'uuid1',
			source: 'salary',
			amount: 9000,
			createdAt: new Date(),
			updatedAt: new Date(),
			type: ReportType.INCOME,
		},
		{
			id: 'uuid2',
			source: 'Twitch',
			amount: 19000,
			createdAt: new Date(),
			updatedAt: new Date(),
			type: ReportType.INCOME,
		},
		{
			id: 'uuid3',
			source: 'Rent',
			amount: 2000,
			createdAt: new Date(),
			updatedAt: new Date(),
			type: ReportType.EXPENSE,
		},
		{
			id: 'uuid4',
			source: 'Fibre Subscription',
			amount: 400,
			createdAt: new Date(),
			updatedAt: new Date(),
			type: ReportType.EXPENSE,
		},
	],
};
