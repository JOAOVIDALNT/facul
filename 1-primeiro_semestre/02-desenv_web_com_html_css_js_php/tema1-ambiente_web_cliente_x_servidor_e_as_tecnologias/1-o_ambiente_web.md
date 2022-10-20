### Modelo cliente x servidor
O modelo cliente X servidor foi criado pela Xerox PARC nos anos 1970, tendo como principal premissa a separação entre dados e recursos de processamento, ao contrário do modelo predominante à época — conhecido como modelo centralizado, em que tanto o armazenamento dos dados quanto o seu processamento ficavam a cargo dos computadores de grande porte: mainframe.

### Ambiente cliente x servidor
O ponto de partida para entendermos a arquitetura do modelo cliente X servidor é tomarmos como exemplo a rede interna de computadores de uma empresa, em que temos máquinas exercendo a função de servidores — provendo serviços como armazenamento de arquivos ou dados, impressão, e-mail etc. — e máquinas exercendo a função de clientes — consumindo os recursos fornecidos pelos servidores. Essa arquitetura pode ser vista na imagem a seguir.

### Aplicações no modelo cliente X servidor
Esse modelo tornou possível o desenvolvimento de aplicações que fizessem uso de sua arquitetura distribuída. Tais aplicações foram desenvolvidas tendo como base o conceito de desenvolvimento em camadas. Logo, surgiram os modelos de duas, três e quatro (ou N) camadas.

### Aplicações no modelo cliente X servidor
Esse modelo tornou possível o desenvolvimento de aplicações que fizessem uso de sua arquitetura distribuída. Tais aplicações foram desenvolvidas tendo como base o conceito de desenvolvimento em camadas. Logo, surgiram os modelos de duas, três e quatro (ou N) camadas.
---------------------------------------------------------------------------------------------------
### Modelo de duas camadas
Nesse modelo, temos as camadas cliente e servidor, sendo função da primeira tratar a lógica do negócio e fazer a interface com o usuário, enquanto a segunda é responsável por tratar os dados — normalmente fazendo uso de sistemas gerenciadores de bancos de dados (SGDB). São exemplos desse modelo as aplicações desktop instaladas em cada computador cliente que se comunicam com um servidor na mesma rede. A imagem que segue exemplifica esse tipo de rede.
---------------------------------------------------------------------------------------------------
### Modelo de três camadas
Esse modelo foi criado para resolver alguns problemas do modelo anterior, entre eles a necessidade de reinstalação/atualização da aplicação nos clientes a cada mudança de regra ou lógica. Logo, foi incluída uma camada a mais, a camada de aplicação. Com isso, as responsabilidades de cada camada ficaram assim divididas:
##### Camada de apresentação
Representada pela aplicação instalada na máquina cliente. Era responsável pela interface com o usuário e passou a acessar o servidor de aplicação, perdendo o acesso direto ao servidor de dados.
##### Camada de aplicação
Representada por um servidor responsável pela lógica e pelas regras de negócio, assim como pelo controle de acesso ao servidor de dados.
##### Camada de dados
Representada por um servidor responsável pelo armazenamento dos dados.
---------------------------------------------------------------------------------------------------
### Modelo de quatro camadas
O grande avanço obtido nesse modelo foi tirar da máquina cliente a responsabilidade pela interface com o usuário, passando a centralizá-la em um único ponto, normalmente em um servidor web. Com isso, no lugar de aplicações instaladas em cada máquina cliente, passamos a ter os clientes acessando aplicações hospedadas em servidores web a partir de navegadores. Nesse modelo, a divisão de responsabilidades ficou desta forma:
##### Cliente
Passou a precisar apenas de um navegador para ter acesso à aplicação.
##### Servidor
Composto por três servidores — o de aplicações, o de dados e o web, sendo este último o responsável pela apresentação/interface com o usuário cliente.
---------------------------------------------------------------------------------------------------
### Ambiente web
Como vimos, inicialmente as aplicações ficavam hospedadas dentro de uma rede interna, onde estavam tanto os clientes quanto os servidores. Posteriormente, elas migraram para a internet, surgindo então o ambiente web, cuja base é justamente prover aos clientes, usuários, o acesso a várias aplicações a partir de diversos dispositivos, como navegadores em desktops e smartphones ou a partir de aplicações mobile.
##### Cliente
Utiliza um navegador ou aplicativo e consome serviços hospedados em um servidor web.
##### Servidor web
Sua estrutura pode comportar tanto as camadas de apresentação, aplicação e dados numa única máquina quanto em diversas máquinas, sendo essa distribuição indistinguível para o cliente.
---------------------------------------------------------------------------------------------------
### Comunicação no ambiente web
A comunicação, nesse ambiente, é feita sobre a internet, com o uso dos seus protocolos de comunicação, sendo o principal protocolo o HTTP (HyperText Transfer Protocol), que é um protocolo para transferência de hipertexto. Na imagem seguinte, podemos ver um exemplo de comunicação no ambiente web.

No exemplo apresentado, temos de um lado o cliente que, com um desktop ou smartphone, faz a requisição, através da internet, de um serviço — representada pelo arquivo Listar-TV.php — a um servidor. O servidor web, após processar a requisição, retorna a informação solicitada, representada pelo arquivo Listagem-TV.php. Com isso, podemos entender como funcionam as aplicações disponíveis no ambiente web, como websites de notícias, comércio eletrônico, e-mail, redes sociais etc. Em cada um desses casos, há de um lado uma requisição sendo feita pelo cliente e, do outro, o servidor processando a requisição e respondendo ao cliente com o que foi solicitado.

### Solicitação e resposta
O processo de comunicação no ambiente web é conhecido como solicitação (request) e resposta (response). Normalmente, a solicitação é iniciada pelo cliente, mas é possível que também o servidor a inicie, como em serviços PUSH — serviços que disparam notificações/mensagens para os clientes que fizeram opção por recebê-las.




