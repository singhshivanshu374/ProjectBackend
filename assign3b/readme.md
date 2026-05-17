Steps
In your assignment folder 
create server.js
create public folder and inside it create index.html

and then run commands in following order

npm install mongoose
npm init -y
npm install express
create .env file with mongodb URL in it and make sure mongodb compass cluster is connected
npm install dotenv
node server.js

Open Postman and create a POST request to http://localhost:3000/api/users.

Add Data: In the "Body" tab, select raw and JSON, then paste:
JSON

{ "name": "Abhinav Singh", "email": "abhinav@ait.edu" }

Send: Click Send. You should see the user returned with an _id.