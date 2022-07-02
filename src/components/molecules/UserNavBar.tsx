import { CartButton, ProfileButton, SearchButton } from '@atoms';
import useBreakpoints from 'hooks/useBreakpoints';

function UserNavBar() {
  const { mdScreen } = useBreakpoints();
  return (
    <nav>
      <SearchButton />
      { mdScreen && <ProfileButton /> }
      <CartButton />
    </nav>
  );
}

export default UserNavBar;
