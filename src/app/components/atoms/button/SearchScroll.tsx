import { Link as Scroll } from 'react-scroll';

export const SearchScroll = () => {
  return (
    <div className='w-[80px] h-[80px] rounded-full bg-primary text-white text-center fixed right-4 bottom-4'>
      <Scroll to="search" smooth={true}>
        <div className='flex items-center justify-center w-[80px] h-[80px]'>
          <div>
            <span className="icon-search text-[36px] leading-[1] block"></span>
            <p className='leading-[1] text-[14px] font-bold'>再検索</p>
          </div>
        </div>
      </Scroll>
    </div>
  )
}
