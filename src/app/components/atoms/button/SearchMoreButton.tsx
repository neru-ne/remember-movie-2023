'use client';
import  {useContext } from 'react';
import { CountContext } from "@/app/components/layouts/Body"
import { typeSearchMoreButton } from '@/app/types/components';

export const SearchMoreButton = (props: typeSearchMoreButton) => {
  const { currentPage, setCurrentPage, totalPages } = useContext(CountContext);

  const searchMoreClick = () => {
    if (currentPage < totalPages) {
      let currentPageCopy = currentPage;
      currentPageCopy += 1;
      setCurrentPage(currentPageCopy);
    }
    props.btnFlg(true);
    props.callBack(true);
  }
  return (
    <button className="button-sm -primary" onClick={searchMoreClick}>もっとみる</button>
  )
}
