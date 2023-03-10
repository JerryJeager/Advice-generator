const adviceNumber = document.querySelector('.advice-number').querySelector('h2')
const adviceQuote = document.querySelector('.advice-quote').querySelector('p')
const changeAdviceBtn = document.querySelector('button')



const newAdvice = async (advice) => {
    const response = await fetch(advice)
    if (response.status !== 200) {
        throw new Error('Advice not found: ')
    }
    const data = response.json()
    return data

}

function displayAdvice() {
    newAdvice('https://api.adviceslip.com/advice').then((data) => {
        adviceNumber.textContent = `ADVICE #${data.slip.id}`
        adviceQuote.textContent = `"${data.slip.advice}"`
        adviceQuote.style.color = 'var(--light-cyan)'
        adviceQuote.style.fontSize = '25px'
    }).catch(err => {
        adviceNumber.textContent = ``
        adviceQuote.textContent = `${err.message} Check your internet connection`
        adviceQuote.style.color = 'red'
        adviceQuote.style.fontSize = '16px'
    })
}


changeAdviceBtn.addEventListener('click', displayAdvice)
window.addEventListener('load', displayAdvice)

