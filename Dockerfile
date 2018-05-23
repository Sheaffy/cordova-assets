FROM node:alpine
RUN apk --update add graphicsmagick && \
    rm -rf /var/cache/apk/*

WORKDIR /src
COPY package*.json ./
RUN npm install

COPY src/ ./

VOLUME ["/app"]

ENTRYPOINT ["node", "/src/index.js"]
