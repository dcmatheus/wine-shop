import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffff;
  font-family: 'Neo Sans Std';
  font-size: 18px;
  font-weight: 400;
  @media (min-width: 1265px) {
    padding: 0px  136px 0px 112px;
    border-bottom: 1px solid #CCCCCC;
  }
`;

export const DefaultButton = styled.button`
  all: unset;
  cursor: pointer;
`;

export const NavbarStyle = styled.nav`
  display: flex;
  align-items: center;
  * {
    margin: 8px 18px;
  }
  @media (min-width: 1024px) {
    height: 88.23px;
    * {
      height: 98%;
    }
  }
  @media (min-width: 1265px) {
    * {
      margin: 0px 24px;
    }
  }
`;

export const NavButton = styled(DefaultButton)`
  ${({ select }: { select: boolean }) => (select ? 'color: #D14B8F; border-bottom: 4px solid #D14B8F;' : '')}
`;

export const DefaultContent = styled.main`
  margin: 32px 18px;
  h1 {
    margin: 0px;
  }
  @media (min-width: 1024px) {
    margin: 40px 160px;
  }
`;

export const QuantityProductsStyled = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #262626;
  padding: 20px 0px;
  margin: 10px 20px;
  border-bottom: solid 1px #D5D5D5;
  span {
    color: #1D1D1B;
    font-weight: 700;
  }
  @media (min-width: 1024px) {
    border-bottom: none;
  }
`;

export const WineListStyled = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.24rem;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 2rem;
  }
`;

export const AddButton = styled(DefaultButton)`
  background-color: #7EBC43;
  padding: 12px;
  border-radius: 4px;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  color: #FFFFFF;
  margin-top: 8px;
  text-align: center;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const Card = styled.div`
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #FFFFFF;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-content: center;
  text-align: center;
  padding: 8px;
  height: 100%;
  .title {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .discountField {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin: 0px;
    margin-bottom: 10px;
  }

  .old-price {
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: line-through;
    text-transform: uppercase;
    color: #888888;
  }

  .discount {
    font-weight: 700;
    font-size: 14px;
    color: #FFFFFF;
    background: #F79552;
    border-radius: 2px;
    padding: 1px 4px;
    margin-left: 4px;
  }

  .member-price {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    .text {
      font-weight: 400;
      font-size: 15px;
      text-transform: uppercase;
      width: 3rem;
      color: #555555;
    }
    .price {
      font-weight: 800;
      font-size: 16px;
      color: #C81A78;
      .highlight {
        font-size: 24px;
      }
    }
  }

  .nonmember-price {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    text-transform: uppercase;
    color: #888888;
    .price {
      margin-left: 3px;
    }
  }
`;
