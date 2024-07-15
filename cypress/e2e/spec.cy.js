describe('Telnyx Website Test', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com');
    cy.viewport(1920, 1080);

  });

  it('should load the Telnyx website and check the title', () => {
    cy.title().should('include', 'Telnyx - Global solutions for Communications, IOT, AI, Compute and Networking');
  });

  it('should navigate to Sign Up page', () => {
      //cy.viewport(1920, 1080)
      cy.get('#header-sign-up').click();
      cy.url().should('include', '/sign-up');
  });
  
  it('verify that logo is clickable', () => {                                     
    //cy.viewport(1920, 1080)
    cy.get('.c-fjNNbA').click();
  });

  it('should display the main menu buttons', () => {
    //cy.viewport(1920, 1080)
    const MenuButtons = [
      'a[href="/"]',
      '[id="radix-:Raarm:"]',
      'a[href="/solutions"]',
      '[id="radix-:Raqrm:"]',
      '[id="radix-:Rb2rm:"]',
      '[id="radix-:Rbarm:"]',
      '[id="radix-:Rbirm:"]'
    ];
    MenuButtons.forEach(selector => {
      cy.get(selector).should('be.visible');
    });
  });

  it('verify that menu buttons is clickable', () => {
    const MenuButtons = [
      'a[href="/"]',
      '[id="radix-:Raarm:"]',
      'a[href="/solutions"]',
      '[id="radix-:Raqrm:"]',
      '[id="radix-:Rb2rm:"]',
      '[id="radix-:Rbarm:"]',
      '[id="radix-:Rbirm:"]'
    ];
    MenuButtons.forEach(selector => {
      cy.get(selector).should('be.visible');
    });

  });
  it('verify that "Products" manu is visible  ', () => {
    cy.contains('Products').should('be.visible').click();

      cy.contains('Products').parent().click(() =>{
        const MenuButtons = [
          '.mchNoDecorate[href="/products/sms-api"',
          '#2k0BhWC0JS6ubfb6dlXJUa',
          '[id="2IYRf655bWg3u6b7Cha07G"]',
          '[id="1l2NQyz6TLgVLBKwrr9zW9"]',
          '[id="5UHFRLQeoNhp2iDrDchydl"]',
          '[id="7klJih4PEe51QmmQ9gum1x"]',
          '[id="1g6AcODg8DR4RwRWKbu4D1"]',
          '[id="3khPGTSIu9H8EUmYG6bkr1"]',
          '[id="7gcAtZ00yeAsxYNlL049kM"]',
          '[a.mchNoDecorate[href="/products"]]'
        ];

        MenuButtons.forEach(id => {
          cy.get(id).should('be.visible');
        });
     });
  });

  it('make a screenshot of the home page', () => {
    cy.screenshot('homepage');
  });

  it('verify that img in "Communications" block is visible', () =>{
    cy.get('img[src*="/_next/static/media/code_terminal.17f71ccc.svg"]').should('be.visible');
  });

  it('Should have a visible footer', () => {
    cy.get('footer').should('be.visible');
  }); 

  it('Verify that "Developers" page open successfull and "Support" sub manu is visible ', () => {
    cy.scrollTo(197.22,20)
    cy.contains('EXPLORE OUR DOCS').click();
    cy.contains('Support').parent(() => {
    const MenuButtons = [
      'a[href="https://support.telnyx.com/en"]',
      'a[href="https://joinslack.telnyx.com/"]',
      'a[href="https://telnyx.com/contact-us"]'
    ];

    MenuButtons.forEach(selector => {
      cy.get(selector).should('be.visible');
    });
    });
  });

  
  
});
