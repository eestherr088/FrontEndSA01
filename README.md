A exibição de tempo foi feita em formato de "MM:SS" (minutos e segundos) assim o tempo é atualizado a cada segundo proporcionando visão realista de tempo

o usuario poderá iniciar o contador com o botão "Iniciar" e ao clicar o botão irá se transformar em "Pausar" para interrromper o cronometro

o usuario também podera cessar o cronometro e reinicia-lo usando o botão "Reiniciar"

o sistema foi criado para ser extremamente simples e para não ter muitos problemas com a utilização do site 

desafios enfrentados:

Gerenciamento do Tempo:
Um dos principais desafios foi garantir que o tempo fosse exibido corretamente e incrementado de forma precisa. Como o JavaScript usa o método setInterval para atualizar o tempo a cada segundo, tivemos que gerenciar adequadamente a transição entre os minutos e os segundos (quando os segundos atingem 60, eles são zerados e os minutos são incrementados).

Controle de Estado (Iniciar/Pausar):
Garantir que o botão de iniciar/pausar alterasse seu comportamento corretamente foi uma parte importante do projeto. Precisamos garantir que o botão mudasse o texto de "Iniciar" para "Pausar" e vice-versa de forma eficiente, sem causar erros no fluxo da contagem de tempo.

