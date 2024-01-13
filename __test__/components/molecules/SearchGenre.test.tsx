import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { SearchGenre } from '@/app/components/molecules/SearchGenre'
import { CountContext } from "@/app/components/layouts/Body"


const clickEvent = () => {
  console.log("click")
}

describe('SearchGenre', () => {


  test('通常表示', async () => {
    const value = {
      isModalOpen: false,
      setisModalOpen: jest.fn(),
      isModalScroll: 0,
      setisModalScroll: jest.fn(),
      isLoading: false,
      setIsLoading: jest.fn(),
      posts: [],
      setPosts: jest.fn(),
      modalContentMovie: [],
      setModalContentMovie: jest.fn(),
      detailId: "",
      setDetailId: jest.fn(),
      resultFlg: false,
      setResultFlg: jest.fn(),
      isEmpty: false,
      setIsEmpty: jest.fn(),
      apiSuccess: false,
      setApiSuccess: jest.fn(),
      genres: [
        { id: "1", name: "アクション"  },
        { id: "2", name: "コメディ" },
        { id: "3", name: "ラブストーリー" },
      ],
      setGenres: jest.fn(),
      //以下はsearchで使う
      selectedDate: [],
      setSelectedDate: jest.fn(),
      checkedItems: [
        {
          id: "1",
          name: "アクション",
          checked: false,
        },
        { id: "2", name: "コメディ", checked: true, },
        { id: "3", name: "ラブストーリー", checked: false, },
      ],
      setCheckedItems: jest.fn(),
      sort: "popularity.desc",
      setSort: jest.fn(),
      searchPosts: [],
      setSearchPosts: jest.fn(),
      currentPage: 1,
      setCurrentPage: jest.fn(),
      totalPages: 1,
      setTotalPages: jest.fn(),
      totalResults: "",
      setTotalResults: jest.fn(),

    };
    const { debug } = render(
      <CountContext.Provider value={value}>
        <SearchGenre />
      </CountContext.Provider>
    )
    debug();

  });

  test('genresの個数が0の時、ジャンルエリアが非表示となるか', async () => {
    const value = {
      isModalOpen: false,
      setisModalOpen: jest.fn(),
      isModalScroll: 0,
      setisModalScroll: jest.fn(),
      isLoading: false,
      setIsLoading: jest.fn(),
      posts: [],
      setPosts: jest.fn(),
      modalContentMovie: [],
      setModalContentMovie: jest.fn(),
      detailId: "",
      setDetailId: jest.fn(),
      resultFlg: false,
      setResultFlg: jest.fn(),
      isEmpty: false,
      setIsEmpty: jest.fn(),
      apiSuccess: false,
      setApiSuccess: jest.fn(),
      genres: [
        { id: "1", name: "アクション" }
      ],
      setGenres: jest.fn(),
      //以下はsearchで使う
      selectedDate: [],
      setSelectedDate: jest.fn(),
      checkedItems: [],
      setCheckedItems: jest.fn(),
      sort: "popularity.desc",
      setSort: jest.fn(),
      searchPosts: [],
      setSearchPosts: jest.fn(),
      currentPage: 1,
      setCurrentPage: jest.fn(),
      totalPages: 1,
      setTotalPages: jest.fn(),
      totalResults: "",
      setTotalResults: jest.fn(),

    };
    const { debug } = render(
      <CountContext.Provider value={value}>
        <SearchGenre />
      </CountContext.Provider>
    )
    debug();
  });


  test('genresの個数が0の時、ジャンルエリアが非表示となるか', async () => {
    const value = {
      isModalOpen: false,
      setisModalOpen: jest.fn(),
      isModalScroll: 0,
      setisModalScroll: jest.fn(),
      isLoading: false,
      setIsLoading: jest.fn(),
      posts: [],
      setPosts: jest.fn(),
      modalContentMovie: [],
      setModalContentMovie: jest.fn(),
      detailId: "",
      setDetailId: jest.fn(),
      resultFlg: false,
      setResultFlg: jest.fn(),
      isEmpty: false,
      setIsEmpty: jest.fn(),
      apiSuccess: false,
      setApiSuccess: jest.fn(),
      genres: {},
      setGenres: jest.fn(),
      //以下はsearchで使う
      selectedDate: [],
      setSelectedDate: jest.fn(),
      checkedItems: [
        {
          id: "1",
          name: "アクション",
          checked: false,
        }
      ],
      setCheckedItems: jest.fn(),
      sort: "popularity.desc",
      setSort: jest.fn(),
      searchPosts: [],
      setSearchPosts: jest.fn(),
      currentPage: 1,
      setCurrentPage: jest.fn(),
      totalPages: 1,
      setTotalPages: jest.fn(),
      totalResults: "",
      setTotalResults: jest.fn(),

    };
    const { debug } = render(
      <CountContext.Provider value={value}>
        <SearchGenre />
      </CountContext.Provider>
    )
    debug();
  });

});
