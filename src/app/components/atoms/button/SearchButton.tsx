export const SearchButton = (
  props: {
    setSearchFlg: React.Dispatch<React.SetStateAction<boolean>>,
    setFirstSearchFlg: React.Dispatch<React.SetStateAction<boolean>>,
   }
  ) => {
  const searchClick = () => {
    props.setSearchFlg(true)
    props.setFirstSearchFlg(true)
  }
  return (
    <button className="button" onClick={searchClick}>
      <span className="flex items-center justify-center gap-x-2.5 ml-[10px]">検索する<span className="icon-search text-xl"></span></span>
    </button>
  )
}
