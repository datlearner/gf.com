var btn_diva = document.getElementById('btn_diva');
var btn_divb = document.getElementById('btn_divb');
var diva = document.getElementById('diva');
var divb = document.getElementById('divb');
btn_diva.addEventListener('click', ()=>{
    diva.style.display = 'block';
    divb.style.display = 'none';
});

btn_divb.addEventListener('click', ()=>{
    diva.style.display = 'none';
    divb.style.display = 'block';
});

function myFun(){
    document.getElementById('nonne').style.display = 'block';
}