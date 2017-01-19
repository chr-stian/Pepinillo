package prototipo.pepinillo;

import static io.restassured.RestAssured.given;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class PruebaSteps {
    @Given("I have (\\d+) cukes in my belly")
    public void I_have_cukes_in_my_belly(int cukes) {
        System.out.format("Cukes: %n\n", cukes);
    }
    
    @When("^I fake the step$")
    public void i_fake_the_step() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	System.out.format("Fake!");
        given().when().get("https://www.google.es").then().statusCode(201);

    }

    @Then("^the result is fake$")
    public void the_result_is_fake() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    	System.out.format("Fake!");
    }
}