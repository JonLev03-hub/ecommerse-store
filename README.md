# Outdoor Market Store

This is a concept project for a storefront build on the MERN stack. This project is connected to the [Ecommerse-Api](https://github.com/JonLev03-hub/ecommerse-api) project that is also located inside of my github. 

This is designed to be an example ecommerese store selling outdoor exploration goods. This website features product browsing, product filtering, user authentication, cart building, and payment processing. 

# Features 

## Rest API [Link](https://github.com/JonLev03-hub/ecommerse-api)
This project was built with the MERN Stack so the back end was created with Node.js and Express.js. This was extremely easy to use and since I had been working on the project by myself it was nice not needing to switch between languages when jumping from the front end to the back end development. 

## User Authentication
User authentication was done inside of the back end, passwords were encrypted with crypto.js, and then stored inside of MongoDB.

## State Management 
State management was all done with redux.

## Payment Processing
Payment processing was done with stripe as it was extremely easy to integrate into the front end and back end of the application. 

## Data Storage
Because this is an online store the data is mroe object based instead of tabular so for the database I went with a NoSQL option, MongoDB. This was added to the backedn API with mongoose. 

All images were stored inside of github for this project instead of an AWS bucket or simmilar service because this is not a production site, and budget was very low. In a commercial application it would be an easy switch as connecting to images in a bucket would be as simple as switching the links stored inside of the database. 

# Future improvements 

As stated in the API repository one major improvement that needs to be done if this was a production site would be to be hashing the passwords with salt instead of encryption. 

Along with that it would be nice to update the user interface with a more user friendly design and add some more filters and caregories for products. 
