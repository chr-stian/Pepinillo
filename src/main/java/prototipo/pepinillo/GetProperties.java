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
				
				inputStream = GetProperties.class.getResourceAsStream("/"+propFileName);
				if(inputStream==null) {
					System.out.println("ERROR "+propFileName+ " NOT FOUND!\n");
				}

				prop.load(inputStream);
				result = prop.getProperty(property);
						
			} catch (Exception e) {
				System.out.println("Exception: " + e);
			} 
			return result;
		}
			
	}