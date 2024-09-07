
const form = document.querySelector('form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const queryType = document.querySelectorAll('.query-type-input-wrapper input');
const message = document.querySelector('#message');
const consent = document.querySelector('#consent');
const errorMessage = document.querySelectorAll('.error-message');
const inputsClear = document.querySelectorAll('form input, form textarea');
const successMessage = document.querySelector('dialog');
const queryTypeWrapper = document.querySelectorAll('.query-type-input-wrapper label');


form.addEventListener('submit', function(e) {

    let successful = 0;
    // overall error
    errorMessage.forEach(error => {
        error.style.display = 'none';
    })
    inputsClear.forEach(input => {
        input.style.borderColor = window.getComputedStyle(document.documentElement).getPropertyValue('--Grey-500-medium')
    })

    // each inputs error
    if (firstName.value === '') {
        successful++;
        firstName.style.borderColor = window.getComputedStyle(document.documentElement).getPropertyValue('--Red')
        errorMessage[0].style.display = 'block';
    }
    if (lastName.value === '') {
        successful++
        lastName.style.borderColor = window.getComputedStyle(document.documentElement).getPropertyValue('--Red')
        errorMessage[1].style.display = 'block';
    }
    if (email.value === '') {
        successful++
        email.style.borderColor = window.getComputedStyle(document.documentElement).getPropertyValue('--Red')
        errorMessage[2].style.display = 'block';
    }
    let queryChecked = 0;
    queryType.forEach(query => {
        if (query.checked === false) {
            queryChecked++
        }
        if (queryChecked > 1) {
            successful++
            errorMessage[3].style.display = 'block';
        }
    })
    if (message.value === '') {
        successful++
        message.style.borderColor = window.getComputedStyle(document.documentElement).getPropertyValue('--Red')
        errorMessage[4].style.display = 'block';
    }
    if (consent.checked === false) {
        successful++
        errorMessage[5].style.display = 'block';
    }
    console.log(successful)
    if (successful < 1) {
        queryTypeWrapper.forEach(query => query.classList.remove('query-active'))
        successMessage.show();
        successMessage.style.display = 'grid';
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        queryType[0].checked = false;
        queryType[1].checked = false;
        message.value = '';
        consent.checked = false;
    }

    setTimeout(() => {
        successMessage.close();
        successMessage.style.display = 'none';
    }, 4000)
})

queryType.forEach((query, index, array) => {
    query.addEventListener('click', function() {
        queryTypeWrapper.forEach(query => query.classList.remove('query-active'))
        queryTypeWrapper[index].classList.add('query-active')
    })
})