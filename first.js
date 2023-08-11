var x = 100;

console.log("start");
setTimeout(() => {
    console.log(x);
}, 3000);
console.log("end");


// blocking main thread for 10s
console.log("start 10s")
console.time();
let startDate = new Date().getTime();
let endDate = startDate + 10000;
while(startDate < endDate){
    startDate = new Date().getTime();
}
console.timeEnd();
console.log("end 10s");



