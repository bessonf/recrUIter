const express = require('express');
const app = express();
const static = express.static(__dirname + '/public');

const configRoutes = require('./routes');
const exphbs = require('express-handlebars');

app.use('/public', static);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

const handlebarsInstance = exphbs.create({
	defaultLayout: 'main',
	// Specify helpers which are only registered on this instance.
	helpers: {
		asJSON: (obj, spacing) => {
			if (typeof spacing === 'number') return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));

			return new Handlebars.SafeString(JSON.stringify(obj));
		}
	}
});
app.engine('handlebars', handlebarsInstance.engine);

configRoutes(app);

app.listen(3000, () => {
    console.log("Running on port: " + String(3000))
});
