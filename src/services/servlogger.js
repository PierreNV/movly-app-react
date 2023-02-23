function log(error) {
	error.stack ? console.log(error.stack) : console.log(error.message);
	alert(error.message);
}

const servLogger = {log}

export default servLogger;
