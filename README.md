# ChatGPT API Provider

## GET STARTED

To start the docker containers you need to run docker engine software then exec the following command in the ROOT directory of the project

`docker compose -f docker-compose.yml up --build`

use the -d to build the containers without logs

`docker compose -f docker-compose.yml up --build -d`

to show the logs of a specific container you can run

`docker logs [container_name] --follow`

example
`docker logs backend-service --follow`

to stop the containers you can `ctrl + c` inside the terminal or run the following command in the ROOT directory of the project

`docker compose -f docker-compose.yml down`

to install a package in your package.json run the following commands
`docker exec -it backend-service npm install [package-name]`

sometimes you may also install the package and its types locally in you project folder so run `npm install [package-name]`in ./backend

## DATABASE CONNEXION

use the string `mongodb://[DB_USER]:[DB_PASSWORD]@localhost:[DB_PORT]` to access you database in mongoDB Compass, replace the variables between brackets with the appropriate values from .env

## UTILS

use `docker ps` to list the running containers
user `docker stop [container-name] to stop a spécific container`

## HEALT CHECK

When you run the docker compose command, if all containers are up and running then type http://localhost:3000 in you browser, you should get "OK" as response
