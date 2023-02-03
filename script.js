// const advice = new XMLHttpRequest()
// advice.addEventListener('readystatechange', () => {
//     if(advice.readyState == 4){
//         console.log(advice.responseText)
//     }
// })

// advice.open('GET', 'https://api.adviceslip.com/advice')
// advice.send()

// const getAdvice = (request) => {
//     return new Promise((resolve, reject) => {
//         const advice = new XMLHttpRequest()
//         advice.addEventListener('readystatechange', () => {
//             if(advice.readyState == 4 && advice.status == 200){
//                 const data = JSON.parse(advice.responseText)
//                 resolve(data)
//             }else if(advice.readyState == 4){
//                 const err = 'error getting advice'
//                 reject(err)
//             }
//         })
//         advice.open('GET', request)
//         advice.send()
//     })
// }

// getAdvice('https://api.adviceslip.com/advice').then((data) => {
//     console.log('resolved:', data)
//     console.log(data.slip.id, data.slip.advice)
// }).catch(err => {
//     console.log('error:', err)
// })

const newAdvice = async (advice) => {
    const response = await fetch(advice)
    if(response.status !== 200){
        throw new Error('error getting advice')
    }
    const data = response.json()
    return data

}

newAdvice('https://api.adviceslip.com/advice').then((data) => {
    console.log('resolved', data)
}).catch(err => {
    console.log('error:', err)
})