import { PageHeading } from "@/app/components/atoms/heading/PageHeading";
import { SectionTitle } from "@/app/components/atoms/heading/SectionTitle";

export default function Disclaimer() {

  return (
    <>
      <PageHeading>免責事項</PageHeading>
      <div className="pt-[60px] pb-[100px] px-2 inner">
        <SectionTitle>サービスに関して</SectionTitle>
        <p>当サイトの映画情報は<a href="https://www.themoviedb.org/" target="_blank" rel="noopener">TMDb API</a>を使用し、取得したものです。<br/>当該コンテンツに起因してご利用者様および第三者に損害が発生したとしても、当サイトは責任を負わないものとします。</p>
      </div>
    </>
  )
}
