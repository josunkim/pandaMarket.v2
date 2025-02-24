import {
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface PageNationProps {
  page: number;
  count: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const PageNation: React.FC<PageNationProps> = ({
  page,
  count,
  setPage,
}) => {
  return (
    <PaginationRoot
      variant="solid"
      count={count}
      pageSize={2}
      page={page}
      onPageChange={(e) => setPage(e.page)}
    >
      <PaginationPrevTrigger />
      <PaginationItem />
      <PaginationNextTrigger />
    </PaginationRoot>
  );
};
