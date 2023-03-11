(() => {
  const refs = {
    openMobilBtn: document.querySelector('[data-menu-open]'),
    closeMobilBtn: document.querySelector('[data-menu-close]'),
    modal: document.querySelector('[data-menu]'),
  };

  refs.openMobilBtn.addEventListener('click', toggleModal);
  refs.closeMobilBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
