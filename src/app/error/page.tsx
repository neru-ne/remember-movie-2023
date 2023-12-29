import { PageHeading } from "@/app/components/atoms/heading/PageHeading";
import { SectionTitle } from "@/app/components/atoms/heading/SectionTitle";


export default function Error() {

  return (
    <>
      <PageHeading>エラー</PageHeading>
      <div className="pt-[60px] pb-[100px] px-4 inner">
        <p>現在エラーが発生しています。<br/>
          少し時間を置いてからお試しください。</p>
      </div>
    </>
  )
}
