(() => {
  const pageHeaderElement = document.querySelector('.page-header');

  pageHeaderElement.querySelector('.page-header__toggle').addEventListener('click', () => {
    pageHeaderElement.classList.toggle('page-header--opened');
  });

  pageHeaderElement.classList.add('page-header--js');
})();
