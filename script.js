const para = document.getElementById('quote')
para.innerText ='Be yourself; everyone else is already taken.― Oscar Wilde'

const infoBoxes = document.getElementsByClassName('info-box');
    for (let box of infoBoxes) {
        box.style.backgroundColor = '#f0e68c'; // Light yellow background
    }

    const listItems = document.querySelectorAll('ul li')
    listItems[2].textContent = "designing a plan"

    const footerSpan = document.querySelector('footer span')
    footerSpan.textContent =" Have a great day!"