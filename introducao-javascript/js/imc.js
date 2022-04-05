// Calc IMC Paciente 1;
let pesoPaulo = document.querySelector('#idPesoPaulo');
let alturaPaulo = document.querySelector('#idAlturaPaulo');

let tdPesoPaulo = pesoPaulo.textContent;
let tdAlturaPaulo = alturaPaulo.textContent;

let imcPaulo = tdPesoPaulo / (tdAlturaPaulo * tdAlturaPaulo);
let tdImcPaulo = document.querySelector('#idImcPaulo');
tdImcPaulo.textContent = imcPaulo.toFixed(2);

// Calc IMC Paciente 2;
let pesoJoao = document.querySelector('#idPesoJoao');
let alturaJoao = document.querySelector('#idAlturaJoao');

let tdPesoJoao = pesoJoao.textContent;
let tdAlturaJoao = alturaJoao.textContent;

let imcJoao = tdPesoJoao / (tdAlturaJoao * tdAlturaJoao);
let tdImcJoao = document.querySelector('#idImcJoao');
tdImcJoao.textContent = imcJoao.toFixed(2);

// Calc IMC Paciente 3;
let pesoErica = document.querySelector('#idPesoErica');
let alturaErica = document.querySelector('#idAlturaErica');

let tdPesoErica = pesoErica.textContent;
let tdAlturaErica = alturaErica.textContent;

let imcErica = tdPesoErica / (tdAlturaErica * tdAlturaErica);
let tdImcErica = document.querySelector('#idImcErica');
tdImcErica.textContent = imcErica.toFixed(2);

// Calc IMC Paciente 4;
let pesoDouglas = document.querySelector('#idPesoDouglas');
let alturaDouglas = document.querySelector('#idAlturaDouglas');

let tdPesoDouglas = pesoDouglas.textContent;
let tdAlturaDouglas = alturaDouglas.textContent;

let imcDouglas = tdPesoDouglas / (tdAlturaDouglas * tdAlturaDouglas);
let tdImcDouglas = document.querySelector('#idImcDouglas');
tdImcDouglas.textContent = imcDouglas.toFixed(2);

// Calc IMC Paciente 5;
let pesoTatiana = document.querySelector('#idPesoTatiana');
let alturaTatiana = document.querySelector('#idAlturaTatiana');

let tdPesoTatiana = pesoTatiana.textContent;
let tdAlturaTatiana = alturaTatiana.textContent;

let imcTatiana = tdPesoTatiana / (tdAlturaTatiana * tdAlturaTatiana);
let tdImcTatiana = document.querySelector('#idImcTatiana');
tdImcTatiana.textContent = imcTatiana.toFixed(2);