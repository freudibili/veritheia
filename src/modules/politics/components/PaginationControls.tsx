import React from "react";
import { Text, XStack, Button } from "tamagui";
import { ChevronLeft, ChevronRight } from "@tamagui/lucide-icons";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

export const PaginationControls = ({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onNextPage,
  onPrevPage,
}: PaginationControlsProps) => {
  return (
    <XStack justifyContent="space-between" alignItems="center" marginTop={16}>
      <Text fontSize={14} color="$gray11">
        {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
      </Text>

      <XStack gap={8} alignItems="center">
        <Button
          size="$3"
          disabled={currentPage === 1}
          opacity={currentPage === 1 ? 0.5 : 1}
          onPress={onPrevPage}
          icon={<ChevronLeft size={16} />}
        >
          Previous
        </Button>

        <Text>
          Page {currentPage} of {totalPages}
        </Text>

        <Button
          size="$3"
          disabled={currentPage === totalPages}
          opacity={currentPage === totalPages ? 0.5 : 1}
          onPress={onNextPage}
        >
          Next <ChevronRight size={16} />
        </Button>
      </XStack>
    </XStack>
  );
};
