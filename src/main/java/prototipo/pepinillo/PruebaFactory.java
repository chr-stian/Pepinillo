package prototipo.pepinillo;

import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class PruebaFactory {
	
	public static void main(String[] args) {
		
		GenericSteps steps;
		GetProperties properties = new GetProperties();
		Statement stmt = null;
		Database db = new Database();
		Connection c = db.dbSetup();
		db.createTable(c);

		try {
			stmt = c.createStatement();
			ResultSet rs = stmt.executeQuery("SELECT * FROM COMPANY;");
			while (rs.next()) {
				int id = rs.getInt("id");
				String name = rs.getString("name");
				int age = rs.getInt("age");
				String address = rs.getString("address");
				float salary = rs.getFloat("salary");
				System.out.println("ID = " + id);
				System.out.println("NAME = " + name);
				System.out.println("AGE = " + age);
				System.out.println("ADDRESS = " + address);
				System.out.println("SALARY = " + salary);
				System.out.println();
			}
			rs.close();

			stmt.executeUpdate("DROP TABLE COMPANY");
			stmt.close();
			c.commit();
			c.close();
		} catch (SQLException e1) {

			e1.printStackTrace();
		}
	    
		
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
