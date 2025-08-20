import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    img: string;
    id: number;
}


function CardFilm({title, img,id}: Props) {
  return (
    <Link href={`/${id}`} className='flex flex-col items-center justify-around shadow-md shadow-gray-500/50 rounded-lg bg-white/10 p-4 w-[200px] h-[350px] hover:scale-105 transition-all duration-300 ease-in-out'>
      <div>
          <img loading="lazy" src={`https://image.tmdb.org/t/p/w200${img}`} alt={title} className='rounded-lg w-full h-[250px] object-cover mb-2' />
      </div>
      <div className='text-center line-clamp-2 overflow-hidden text-ellipsis'  title={title}>{title}</div>
    </Link>
  )
}

export default CardFilm