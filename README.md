## Debug your app ##

The full featured `dev/dist` tools are provided, it's easy to start debugging your app.

Just move into the created directory with the given `project name`.

Run `npm start` to start a debug web server for the project.

Open [http://localhost:8080/](http://localhost:8080/) or [live-server](https://www.npmjs.com/package/live-server) to see the playable skeleton, and have fun.


## Release your app ##

> Release means, generate output bundles by using `webpack`. It's good using the released resources as your production code.

Move the root of the created project.

Run `npm run dist` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

### Like have a try with the released app? ###

Move into `{root}/build/`

Open [http://localhost:8080](http://localhost:8080) to watch the released version


## References ##

1. [webpack](http://webpack.github.io/)
2. [es6-features](https://github.com/lukehoban/es6features)
3. [react](http://facebook.github.io/react/)
4. [material-ui](http://material-ui.com)
