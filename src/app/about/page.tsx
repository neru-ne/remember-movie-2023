import { PageHeading } from "@/app/components/atoms/heading/PageHeading";


export default function About() {

  return (
    <>
      <PageHeading>このサイトについて</PageHeading>
      <div className="pt-[60px] pb-[100px] px-4 inner">
          <img src="assets/images/logo.svg" alt="Remember Movie" className="w-[210px] mx-auto mb-[50px]" />
        <p className="text-center text-[20px] mb-[50px]">新作映画の公開予定日を<br/>Googleカレンダーに<br />登録するだけの<br />シンプルなサービスです。</p>
        <p className="mb-[30px]">気になる映画の公開予定日をGoogleカレンダーに登録できます。</p>
        <ul className="indent-list text-sm">
          <li>※検索できるのは公開予定の映画情報のみです。すでに公開されている映画情報については検索できません。</li>
          <li>※当サイトの映画情報はTMDb APIを使用し、取得したものです。</li>
        </ul>
      </div>
    </>
  )
}
