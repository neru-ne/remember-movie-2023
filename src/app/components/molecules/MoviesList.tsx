"use client";
import React,{ useContext } from 'react';
import { CountContext } from '@/app/layout';

import { Listitem } from "@/app/components/atoms/item/Listitem";
import { typeItem } from "@/app/types/components";


export const MoviesList = () => {
  const { posts, apiSuccess } = useContext(CountContext);

  return (

    <>
      {
        (apiSuccess) ?
          <>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-[30px] w-fit max-w-[620px] mx-auto">
              {
                posts.map((item: typeItem, index: number) => {
                  return (
                    <React.Fragment key={"item" + index}>
                      <Listitem {...item}></Listitem>
                    </React.Fragment>
                  )
                })
              }
            </ul>
          </>
          :
          <div>
            現在エラーが発生しています。時間を置いてからお試しください。
          </div>
      }
    </>
  )
}
