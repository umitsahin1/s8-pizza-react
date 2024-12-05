describe("Pizza-React-Test", () => {
  it("Home sayfasında acıktım butonuna basınca form sayfasına gönderiyor", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="home-button"]').click();
    cy.url().should("include", "/form");
  });

  it("Tüm form şartları sağlanmadan sipariş ver butonu aktif olmuyor", () => {
    cy.visit("http://localhost:5173/form");

    cy.get('[data-cy="isim-input"]').type("Ahmet");

    cy.get('[data-cy="checkbox-Domates"]').check();
    cy.get('[data-cy="checkbox-Sosis"]').check();
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check();
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').check();

    cy.get('[data-cy="boyut-select"]').eq(2).check();

    cy.get('[data-cy="submit-button"]').should("be.enabled");

    cy.get('[data-cy="isim-input"]').clear().type("Ah");

    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });
  it("Tüm form şartlarını sağlayıp sipariş ver butonuna bastığımzda siparis onay sayfasına gidiyor", () => {
    cy.visit("http://localhost:5173/form");

    cy.get('[data-cy="isim-input"]').type("Ahmet");

    cy.get('[data-cy="checkbox-Domates"]').check();
    cy.get('[data-cy="checkbox-Sosis"]').check();
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check();
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').check();

    cy.get('[data-cy="boyut-select"]').eq(2).check();

    cy.get('[data-cy="submit-button"]').click();

    cy.url().should("include", "/siparis");
  });

  it("Girilen isim 3 harften küçükse hata mesajı gösterilir", () => {
    cy.visit("http://localhost:5173/form");

    cy.get('[data-cy="isim-input"]').type("Ah");
    cy.contains("İsim en az 3 karakter olmalı").should("be.visible");
  });

  it("Girilen isim 3 harften küçükse hata mesajı gösterilir", () => {
    cy.visit("http://localhost:5173/form");

    cy.get('[data-cy="checkbox-Domates"]').check();
    cy.get('[data-cy="checkbox-Sosis"]').check();
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check();

    cy.contains("En az 4, en fazla 10 malzeme seçmelisiniz").should(
      "be.visible"
    );
  });
  it("Tüm form şartlarını sağlayıp sipariş ver butonuna bastığımzda siparis onay sayfasında sipariş özeti var", () => {
    cy.visit("http://localhost:5173/form");

    cy.get('[data-cy="isim-input"]').type("Ahmet");

    cy.get('[data-cy="checkbox-Domates"]').check();
    cy.get('[data-cy="checkbox-Sosis"]').check();
    cy.get('[data-cy="checkbox-Kanada Jambonu"]').check();
    cy.get('[data-cy="checkbox-Tavuk Izgara"]').check();

    cy.get('[data-cy="boyut-select"]').eq(2).check();

    cy.get('[data-cy="submit-button"]').click();

    cy.contains("Boyut: L").should("be.visible");
    cy.contains("Hamur: Süper İnce").should("be.visible");
    cy.contains(
      "Ek Malzemeler: Domates,Sosis,Kanada Jambonu,Tavuk Izgara"
    ).should("be.visible");
  });
});
