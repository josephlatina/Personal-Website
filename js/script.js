/** LANDING PAGE */
//Initialize Elements
const button = document.querySelector('#landing-button');
const message = document.querySelector('#landing-message');
const container = document.querySelector('#landing-options');
const options = Array.from(container.children);

button.style.display = "none";
message.classList.add('animate__animated', 'animate__fadeInUp');

//Event Listeners
message.addEventListener('animationend', () => {
    button.style.display = "block";
    button.classList.add('animate__animated', 'animate__fadeInUp');
})
button.addEventListener('click', e => {
    options.forEach(option => {
        option.classList.add('animate__animated', 'animate__fadeInUp', 'animate-delay');
    })
})