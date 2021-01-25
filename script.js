let botao = document.querySelector('#botao'); // BOTAO DE CADASTRAR OS ALUNOS

let tbody = document.querySelector('#tbody'); //ID DA TBODY

// ID DOS INPUTS 
let inputNome = document.querySelector('#inputNome');

let inputNota = document.querySelector('#inputNota');

// VERIFICA SE OS INPUTS ESTÃO PREENCHIDOS
let vazio = /\w/;
let digito = /[0-9]{1}/;


// BOTÃO DE CADASTRAR
botao.addEventListener('click', () => {
  
  verificaCondicao();

});


function verificaCondicao() {

  // CRIA UMA TR
  let tr = document.createElement('tr');

  // SE TODOS SO CAMPOS FOREM PREENCHIDO CORRETAMENTE CRIA AS TDS
  if (inputNota.value >= 0 && inputNota.value <= 10 && vazio.test(inputNome.value) == true
    && digito.test(inputNota.value) == true) {


    criaTd(tr); // FUNÇÃO CRIA AS TD

    verificaNota(tr); // FUNÇÃO VERIFICA SE O ALUNO REPROVOU OU FOI APROVADO


    // SE OS CAMPOS NÃO FOREM PREENCHIDOS CORRETAMENTE
  } else if (vazio.test(inputNome.value) == false || digito.test(inputNota.value) == false) {

    alert('Erro todos os campos devem ser preenchidos corretamente');
  }

  notaInvalida(); // FUNÇÃO VERIFICA SE A NOTA FOR MAIOR QUE 10 OU SE FOR UM VALOR NEGATIVO
}



// FUNÇÃO CRIA AS TD
function criaTd(tr) {
  // CRIA AS TD
  let campoNome = document.createElement('td');
  let campoNota = document.createElement('td');


  //  COLOCA AS TD DENTRO DA TR
  tr.appendChild(campoNome);
  tr.appendChild(campoNota);

  // PEGA OS VALORES DOS INPUT
  let valorNome = document.createTextNode(inputNome.value);
  let ValorNota = document.createTextNode(inputNota.value);

  // COLOCA OS VALORES DOS INPUTS DENTRO DAS TD
  campoNome.appendChild(valorNome);
  campoNota.appendChild(ValorNota);

  // COLOCA O TR DENTRO DO TBODY
  tbody.appendChild(tr);
}


// FUNÇÃO VERIFICA SE O ALUNO REPROVOU OU FOI APROVADO
function verificaNota(tr) {

  // SE O ALUNO FOR REPROVADO CRIA UMA TD COM A SITUAÇÃO REPORVADO
  if (inputNota.value >= 0 && inputNota.value < 6) {
    tr.classList.add("reprovado"); //ADICIONA UMA CLASS A TR

    let situacao = document.createElement('td'); //CRIA UMA TD

    tr.appendChild(situacao); //COLOCA A TD DENTRO DA TR

    let reprovado = document.createTextNode('Reprovado');

    situacao.appendChild(reprovado);
    tbody.appendChild(tr);

  } else if (inputNota.value >= 6 && inputNota.value <= 10) {  // SE O ALUNO FOR APROVADO CRIA UMA TD COM A SITUAÇÃO APROVADO
    tr.classList.add("aprovado");//ADICIONA UMA CLASS A TR

    let situacao2 = document.createElement('td');//CRIA UMA TD

    tr.appendChild(situacao2); //COLOCA A TD DENTRO DA TR

    let aprovado = document.createTextNode('Aprovado');

    situacao2.appendChild(aprovado);
    tbody.appendChild(tr);
  };

}

// FUNÇÃO VERIFICA SE A NOTA FOR MAIOR QUE 10 OU VALOR NEGATIVO
function notaInvalida() {
  if (inputNota.value > 10 || inputNota.value < 0) {
    alert('A nota deve ser entre 0 e 10')
  };
}