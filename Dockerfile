FROM node:20.5.1-alpine3.18

WORKDIR /app

COPY . .

RUN chown -R node:node /app && \
chmod -R 755 /app/public

USER node
RUN npm install && \
    npm install @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion @chakra-ui/icons tailwindcss postcss autoprefixer && \
    npm rebuild --arch=x64 --platform=linux --libc=musl sharp && \
    npx tailwindcss init -p && \
    npm run build

EXPOSE 3000

CMD ["npm", "start"]

#root@ubuntuserver:/home/rc8182/dockerFolder# chmod -R 777 arena-negra/ dar permisos a la carpeta del proyecto en servidores linux!