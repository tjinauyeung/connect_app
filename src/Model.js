import jQuery from 'jquery';

class Model {

	get() {

	}	

	post(request) {

		let thai = request.search(/thai/ig);
		let korean = request.search(/korean/ig);
		let steak = request.search(/steak/ig);

		if (thai > 0) {
				sendRequest("Thai");
			}
		if (korean > 0) {
				sendRequest("Korean");
			}		
		if (steak > 0) {
				sendRequest("Steak");
			}

		function sendRequest(argument) {
			console.log(argument);
		}	

	}

}

let model = new Model;

export default model;
