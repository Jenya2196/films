import { fetchFromApi, MOVIE_API_ENDPOINTS } from '@/Utils/Statik_API';
import { tItemMove } from '@/Utils/type';
import { notFound } from 'next/navigation';


type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params
  const movie = await fetchFromApi<tItemMove>(MOVIE_API_ENDPOINTS.details(id));

  if (!movie) {
    return {
      title: 'Фильм не найден',
      description: 'Данные по этому фильму отсутствуют',
    };
  }

  return {
    title: `${movie.title} — Смотреть описание и трейлер`,
    description: movie.overview || 'Описание отсутствует',
  };
}

function RatingStars({ rating }: { rating: number }) {
  const stars = Math.round(rating / 2); // Для 10-балльной шкалы, 2 балла на звезду
  const fullStars = '★ text-yellow-400 text-2xl'; // Желтая звезда
  const emptyStars = '☆ text-gray-400  text-2xl'; // Серая пустая звезда

  // Рейтинг для 5 звезд
  return (
    <div>
      {Array(5)
        .fill(fullStars)
        .map((_, index) => {
          if (index < stars) {
            return <span key={index} className={fullStars}>★</span>; // Заполненная звезда
          }
          return <span key={index} className={emptyStars}>☆</span>; // Пустая звезда
        })}
    </div>
  );
}

export default async function Film({ params }: Props) {
   const { id } = await params
  const movie = await fetchFromApi<tItemMove>(MOVIE_API_ENDPOINTS.details(id));
  const videos = await fetchFromApi(MOVIE_API_ENDPOINTS.videos(id));

  if (!movie) notFound();

  const trailer = videos.results?.find(
    (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
  );

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
        style={{
          pointerEvents: 'none',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          filter: 'brightness(0.5)',
        }}
      />
      <div className="flex flex-col items-center gap-4 p-4 lg:mx-40 z-1 bg-black/50 rounded-lg my-5">
        <h1 className="text-2xl font-bold">{movie.title}</h1>
        <p className="text-center">{movie.overview}</p>
        <div className="flex items-center gap-1">
          <RatingStars rating={movie.vote_average} />
          <span>{movie.vote_average}</span>
        </div>
        <p>Дата выхода: {movie.release_date}</p>

        {trailer ? (
          <div className="mt-6 w-full max-w-2xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title={trailer.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full h-full"
            />
          </div>
        ) : (
          <p className="mt-6 text-gray-500">Трейлер не найден</p>
        )}
      </div>
    </>
  ); 
}
