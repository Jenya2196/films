import { tMove } from '@/Utils/type';
import React from 'react'
import CardFilm from './CardFilm';
import Pagination from '../Buttons/Pagination';

type Props = {
    title: string; // Заголовок блока
    data: tMove; // Массив карточек фильмов
    currentPage: number; // Текущая страница
    href: string; // Ссылка для пагинации
}

function BlockCards({title,data,currentPage,href}: Props) {

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-center text-5xl p-2 ">{title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center p-2 gap-4 sm:p-4">
        {
          data.results.map((item, index) => (
            <CardFilm key={index} title={item.title} img={item.poster_path} id={item.id}/>
          ))
        }
      </div>
      {/* Пагинация */}
      
      <Pagination currentPage={currentPage} totalPages={data.total_pages} href={href}/>
    </div>
  )
}

export default BlockCards