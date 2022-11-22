# Runs while building the image.
FROM node:14-alpine
COPY . .
RUN npm install --silent

ARG REACT_APP_API_ENDPOINT
ARG REACT_APP_MAP_KEY

RUN npm run build
RUN npm install -g serve

ARG PORT
ENV ENV_PORT=$PORT

# Runs when the container is started.
EXPOSE $ENV_PORT
CMD serve -l $ENV_PORT -s build
