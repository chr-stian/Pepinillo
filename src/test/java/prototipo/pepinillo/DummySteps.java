package prototipo.pepinillo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DummySteps {
    @Given("^I have (\\d+) cukes in my belly$")
    public void i_have_cukes_in_my_belly(int cukes) {
        System.out.format("Cukes: %d\n", cukes);
    }
    
    @When("^I fake the step$")
    public void i_fake_the_step() {
    	System.out.format("Fake When step!\n");
    }

    @Then("^the result is fake$")
    public void the_result_is_fake() {
    }
}