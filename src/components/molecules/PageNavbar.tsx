import { NavPageButton } from '@atoms';
import { NavbarStyle } from 'styles';
import pagePaths from 'utils/pagePaths.json';

function PageNavBar() {
  return (
    <NavbarStyle>
      { pagePaths.map(({ path, name }) => (
        <NavPageButton href={path} text={name} key={name} />
      ))}
    </NavbarStyle>
  );
}

export default PageNavBar;
