
//确定arr.length===3
function outPutArr(arr){
  let newArr=[];
   for(let x = 0;x<arr.length;x++){
    for(let y = 0;y<arr.length;y++){
      for(let z = 0;z<arr.length;z++){
         newArr.push(Number(arr[x]*100+arr[y]*10+arr[z]))
      }
    }
   }
   return [...new Set(newArr)];
}


function loop(arr){
  let length = arr.length;
  let count =length;
  for(let x = 0;x<length;x++){
    
   }
}

function result(arr){
  return arr.filter(v=>v%7===0)
}
console.log(result(outPutArr([1,2,3])))