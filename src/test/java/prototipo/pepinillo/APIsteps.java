package prototipo.pepinillo;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.number.OrderingComparison.lessThan;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.ValidatableResponse;

public class APIsteps {
	
	private ValidatableResponse json;
	private Map<String,Object> cuerpo = new HashMap<String, Object>();
	
	private StepData stepData;
	
	public APIsteps(StepData stepData) {
		this.stepData = stepData;
	}
	
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
	
	
	@Given("^a POST request with body (.*), title (.*) and userId (\\d+) is defined$")
	public void a_post_request(String body, String title, int userId){
         cuerpo.put("userId", userId);
         cuerpo.put("title", title);
         cuerpo.put("body", body);
         stepData.request = given().contentType("application/json").body(cuerpo);
	}
    
    @When("^the POST request is sent$")
    public void the_post_request_is_sent() {
    	stepData.response=stepData.request.when().post("/posts");
    }

    @Then("^the response's body is (.*), title is (.*) and userId is (\\d+)$")
    public void the_responses_bod_is(String body, String title, int userId) {
    	stepData.response.then()
        .body("id",equalTo(101))
        .body("title",equalTo(title))
        .body("body",equalTo(body))
        .body("userId",equalTo(userId));
   
    }
    
    @And("^the status code is (\\d+)$")
    public void the_status_code_is(int statusCode) {
    	json=stepData.response.then()
        .statusCode(statusCode);
    	//System.out.println(json.extract().asString());
    }
    
    @Then("^response includes the following$")
    public void response_includes_the_following(DataTable arg1){
    	List<List<String>> data = arg1.raw();
    	//System.out.println(response.asString());
    	for(List<String> element : data){		
    		
    	 if(StringUtils.isNumeric(element.get(1))){
    			json.body(element.get(0), equalTo(Integer.parseInt(element.get(1)))); 
    	 }else{
    		 json.body(element.get(0), equalTo(element.get(1)));
    	 }
    	} 	
    }
    
    @Then("^the response time is less than (\\d+) ms$")
    public void the_response_time_is_less_than_ms(Long time) {
    	stepData.response.then().time(lessThan(time));
 
    }
    
    @Given("^a GET request with id (\\d+)$")
    public void a_GET_request_with_id_id(int id) throws Throwable {
    	stepData.request = given().contentType("application/json").param("id", id);
    }
    
    @When("^the GET request is sent$")
    public void the_GET_request_is_sent() {
    	stepData.response = stepData.request.when().get("/comments");
       
    }
    
    @Then("^the email is ([^\"]*)$")
    public void the_email_is_email(String email){
    	stepData.response.then()
        .body("email", equalTo(Arrays.asList(email)));
      
    }

      
}
