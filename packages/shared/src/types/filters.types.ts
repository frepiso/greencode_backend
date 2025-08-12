export interface IFiltersOptions {
	filters?: {
		id?: string;
	};
	search?: string;
	sorting?: {
		orderBy: string;
		orderType: string;
	};
	pagination?: {
		pageNumber: number;
		pageSize: number;
	};
}
