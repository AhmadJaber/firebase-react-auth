### React Authentication With Firebase And Routing
Authentication is crucial for nearly every application. It can also be incredibly difficult to create a good authentication solution. This is where firebase comes in. Firebase makes it incredibly easy to create a secure authentication solution.

##### This is a small project how to handle firebase authentication with -
- React
- Firebase
- react-router-dom

**Created two firebase environment one for development and one for production, which will make my site more secure. This is because in firebase there is option about `authorized domains`, where by default `localhost` is enabled. But for our `production version` we delete the `localhost` sothat no can create malicious accounts locally.**

##### Set-up a file that will contain all the firebase-config file -
- Easy way to do that in React is, setup an .env.local file,
- This will have all of our local environment variables, which we don't want them pushed to our server
- Because i don't want them inside my version control.