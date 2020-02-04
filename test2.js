const inn = (number)=>{
    if (number === 1 || number <1) {
        return 1;
    }
    return inn(number-1) + inn(number -2) * inn(number -3);
}

console.log(inn(10));