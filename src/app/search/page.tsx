import { PageHeading } from "@/app/components/atoms/heading/PageHeading";
import { SearchDate } from "@/app/components/molecules/SearchDate";
import { SearchGenre } from "@/app/components/molecules/SearchGenre";
import { SearchResult } from "@/app/components/organisms/SearchResult";


export default function Search() {

  return (
    <>
      <PageHeading>検索</PageHeading>
      <div className="pt-[60px] px-4 inner">
        <SearchDate/>
        <SearchGenre />
      </div>
      <div className="pb-[100px] mt-[96px]">
        <SearchResult />
      </div>
    </>
  )
}
