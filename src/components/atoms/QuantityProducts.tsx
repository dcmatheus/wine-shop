import context from 'context/context';
import { useContext } from 'react';
import { QuantityProductsStyled } from 'styles';

function QuantityProducts() {
  const { response } = useContext(context);
  return (
    <QuantityProductsStyled>
      <span>{ response?.totalItems }</span>
      {' '}
      produtos encontrados
    </QuantityProductsStyled>
  );
}

export default QuantityProducts;
