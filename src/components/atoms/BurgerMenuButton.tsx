import burgerMenu from 'images/burger-menu.svg';
import Image from 'next/image';

function BurgerMenuButton() {
  return (
    <button type="button">
      <Image src={burgerMenu} alt="Menu" data-testid="burger-menu-button" />
    </button>
  );
}

export default BurgerMenuButton;
