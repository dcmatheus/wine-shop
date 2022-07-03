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
