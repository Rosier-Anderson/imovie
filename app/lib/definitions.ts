import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

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
  title:
    | string
    | number
    | bigint
    | boolean
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | Promise<
        | string
        | number
        | bigint
        | boolean
        | ReactPortal
        | ReactElement<unknown, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | null
        | undefined
      >
    | null
    | undefined;
}
