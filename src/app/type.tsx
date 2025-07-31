export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  title: string;
  genres: Genre[];
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  message: string;
  similar?: Movie[]; // Optional array of similar movies

}
export interface Genre {
  id: number;
  name: string;
}
export interface Cast {
  id: number;
  name: string;
  profile_path: string | null;
  character: string;
}