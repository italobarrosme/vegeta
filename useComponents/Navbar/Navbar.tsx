import Link from 'next/link';
import { ReactNode } from 'react'
import { Logo } from '@/usePieces/Logo'

type NavbarItem = {
  name: string;
  pageLinkRef: string;
}


export type NavbarProps = {
  pages: NavbarItem[];
  logo?: ReactNode;
  children?: ReactNode;
}

export const Navbar = ({ children, pages, logo }: NavbarProps) => {
  return (
    <nav className="px-2 bg-brand-secondary-dark">
      <div className="container flex flex-wrap justify-between items-center mx-auto  py-4 border-solid border-b-2 border-brand-secondary-light">
        <Logo pageLinkRef='/'></Logo>
        <div className="flex items-center">
          <ul className="flex items-center gap-12">
            {pages?.map((page, index) => (
              <li key={index} className="text-brand-secondary-light hover:text-brand-accent-light text-1xl">
                <Link href={page.pageLinkRef} legacyBehavior>
                  <a>
                    {page.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          {children}
        </div>

      </div>
    </nav>

  )
}