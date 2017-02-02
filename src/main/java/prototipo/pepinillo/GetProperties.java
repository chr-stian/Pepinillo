package prototipo.pepinillo;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class GetProperties {

	String result = "";
	InputStream inputStream;
	
		public String getProperty(String property) throws IOException{
					
			try {
				Properties prop = new Properties();
				String propFileName = "config.properties";
				InputStream inputStream;
				
				//inputStream = new FileInputStream("absolute//path//to//file");
				//Eclipse: Run - Run Configurations - Java Application - Classpath
				//Advanced - Add folders - pepinillo
				inputStream = GetProperties.class.getClassLoader().getResourceAsStream("src/test/resources/"+propFileName);
				if(inputStream==null) {
					System.out.println("NOT FOUND\n");
				}

				prop.load(inputStream);
				result = prop.getProperty(property);
						
			} catch (Exception e) {
				System.out.println("Exception: " + e);
			} 
			return result;
		}
			
	}