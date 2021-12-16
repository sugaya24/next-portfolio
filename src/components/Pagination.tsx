import React from 'react';
import Link from 'next/link';
import { Button, ButtonGroup, Link as CuiLink } from '@chakra-ui/react';

type Props = {
  totalCount: number;
  currentPage: number;
};

const Pagination: React.VFC<Props> = ({ totalCount, currentPage }) => {
  const PER_PAGE = 5;
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);
  return (
    <ButtonGroup>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((num, index) => (
        <Link key={index} href={`/posts/page/${num}`}>
          <CuiLink>
            <Button variant={`outline`} isActive={num === +currentPage}>
              {num}
            </Button>
          </CuiLink>
        </Link>
      ))}
    </ButtonGroup>
  );
};

export default Pagination;
