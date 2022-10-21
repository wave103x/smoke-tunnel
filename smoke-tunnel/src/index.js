import './scss/main.scss';

const form = document.querySelector('.form-consult');
const btn = document.querySelector('.form-button');

btn.addEventListener('click', (e) => {
    if (form.firstElementChild.value && btn.previousElementSibling.value) {
    alert(`Name: ${form.firstElementChild.value}, \nPhone: ${btn.previousElementSibling.value}`);
    } else {
        alert('Fill gaps')
    }
    e.preventDefault();
})