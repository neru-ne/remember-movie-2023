"use client";
import { useContext } from 'react';
import { CountContext } from '@/app/layout';

import { TopPageHeading } from "@/app/components/atoms/heading/TopPageHeading";
import { MoviesList } from '@/app/components/molecules/MoviesList';

import { Modal } from "@/app/components/organisms/Modal"
import { GetItems } from "@/app/utils/api/GetItems"
import { GetDetail } from "@/app/utils/api/GetDetail"



export default function Home() {

  //一覧取得
  GetItems();

  //個別取得
  GetDetail();

  return (
    <>
      <div className="pt-[60px] pb-[100px]">
        <TopPageHeading>公開予定の映画</TopPageHeading>
        <div className="inner">
          <div className="px-4 mt-10">
            <MoviesList />
          </div>
        </div>
        <Modal />
      </div>
    </>
  )
}
