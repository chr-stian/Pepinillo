package prototipo.pepinillo;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:features", 
//tags = {"@api_tag"},
plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-report.json"})
public class RunCukesTest {
}