import Link from 'next/link';
import Image from 'next/image';
import cardIcon from 'images/card.svg';
import { DefaultButton } from 'styles';

function CartButton() {
  return (
    <Link href="/carrinho">
      <DefaultButton type="button">
        <Image src={cardIcon} alt="Carrinho de compras" data-testid="cart-button" />
      </DefaultButton>
    </Link>
  );
}

export default CartButton;
