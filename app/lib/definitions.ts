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
export interface SearchToggleProps {
  isVisible: boolean;
  onToggle: () => void;
}
export interface SearchFieldProps {
  isVisible?: boolean;
}
// movie types
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
}
// tv types
export interface tvDataProps extends moviesDataProps {}
export interface tvResultsProps {
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  first_air_date: string;
  name: string;
}
// gallery props
export interface galleryCardProps {
  imgURL: string;
  title: string;
  vote: number;
  release_date: string;
}

export type Genre = {
  id: number;
  name: string;
};
