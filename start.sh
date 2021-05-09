#!/bin/bash

docker-compose -f docker/docker-compose.yml up -d --build
docker exec -ti vue-lottery-card sh -c "yarn install"