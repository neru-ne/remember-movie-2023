//カレンダー登録
export const AddCalendarButton = (props: { url: string | undefined }) => {
  const {url} = props;
  return (
    <a className="button button-calendar" href={url}  target='_blank' rel="noopener noreferrer">
      <span className="flex items-center justify-center gap-x-2.5 ml-[10px]">公開予定日をカレンダーに登録<span className="icon-calendar text-xl"></span></span>
      </a>
  )
}
