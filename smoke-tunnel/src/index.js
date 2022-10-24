import './scss/main.scss';

const form = document.querySelector('.form-consult');
const btn = document.querySelector('.form-button');

//simple form interactive
btn.addEventListener('click', (e) => {
    if (form.firstElementChild.value && btn.previousElementSibling.value) {
    alert(`Name: ${form.firstElementChild.value}, \nPhone: ${btn.previousElementSibling.value}`);
    } else {
        alert('Fill gaps')
    }
    e.preventDefault();
})

//onclick event on header rounded buttons
Array.from(document.querySelectorAll('.circle-btn')).forEach(e => e.addEventListener('click', () => e.classList.toggle('circle-btn_active')))

//change content according to layout
const sendBtn = document.querySelector('.form-button');
const formHeading = document.querySelector('.h3_consult');
if (window.innerWidth < 769) {
    sendBtn.textContent = 'о    ставить заявку';
    formHeading.textContent = 'Необходима консультация';
} else {
    sendBtn.textContent = 'отправить';
    formHeading.textContent = 'Необходима консультация?';
}