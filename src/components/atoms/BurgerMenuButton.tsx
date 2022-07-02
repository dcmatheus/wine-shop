import burgerMenu from 'images/burger-menu.svg';
import Image from 'next/image';
import { DefaultButton } from 'styles';

function BurgerMenuButton() {
  return (
    <DefaultButton type="button">
      <Image src={burgerMenu} alt="Menu" data-testid="burger-menu-button" />
    </DefaultButton>
  );
}

export default BurgerMenuButton;
