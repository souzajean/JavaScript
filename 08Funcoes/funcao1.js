window.addEventListener('focus', event => {
    console.log("focus");
});

document.addEventListener('click', event => {
    console.log('click');
});

//let agora = Date.now();
let agora = new Date();
//console.log(agora);
console.log(agora.getDate());
console.log(agora.getDay());
console.log(agora.getHours());
console.log(agora.getMilliseconds());
console.log(agora.getMonth());
console.log(agora.toLocaleDateString());
console.log(agora.toLocaleDateString("pt-BR"));