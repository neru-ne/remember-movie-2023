export const SearchButton = (props: { setSearchFlg: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const searchClick = () => {
    props.setSearchFlg(true)
  }
  return (
    <button className="button" onClick={searchClick}>
      <span>検索する<span className="icon-search  absolute top-0 bottom-0 right-3.5 text-xl my-auto h-fit text-bold"></span></span>
    </button>
  )
}
