#!/bin/bash

echo "Starting Anyiko Production Stack"

npm install
npm run migrate
npm run build
npm start
