package prototipo.pepinillo;

public class FrontendSteps implements GenericSteps{

	@Override
	public void login() {
		System.out.println("login() frontend\n");
	}

	@Override
	public void logout() {
		System.out.println("logout() frontend\n");	
	}

	@Override
	public void doSomething() {
		System.out.println("doSomething() frontend\n");
	}

}
