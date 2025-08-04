"use client";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

import { Movie } from "./type";
import Link from "next/link";
import useTMDB, { TMDBReponse } from "./hooks/useTMDB";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import SlideSection from "./SlideHome/SlideSection";
import { X } from "lucide-react";

export default function Home() {
  const { data, isLoading, isError } = useTMDB('movie/now_playing')
  const movies = data?.pages.flatMap((page: TMDBReponse) => page.movies) || []
  const [active, setActive] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);
  const [selectKey, setSelectKey] = useState<string | null>(null);
  const handleWatchTrailer = async (id: number) => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4f85134e0e3de33d9af45eb9596b5735`);
      const data = await res.json();

      const video = data.results.find(
        (v: any) => v.type === "Trailer" && v.site === "YouTube"
      );

      if (video) {
        setSelectKey(video.key);
        setShowTrailer(true);
      } else {
        alert("Trailer not available!");
      }
    } catch (err) {
      alert("Failed to fetch trailer.");
      console.error(err);
    }
  };
  useEffect(() => {
    if (showTrailer) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto"
  }, [showTrailer])

  if (isError) return <p>Error: {isError}</p>
  return (
    <div>
      <div className="relative w-full h-screen pb-100">
        {isLoading ? (
          <p className='text-white font-semibold text-2xl text-center flex justify-center items-center h-screen w-full gap-x-3'>
            <FontAwesomeIcon icon={faSpinner} className='animate-spin w-8 h-8' />
            Loading...
          </p>
        ) : (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={1}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            onSlideChange={(Swiper) => setActive(Swiper.realIndex)}
          >
            {movies.map((slice, index) => (
              <SwiperSlide key={index}>
                <div className='relative w-full min-h-screen bg-cover bg-center' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${slice.backdrop_path}")` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent z-0"></div>
                  <div className='absolute z-2 px-10 md:px-[100px] w-full h-screen flex justify-around items-center bg-black/60 gap-x-20' >
                    <div>
                      <h1 className={`text-white text-6xl font-bold 
                        ${active === index ? 'opacity-0 animate-[slideShow_0.5s_ease-out_0.2s_forwards]' : 'opacity-0'} `}>{slice.title}</h1>
                      <p className={`text-white text-justify text-sm md:text-[20px] my-10 line-clamp-4 
                        ${active === index ? 'opacity-0 animate-[slideShow_0.5s_ease-out_0.4s_forwards]' : 'opacity-0'}`}>{slice.overview}</p>
                      <div className={`flex flex-row gap-x-5 
                     ${active === index ? 'opacity-0 animate-[slideShow_0.5s_ease-out_0.6s_forwards]' : 'opacity-0'}`}>
                        <Link href={`/movies/${slice.id}`} className="bg-red-600 px-6 py-2 rounded-full text-white text-lg font-semibold hover:bg-red-500 transition shadow-[0_0_20px_rgba(255,0,0,0.9)] hover:shadow-[0_0_40px_rgba(255,0,0,0.9)] duration-300 ease-in-out">
                          Watch now
                        </Link>
                        <button onClick={() => handleWatchTrailer(slice.id)} className="bg-white/20 border border-white px-6 py-2 rounded-full text-white text-lg hover:bg-white/30 transition">
                          Watch trailer
                        </button>
                      </div>
                    </div>
                    <div className={`hidden lg:block 
                    ${active === index ? 'opacity-0 animate-[scaleIn_0.5s_ease-out_forwards]' : 'opacity-0'}`}>
                      <div style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original${slice.poster_path}")` }}
                        className='relative w-[350px] h-[500px] rounded-2xl bg-center bg-cover' />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {showTrailer && selectKey && (
              <div onClick={() => setShowTrailer(false)} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="relative w-full max-w-6xl aspect-video bg-black px-10 rounded-xl ">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectKey}?autoplay=0`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="shadow-xl"
                  ></iframe>
                  <button
                    onClick={() => setShowTrailer(false)}
                    className="absolute top-2 right-1 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-red-700 transition-all duration-300"
                  >
                    <X />
                  </button>
                </div>
              </div>
            )}

          </Swiper>
        )}
      </div>
      <div className="md:px-[100px] mb-10">
        <SlideSection title="Trending Movies" endpoint="trending/movie/day" linkTo="/movies" />
        <SlideSection title="Top Rated Movies" endpoint="movie/top_rated" linkTo="/movies" />
        <SlideSection title="Trending TV" endpoint="trending/tv/day" linkTo="/tvSeries" isTV />
        <SlideSection title="Top Rated TV" endpoint="tv/top_rated" linkTo="/tvSeries" isTV />
      </div>
    </div>
  );
}