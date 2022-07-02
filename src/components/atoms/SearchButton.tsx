import useBreakpoints from 'hooks/useBreakpoints';
import searchMobile from 'images/search-mobile.svg';
import searchDesktop from 'images/search.svg';
import Image from 'next/image';

function SearchButton() {
  const { mdScreen } = useBreakpoints();
  return (
    <button type="button">
      { mdScreen ? (
        <Image src={searchDesktop} alt="Pesquisar" />
      ) : (
        <Image src={searchMobile} alt="Pesquisar" />
      )}
    </button>
  );
}

export default SearchButton;
