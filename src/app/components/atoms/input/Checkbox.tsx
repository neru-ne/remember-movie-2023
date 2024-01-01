import { typeCheckbox } from '@/app/types/components'
export const Checkbox = (props: typeCheckbox) => {
  const {
    id,
    checked,
    checkboxClick,
    index,
    name,
  } = props;
  return (
    <>
    <div className='relative'>
        <input type="checkbox" className='c-checkbox peer absolute w-full h-full top-0 left-0 opacity-0' name='search-genre' value={id} id={'search-genre-' + index} checked={checked === undefined ? false : checked} onChange={checkboxClick} />
        <label className="w-full border border-black rounded-md  py-2 pr-6 pl-2 flex items-center relative before:content-[''] before:block before:w-[16px] before:h-[16px] before:border before:bg-white before:border-black before:rounded peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary peer-checked:before:border-primary" htmlFor={'search-genre-' + index}>
          <span className="icon-done font-bold absolute w-[14px] h-[14px] top-[15px] left-[9px] text-sm text-white text-center
          "></span><span className='ml-2 flex-1 w-[calc(100%_-_26px)]'>{name}</span>
      </label>
      </div>
    </>
  )
}
