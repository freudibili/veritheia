import { useState, useEffect, useMemo, DependencyList } from "react";

interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  currentItems: T[];
  goToNextPage: () => void;
  goToPrevPage: () => void;
}

export const usePagination = <T>(
  items: T[],
  itemsPerPage: number,
  dependencies: DependencyList = []
): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 when dependencies change
  useEffect(() => {
    setCurrentPage(1);
  }, dependencies);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = useMemo(() => {
    return items.slice(startIndex, endIndex);
  }, [items, startIndex, endIndex]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    currentItems,
    goToNextPage,
    goToPrevPage,
  };
};
