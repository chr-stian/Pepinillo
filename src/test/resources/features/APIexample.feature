Feature: First API test

	@api_tag

	Scenario: post request with table scenario
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
	Then the response time is less than 8000 ms
	
	Scenario Outline: get request with scenario outline
	Given a GET request with id <id>
	When the GET request is sent
	Then the email is <email>
	
	Examples: 

	| id 	 		| email						|
	| 1				| Eliseo@gardner.biz		|
	| 2	 	 		| Jayne_Kuhic@sydney.com	|
	| 3				| Nikita@garfield.biz		|
	 