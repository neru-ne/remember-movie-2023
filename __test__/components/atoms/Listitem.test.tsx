import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { Listitem } from '@/app/components/atoms/item/Listitem'
import { CountContext } from "@/app/components/layouts/Body"
import { typeItem } from "@/app/types/components";



const clickEvent = () => {
  console.log("click")
}

describe('Listitem', () => {


  const dummyChildren = "test";

  test('通常表示', async () => {

    // ダミーのpropsを定義
    let dummyProps: typeItem = {
      title: "The Beekeeper",
      poster_path: "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
      release_date: "2024-01-11",
      id: "866398",
    };


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
        { id: "1", name: "アクション" },
        { id: "2", name: "コメディ" },
        { id: "3", name: "ラブストーリー" },
      ],
      setGenres: jest.fn(),
      //以下はsearchで使う
      selectedDate: [],
      setSelectedDate: jest.fn(),
      checkedItems: [
        { id: "1", name: "アクション", checked: false, },
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
        <Listitem {...dummyProps} />
      </CountContext.Provider>
    )
    debug();

  });

  test('ダミー画像表示、空', async () => {
    // ダミーのpropsを定義
    let dummyProps: typeItem = {
      title: "The Beekeeper",
      poster_path: "",
      release_date: "",
      id: "866398",
    };

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
        { id: "1", name: "アクション" },
        { id: "2", name: "コメディ" },
        { id: "3", name: "ラブストーリー" },
      ],
      setGenres: jest.fn(),
      //以下はsearchで使う
      selectedDate: [],
      setSelectedDate: jest.fn(),
      checkedItems: [
        { id: "1", name: "アクション", checked: false, },
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
        <Listitem {...dummyProps} />
      </CountContext.Provider>
    )
    debug();

  });

});
