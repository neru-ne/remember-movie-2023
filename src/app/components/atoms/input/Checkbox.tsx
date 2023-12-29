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
      <input type="checkbox" name='search-genre' value={id} id={'search-genre-' + index} checked={checked === undefined ? false : checked} onChange={checkboxClick} />
      <label className="radio-item-inner" htmlFor={'search-genre-' + index}>
        <span className="icon-check"></span>{name}
      </label>
    </>
  )
}
