import jQuery from 'jquery';

class Model {

	get() {

	}	

	post(request, onDone) {

		function checkRequest(request, onDone) {

			let thai = request.search(/thai/ig);
			let korean = request.search(/korean/ig);
			let steak = request.search(/steak/ig);
			let surprise = request.search(/surprise/ig);

			if (thai >= 0) {
				sendRequest("Thai", onDone);
			} else if (korean >= 0) {
				sendRequest("Korean", onDone);
			}	else if (steak >= 0) {
				sendRequest("Steak", onDone);
			} else if (surprise >= 0 ) {
				sendRequest("Surprise", onDone);
			} else {
				jQuery('#requestnotfound').html(
					"Can't help you with that.. Try something else!");
			}

		}

		function sendRequest(argument, onDone) {
			onDone(argument);
		}	

		checkRequest(request, onDone);

	}

}

let model = new Model;

export default model;
