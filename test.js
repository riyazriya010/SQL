

// const arr = [1,2,3,4,5,6,7]

// function *generatorFunction(length,arr){
//     let l = length - 1
//     while(l > 0){
//         let random = Math.floor(Math.random() * 6);
//         yield arr[random]
//         l--
//     }
// }

// const getVal = generatorFunction(arr.length,arr)

// console.log(getVal.next().value);


// function check(n) {
//     if (!(n >= -500 && n <= 500)) {
//       throw new RangeError("The argument must be between -500 and 500.");
//     }
//   }
  

//   try {
//     check(2000);
//     console.log('true')
//   } catch (error) {
//     if (error instanceof RangeError) {
//       console.error(error)
//     }
//   }
  
const uri = 'https://menscart.site/?name=Riyas ^ &place=Coimbatore';
const encoded = encodeURI(uri)
console.log('encoded: ',encoded);

try {
  console.log(decodeURI(encoded))
} catch (e) {
  console.log(e)
}