import jQuery from 'jquery';

class Model {

	get() {

	}	

	post(request, onDone) {

		function checkRequest(request, onDone) {

			let thai = request.search(/thai/ig);
			let padthai = request.search(/pad thai/ig);
			let korean = request.search(/korean/ig);
			let kimchi = request.search(/kimchi/ig);
			let steak = request.search(/steak/ig);
			let grill = request.search(/gril/ig);
			let french = request.search(/french/ig);
			let escargots = request.search(/escargots/ig);
			let foigras = request.search(/foi gras/ig);
			let spaghetti = request.search(/spaghetti/ig);
			let pizza = request.search(/pizza/ig);
			let italian = request.search(/italian/ig);
			let chinese = request.search(/chinese/ig);
			let dimsum = request.search(/dimsum/ig);
			let wok = request.search(/wok/ig);
			let sushi = request.search(/sushi/ig);
			let ramen = request.search(/ramen/ig);
			let japanese = request.search(/japanese/ig);

			if (thai >= 0 || padthai >= 0 ) {
				sendRequest("thai", onDone);
			} else if (korean >= 0 || kimchi >= 0) {
				sendRequest("korean", onDone);
			} else if (steak >= 0 || grill >= 0) {
				sendRequest("steak", onDone);
			}	else if (escargots >= 0 || french >= 0 || foigras >= 0) {
				sendRequest("french", onDone);
			} else if (spaghetti >= 0 || pizza >= 0 || italian >= 0 ) {
				sendRequest("italian", onDone);
			} else if (chinese >= 0 || dimsum >= 0 || wok >= 0 ) {
				sendRequest("chinese", onDone);
			} else if (japanese >= 0 || sushi >= 0 || ramen >= 0 ) {
				sendRequest("japanese", onDone);
			} else {
				jQuery('#requestnotfound').html(
					"Can't help you with that.. Try something else!");
			}

		}

		function sendRequest(tag, onDone) {
			onDone(tag);
		}	

		checkRequest(request, onDone);

	}

}

let model = new Model;

export default model;
