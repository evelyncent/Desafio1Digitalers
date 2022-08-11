function gastoConIva(num){
return(num*(21/100)+num);
}


function map(array, call){
gastos=[];
for(var i=0;i<array.length;i++){
    
    gastos.push(call(array[i]));
    console.log(gastos);
    
}

}

map([25,56,45,65],gastoConIva);
