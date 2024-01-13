import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { ModalContent } from '@/app/components/molecules/ModalContent'
import { CountContext } from "@/app/components/layouts/Body"


const clickEvent = () => {
  console.log("click")
}

describe('ModalContent', () => {

  test('modalArrayにものあり', async () => {
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
         { id: "3", name: "アドベンチャー" },
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

    const modalArray = {
      title: "test",
      release_date: "2024-01-01",
      poster_path: "test.png",
      overview: "概要です",
      genre: [
        {
          id: "1",
          name: "アクション",
        },
        {
          id: "2",
          name: "コメディ",
        },
      ]
    }

    const { debug } = render(
      <CountContext.Provider value={value}>
        <ModalContent {...modalArray} />
      </CountContext.Provider>
    )
    debug();

    //poster_pathが存在する時、画像URLが挿入されるか
    expect(screen.getByRole('img')).toHaveAttribute('src', '//image.tmdb.org/t/p/w300/test.png')


    debug(screen.getByText("2024/01/01 公開予定"));


  });



  test('modalArrayが空', async () => {
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

    const modalArray = {
      title: "test",
      release_date: "",
      poster_path: "",
      overview: "",
      genre: [

      ]
    }

    const { debug } = render(
      <CountContext.Provider value={value}>
        <ModalContent {...modalArray} />
      </CountContext.Provider>
    )
    debug();

    //poster_pathが空の時、ダミー画像URLが挿入されるか
    expect(screen.getByRole('img')).toHaveAttribute('src', '/assets/images/no_img.jpg')

    //release_dateが空の時、DataLabelコンポーネントが非表示となるか


  });


  test('sessionGenresが空であり、genresが存在する時、ジャンルが非表示となるか', async () => {
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
      genres:[
        // { id: 28, name: "アクション" },
        // { id: 28, name: "アクション" },
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

    const modalArray = {
      title: "test",
      release_date: "2024-01-01",
      poster_path: "test.png",
      overview: "概要です",
      genre: [
        // {
        //   id: "1",
        //   name: "アクション",
        // },
        // {
        //   id: "2",
        //   name: "コメディ",
        // },
      ]
    }

    const { debug } = render(
      <CountContext.Provider value={value}>
        <ModalContent {...modalArray} />
      </CountContext.Provider>
    )
    debug();

  });


  test('sessionGenresが存在し、genresが空の時、ジャンルが非表示となるか', async () => {
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
        { id: 28, name: "アクション" },
        { id: 28, name: "アクション" },
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

    const modalArray = {
      title: "test",
      release_date: "2024-01-01",
      poster_path: "test.png",
      overview: "概要です",
      genre: [
        // {
        //   id: "1",
        //   name: "アクション",
        // },
        // {
        //   id: "2",
        //   name: "コメディ",
        // },
      ]
    }

    const { debug } = render(
      <CountContext.Provider value={value}>
        <ModalContent {...modalArray} />
      </CountContext.Provider>
    )
    debug();

  });


});
