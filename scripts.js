const textarea = document.querySelector('#choices')
const choices = document.querySelector('.choices-container')
let choicesArray = []

textarea.addEventListener('input', () => {
    let choicesHtml = '';
    choicesArray = textarea.value.split(',')
    choicesArray.forEach((choice) => {
        if(choice){
            choicesHtml += `<div class="choice">${choice}</div>`
        }
    })
    choices.innerHTML = choicesHtml;
})