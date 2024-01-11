# Recipe Book Backend :minidisc:

This application provides API services for recipe-book application.
To see the live demo you can visit s3 hosting url [here.](http://recipe-book-angular.s3-website.eu-central-1.amazonaws.com/)

## How to run in local

1. Clone repository to your local.
   <br/>

2. Be sure that all the required tables and data is created using [recipe-book-seeder](https://github.com/muratayik/recipe-book-seeder/).
   <br/>

3. Create and .env file in the root with these fields:
   <br/>

   // Next DB\_* properties will be the PostgreSQL info for local or remote database that was seeded in previous step
   DB*HOST=db_location (localhost for local installation)  
   DB_PORT=db_port (by default 5432)  
   DB_USERNAME=db_username  
   DB_PASSWORD=db_password  
   DB_DATABASE=database_name
   // Port is optional. By default port will be 3000 in local machine.
   PORT=3001
   TOKEN_SECRET=secret to create jwt tokens. A complex and long string is suggested.
   ADMIN_EMAIL_LIST=Comma separated email addresses that will have the role 'admin'. All other email will be considered 'user'.
   <br/>

4. Run `npm install` to get dependencies.
   <br/>

5. Run project via `npm run dev`
   <br/>

6. Now endpoints can be tested. Postman request export ('recipe-book.postman_collection.json') can be imported and used.
   - All meal and category endpoints can be used directly.
   - In order to use 'favorite' endpoints, a token is necessary. After successful register or login, token is saved (by postman tests) to postman environmental variables. No extra task is required for token. Only a successful login or register is enough.
   - Favorite requests use the token that was taken from login or register to authenticate request.
     <br/>

## Technologies

- Typescript
- Express.js
- dotenv (environment management)
- cors (enabling cors)
- typeorm, postgresql (database connection)
- bcrypt (hash and check passwords)
- jsonwebtoken (jwt management)
