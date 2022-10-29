import { Icon } from "@iconify/react";

export type CardProps = {
  title: string;
  description?: string;
  icon?: string;
  image?: string;
  pageLink?: string;
}

export const Card = ({ title, description, icon = 'file-icons:default', image, pageLink }: CardProps) => {
  return (
    <div className="bg-brand-primary-light w-[282px] h-[360px] flex flex-col justify-center items-center gap-1 rounded-md cursor-pointer">
      <div className="text-brand-accent-light text-6xl pb-4">
        <Icon icon={icon} />
      </div>
      <div className="text-5xl text-center text-brand-secondary-light font-bold font-altoneTrial">
        <h3>{title}</h3>
      </div>
      <div className="text-brand-secondary-light font-altoneTrial">
        <p>{description}</p>
      </div>
    </div>
  )
}