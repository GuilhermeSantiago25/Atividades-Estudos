let botaoEnviar = document.querySelector('#adicionar-paciente');
botaoEnviar.addEventListener('click', (event)=>{
    event.preventDefault();
    
    const formulario = document.querySelector('#form-adiciona');
    
    const paciente = obtemPacienteForm(formulario);

    const pacienteTr = montaTr(paciente);

    const tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr);

    formulario.reset();
});

function obtemPacienteForm(formulario){
    const paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcImc(formulario.peso.value, formulario.altura.value)
    };
    return paciente;
};

function montaTd(dado, classe){
    const td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
};

function montaTr(paciente){
    const pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
};

