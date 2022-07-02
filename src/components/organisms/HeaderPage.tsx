import { BurgerMenuButton, WineLogo } from '@atoms';
import { PageNavBar, UserNavBar } from '@molecules';
import useBreakpoints from 'hooks/useBreakpoints';
import { HeaderStyled, NavbarStyle } from 'styles';

function HeaderPage() {
  const { mdScreen } = useBreakpoints();
  return (
    <HeaderStyled>
      <NavbarStyle>
        { !mdScreen && <BurgerMenuButton /> }
        <WineLogo />
      </NavbarStyle>
      { mdScreen && <PageNavBar /> }
      <UserNavBar />
    </HeaderStyled>
  );
}

export default HeaderPage;
