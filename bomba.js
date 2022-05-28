// El numero 7 al final es una bomba!

const arr1 = [1,7,2,6,10,15,17,27,25,125,467,1070];
const arr2 = [0,23,40,55,62,44,18,101,405,1080];
// crear detector de bombas 

function bombaDetector(arr){

    const newArray = [];
    arr.array.forEach(num => {
        const numToStr = num.toString();
        for(let i=0 ; i<numToStr.length;i++){
            newArray.push(+numToStr.charAt(i))
        }
        
    });
    console.log("Hello word");
    const contain = newArray.includes(7);
    if(contain){
        console.log("Tiene bomba ,explota !!!")
    }else{
       console.log("Tranqui ,no tien bomba")        
    }
    bombaDetector(arr2);
    
}
