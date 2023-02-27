export const servLogger = (error) => {
	error.stack ? console.log(error.stack) : console.table(error);
	alert(error.message);
}
