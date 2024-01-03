export const SearchButton = (
  props: {
    setSearchFlg: React.Dispatch<React.SetStateAction<boolean>>,
    setFirstSearchFlg: React.Dispatch<React.SetStateAction<boolean>>,
    setMoreBtn: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
   }
  ) => {
  const { setSearchFlg, setFirstSearchFlg, setMoreBtn, setCurrentPage } = props;

  const searchClick = () => {
    setSearchFlg(true)
    setFirstSearchFlg(true)
    setMoreBtn(false);
    setCurrentPage(1);
  }
  return (
    <button className="button" onClick={searchClick}>
      <span className="flex items-center justify-center gap-x-2.5 ml-[10px]">検索する<span className="icon-search text-xl"></span></span>
    </button>
  )
}
