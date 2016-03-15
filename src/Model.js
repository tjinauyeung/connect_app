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
			let spaghetti = request.search(/spaghetti/ig);
			let surprise = request.search(/surprise/ig);

			if (thai >= 0 || padthai >= 0 ) {
				sendRequest("thai", onDone);
			} else if (korean >= 0 || kimchi >= 0) {
				sendRequest("korean", onDone);
			}	else if (steak >= 0) {
				sendRequest("steak", onDone);
			} else if (surprise >= 0 ) {
				sendRequest("surprise", onDone);
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
