import Test from 'components/Test';

describe('Home.cy.ts', () => {
  it('playground', () => {
    cy.mount(<Test />);
  });
});

export {};
