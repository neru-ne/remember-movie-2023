"use client";
import { useContext } from 'react';
import { CountContext } from '@/app/layout';

import { Listitem } from "@/app/components/atoms/item/Listitem";
import { typeItem } from "@/app/types/components";


export const MoviesList = () => {
  const { posts, apiSuccess } = useContext(CountContext);

  const itemList: typeItem[] = [
    {
      title: "tedt1",
      release_date: '2023/11/02',
      poster_path: "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
      id: "866398",
    },
    {
      title: "tedt2",
      release_date: '2023/11/02',
      poster_path: "",
      id: "1072342",
    },
    {
      title: "tedt2",
      release_date: '2023/11/02',
      poster_path: "",
      id: "673593",
    }
  ]
  return (

    <>
      {
        (apiSuccess) ?
          <>
            <ul className="flex flex-wrap gap-x-5 gap-y-[30px] w-fit max-w-[620px] mx-auto">
              {
                itemList.map((item: typeItem, index: number) => {
                  return (
                    <li key={"item" + index} className="w-[calc(50%_-_10px)] max-w-[300px]">
                      <Listitem {...item}></Listitem>
                    </li>
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
