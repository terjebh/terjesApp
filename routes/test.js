
funk1 = a => a + 2;
funk2 = a => a * 2;

funk3 = funk2(funk1(6));

console.log(funk3);

funk4 = a => funk2(funk1(a));

console.log(funk4(8));


// fib = n => {

//     return (n - 1) + fib(n - 2);
// }

// console.log(fib(21));

start = process.hrtime();
let element = 0;
for (let index = 0; index < 1000000000; index++) {
    element+=index;
    
}

tid= process.hrtime(start)

console.log((tid[0]*1e9+tid[1])/1000000000);

