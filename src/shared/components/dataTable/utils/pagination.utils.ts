export type PaginationItem = number | "...";

export function getTotalPages(total: number, limit: number) {
   return Math.max(1, Math.ceil(total / limit));
}

export function getPaginationRange(total: number, page: number, limit: number) {
   const start = total === 0 ? 0 : (page - 1) * limit + 1;
   const end = Math.min(page * limit, total);

   return { start, end };
}

export function buildPaginationItems(totalPages: number, currentPage: number): PaginationItem[] {
   const pages: PaginationItem[] = [];
   const delta = 1;

   if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
   }

   pages.push(1);

   const left = Math.max(2, currentPage - delta);
   const right = Math.min(totalPages - 1, currentPage + delta);

   if (left > 2) pages.push("...");

   for (let i = left; i <= right; i++) {
      pages.push(i);
   }

   if (right < totalPages - 1) pages.push("...");

   pages.push(totalPages);

   return pages;
}