# ECommerce-App
An ecommerce app that will use node.js to have a data store for users, and products and be ran on an express server.

This app will later be used to create an updated and more stable / efficient version of my designer clothes website. It currently is using node to run the backend server and database, but using a data store is not the best option for a professional enviorment because it is not so efficient as other alternatives, also there are issues with having multiple versions of the data store open. It will error if the file is open twice on the same computer, and if multiple programmers were using the data store, each version would be different because it is saved locally and not to a server.

This project is kinda ugly, becuase they primary focus of this project was using javascript and node js to create an app running off of an express server with a database, but i plan to use this foundation later to hopefully create a more pretty eCommerceApp that is somewhat resembling the designer site i have in another repo.

this project taught me a lot about the different type of requests and what they are used for and how to use them giving me a better understanding on the backend, while not my main focus I belive having some knowledge on the backend will help me when creating bigger projects in the future. It also taught me the basics of node js and how to be resourceful using the node documentation for all of the differnt middlewares, and modules.

In order to run this application open the directory in node and type in "npm run dev" and navigate to localhost:3000/
