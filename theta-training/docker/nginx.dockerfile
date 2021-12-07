FROM nginx
MAINTAINER João Pedro Braga
COPY /public /var/www/public
COPY /docker/config/nginx.conf /etc/nginx/nginx.conf
RUN chmod 755 -R /var/www/public
EXPOSE 1337 443
ENTRYPOINT ["nginx"]
# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]
