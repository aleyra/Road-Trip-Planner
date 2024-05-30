FROM node:20

WORKDIR /app

COPY ./ /app/

RUN ls -la

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]