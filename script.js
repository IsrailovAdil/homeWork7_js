// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
// [1, 2, 3, 0, 4, 5, 6]

// let arr=[1, 2, 3, 0, 4, 5, 6]
// let arr1=arr.map(el=>el*el)
// console.log(arr1)

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
//     [1, 2, 3, 0, 4, 5, 6]

// let arr=[1, 2, 3,0, 4, 5, 6]
// let arr1= arr.map(el=>el>0)
// console.log(arr1)


// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.

// let arr= [1, 2, -3, 0, 4, -5, 6]
// function handleFunc(arg) {
//    return arr.map(element => element < 0).includes(true);
// }
// if (handleFunc(arr)) {
//    console.log("В массиве есть отрицательные элементы.");
// } else {
//    console.log("В массиве нет отрицательных элементов.");
// }



// Дан массив с числами. Оставьте в нем только отрицательные числа.
// let arr=[1, 2, -3, 0, 4, 5, -6]
// let arr1=arr.filter(el=>el>=0)
// console.log(arr1)

// Дан массив с числами. Оставьте в нем только четные числа.

// let arr= [1, -2, 3, 0, 4, -5, 6]
// let arr1=arr.filter(el=>el%2===0)
// console.log(arr1)

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

// let arr= ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// let rezult=arr.filter(el=>el.length>=5)
// console.log(rezult)

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
//
//  let arr=   [12, 2, -3, 0, -4, 54, -6]
// function handleFunc(arg){
//    let rezult= arg.filter(el=>el<0)
// return rezult.length
// }
// console.log(handleFunc(arr))


// // [1,2,3,4], ['a','b','c','d'] => [1, 2, 3, 4, 'a', 'b', 'c', 'd']

// let nums=[1,2,3,4]
// let str=['a','b','c','d']
// console.log(nums.concat(str))



// // [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'hello world']
//
// let arr=[2, 3, 4, 5]
// let str='hello world'
// console.log(arr.concat(str))

// // [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']

// let arr=[2, 3, 4, 5]
// let str='hello world'
// let arr1=str.split('')
// console.log(arr.concat(arr1))

// // [2, 3, 4, 5], 'hello world' => [2, 3, 4, 5, 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', 2, 3, 4, 5]

// let arr=[2, 3, 4, 5]
// let str='hello world'
// let arr1=str.split('')
// console.log(arr.concat(arr1,arr))


// FizzBuzz
// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
// (На самом деле, этот вопрос подходит для собеседований, и, говорят,
// он позволяет отсеивать довольно большое число кандидатов. Поэтому,
// когда вы решите эту задачу, можете себя похвалить.)
// const  handleFunc=()=>{
//     for (let i = 0; i <=100 ; i++) {
//         if(i%3===0 && i%5 !==0){
//             console.log('Fizz')
//         }else if(i%5===1 && i%3!==0){
//             console.log('Buzz')
//         }else if(i%5===0 && i%3===0) {
// console.log('FizzBuzz')
//         } else{
//             console.log(i)
//         }
//     }
// }
// handleFunc()