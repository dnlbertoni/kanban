### STAGE 1: Build ###
FROM node:16-alpine AS build

ENV HOME=/usr/src/app
##RUN mkdir $HOME
WORKDIR $HOME

# Agregamos un usuario
#RUN useradd --user-group --create-home --shell /bin/false app

COPY package.json package-lock.json ./
# Instalamos angular cli en nuestra imágen
RUN npm install -g @angular/cli 

RUN npm install

COPY . .
RUN npm run build

#RUN npm cache clean

# Puerto entorno dev
EXPOSE 4200
# Puerto livereload
EXPOSE 49153
# Puerto Test
EXPOSE 9876
# Puerto e2e
EXPOSE 49152 

### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist/aston-villa-app /usr/share/nginx/html
