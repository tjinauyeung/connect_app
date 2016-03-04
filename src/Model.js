import jQuery from 'jquery';

class Model {

	get() {
		
	}	

	post(request) {

		function checkRequest(request) {

			let thai = request.search(/thai/ig);
			let korean = request.search(/korean/ig);
			let steak = request.search(/steak/ig);
			let surprise = request.search(/surprise/ig);

			if (thai > 0) {
				sendRequest("Thai");
			} else if (korean > 0) {
				sendRequest("Korean");
			}	else if (steak > 0) {
				sendRequest("Steak");
			} else if (surprise >0 ) {
				sendRequest("Surprise");
			} else {
				jQuery('#instruction').html("I don't know what you want, please do something else");
			}

		}

		function sendRequest(argument) {
			console.log(argument);
		}	

		checkRequest(request);

	}

}

let model = new Model;

export default model;
