import useBreakpoints from 'hooks/useBreakpoints';
import searchMobile from 'images/search-mobile.svg';
import searchDesktop from 'images/search.svg';

function SearchButton() {
  const { smScreen } = useBreakpoints();
  return (
    <button type="button">
      { smScreen ? (
        <object data={searchMobile} type="image/svg+xml">Pesquisar</object>
      ) : (
        <object data={searchDesktop} type="image/svg+xml">Pesquisar</object>
      )}
    </button>
  );
}

export default SearchButton;
