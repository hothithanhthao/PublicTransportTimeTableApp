## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This project is a simple public transport React app for cheking the schedule between Eficode Oy and Kotipizza Helsinki Kruununhaka

## Technologies
Project is created with:
* React.js
* GraphQL
* Docker

## Setup
To see the user interface through browser https://timetable-app-hls.herokuapp.com/

To run this project, install it locally using npm:

```
$ cd ../timetable-app
$ npm install
$ npm start

or you can run the Docker image from the project
$ cd ../timetable-app
$ docker image build -t react:timetable .
$ docker run -it -p 3000:3000 react:timetable /bin/bash
 
