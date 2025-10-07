export type NavlinkProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export type CustomLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

// Interfaces
export interface MovieProps {
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_count: number;
}
export interface SearchToggleProps {
  isVisible: boolean;
  onToggle: () => void;
}
export interface SearchFieldProps {
  isVisible?: boolean;
}

export interface moviesDataProps {
  page: number;
  results: [];
  total_pages: number;
  total_results: number;
}
export interface moviesResultsProps {
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  release_date: string;
  title: string;

  id: number;
}
export interface trendingMovieProps {
  backdrop_path: string;
  media_type: string;
  overview: string;
  title: string;
  id: number;
}
//
// tv types
export interface tvDataProps extends moviesDataProps {}
export interface tvResultsProps {
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  first_air_date: string;
  name: string;
  id: number;
}
// gallery props

export type Genre = {
  id: number;
  name: string;
};
export interface galleryCardProps {
  imgURL: string;
  title: string;
  vote: number;
  release_date: string;
  id: number;
  genre: string;
}
