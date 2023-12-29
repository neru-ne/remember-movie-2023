import { PageHeading } from "@/app/components/atoms/heading/PageHeading";
import { SectionTitle } from "@/app/components/atoms/heading/SectionTitle";


export default function Privacy() {

  return (
    <>
      <PageHeading>プライバシーポリシー</PageHeading>
      <div className="pt-[60px] pb-[100px] px-4 inner">
        <SectionTitle>アクセス解析ツールについて</SectionTitle>
        <p>当サイトでは、Googleによるアクセス解析ツー
          ル「Googleアナリティクス」を利用しています
          。このGoogleアナリティクスはトラフィックデ
          ータの収集のためにクッキー（Cookie）を使用
          しております。トラフィックデータは匿名で収
          集されており、個人を特定するものではありま
          せん。</p>
        <SectionTitle>外部サービスのAPIから取得した情報の
          用途について</SectionTitle>
        <img src="assets/images/tmdb_logo.svg" alt="tmdb" className="w-[80px] mb-5" />
        <p>TMDb（プライバシーポリシー：<br /><a href="https://www.themoviedb.org/privacy-policy" target="_blank" rel="noopener">https://www.themoviedb.org/privacy-policy</a>）</p>
        <ul className="list-disc pl-5 mt-4">
          <li>TMDb<br/>API映画情報を取得する際に使用しています。</li>
        </ul>
      </div>
    </>
  )
}
