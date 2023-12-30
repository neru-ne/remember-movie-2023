'use client';
import { useContext } from 'react';
import { CountContext } from '@/app/layout';
import { typeItem } from "@/app/types/components";
import { DateLabel } from '@/app/components/atoms/label/DateLabel';
import { dateFormated } from "@/app/utils/common"


export const Listitem = (
  props: typeItem
) => {

  const { isModalOpen, setisModalOpen, setisModalScroll,
    setDetailId } = useContext(CountContext)

  const { title, release_date, poster_path,id } = props;
  let imgUrl = poster_path ? `//image.tmdb.org/t/p/w300/${poster_path}` : "/assets/images/no_img.jpg";

  const openModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    if (!isModalOpen) {

      setisModalOpen(true);
      setisModalScroll(window.scrollY);
      let body = document.getElementsByTagName('body');
      body[0].style.top = -(window.scrollY) + 'px';
      body[0].classList.add('is-fixed');
      setDetailId(id);
    }
  }

  let itemDate: string = '';
  if (release_date) {
    let result = dateFormated(release_date);
    itemDate = result;
  }

  return (
    <li className='grid grid-row-subgrid row-span-3 gap-3.5' onClick={openModal}>
      <img src={imgUrl} alt="" />
      <div className="">
        <DateLabel>{itemDate}</DateLabel>
      </div>
      <p className="text-lg">{title}</p>
    </li>
  )
}
