
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
export interface moviesProps {
  backdrop_path: string;
  poster_path: string;
  vote_count: number;
  release_date: string;
  title: string;
}
