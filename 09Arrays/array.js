let carros = ["palio 98", "Toro", "uno", 10, true, new Date(),"Fiesta"];
console.log(carros.length) //7
console.log(carros[2]) //uno
console.log(carros[5].getFullYear()); //ano

carros.forEach(function(value, index){
    console.log(index, value);
});

carros.forEach(index =>{
    console.log(index)
    console.log([1])
});

    

