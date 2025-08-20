import BlockCards from "@/Components/CardFilm/BlockCards";
import { fetchFromApi, MOVIE_API_ENDPOINTS } from "@/Utils/Statik_API";
import { tMove } from "@/Utils/type";
import { notFound } from "next/navigation";


type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
export function generateMetadata() {

  return {
    title: `Upcoming`,
    description: 'Upcoming фильмы',
  };
}

export default async function Page({ searchParams }: Props) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
 
  const data = await fetchFromApi<tMove>(MOVIE_API_ENDPOINTS.upcoming(currentPage),true,7200).catch((error) => {
    notFound();
  })
  
  return (
    <BlockCards title="Upcoming" data={data} currentPage={currentPage} href="/films/upcoming"/>
  );
}
