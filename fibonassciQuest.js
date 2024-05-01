// function fibonacciSeries(n) {
//     let fibo=[0,1]
//     for(let i=2; i<n; i++){
//         fibo[i]=fibo[i-1] +fibo[i-2]
//     }
//   console.log(fibo.join(" "))
//   }
// fibonacciSeries(10)


function fibonacciSeries(n) {
    let fibo = [0, 1]
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            console.log(0)
        }
        if (i === 1) {
            console.log(1)
        }
        if (i >= 2) {
            fibo[i] = fibo[i - 1] + fibo[i - 2]
            console.log(fibo[i])
        }

    }

}
fibonacciSeries(10)