FROM node:22-alpine

RUN npm install -g pnpm

# Define el directorio de trabajo
WORKDIR /app

# Copia archivos de dependencias
COPY package.json pnpm-lock.yaml ./

# Instala las dependencias
RUN pnpm install --frozen-lockfile

# Copia el resto del código
COPY . .

# Expone el puerto
EXPOSE 5173

# Comando para iniciar la aplicación en modo desarrollo
CMD ["pnpm", "dev"]
#Construir y ejecutar:
#docker build -t dictavalfrontend .
#docker run -it -p 3000:5173 dictavalfrontend