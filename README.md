# work-time-tracker
Time tracking JIRA tickets is time consuming. This solution eliminates need to create excel documents to keep track of time. Additionally, its very use case specific.
I use this help me automate in creating my End of Day status messages while I am remote interning at a company. Disclaimer: This solution is in no way associated with the company.

## Project Structure:
 - `./database` 
    - contains the sql statements to build the database tables (MariaDB)
 - `./server` 
    - contains the api endpoints for the server (ExpressJS) to connect to the database
 - `./client` 
    - contains web application (React + antd) that will be served to users

## Building Project:
Ensure you have nodeJS installed on your system.
 - Creating database
    - Install MariaDB on your system
    - run `./database/initializeDev.sql` to initialize database in dev environment.
 - Creating Server
    - `cd ./server`
    - `npm i`
    - Create a copy of the `template.env` and place it in your `./server` file named as `.env`
    - Fill in fields in `./server/.env`
    - `node app.js` to run the server
 - Creating Front end
    - `cd ./client`
    - `npm i`
    - `npm run start` to get started on local environment
    - `npm run build` to build files to server
