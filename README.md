CRIAR UM CONTAINER DE DESENVOLVIMENTO

# 1️⃣ Tenha Docker funcionando
Instale Docker Desktop
Se usar Windows: use WSL

Valide:
- docker --version
- docker compose version

# 2️⃣ Crie uma pasta para o projeto
- mkdir meu-projeto
- cd meu-projeto
- code .

# 3️⃣ Crie o Dockerfile (ambiente)

Define como o ambiente de desenvolvimento é.
Exemplo base:
- FROM node:20
- WORKDIR /app
- CMD ["sh"]

# 4️⃣ Crie o docker-compose.yml (execução)

Define como o container roda localmente.
services:
  dev:
    build: .
    volumes:
      - .:/app
    stdin_open: true
    tty: true

# 5️⃣ Suba o container
- docker compose up -d --build

# 6️⃣ Entre no container
- docker exec -it dev-container sh

# 7️⃣ Inicialize o projeto (ex: Node)
- npm init -y
- npm install

# 8️⃣ Rode o código dentro do container
- node index.js

# 9️⃣ (Opcional, recomendado) Use VS Code Dev Containers

Crie:
- .devcontainer/devcontainer.json

----------------------------------------------------------

# Reiniciar o Container:

- docker compose down
- docker compose up -d
- docker compose restart