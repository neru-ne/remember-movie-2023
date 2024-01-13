'use client'
import React, { useState, createContext } from 'react';

import { Header } from "@/app/components/layouts/Header"
import { Footer } from '@/app/components/layouts/Footer'
import { Loading } from '@/app/components/atoms/loading/Loading';

//type
import { typeSelectedDateProps } from '@/app/types/context'
import { typeSessionGenres } from '@/app/types/api';


export const CountContext = createContext({} as {
  isModalOpen: boolean,
  setisModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isModalScroll: number,
  setisModalScroll: React.Dispatch<React.SetStateAction<number>>
  isLoading: boolean,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  posts: any,
  setPosts: React.Dispatch<React.SetStateAction<any>>
  modalContentMovie: any,
  setModalContentMovie: React.Dispatch<React.SetStateAction<any>>,
  detailId: string,
  setDetailId: React.Dispatch<React.SetStateAction<string>>,
  resultFlg: boolean,
  setResultFlg: React.Dispatch<React.SetStateAction<boolean>>,
  isEmpty: boolean,
  setIsEmpty: React.Dispatch<React.SetStateAction<boolean>>,
  apiSuccess: boolean,
  setApiSuccess: React.Dispatch<React.SetStateAction<boolean>>,
  genres: any,
  setGenres: React.Dispatch<React.SetStateAction<any>>
  //以下はsearchで使う
  selectedDate: typeSelectedDateProps[],
  setSelectedDate: React.Dispatch<React.SetStateAction<typeSelectedDateProps[]>>,
  checkedItems: typeSessionGenres[],
  setCheckedItems: React.Dispatch<React.SetStateAction<typeSessionGenres[]>>,
  sort: string,
  setSort: React.Dispatch<React.SetStateAction<string>>,
  searchPosts: any,
  setSearchPosts: React.Dispatch<React.SetStateAction<any>>,
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  totalPages: number,
  setTotalPages: React.Dispatch<React.SetStateAction<number>>,
  totalResults: string,
  setTotalResults: React.Dispatch<React.SetStateAction<string>>,

});

export const Body = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [isModalScroll, setisModalScroll] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [modalContentMovie, setModalContentMovie] = useState([]);
  const [detailId, setDetailId] = useState('');
  const [resultFlg, setResultFlg] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [apiSuccess, setApiSuccess] = useState(true);
  const [genres, setGenres] = useState({});
  //以下はsearchで使う
  const [selectedDate, setSelectedDate] = useState<typeSelectedDateProps[]>([]);
  const [checkedItems, setCheckedItems] = useState<typeSessionGenres[]>([]);
  const [sort, setSort] = useState('popularity.desc');
  const [searchPosts, setSearchPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState('');

  const value = {
    isModalOpen,
    setisModalOpen,
    isModalScroll,
    setisModalScroll,
    isLoading,
    setIsLoading,
    posts,
    setPosts,
    modalContentMovie,
    setModalContentMovie,
    detailId,
    setDetailId,
    resultFlg,
    setResultFlg,
    isEmpty,
    setIsEmpty,
    apiSuccess,
    setApiSuccess,
    genres,
    setGenres,
    //以下はsearchで使う
    selectedDate,
    setSelectedDate,
    checkedItems,
    setCheckedItems,
    sort,
    setSort,
    searchPosts,
    setSearchPosts,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
    totalResults,
    setTotalResults,
  };

  return (
    <CountContext.Provider value={value}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <Loading loadingStatus={isLoading} />
    </CountContext.Provider>
  )
}
