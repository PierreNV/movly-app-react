function log(error) {
	error.stack ? console.log(error.stack) : console.table(error);
	alert(error.message);
}

const servLogger = {log}

export default servLogger;
