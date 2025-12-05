# --- Estágio 1: Build (Construção) ---
FROM node:20-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de dependência primeiro (para aproveitar o cache do Docker)
COPY package.json package-lock.json ./

# Instala as dependências (npm ci é mais seguro e rápido para CI/CD que npm install)
RUN npm ci

# Copia o restante do código fonte
COPY . .

# Executa o build de produção (Gera a pasta /dist)
RUN npm run build

# --- Estágio 2: Production (Servidor Nginx) ---
FROM nginx:alpine AS production

# Remove a configuração padrão do Nginx para usar a nossa
RUN rm /etc/nginx/conf.d/default.conf

# Copia a nossa configuração personalizada do Nginx (criaremos abaixo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos gerados no Estágio 1 para a pasta do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]