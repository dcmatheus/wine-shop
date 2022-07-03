import AddWineButton from 'components/atoms/AddWineButton';
import WineCard from 'components/molecules/WineCard';
import context from 'context/context';
import { useContext } from 'react';
import { WineListStyled } from 'styles';

function WineList() {
  const { response } = useContext(context);
  return (
    <WineListStyled>
      { response?.items.map((item) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <WineCard wine={item} key={item.id} />
          <AddWineButton />
        </div>
      )) }
    </WineListStyled>
  );
}

export default WineList;
