// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigoSecreto = []

function agregarAmigo () {
    let amigo = document.getElementById('amigo').value
    if (amigo.trim() != '') {
        amigoSecreto.push(document.getElementById('amigo').value);
        console.log(amigoSecreto); 
        limpiarElementos();
        mostrarLista();  
    }
    else{
        alert('Ingrese un nombre válido');
    }

    
}

function limpiarElementos(){
    document.getElementById('amigo').value = ''
    document.getElementById('listaAmigos').innerHTML = ''
}
    
function mostrarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ''
    amigoSecreto.forEach (_amigo => {
        console.log(_amigo)
        const li = document.createElement('li');
        li.textContent = _amigo;
        lista.appendChild(li);
    })
    
}

function sortearAmigo() {
    
    const _sorteo = Math.floor(Math.random() * amigoSecreto.length);
    console.log(amigoSecreto[_sorteo])
    limpiarElementos()
    document.getElementById("listaAmigos").innerHTML = amigoSecreto[_sorteo]
    amigoSecreto = []
}

    
    
