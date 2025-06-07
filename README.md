# Vitcoin

## O que estou fazendo agora

Estou sondando como é o coingecko pra pegar os dados prontos já dos charts
Vou fazer a interface onde o usuário vê quanto tem na Binance

## Estratégia - servidor

### Quando comprar

1. Usando RSI Estocástico, será a linha principal cruzar a secundária na zona de baixo (20), no sentido de baixo pra cima. Configuração padrão (14 14 3 3, com bandas 20 a 80).
2. Usando Índice de Volatilidade Relativa (RVI), bloqueia a compra se linha principal (RVI) estiver acima ou próxima da secundária (RVI-based MA).
   Configuração padrão da RVI: Período 10, deslocamento 0.
   P/ linha-base do RVI: Suavização MMS, Período 14

#### O quanto usar de capital pra comprar

Do total de capital (carteira + ações compradas), sempre deixar dividido em x partes. Essa qnt x será variável de acordo com a volatilidade. Mais volátil, maior x.

Uma sugestão inicial seria dividir total por:

- Pouco volátil:
  - Muito volume -> Divide por 3
  - Pouco volume -> Divide por 5
- Médio volátil:
  - Muito volume -> Divide por 5
  - Pouco Volume -> Divide por 7
- Muito volátil:
  - Muito volume -> Divide por 7
  - Pouco Volume -> Divide por 10

OBS: Tem q ser total em vez de o quanto tem sobrando na corretora, porque se for dividir sempre o qnt sobra, nunca vai comprar tudo, as parcelas vão diminuindo. Se usar o total contando as ações já compradas, consegue usar todo o capital. É mais arriscado, mas pode ser mais eficiente. Observar.

### Quando vender

1. Usando RSI Estocástico, será a linha principal cruzar a secundária na zona de cima (80), no sentido de cima pra baixo. Configuração padrão (14 14 3 3).
2. Valor naquele momento é mais alto que a soma de:
   - Valor da compra
   - IR
   - Outros impostos
   - Custo da transação
   - Custo de sacar
   - Taxa de lucro de x%
3. Usando Índice de Volatilidade Relativa (RVI), bloqueia a venda se linha principal (RVI) estiver abaixo ou próxima da secundária (RVI-based MA).
   Configuração padrão da RVI: Período 10, deslocamento 0.
   P/ linha-base do RVI: Suavização MMS, Período 14

Se por ventura essa condição deixar a ação comprada presa, não mexer. A **margem de segurança** para este dinheiro preso **é a quantidade** aplicada, que não deve ser tudo.

## Tela do Frontend

Mostrar o quanto tem na corretora (carteira), o quanto tem comprado em linhas de transações feitas. Mostrando o valor da compra e valor atual.

Mostrar diferença entre aporte na corretora e valor total. Se tiver dinheiro sacado, descontar do aporte.

Switch Desliga compra: continua com lógica de decisão de venda e não roda de compra. Este é um switch global, diferente do switch de desligar venda, que será por linha de transação.

Mostrar compras feitas dentro de uma lista. A linha se amplia ao clicar e mostra os dados detalhados.

Vai ter 3 opções de ação por linha:

- Venda manual: vende aquela linha por valor cadastrado manualmente. Se _Venda Manual_ tiver ativa, a lógica de decisão de venda não roda naquela linha. Para ativar, basta escrever um valor de venda num campo editável. Para desfazer, basta apagar o valor. Deixar em branco é o que libera a volta da lógica de decisão de venda.
- Desliga venda: caso eu queira segurar por saber que vai aumentar mais, desligo a venda temporariamente. O tempo deve ser editável. Quando o _Desliga Venda_ tiver ativo, a linha toda vai estar bloqueada cinza e com o tempo contando destacado, com um lápis pra editar o tempo se quiser.
- Venda Instantânea: vende pelo preço atual independente se vai perder ou não. Quando começar a rodar o Venda Instantânea, zerar o tempo da lógica de decisão de venda, para não acontecer de naquele instante tentar vender duas vezes se bater o tempo na coincidência. Cada linha vai ter a opção Venda Instantânea estará vermelho se o valor atual seu não for maior que do critério de venda (tópico 2 em Quando Vender), e verde se estiver acima. Isso pode me fazer pular manualmente a decisão do RSI.

Consultar tanto da binance qnt do servidor. Posso usar no front uma tela de configuração de variáveis do servidor, como:
Engrenagem de Configuração da estratégia do servidor:

- Tempo de espera pra rerodar o código
- Medidas do RSI
- Taxa de lucro
- Critério de volatilidade
- Critério de volume
- Extrapolação da RVI (o quão próximo da linha-base a linha principal está próxima). Acredito q um bom valor seja entre 10 a 15.

## Lógica

No servidor, deixar a cada x tempos rodando o código de verificação pra comprar e pra vender.

Cada transação de compra deve guardar numa linha do DB, com a qnt de ações. Essa qnt estará amarrada a qnt da venda, sem misturar com outras qnts q tem da msm ação comprada em outro momento. Ao rodar o código, fazer a leitura de cada qnt separado numa lista de compras ativas para venda, rodando o codigo de decisão de venda uma vez para cada linha da lista de compras ativas daquele tempo x q rodou o código.

## Melhorias

Em vez de ser bitcoin pela binance, poderia ser uma api de ações brasileiras. Parece q a XP tem.
