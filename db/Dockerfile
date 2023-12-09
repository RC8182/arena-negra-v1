# Usar la imagen oficial de MySQL
FROM mysql:latest

# Establecer variables de entorno para la configuración de MySQL
ENV MYSQL_ROOT_PASSWORD=123456
ENV MYSQL_DATABASE=ArenaNegra
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=123456

# Copiar el script de inicialización de la base de datos en el directorio /docker-entrypoint-initdb.d
# Este script se ejecutará automáticamente durante el inicio del contenedor
COPY ./initial/init.sql /docker-entrypoint-initdb.d/

# Exponer el puerto 3306 para permitir la conexión
EXPOSE 3306

