//カレンダー登録
export const AddCalendarButton = (props: { url: string | undefined }) => {
  const {url} = props;
  return (
    <a className="button button-calendar" href={url}  target='_blank' rel="noopener noreferrer">
        <span>公開予定日をカレンダーに登録<span className="icon-calendar absolute top-0 bottom-0 right-3.5 text-xl my-auto h-fit text-bold "></span></span>
      </a>
  )
}
