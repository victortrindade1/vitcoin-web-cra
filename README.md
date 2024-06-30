# Vitcoin

Eae, beleza? Vou criar a interface e rotas de ligar e desligar o servidor.
Nessa interface vou colocar tb pro usuário escolher o tempo da periodicidade
de rodar o servidor.

Eu tenho q fazer uma rota pro servidor pra verificar se ele está on. Não o on do
servidor, e sim da função principal.

Se rodar a função principal, tem q criar um true dentro do servidor q eu pudesse
ler no front. Ainda nao sei como. Com DB dá pra fazer isso.

O ChatGPT deu um jeito de eu usar uma variável simples. Assim:

// controller.js
const express = require('express');
const { minhaFuncao, intervaloId, intervalo } = require('./funcoes'); // Importa as funções do arquivo funcoes.js

const app = express();

// Endpoint para iniciar a execução da função
app.get('/iniciar-funcao', (req, res) => {
if (!intervaloId) {
intervaloId = setInterval(minhaFuncao, intervalo);
res.send('Função iniciada periodicamente!');
} else {
res.status(400).send('A função já está em execução!');
}
});

// Endpoint para parar a execução da função
app.get('/parar-funcao', (req, res) => {
if (intervaloId) {
clearInterval(intervaloId);
intervaloId = null;
res.send('Função parada!');
} else {
res.status(400).send('A função não está em execução!');
}
});

// Endpoint para verificar o estado da função
app.get('/estado-funcao', (req, res) => {
const estado = intervaloId ? 'ligada' : 'desligada';
res.json({ estado: estado });
});

module.exports = app;

// funcoes.js
let intervaloId = null;

function minhaFuncao() {
console.log('Executando minha função...');
// Coloque aqui o código da sua função
}

const intervalo = 60 \* 1000;

module.exports = {
minhaFuncao,
intervaloId,
intervalo
};
