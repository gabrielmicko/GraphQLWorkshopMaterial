# How did I get the speakers
Inject jQuery (copy paste the code to the console)

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
