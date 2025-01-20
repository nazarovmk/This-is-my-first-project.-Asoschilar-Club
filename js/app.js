class HamburgerMenu {
  constructor({
    menuSelector,
    buttonSelector,
    closeButtonSelector,
    linkSelector,
  }) {
    this.responsiveMenu = document.querySelector(menuSelector);
    this.hamburgerButton = document.querySelector(buttonSelector);
    this.closeButton = document.querySelector(closeButtonSelector);
    this.navLinks = document.querySelectorAll(linkSelector);

    if (!this.responsiveMenu || !this.hamburgerButton || !this.closeButton) {
      console.error(
        "Menu elements not found. Ensure all selectors are correct."
      );
      return;
    }

    this.init();
  }

  toggleMenu(state) {
    const action = state ? "add" : "remove";
    this.responsiveMenu.classList[action]("active");
    document.body.classList[action]("active");
  }

  addEventListeners() {
    this.hamburgerButton.addEventListener("click", () => this.toggleMenu(true));
    this.closeButton.addEventListener("click", () => this.toggleMenu(false));

    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => this.toggleMenu(false));
    });
  }

  init() {
    this.addEventListeners();
  }
}

// Agar kerakli elementlar mavjud bo'lsa, HamburgerMenu ni ishga tushirish
if (document.querySelector(".responsive-menu-btn")) {
  new HamburgerMenu({
    menuSelector: ".responsive-menu",
    buttonSelector: ".hamburger-btn",
    closeButtonSelector: ".responsive-menu-btn",
    linkSelector: ".nav-list .nav-link",
  });
}
