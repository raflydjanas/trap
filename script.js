const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const btnYes = document.querySelector('.btn-yes');
const btnNo = document.querySelector('.btn-no');

const wrapperRect = wrapper.getBoundingClientRect();
const btnNoRect = btnNo.getBoundingClientRect();

btnYes.addEventListener('click', () => {
  question.innerHTML = 'Selamat Anda kena jebakan bandar!!';
});

btnNo.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width
    - btnNoRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height
    - btnNoRect.height)) + 1;

    btnNo.style.left = i + 'px';
    btnNo.style.top = j + 'px';
  });