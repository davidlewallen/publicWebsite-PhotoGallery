var express    = require('express');
var path       = require('path');
var browserify = require('browserify-middleware');

var app        = express();

app.use(express.static(path.join(__dirname, "../client/public")))

app.get('/app-bundle.js',
	browserify(path.join(__dirname, '../client/main.js'), {
		transform: [ [ require('babelify'), { presets: [ 'es2015', 'react' ] } ] ]
	})
);

var port = process.env.PORT || 4040;
app.listen(port)
console.log("Listening on localhost:", port);