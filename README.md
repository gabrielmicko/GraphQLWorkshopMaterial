Task 5:

Dokumentalni erosen a rethink/helper.js-t
Megirni a DB.js-t
Majd hozzáadni a resolvert




Task 1:

Create a model (src/model/file.js) which can work with JSON files. The model has 3 functions.
All of the functions should be synchrounous.
- getTalks, it should return all of the talks from talks.json
- getSpeakers, it should return all of the speakers from the speakers.json
- getTalksBySpeakerId, it takes one argument which is an ID, it should return only the talks which are equal to the given ID.


Task 2:
Writing a GraphQL server.
- Schema Speakers, Talks

Task 3:
- Add an attribute for speakers to select by name or ID.

Task 4:
- Add talks to a speaker. Meaning that if I query for speakers it will return the talks too. Add getTalksBySpeakerId.

Task 4:
- Writing  the same for db.js

Task 5:
- Adding mutation.



GraphQL Workshop details:

Please have your own laptop with npm / yarn, node, RethinkDB pre-installed.

1. What is GraphQL, why is it good?
2. Running Graphiql and writing your first schema.
3. Learning Sequelize and connecting to the RethinkDB.
4. Merging Sequelize with GraphQL.
5. Writing Mutations.

TODO:
- Parameterezett lekerdezes
- Beinjectalas
- 2 x 2 model class keszitese egyik natur js masik kapcsolodik a rethinkdb-hez
- Rethink szeparalasa
- 5 db feladat es 10db branch letrehozasa
- Feladat leirasa
- Tesztek irasa minden feladathoz

# How did I get the speakers

Inject jQuery


var speakers = [];

jQuery('body .zoe-effect').each(function(key, element){
	speakers.push({
		'bio': $(element).find('.bio').text(),
		'photo': $(element).find('.waves-block').css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, ''),
		'name': $(element).find('.name').text(),
		'position': $(element).find('.position').text(),
		'twitter': ($(element).find('.icon-twitter').length) ? $(element).find('.icon-twitter').parent().attr('href') : '',
		'facebook': ($(element).find('.icon-facebook').length) ? $(element).find('.icon-facebook').parent().attr('href') : '',
		'linkedin': ($(element).find('.icon-linkedin').length) ? $(element).find('.icon-linkedin').parent().attr('href') : '',
		'github': ($(element).find('.icon-github').length) ? $(element).find('.icon-github').parent().attr('href') : ''
	});
});

console.log(JSON.stringify(speakers))

# How did I get the talks

var talks = [];

jQuery('body .people-modal').each(function(key, element){
	if($(element).find('.name').clone().children().remove().end().text().trim().length){
        talks.push({
            'title': $(element).find('h4').text(),
            'theme': $(element).find('.theme-description').text(),
            'lang': $(element).find('.theme-metadata').eq(0).clone().children().remove().end().text(),
            'complexity': $(element).find('.theme-metadata').eq(1).clone().children().remove().end().text(),
			      'name': $(element).find('.name').clone().children().remove().end().text().trim(),
        });
	}
});

console.log(JSON.stringify(talks));
