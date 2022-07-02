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

export default {};
