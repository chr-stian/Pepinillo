package prototipo.pepinillo;

public class BackendSteps implements GenericSteps{

	@Override
	public void login() {
		System.out.println("login() backend\n");
	}

	@Override
	public void logout() {
		System.out.println("logout() backend\n");	
	}

	@Override
	public void doSomething() {
		System.out.println("doSomething() backend\n");
	}

}
