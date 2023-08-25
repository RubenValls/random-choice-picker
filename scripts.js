const textarea = document.querySelector('#choices')
const choices = document.querySelector('.choices-container')
let choicesArray = []

const aleatoryChoice = (allChoices) => {
    allChoices.forEach((choice) => {
        choice.style.backgroundColor =  '#EF932B';
    })
    const options = allChoices.length - 1;
    const numberOption = Math.floor(Math.random() * (options - 0 + 1) + 0);
    allChoices[numberOption].style.backgroundColor =  '#273C75';
}

textarea.addEventListener("keydown", (event) => {
    if(event.keyCode == 13){
        const allChoices = document.querySelectorAll('.choice')
        textarea.value = '';
        textarea.blur()
        if(allChoices.length > 0){
            aleatoryChoice(allChoices)
        }
    }else{
        let choicesHtml = '';
        choicesArray = textarea.value.split(',')
        choicesArray.forEach((choice) => {
            if(choice){
                choicesHtml += `<div class="choice">${choice}</div>`
            }
        })
        choices.innerHTML = choicesHtml;
    }
})