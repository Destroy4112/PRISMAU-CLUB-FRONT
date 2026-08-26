export type PaginatedResponse<T, TStats = undefined> = {
   data: T[];
   total: number;
   page: number;
   limit: number;
   totalPages?: number;
   stats?: TStats;
}

export type ApiResponse<T> =
   | { status: true; message: string; data: T; errors?: string[] }
   | { status: false; message?: string; errors?: string[]; data?: never };

export type ApiResponseVoid =
   | { status: true; message: string; errors?: string[] }
   | { status: false; message?: string; errors?: string[] };

export type PageParams = { page: number; limit: number };