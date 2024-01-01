'use client';
import React, { useState, useContext } from 'react';
import { CountContext } from '@/app/layout';

import { TopPageHeading } from '@/app/components/atoms/heading/TopPageHeading';
import { SearchButton } from '@/app/components/atoms/button/SearchButton';
import { Listitem } from '@/app/components/atoms/item/Listitem';
import { Selectbox } from '@/app/components/atoms/input/Selectbox';
import { SearchMoreButton } from '@/app/components/atoms/button/SearchMoreButton';
import { Modal } from '@/app/components/organisms/Modal';
import { SearchScroll } from '@/app/components/atoms/button/SearchScroll';

//api
import { GetSearch } from '@/app/utils/api/GetSearch';
import { GetDetail } from "@/app/utils/api/GetDetail";

//types
import { typeItem } from "@/app/types/components";
import { typeSelectbox } from "@/app/types/components"


export const SearchResult = () => {
  const { resultFlg, isEmpty, apiSuccess, setSort, searchPosts, currentPage, totalPages, totalResults
  } = useContext(CountContext);

  const [searchFlg, setSearchFlg] = useState(false);
  const [moreBtn, setMoreBtn] = useState(false);
  const [firstSearchFlg, setFirstSearchFlg] = useState(false);

  //検索処理
  GetSearch(searchFlg, setSearchFlg, moreBtn, setMoreBtn);

  //個別取得
  GetDetail();

  //ソート
  const sortSelectChange = (e: any) => {
    let sort = e.target.value;
    setSort(sort);
    setSearchFlg(true);
  }

  const sortSelectObj: typeSelectbox = {
    domId: "sort-select",
    data: [
      {
        value: "popularity.desc",
        name: "人気順",
      },
      {
        value: "primary_release_date.asc",
        name: "公開予定が近い順",
      },
    ],
    selectChange: sortSelectChange,
  }
  return (
    <>
      <div className="flex justify-center px-4 inner">
        <SearchButton setSearchFlg={setSearchFlg} setFirstSearchFlg={setFirstSearchFlg} />
      </div>
      <div className={
        resultFlg ? 'result is-show mt-[100px]' : 'result mt-[100px]'
      } id='search-result'>
        {
          apiSuccess ?
            <>
              <div>
                <TopPageHeading>検索結果</TopPageHeading>
              </div>
              <div className='mt-5 inner px-4 relative'>
                <p className="text-[14px] text-right">{totalResults}件</p>
                {!isEmpty
                  ?
                  <div>
                    <div className="mt-5 mb-10">
                      <p className='text-[14px] mb-2.5'>並び替え</p>
                      <Selectbox {...sortSelectObj} />
                    </div>
                    <div className="col-content">
                      <div className="col-inner">
                        <ul className="grid grid-cols-2 gap-x-5 gap-y-[30px] w-fit max-w-[620px] mx-auto">
                          {
                            searchPosts.map((item: typeItem, index: number) => {
                              return (
                                <React.Fragment key={"item" + index}>
                                  <Listitem {...item}></Listitem>
                                </React.Fragment>
                              )
                            })
                          }
                        </ul>
                        {
                          (currentPage < totalPages)
                            ? (
                              <div className="flex justify-center mt-[60px]">
                                < SearchMoreButton callBack={setSearchFlg} btnFlg={setMoreBtn} />
                              </div>
                            )
                            : <></>
                        }
                      </div>
                    </div>
                  </div>
                  : <div className='mt-[130px] mb-30px'><p>検索条件にヒットするものはありませんでした。</p></div>
                }
                {
                  firstSearchFlg && <SearchScroll />
                }
              </div>
            </>
            :
            <div className=''>
              現在エラーが発生しています。時間を置いてからお試しください。
            </div>
        }
        <Modal />
      </div>
    </>
  )
}
