function tampilInforKotakPertama(){
    alert('Ini Kotak pertama');
}
function tampilInfoKedua(){
    alert('Ini Kotak Kedua');
}
var objKotakPertama = document.getElementById('kotakPertama');
objKotakPertama.addEventListener('click',function(){
    alert('hai');
});
var objKotakKedua = document.querySelector('#kotakKedua');
objKotakKedua.addEventListener('click',tampilInfoKedua);
console.log('hello');
function Hello(){
    alert("hello");
}