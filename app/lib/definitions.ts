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

// gallery props

export type Genre = {
  id: number;
  name: string;
};
