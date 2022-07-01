import Link from 'next/link';
import cardIcon from 'images/card.svg';

function CardButton() {
  return (
    <Link href="/carrinho">
      <object data={cardIcon} type="image/svg+xml">Carrinho de compras</object>
    </Link>
  );
}

export default CardButton;
