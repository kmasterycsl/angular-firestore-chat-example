FROM node:10.16.3-alpine
WORKDIR /angular-firestore-demo
COPY package.json /angular-firestore-demo/package.json
RUN npm install
RUN npm install -g @angular/cli
COPY . /angular-firestore-demo
CMD ng serve --host 0.0.0.0
