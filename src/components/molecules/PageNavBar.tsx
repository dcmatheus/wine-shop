import { NavPageButton } from '@atoms';
import pagePaths from 'utils/pagePaths.json';

function PageNavBar() {
  return (
    <nav>
      { pagePaths.map(({ path, name }) => (
        <NavPageButton href={path} text={name} key={name} />
      ))}
    </nav>
  );
}

export default PageNavBar;
