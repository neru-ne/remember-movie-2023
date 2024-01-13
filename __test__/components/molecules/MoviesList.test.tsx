import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { MoviesList } from '@/app/components/molecules/MoviesList'
import { CountContext } from "@/app/components/layouts/Body"


const clickEvent = () => {
  console.log("click")
}

describe('MoviesList', () => {

  test('apiSuccessがfalseの時、エラー表示できるか', async () => {
    const value = {
      isModalOpen:false,
      setisModalOpen: jest.fn(),
      isModalScroll:0,
      setisModalScroll: jest.fn(),
      isLoading: false,
      setIsLoading: jest.fn(),
      posts: [],
      setPosts: jest.fn(),
      modalContentMovie:[],
      setModalContentMovie: jest.fn(),
      detailId :"",
      setDetailId: jest.fn(),
      resultFlg : false,
      setResultFlg: jest.fn(),
      isEmpty:false,
      setIsEmpty: jest.fn(),
      apiSuccess: false,
      setApiSuccess: jest.fn(),
      genres: {},
      setGenres: jest.fn(),
      //以下はsearchで使う
      selectedDate:[],
      setSelectedDate: jest.fn(),
      checkedItems:[],
      setCheckedItems: jest.fn(),
      sort:"popularity.desc",
      setSort: jest.fn(),
      searchPosts:[],
      setSearchPosts: jest.fn(),
      currentPage:1,
      setCurrentPage: jest.fn(),
      totalPages:1,
      setTotalPages: jest.fn(),
      totalResults:"",
      setTotalResults: jest.fn(),

    };
    const {debug} = render(
      <CountContext.Provider value={value}>
        <MoviesList />
      </CountContext.Provider>
    )
    debug();
  });

});
