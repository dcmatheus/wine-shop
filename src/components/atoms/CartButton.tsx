import Link from 'next/link';
import Image from 'next/image';
import cardIcon from 'images/card.svg';
import { DefaultButton } from 'styles';

function CartButton() {
  return (
    <DefaultButton type="button">
      <Link href="/carrinho">
        <Image src={cardIcon} alt="Carrinho de compras" data-testid="cart-button" />
      </Link>
    </DefaultButton>

  );
}

export default CartButton;
