
const answer = ['A', 'A', 'B', 'C']
const form = document.querySelector('.quiz-form')
const span = document.querySelector('span')


const insertPointDOM = points => {
    let message = ''
    if (points > 0) {
        message = `Parabéns! ${points}%`
    } else {
        message = `Tente de novo! ${points}%`
    }
    span.innerHTML = `${message}`
} 

form.addEventListener('submit', event => {
    event.preventDefault()
    let score = 0

    const getAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]
    getAnswers.forEach((getAnswer, valueAnswer) => {
        if (getAnswer === answer[valueAnswer]) {
            score += 25
        }
    })
    insertPointDOM(score)
    

})