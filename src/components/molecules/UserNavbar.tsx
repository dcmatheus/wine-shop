import { CartButton, ProfileButton, SearchButton } from '@atoms';
import useBreakpoints from 'hooks/useBreakpoints';
import { NavbarStyle } from 'styles';

function UserNavbar() {
  const { mdScreen } = useBreakpoints();
  return (
    <NavbarStyle>
      <SearchButton />
      { mdScreen && <ProfileButton /> }
      <CartButton />
    </NavbarStyle>
  );
}

export default UserNavbar;
