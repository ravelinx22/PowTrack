export function getTimestamp() {
	const date = new Date();
	const timestamp = date.toDateString();
	return timestamp;
}
