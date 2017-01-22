Feature: First API test

	@api_tag

	Scenario: Random scenario


	Given a POST request with body esto es el cuerpo, title esto es el titulo and userId 8 is defined
	When the POST request is sent
	Then the response's body is esto es el cuerpo, title esto es el titulo and id is 8
	And the status code is 200