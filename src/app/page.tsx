"use client";
import { TopPageHeading } from "@/app/components/atoms/heading/TopPageHeading";
import { MoviesList } from '@/app/components/molecules/MoviesList';

import { Modal } from "@/app/components/organisms/Modal"
import { GetItems } from "@/app/utils/api/GetItems"
import { GetDetail } from "@/app/utils/api/GetDetail"
import { Button } from '@/app/components/atoms/button/Button';

//types
import { typeButton } from "@/app/types/components"


export default function Home() {

  //一覧取得
  GetItems();

  //個別取得
  GetDetail();

  const buttonOption: typeButton = {
    mode: "secondary-green",
    link: true,
    url: "/search",
  }

  return (
    <>
      <div className="pt-[60px] pb-[100px]">
        <TopPageHeading>公開予定の映画</TopPageHeading>
        <div className="inner">
          <div className="px-4 mt-10">
            <MoviesList />
            <div className="flex justify-center mt-[60px]">
              <Button {...buttonOption}>条件を検索する</Button>
            </div>
          </div>
        </div>
        <Modal />
      </div>
    </>
  )
}
