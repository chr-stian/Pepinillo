package prototipo.pepinillo;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;

public class APIsteps {
	
	
	@Before
	public void beforeScenario() {
		System.out.format("Scenario starts\n");
		RestAssured.port = Integer.valueOf(80);
		RestAssured.basePath = "/";
		RestAssured.baseURI = "http://jsonplaceholder.typicode.com/";
	}
		
	@After
	public void afterScenario() {
		System.out.format("Scenario ends\n");
	}
	
	
    @Given("^a$")
    public void a() {
       
    }
    
    @When("^b$")
    public void b() {
    	
    }

    @Then("^c$")
    public void c() {
    }

}
