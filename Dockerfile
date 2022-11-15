FROM nginx:1.17.1-alpine
EXPOSE 4200
COPY /dist/mini-twitter-frontend /usr/share/nginx/html
