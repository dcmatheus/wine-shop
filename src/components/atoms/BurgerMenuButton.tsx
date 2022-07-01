import burgerMenu from 'image/burgerMenu.svg';

function BurgerMenuButton() {
  return (
    <button type="button">
      <object
        data={burgerMenu}
        type="image/svg+xml"
      >
        Menu
      </object>
    </button>
  );
}

export default BurgerMenuButton;
