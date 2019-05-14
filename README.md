# Gusgo
Gusgo é um projeto de um Erp básico para controle de clientes, pedidos, entregas.
 No entanto o grande objetivo é o aprendizado criando uma api utilizando PHP com Laravel e um frontend Vue com Vuetify.

# Tecnologias utilizadas
Docker - 
Vue.js -
Vuetify - 
Jest - 
PHP -  
Laravel - 

# Instalação
OBS: Necessário Docker e Docker Compose instalado.

front:
- Ir até a pasta 'front' acessar o container node
  * docker-compose run node sh
- Dentro do container instalar as dependencias
  * yarn install
- Sair do container baixar o docker e subir novamente
  * docker-compose down
  * docker-compose up
- Estará rodando em localhost:8080

back:
- Ir até a pasta 'back' acessar o container devapp
  * docker-compose run devapp bash
- Dentro do container instalar as dependencias
  * composer install
- Ainda no container rodar configurações do Laravel
  * php artisan key:generate
  * php artisan migrate
  * php artisan module:migrate  
- Sair do container baixar o docker e subir novamente
  * docker-compose down
  * docker-compose up
- Estará rodando em localhost:8081

#Testes
Somente unitários
- front: jest
- back: phpunit

