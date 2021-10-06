"use strict";

require("fsLightbox");

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
};
/*import { suma,saludo } from "./operaciones";
import Swal from 'sweetalert2'
console.log(suma(10,10));
console.log(saludo);
document.write(`<h1>${suma(5,20)}</h1>`);

Swal.fire({
    title: 'Sweet!',
    text: 'Hola mundo! te saluda Carlos',
    imageUrl: 'https://unsplash.it/400/200',
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: 'Custom image',
  })
 import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());*/