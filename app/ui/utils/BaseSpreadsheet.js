import Constants from "./Constants";

/* Structure of a new spreadsheet */
export function getBaseSpreadsheet() {
	return {
		"properties": {
			"title": Constants.BASE_SPREADSHEET_TITLE
		},
		"sheets": [
			{
				"properties": {
					"title": "Data"
				},
				"data": [
					{
						"rowData": [{
							"values": [
								{
									"userEnteredValue": {
										"stringValue": "Squat"
									}
								},
								{
									"userEnteredValue": {
										"stringValue": "Deadlift"
									}
								},
								{
									"userEnteredValue": {
										"stringValue": "Bench Press"
									}
								},
								{
									"userEnteredValue": {
										"stringValue": "Pause Squat"
									}
								},
								{
									"userEnteredValue": {
										"stringValue": "Pause Deadlift"
									}
								},
								{
									"userEnteredValue": {
										"stringValue": "Spoto Press"
									}
								}
							]
						},
							{
								"values": [
									{
										"userEnteredValue": {
											"numberValue": 0
										}
									},
									{
										"userEnteredValue": {
											"numberValue": 0
										}
									},
									{
										"userEnteredValue": {
											"numberValue": 0
										}
									},
									{
										"userEnteredValue": {
											"numberValue": 0
										}
									},
									{
										"userEnteredValue": {
											"numberValue": 0
										}
									},
									{
										"userEnteredValue": {
											"numberValue": 0
										}
									}
								]
							}]
					}]
			}]
	}

}
