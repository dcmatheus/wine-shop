import { BurgerMenuButton, WineLogo } from '@atoms';
import { PageNavBar, UserNavBar } from '@molecules';
import useBreakpoints from 'hooks/useBreakpoints';
import { HeaderStyled } from 'styles';

function HeaderPage() {
  const { mdScreen } = useBreakpoints();
  return (
    <HeaderStyled>
      { !mdScreen && <BurgerMenuButton /> }
      <WineLogo />
      { mdScreen && <PageNavBar /> }
      <UserNavBar />
    </HeaderStyled>
  );
}

export default HeaderPage;
