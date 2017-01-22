package prototipo.pepinillo;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import java.util.HashMap;
import java.util.Map;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APIsteps {
	
	private RequestSpecification request;
	private Response response;
	private Map<String,Object> cuerpo = new HashMap<>();
	
	@Before("@api_tag")
	public void beforeScenario() {
		System.out.format("Scenario API starts\n");
		RestAssured.port = Integer.valueOf(80);
		RestAssured.basePath = "/";
		RestAssured.baseURI = "http://jsonplaceholder.typicode.com/";
	}
		
	@After("@api_tag")
	public void afterScenario() {
		System.out.format("Scenario API ends\n");
	}
	
	
	@Given("a POST request with body (.*), title (.*) and userId (\\d+) is defined")
	public void a_post_request(String body, String title, int userId){
         cuerpo.put("userId", userId);
         cuerpo.put("title", title);
         cuerpo.put("body", body);
         request = given().contentType("application/json").body(cuerpo);
	}
    
    @When("^the POST request is sent$")
    public void the_post_request_is_sent() {
    	response=request.when().post("/posts");
    }

    @Then("the response's body is (.*), title is (.*) and id is (\\d+)")
    public void the_responses_body_is(String body, String title, int userId) {
    	response.then()
        .body("id",equalTo(101))
        .body("title",equalTo(title))
        .body("body",equalTo(body))
        .body("userId",equalTo(userId))
        .statusCode(201);
    }
    
    @And("^the status code is (\\d+)$")
    public void the_status_code_is(int statusCode) {
    	response.then()
        .statusCode(statusCode);
    }
    
    
   
}
