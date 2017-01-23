Feature: First API test

	@api_tag

	Scenario: Random scenario
	Given a POST request with body esto es el cuerpo, title esto es el titulo and userId 8 is defined
	When the POST request is sent
	Then the response's body is esto es el cuerpo, title is esto es el titulo and userId is 8
	And the status code is 201
	And response includes the following
	| title 	 		| esto es el titulo		|
	| body				| esto es el cuerpo		|
	| userId	 	 	| 8						|
	| id				| 101					|
	
	Scenario: time measuring
	Given a POST request with body esto es el cuerpo, title esto es el titulo and userId 8 is defined
	When the POST request is sent
	Then the response time is less than 800 ms