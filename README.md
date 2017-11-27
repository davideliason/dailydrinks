# daily drinks
## July 17, 2017
### [David Eliason](http://www.deliason.com)
#### MERN app
Description:
Express is used to both act as a API server serving files and routes, but also serves the react views. When express is first spun up, at localhost:5000, drinks can be added to the database through the form. The Express server also serves the persistent data values from mongodb via proxy to the react app, which are then used to set state within the parent component. This is a preliminary approach to unidirectional data flow without using flux or redux. These drink values are then displayed in react.

[Return to Portfolio](https://davideliason.github.io/)

To Use:
1. Clone the repo
````
$ git clone https://github.com/davideliason/dailydrinks
````
2. Change into that directory
````
$ cd dailydrinks
````
3. in first terminal tab, spin up the Express server
````
$ npm start
````
4. in a second terminal tab, navigate to the client folder and spin up react
````
$ cd client
$ yarn start
````
5. If you open up a browser to 'localhost:5000/samplePostForm' you can add drinks
6. In another broswer window, you can go to 'localhost:3000' to view the react app
7. You can also go to [Heroku](https://dailydrinks-mern.herokuapp.com/) to see live

![Express Drink Input](./express_server_form_input.png?raw=true "Form Input")
![Live Heroku View](./live_heroku_view.png?raw=true "Heroku")

[Return to Portfolio](https://davideliason.github.io/)