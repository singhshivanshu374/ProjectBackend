1) docker desktop installation
2) node js software
3) vs code -> extension -> docker install
4) open any folder in vs code with lowercase name
5) create Dockerfile file inside that folder
6) create shivanshu.js
7) inside that shivanshu.js file write some console commands like console.log("Name: Shivanshu "); and copy that for some data
8) inside dockerfile
      FROM node.alpine
      COPY . /<folder_name>
      CMD node /<folder_name>/shivanshu.js
9) then goto terminal goto same folder which is creates using cd
10) docker --version
11) install nodejs -> then run node shivanshu.js
12)  docker build -t <folder_name>
13)  then docker image is created 
