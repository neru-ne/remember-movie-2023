'use client';

import { useContext } from 'react';
import { CountContext } from '@/app/layout';

import { ModalContent } from '@/app/components/molecules/ModalContent';
import { ModalCloseButton } from '@/app/components/atoms/button/ModalCloseButton'

export const Modal = () => {
  const { isModalOpen, setisModalOpen, isModalScroll, setisModalScroll, modalContentMovie } = useContext(CountContext);

  const modalArray = {
    title: modalContentMovie.title,
    release_date: modalContentMovie.release_date,
    poster_path: modalContentMovie.poster_path,
    overview: modalContentMovie.overview,
    genre: modalContentMovie.genres
  }

  const modalClose = () => {
    setisModalOpen(false);
    let body = document.getElementsByTagName('body');
    body[0].style.top = '0px';
    body[0].classList.remove('is-fixed');
    window.scrollTo(0, isModalScroll);
    setisModalScroll(0);
  }
  return (
    <div className={
      isModalOpen
        ? 'modal is-active'
        : 'modal'
    }>
      <div className="inner h-full pt-[80px] px-4 pb-[100px] overflow-y-auto">
        <div className="absolute top-4 right-4" id="modal-close" onClick={modalClose}>
          <span className='icon-close text-[24px]'></span>
        </div>
        <div>
          <ModalContent {...modalArray} />
        </div>
        <div className='mt-[60px] flex justify-center'>
          <ModalCloseButton click={() => { modalClose() }}>閉じる</ModalCloseButton>
        </div>

      </div>
    </div>
  )
}
export default Modal;
