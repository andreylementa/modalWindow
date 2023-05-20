'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnsCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

const closeModalWindow = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', showModalWindow);
}

btnsCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModalWindow();
    console.log(e.key);
  }
});
