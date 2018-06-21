import { getBaseSpreadsheet } from "../ui/utils/BaseSpreadsheet";
const DRIVE_PATH = "https://www.googleapis.com/drive/v3";
const SHEETS_PATH = "https://sheets.googleapis.com/v4/spreadsheets";

function getHeaders(token) {
	return {
		"Authorization": "Bearer " + token,
		"Content-Type": "application/json"
	}
}

function appendQueryParams(url, params) {
	var first = true;
	for(var key in params) {
		const appender = (first ? "?" : "&");
		if(first) first = false;
		url += (appender + key + "=" + params[key]);
	}
	return url
}

export function Drive() {
	var token = "";

	function service() {
	}

	service._getSpreadsheetId = function(name) {
		params = { 
			q: "name=\"" + name +"\" and mimeType=\"application/vnd.google-apps.spreadsheet\"",
		};
		const url = appendQueryParams(DRIVE_PATH + "/files", params);

		return fetch(url, {
			method: "get",
			headers: getHeaders(this.token())
		}).then((res) => {
			return res.json();
		}).then((data) => {
			if(data["files"] && data["files"].length > 0) return data["files"][0].id;
			return null;
		});
	};

	// Getters and Setters
	service.token = function(_) {
		if(!arguments.length) return token;
		token = _;
		return service;
	}

	return service;
}

export function Sheets() {
	var token = "";

	function service() {
	}

	service._createBaseSpreadsheet = function() {
		const url = SHEETS_PATH;
		var body = getBaseSpreadsheet();

		return fetch(url, {
			method: "post",
			headers: getHeaders(this.token()),
			body: JSON.stringify(body)
		}).then((res) => {
			return res.json();
		}).then((data) => {
			return data["spreadsheetId"];
		});
	}


	// Getters and Setters
	service.token = function(_) {
		if(!arguments.length) return token;
		token = _;
		return service;
	}

	return service;
}
