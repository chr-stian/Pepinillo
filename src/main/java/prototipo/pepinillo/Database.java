package prototipo.pepinillo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class Database {

	Connection c = null;

	public Connection dbSetup() {

		try {
			Class.forName("org.sqlite.JDBC");
			c = DriverManager.getConnection("jdbc:sqlite:test.db");
			c.setAutoCommit(false);
		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}
		System.out.println("Opened database successfully");
		return c;
	}

	public void createTable(Connection c) {
		try {
			Statement stmt = null;
			stmt = c.createStatement();
			String sql = "CREATE TABLE COMPANY " + "(ID INT PRIMARY KEY     NOT NULL,"
					+ " NAME           TEXT    NOT NULL, " + " AGE            INT     NOT NULL, "
					+ " ADDRESS        CHAR(50), " + " SALARY         REAL)";
			stmt.executeUpdate(sql);
			sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) "
					+ "VALUES (1, 'Paul', 32, 'California', 20000.00 );";
			stmt.executeUpdate(sql);
			sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " + "VALUES (2, 'Allen', 25, 'Texas', 15000.00 );";
			stmt.executeUpdate(sql);

			sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) " + "VALUES (3, 'Teddy', 23, 'Norway', 20000.00 );";
			stmt.executeUpdate(sql);

			sql = "INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY) "
					+ "VALUES (4, 'Mark', 25, 'Rich-Mond ', 65000.00 );";
			stmt.executeUpdate(sql);

			stmt.close();
			c.commit();

		} catch (Exception e) {
			System.err.println(e.getClass().getName() + ": " + e.getMessage());
			System.exit(0);
		}
		System.out.println("Table created successfully");
	}

}
