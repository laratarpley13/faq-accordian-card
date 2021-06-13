document.querySelectorAll('.accordion_question').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('open');
        item.nextElementSibling.classList.toggle('open');
    })
})