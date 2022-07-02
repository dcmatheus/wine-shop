import Link from 'next/link';
import Image from 'next/image';
import cardIcon from 'images/card.svg';

function CardButton() {
  return (
    <Link href="/carrinho">
      <Image src={cardIcon} alt="Carrinho de compras" />
    </Link>
  );
}

export default CardButton;
