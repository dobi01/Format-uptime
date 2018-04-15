// jshint esversion: 6

const formatDate = (timeInSeconds) => {
	let seconds = Math.floor(timeInSeconds),
			minutes = Math.floor(seconds / 60),
			hours = Math.floor(minutes / 60);
	
	if (timeInSeconds == null) {
		return `0 s`;
		
	} else if (seconds > 3600) {
		seconds = seconds % 60; 
		minutes = minutes % 60;

		if (seconds == 0 && minutes == 0) {
			return `${hours} h`;

		} else if (minutes == 0) {
			return `${hours} h ${seconds} s`;

		} else if (seconds == 0) {
			return `${hours} h ${minutes} m`;
		}

		return `${hours} h ${minutes} m ${seconds} s`;

	} else if (seconds > 60) {
		seconds = seconds % 60; 

		if (seconds == 0) {
			return `${minutes} m`;
		}

		return `${minutes} m ${seconds} s`;
	}

	return `${timeInSeconds} s`;
};

module.exports = formatDate;
