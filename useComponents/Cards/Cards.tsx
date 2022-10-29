import { Card, CardProps } from "@/usePieces/Card";

export type CardsProps = {
  cards: CardProps[];
}


export const Cards = ({ cards }: CardsProps) => {

  return (
    <div className="py-5 flex flex-wrap justify-center items-center gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  )
}