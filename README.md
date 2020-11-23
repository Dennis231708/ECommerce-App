# ECommerce-App
An ecommerce app that will use node.js to have a data store for users, and products and be ran on an express server.

This app will later be used to create an updated and more stable / efficient version of my designer clothes website. It currently is using node to run the backend server and database, but using a data store is not the best option for a professional enviorment because it is not so efficient as other alternatives, also there are issues with having multiple versions of the data store open. It will error if the file is open twice on the same computer, and if multiple programmers were using the data store, each version would be different because it is saved locally and not to a server.
