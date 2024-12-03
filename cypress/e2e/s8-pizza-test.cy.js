describe("Pizza-React-Test", () => {
  it("Home sayfasında acıktım butonuna basınca form sayfasına gönderiyor", () => {
    cy.visit("http://localhost:5174/");
    cy.get('[data-cy="home-button"]').click();
    cy.url().should("include", "/form");
  });

  it("Tüm form şartları sağlanmadan sipariş ver butonu aktif olmuyor", () => {
    cy.visit("http://localhost:5174/form");

    cy.get('[data-cy="isim-input"]').type("Ahmet");

    cy.contains("Pepperoni").prev().check(); // "Pepperoni" malzemesini seç
    cy.contains("Sosis").prev().check(); // "Sosis" malzemesini seç
    cy.contains("Kanada Jambonu").prev().check(); // "Kanada Jambonu" malzemesini seç
    cy.contains("Tavuk Izgara").prev().check(); // "Tavuk Izgara" malzemesini seç

    cy.contains("Büyük").prev().check();

    cy.get('[data-cy="submit-button"]').should("be.enabled");

    cy.get('[data-cy="isim-input"]').clear().type("Ah");

    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });
  it("Tüm form şartlarını sağlayıp sipariş ver butonuna bastığımzda siparis onay sayfasına gidiyor", () => {
    cy.visit("http://localhost:5174/form");

    cy.get('[data-cy="isim-input"]').type("Ahmet");

    cy.contains("Pepperoni").prev().check(); // "Pepperoni" malzemesini seç
    cy.contains("Sosis").prev().check(); // "Sosis" malzemesini seç
    cy.contains("Kanada Jambonu").prev().check(); // "Kanada Jambonu" malzemesini seç
    cy.contains("Tavuk Izgara").prev().check(); // "Tavuk Izgara" malzemesini seç

    cy.contains("Büyük").prev().check();

    cy.get('[data-cy="submit-button"]').click();

    cy.url().should("include", "/siparis");
  });

  it("Girilen isim 3 harften küçükse hata mesajı gösterilir", () => {
    cy.visit("http://localhost:5174/form");

    cy.get('[data-cy="isim-input"]').type("Ah");
    cy.contains("İsim en az 3 karakter olmalı").should("be.visible");
  });

  it("Girilen isim 3 harften küçükse hata mesajı gösterilir", () => {
    cy.visit("http://localhost:5174/form");

    cy.contains("Pepperoni").prev().check(); // "Pepperoni" malzemesini seç
    cy.contains("Sosis").prev().check(); // "Sosis" malzemesini seç
    cy.contains("Kanada Jambonu").prev().check(); // "Kanada Jambonu" malzemesini seç

    cy.contains("En az 4, en fazla 10 malzeme seçmelisiniz").should(
      "be.visible"
    );
  });
});
