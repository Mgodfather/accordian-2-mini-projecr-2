let accdContaner = document.querySelector('.accordian-conatainer')
let showDetails = document.querySelectorAll('.show-accordian')


//here event listner is repeating in every click 
// let accdBtn = document.querySelectorAll('.accordian-bar')
// accdBtn.forEach((bar) => {
//     bar.addEventListener('click', (e) => {
//         if (accAns.contains('active')) {
//             accAns.remove('active')
//         } else {
//             for (const show of showDetails) {
//                 show.classList.remove('active')
//             }
//             accAns.add('active')
//         }
//     })
// })



//here event listner is not repeating in every click, and also this is more optimal way
accdContaner.addEventListener('click', (e) => {
    const accAns = e.target.nextElementSibling.classList

    if (e.target !== e.currentTarget) {
        try {
            if (accAns.contains('active')) {
                accAns.remove('active')
            } else {
                for (const show of showDetails) {
                    show.classList.remove('active')
                }
                accAns.add('active')
            }
        } catch (err) {
            // do nothing
        }
    }
})