package prototipo.pepinillo;

import java.io.IOException;

public class PruebaFactory {
	
	public static void main(String[] args) {
		
		GenericSteps steps;
		GetProperties properties = new GetProperties();
		
		try {	
			boolean backend =  (properties.getProperty("backend")
					.toLowerCase().equals("true"))? true : false;
		if(backend){
			steps = new BackendSteps();
		}else{
			steps = new FrontendSteps();
		}
		
		steps.login();
		steps.doSomething();
		steps.logout();
		
		} catch (IOException e) {
			e.printStackTrace();
		}
			
	}
	
}
