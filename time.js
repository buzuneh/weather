

setInterval(()=>{
let dy = new Date();
let hr = dy.getHours();
let mn = dy.getMinutes();
let se = dy.getSeconds();
let mo=dy.getMonth();
let yr=dy.getFullYear();
let wk =dy.toDateString();
document.querySelector('.time').innerHTML =wk;
},1000);
