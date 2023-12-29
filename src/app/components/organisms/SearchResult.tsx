'use client';
import React, { useState, useContext } from 'react';
import { CountContext } from '@/app/layout';

import { TopPageHeading } from '@/app/components/atoms/heading/TopPageHeading';
import { SearchButton } from '@/app/components/atoms/button/SearchButton';
import { Listitem } from '@/app/components/atoms/item/Listitem';
import { SearchMoreButton } from '@/app/components/atoms/button/SearchMoreButton'
import { Modal } from '@/app/components/organisms/Modal';

//api
import { GetSearch } from '@/app/utils/api/GetSearch';

//types
import { typeItem } from "@/app/types/components";



export const SearchResult = () => {
  const { resultFlg, isEmpty, apiSuccess, setSort, searchPosts, currentPage, totalPages, totalResults
  } = useContext(CountContext);

  const [searchFlg, setSearchFlg] = useState(false);
  const [moreBtn, setMoreBtn] = useState(false);

  //API
  GetSearch(searchFlg, setSearchFlg, moreBtn, setMoreBtn);

  //ソート
  const sortSelectChange = (e: any) => {
    let sort = e.target.value;
    setSort(sort);
    setSearchFlg(true);
  }

  return (
    <>
      <div className="flex justify-center px-4 inner">
        <SearchButton setSearchFlg={setSearchFlg} />
      </div>
      <div className="mt-[100px]">
        <div className={
          resultFlg ? 'result is-show' : 'result'
        } id='search-result'>
          {
            apiSuccess ?
              <>
                <div className=''>
                  <TopPageHeading>検索結果</TopPageHeading>
                  <p className='result-ttl-num'>{totalResults}件</p>
                </div>
                {!isEmpty
                  ?
                  <div>
                    <div className="resut-sort">
                      <p className='result-sort-ttl'>並び替え</p>
                      <div className="select-wrapper">
                        <select name="sort-select" id="sort-select" onChange={sortSelectChange}>
                          <option value='popularity.desc'>人気順</option>
                          <option value='primary_release_date.asc'>公開予定が近い順</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-content">
                      <div className="col-inner">
                        <ul className="flex flex-wrap gap-x-5 gap-y-[30px] w-fit max-w-[620px] mx-auto">
                          {
                            searchPosts.map((item: typeItem, index: number) => {
                              return (
                                <li key={"item" + index} className="w-[calc(50%_-_10px)] max-w-[300px]">
                                  <Listitem {...item}></Listitem>
                                </li>
                              )
                            })
                          }
                        </ul>
                        {
                          (currentPage < totalPages)
                            ? (
                              <div className="flex justify-center">
                                < SearchMoreButton callBack={setSearchFlg} btnFlg={setMoreBtn} />
                                </div>
                            )
                            : <></>
                        }
                      </div>
                    </div>
                  </div>
                  : <div className='empty'><p>検索条件にヒットするものはありませんでした。</p></div>
                }
              </>
              :
              <div className=''>
                現在エラーが発生しています。時間を置いてからお試しください。
              </div>
          }
          <Modal />
        </div>
      </div>

    </>
  )
}
