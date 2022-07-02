import HeaderPage from 'components/organisms/HeaderPage';
import pageNavList from 'utils/pagePaths.json';

const defaultTest = () => {
  it('Should have Burger Menu button', () => {
    cy.get('[data-testid="burger-menu-button"]').should('exist');
  });

  it('Should have Wine Logo', () => {
    cy.get('[data-testid="logo"]').should('exist');
  });

  it('Should have Search button', () => {
    cy.get('[data-testid="search-button"]').should('exist');
  });

  it('Should have Cart button', () => {
    cy.get('[data-testid="cart-button"]').should('exist');
  });
};

describe('HeaderPage component', () => {
  it('Should render HeaderPage component', () => {
    cy.mount(<HeaderPage />);
  });

  beforeEach(() => {
    cy.mount(<HeaderPage />);
  });

  defaultTest();
  context('Test on larger screens', () => {
    beforeEach(() => {
      cy.viewport('macbook-15');
    });
    defaultTest();
    it('Should have Profile button', () => {
      cy.get('[data-testid="profile-button"]').should('exist');
    });
    it('Should have Cart button', () => {
      cy.get('[data-testid="cart-button"]').should('exist');
    });
    context('Nav Bar', () => {
      pageNavList.forEach((page) => {
        it(`Should have ${page.name} nav button`, () => {
          cy.get(`[data-testid="${page.name}-nav-page-button"]`).should('exist');
        });
      });
    });
  });
});

export {};
