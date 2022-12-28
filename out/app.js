// let text: string;
// text = 'Hello World';
// let textName: string;
// textName = 'Chatpong';
// console.log(text);
// console.log(textName);
//funtion length
// // 1.
// let text1: string = 'Chatpong';
// console.log('Length of text1 :' + text1.length);
// //2.
// for(var val of text1) {
//     console.log(val);
// }
// //3.
// for(var val1 of text1){
//     console.log(`indexOf ${val1} is ` + text1.indexOf(val1));
// }
// //5.
// let txt1: string = 'Hello';
// let txt2: string = 'World';
// console.log(txt1 + ' '+ txt2);
var txt1 = 'microsoft excel';
console.log(txt1.toUpperCase());
var txt2 = 'GOOGLE AND APPLE';
console.log(txt2.toLowerCase());
var txt3 = 'hello world';
var splitted = txt3.split(" ");
var helloTxt = splitted[0];
var HelloTxt = helloTxt.charAt(0).toUpperCase() + helloTxt.slice(1);
var worldTxt = splitted[1];
var WorldTxt = worldTxt.charAt(0).toUpperCase() + worldTxt.slice(1);
console.log(HelloTxt + " " + WorldTxt);
//# sourceMappingURL=app.js.map