import Image from 'next/image';
import { Card } from 'styles';
import { Wine } from 'types';

function WineCard({ wine }: { wine: Wine }) {
  const oldPrice = wine.priceMember + wine.discount;
  const discount = Math.round((100 * wine.discount) / (oldPrice));
  const memberPrice = `${Intl.NumberFormat('id', {
    minimumFractionDigits: 2,
  }).format(wine.priceMember)}`.split(',');
  const nonmemberPrice = `${Intl.NumberFormat('id', {
    minimumFractionDigits: 2,
  }).format(wine.priceNonMember)}`;
  return (
    <Card>
      <div>
        <Image src={wine.image} alt={wine.name} height="200" width="130" layout="fixed" />
      </div>
      <p className="title">{wine.name}</p>
      <div className="discountField">
        <span className="old-price">
          R$
          {' '}
          {oldPrice}
        </span>
        <span className="discount">
          {discount}
          % OFF
        </span>
      </div>
      <div className="member-price">
        <span className="text">Sócio wine</span>
        <span className="price">
          R$
          {' '}
          <span className="highlight">{memberPrice[0]}</span>
          ,
          <span>{memberPrice[1]}</span>
        </span>
      </div>
      <div className="nonmember-price">
        Não sócio
        <span className="price">
          R$
          {' '}
          {nonmemberPrice}
        </span>
      </div>
    </Card>
  );
}

export default WineCard;
