import { ReactNode } from 'react'
import { Icon } from '@iconify/react';

type Advantages = {
  title: string;
  description?: string;
  icon: string;
}

export type HeroProps = {
  title: string;
  text: string;
  children?: ReactNode;
  advantages?: Advantages[];
}

export const Hero = ({ children, title, text, advantages }: any) => {
  return (
    <div className="container justify-center items-center flex flex-col gap-8 px-6 py-5 mx-auto space-y-6 lg:h-[32rem] lg:py-10 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-4xl tracking-wide text-brand-accent-light font-altoneTrial font-bold lg:text-5xl">{title}</h1>
          <p className="mt-2 text-brand-secondary-light">{text}</p>
          <ul className="grid gap-4 mt-8 sm:grid-cols-2">
            {advantages?.map((advantage: Advantages, index: number) => (
              <li key={index} className="flex items-center gap-2 text-brand-secondary-light">
                <Icon className="text-emerald-500 min-w-[24px] min-h-[24px]" icon='akar-icons:double-check' />
                <h3>{advantage.title}</h3>
              </li>
            ))}
          </ul>
        </div>
        <div>
          {children}
        </div>
      </div>

      <div className="flex items-center justify-center md:max-w-sm p-5 lg:p-0">
        <img className="xl:scale-125" src="./undraw_crypto_flowers_re_dyqo.svg" alt="glasses photo" />
      </div>
    </div>
  )
}