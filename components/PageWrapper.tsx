import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <main
      className={`max-w-8xl mx-auto px-6 md:px-16 pt-36 pb-36 ${className}`}
    >
      {children}
    </main>
  );
}
