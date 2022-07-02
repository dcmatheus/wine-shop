import { BurgerMenuButton, WineLogo } from '@atoms';
import { PageNavBar, UserNavBar } from '@molecules';
import useBreakpoints from 'hooks/useBreakpoints';
import { HeaderStyled, NavbarStyle } from 'styles';

function HeaderPage() {
  const { lgScreen } = useBreakpoints();
  return (
    <HeaderStyled>
      <NavbarStyle>
        { !lgScreen && <BurgerMenuButton /> }
        <WineLogo />
        { lgScreen && <PageNavBar /> }
      </NavbarStyle>
      <UserNavBar />
    </HeaderStyled>
  );
}

export default HeaderPage;
