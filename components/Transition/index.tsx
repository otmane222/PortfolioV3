

'use client';
import React from 'react';

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    // handle same route
    if (href === pathname) {
      return;
    }
    router.push(href);
  };

  return (
    <Link {...props} href={href}  onClick={handleTransition} className="w-full font-[tommy2] ">
      {children}
    </Link>
  );
};

