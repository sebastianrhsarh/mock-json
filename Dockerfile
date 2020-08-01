##Nivel 0, equipo completo de 0

FROM ubuntu:18.04

COPY . .

##Nivel 1, Node.js, construir y copila Angular

RUN apt-get update \
&& apt-get install curl -y \
&& curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh \
&& bash nodesource_setup.sh \
&& apt-get install -y nodejs -y
RUN /bin/bash -c "source ~/.bashrc"
RUN apt install build-essential -y

##Nivel 2, instalar angular y crear la app en produccion

WORKDIR /app

COPY ./ /app/

RUN npm install -g @angular/cli@latest
RUN npm install --save-dev @angular-devkit/build-angular
RUN ng config -g cli.warnings.versionMismatch false
RUN /bin/bash -c "ng build --prod"

##Nivel 3, Nginx, copila la app, lista para produccion por Nginx

RUN apt install nginx -y

COPY /dist/evaluacion /var/www/html/
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 8080;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]

RUN service nginx restart

###Instrucciones
##Este comando levanta el docker
#[sudo] docker build . -t evaluacion:latest 
##Este comando levanta la pagina en el puerto 8080 (localhost:8080)
#[sudo] docker run -d -p 8080:80 evaluacion:latest