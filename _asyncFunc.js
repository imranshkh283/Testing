// function fetchData(callback) {

//     setTimeout(() => {
//         callback('pizza')
//     }, 2000)
// }

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('computer'), 1000);
    })
}

module.exports = fetchData