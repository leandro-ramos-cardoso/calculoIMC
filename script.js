function calculoIMC(){
    // Selecionando dados de entrada
    var txtp  = window.document.getElementById('txtpeso');
    var txta = window.document.getElementById('txtalura');
    var res = window.document.getElementById('res');

    var txtp = Number(txtpeso.value);
    // var txta = Number(txtaltura.value);
    var txta = parseFloat(txtaltura.value) / 100;

    var imc = (txtp / txta ** 2).toFixed(2); 

    if (txtp == '' || txta == '') {
        // alert('[ERRO] - Campos vazios, por favor preencha!');

        // Exibe uma mensagem de erro mais visível na área de resultado
        res.style.background = '#FF3333';
        res.style.color = 'white';
        res.style.borderRadius = '15px';
        res.style.padding = '10px';
        res.style.marginBottom = '20px';
        res.style.width = '300px';
        res.style.margin = '0 auto';
        res.innerHTML = `
            <p>
                <img src="./botao-x.png" alt="erro" style="width: 50px">
            </p>
            <p>
                Por favor, preencha os campos de peso e altura.
            </p>
        `;

        // Oculta o botão Limpar
        btnLimpar.style.display = 'none';

        return;
    
    } else if (imc < 18.5) {
        foto.src = 'foto-abaixoPeso.webp';
        res.style.background = 'coral';
        res.style.color = 'black';
        res.style.borderRadius = '15px';
        res.style.padding = '5px'
        res.style.marginBottom = '15px';
        res.style.width = '300px';
        res.style.margin = '0 auto';
        res.innerHTML = 
        `
        <p>Abaixo do peso</p>

        <p><strong>IMC = ${imc}</strong></p>
        `;
    } else if (imc >= 18.5 && imc < 24.9) {
        foto.src = 'foto-pesoNormal.jpg';
        res.style.background = '#32CD32';
        res.style.color = '#000000';
        res.style.borderRadius = '15px';
        res.style.padding = '5px'
        res.style.marginBottom = '15px';
        res.style.width = '300px';
        res.style.margin = '0 auto';
        res.innerHTML =
        `
        <p>Peso normal</p>

        <p><strong>IMC = ${imc}</strong></p>
        `
    } else if (imc >= 24.9 && imc < 29.9) {
        foto.src = 'foto-sobrepeso.webp';
        res.style.background = '#FFD700';
        res.style.color = '#000';
        res.style.borderRadius = '15px';
        res.style.padding = '5px'
        res.style.marginBottom = '15px';
        res.style.width = '300px';
        res.style.margin = '0 auto';
        res.innerHTML =
        `
        <p>Sobrepeso</p>

        <p><strong>IMC = ${imc}</strong></p>
        `
    } else if (imc >= 29.9 && imc < 34.9) {
        foto.src = 'foto-obesidade1.webp';
        res.style.background = 'orange';
        res.style.color = '#000';
        res.style.borderRadius = '15px';
        res.style.padding = '5px'
        res.style.marginBottom = '15px';
        res.style.width = '300px';
        res.style.margin = '0 auto';
        res.innerHTML =
        `
        <p>Obesidade grau I</p>

        <p><strong>IMC = ${imc}</strong></p>
        `
    } else if (imc >= 34.9 && imc < 39.9) {
        foto.src = 'foto-obesidade2.webp';
        res.style.background = '#FF8C00';
        res.style.color = '#000';
        res.style.borderRadius = '15px';
        res.style.padding = '5px'
        res.style.marginBottom = '15px';
        res.style.width = '300px';
        res.style.margin = '0 auto';
        res.innerHTML =
        `
        <p>Obesidade grau II</p>

        <p><strong>IMC = ${imc}</strong></p>
        `
    } else if (imc >= 39.9) {
        foto.src = 'foto-obesidade3.webp';
        res.style.background = '#FF4500';
        res.style.color = 'black';
        res.style.borderRadius = '15px';
        res.style.padding = '5px'
        res.style.marginBottom = '15px';
        res.style.width = '300px';
        res.style.margin = '0 auto';
        res.innerHTML =
        `
        <p>Obesidade grau III (Mórbida)</p>

        <p><strong>IMC = ${imc}</strong></p>
        `
    }    
    // Exibir botão de limpar após o cálculo.
    document.getElementById('btnLimpar').style.display = 'inline-block';  
}

document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada é a tecla Enter
    if (event.key === 'Enter') {
        calculoIMC();
    }
});

function limparInput(...inputIds) {
    foto.src = 'foto-capa.jpg';
    res.innerHTML = '';
    res.style.background = 'none';
    document.getElementById('txtpeso').value = '';
    document.getElementById('txtaltura').value = '';
    document.getElementById('btnLimpar').style.display = 'none';
    document.getElementById('resultado').style.display = 'none';
    inputIds.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.value = '';  // Limpa o valor do input
        } else {
            console.log(`Input com id "${inputId}" não encontrado.`);
        }
    });
}