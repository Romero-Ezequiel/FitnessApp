// const elemento = document.createElement('h1');
// elemento.innerText = 'Hola React';

// const contenedor = document.getElementById('root');
// contenedor.appendChild(elemento);

import React from 'react';
import ReactDOM from 'react-dom';

import Mostrar from './pages/Mostrar';

// const usuario = {
//     nombre:'Ezequiel',
//     apellido: 'Romero',
//     avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
// }

// function getNombre(usuario){
//     return `${usuario.nombre}`
// }

// //const nombre = 'Ezequiel Romero';

// const elemento = <h1>Hola {getNombre(usuario)}</h1>

const contenedor = document.getElementById('root');
//ReactDOM.render(__QUE__,__DONDE__)
ReactDOM.render(<Mostrar />, contenedor);