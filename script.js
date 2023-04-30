const openButtons = document.querySelectorAll('.open-button');
const closeButtons = document.querySelectorAll('.close-button');
const modals = document.querySelectorAll('.modal');

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.dataset.modalId;
    const modal = document.querySelector(`#${modalId}`);
    modal.showModal();
    const centerTop = window.innerHeight / 2 - modal.offsetHeight / 2;
    const centerLeft = window.innerWidth / 2 - modal.offsetWidth / 2;
    modal.style.top = centerTop + 'px';
    modal.style.left = centerLeft + 'px';
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.close();
    const body = document.querySelector('body');
    body.style.overflow = 'auto';
  });
});



