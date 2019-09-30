function calculate(x, y){
    return(x * y)
}

function doCalc(){
    const things = parseFloat(document.querySelector("#string1").value)
    const size = parseFloat(document.querySelector("#string2").value)

    total = calculate(things, size);


    document.querySelector('#shortString').innerHTML =  total
}

document.querySelector('#calcButton').addEventListener('click', doCalc)