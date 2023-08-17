function calc(target){

    let shapeName = target.parentNode.parentNode.childNodes[1].innerText;
    let firstValue = target.parentNode.parentNode.childNodes[5].childNodes[1].value,
        secondValue = target.parentNode.parentNode.childNodes[5].childNodes[3].value;
    
    // console.log(target.parentNode.parentNode.childNodes[1].innerText);

    let primaryMultiply = parseFloat(firstValue) * parseFloat(secondValue);
    
    if(shapeName === 'triangle' || shapeName === 'rhombus' || shapeName === 'ellipse'){
        primaryMultiply = primaryMultiply * 0.5;
    }
    else if(shapeName === 'ellipse'){
        primaryMultiply = primaryMultiply * 3.14159;
    }
    else{
        primaryMultiply = parseFloat(firstValue) * parseFloat(secondValue);
    }
    console.log(primaryMultiply)
}