import HomePage from 'components/templates/HomePage';

describe('Home.cy.ts', () => {
  it('playground', () => {
    cy.mount(<HomePage />);
  });
});

export {};
