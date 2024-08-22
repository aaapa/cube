const header = () => {
  const menu = document.querySelector(".header__menu");
  const menuButton = document.querySelector(".header__menu-button");
  const searchForm = document.querySelector(".header__search-form");

  document.addEventListener("click", (event) => {
    if (event.target.closest(".header__menu-button")) {
      menuButton.classList.toggle("open");
      menu.classList.toggle("open");
    }

    const mediaQuery = window.matchMedia("(max-width: 1170px)");

    if (mediaQuery.matches && event.target.closest(".header__search-button")) {
      searchForm.classList.toggle("open");
    }
  });
};

header();