let pacientes = document.querySelectorAll('.paciente')
for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i]
    let tdPeso = paciente.querySelector ('.info-peso').textContent;
    let tdAltura = paciente.querySelector('.info-altura').textContent;
    let tdimc = paciente.querySelector('.info-imc').textContent;

    let pesoValido = true;
    let alturaValida = true;

    if (tdPeso <=0 || tdPeso >= 1000){
        console.log('Peso inválido')
        tdimc.textContent = 'Peso Inválido!';
        pesoValido = false;
    } 
    if (tdAltura <=0 || tdAltura >= 1000){
        console.log('Altura inválida')
        tdimc.textContent = 'Altura Inválida!';
        alturaValida = false;
    } 
    if (tdPeso && tdAltura){
        let imc = tdPeso / (tdAltura * tdAltura);
        tdimc.textContent = imc;
        
    } 
}