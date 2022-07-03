import QuantityProducts from 'components/atoms/QuantityProducts';
import HeaderPage from 'components/organisms/HeaderPage';
import WineList from 'components/organisms/WineList';

function HomePage() {
  return (
    <>
      <HeaderPage />
      <QuantityProducts />
      <WineList />
    </>
  );
}

export default HomePage;
