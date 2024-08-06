// Select the sign-in and sign-up links
const signInBtnlink = document.querySelector('.signInBtn-link');
const signUpBtnlink = document.querySelector('.signUpBtn-link');
const container = document.querySelector('.container');


// Add event listeners to toggle the 'active' class on the container
signInBtnlink.addEventListener('click', () => {
    container.classList.toggle('active');
});

signUpBtnlink.addEventListener('click', () => {
    container.classList.toggle('active');
});

