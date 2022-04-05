let pacientes = document.querySelectorAll('.paciente')
for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]
    let tdPeso = paciente.querySelector ('.info-peso');
    let tdAltura = paciente.querySelector('.info-altura');
    let tdimc = paciente.querySelector('.info-imc');
    
    let peso = tdPeso.textContent;
    let altura = tdAltura.textContent;

    let pesoValido = true;
    let alturaValida = true;

    if (peso <=0 || peso >= 1000){
        console.log('Peso inválido')
        tdimc.textContent = 'Peso Inválido!';
        pesoValido = false;
    } 
    if (altura <=0 || altura >= 1000){
        console.log('Altura inválida')
        tdimc.textContent = 'Altura Inválida!';
        alturaValida = false;
    } 
    if (peso && altura){
       tdimc.textContent = calcImc(peso,altura);        
    } 
}

function calcImc (peso, altura) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2);;
}