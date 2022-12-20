let div = document.querySelector('div');

div.style.width = '100px';
div.style.height = '100px';

div.style.backgroundColor = 'red';


let p = document.querySelector('p');
p.classList.add('prueba');
p.id = "myP";
p.classList.add('prueba2');


function cambiarColor(){
    p.style.color = 'red';
}

function capturarValor(){
    let name = document.querySelector('#name');
    console.log(name.value);
}