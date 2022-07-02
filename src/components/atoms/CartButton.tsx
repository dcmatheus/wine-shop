import Link from 'next/link';
import Image from 'next/image';
import cardIcon from 'images/card.svg';

function CartButton() {
  return (
    <Link href="/carrinho">
      <Image src={cardIcon} alt="Carrinho de compras" data-testid="cart-button" />
    </Link>
  );
}

export default CartButton;
