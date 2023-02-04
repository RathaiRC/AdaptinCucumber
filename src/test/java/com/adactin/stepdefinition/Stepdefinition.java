package com.adactin.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import com.adactin.runner.RunnerClass;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition {
	public static WebDriver driver=RunnerClass.driver;
	@Given("^user Launch The Adactin Application$")
	public void user_Launch_The_Adactin_Application() throws Throwable { 
		driver.get("https://adactinhotelapp.com/");
	
	}

	@When("^user Enter The Username In The Username Field$")
	public void user_Enter_The_Username_In_The_Username_Field() throws Throwable {
		WebElement username = driver.findElement(By.id("username"));
		username.sendKeys("Rathai1996");
	}

	@When("^user Enter The Password In The Password Field$")
	public void user_Enter_The_Password_In_The_Password_Field() throws Throwable {
		WebElement pwd = driver.findElement(By.id("password"));
		pwd.sendKeys("7639447716@Rc");
	}

	@Then("^user Click The Login Button And It Navigates To Search Hotel Webpage$")
	public void user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Webpage() throws Throwable {
		WebElement login = driver.findElement(By.id("login"));
		login.click();
		
	}

	

	@When("^user Select The Location In The Location Field$")
	public void user_Select_The_Location_In_The_Location_Field() throws Throwable {
		WebElement location = driver.findElement(By.id("location"));
		Select a = new Select(location);
		a.selectByValue("Sydney");
		
	    
	}

	@When("^user Select The Hotel In Select The Hotel Field$")
	public void user_Select_The_Hotel_In_Select_The_Hotel_Field() throws Throwable {
		WebElement hotel = driver.findElement(By.name("hotels"));
		Select b = new Select(hotel);
		b.selectByValue("Hotel Sunshine");
	}

	@When("^user Select The Room Type In Select The Room Type Field$")
	public void user_Select_The_Room_Type_In_Select_The_Room_Type_Field() throws Throwable {
		WebElement room = driver.findElement(By.name("room_type"));
		Select c = new Select(room);
		c.selectByValue("Super Deluxe");
	}

	@When("^user Select The Number Of Room In Select The Number Of Room Field$")
	public void user_Select_The_Number_Of_Room_In_Select_The_Number_Of_Room_Field() throws Throwable {
		WebElement num = driver.findElement(By.id("room_nos"));
	    Select d = new Select(num);
	    d.selectByValue("3");
	    Thread.sleep(2000);
	}

	@When("^user Enter The Date_In Date In The Date_In Field$")
	public void user_Enter_The_Date_In_Date_In_The_Date_In_Field() throws Throwable {
		WebElement indate = driver.findElement(By.name("datepick_in"));
	    indate.clear();
	    indate.sendKeys("12/01/2023");
	 
	}

	@When("^user Enter The Date_Out Date In The Date_Out Field$")
	public void user_Enter_The_Date_Out_Date_In_The_Date_Out_Field() throws Throwable {
		WebElement outdate = driver.findElement(By.name("datepick_out"));
	    outdate.clear();
	    outdate.sendKeys("13/01/2023");
	
	}

	@When("^user Select The Number Of Adults In The Number Of Adults Field$")
	public void user_Select_The_Number_Of_Adults_In_The_Number_Of_Adults_Field() throws Throwable {
		WebElement adult = driver.findElement(By.id("adult_room"));
		Select e = new Select(adult);
		e.selectByValue("1");
	}

	@When("^user Select The Number Of Childrens In The Number Of Childrens Field$")
	public void user_Select_The_Number_Of_Childrens_In_The_Number_Of_Childrens_Field() throws Throwable {
		WebElement child = driver.findElement(By.id("child_room"));
		Select f = new Select(child);
		f.selectByValue("0");
		Thread.sleep(2000);
	}

	@Then("^user Click The Submit Button And It Navigate To Select Hotel Webpage$")
	public void user_Click_The_Submit_Button_And_It_Navigate_To_Select_Hotel_Webpage() throws Throwable {
		WebElement search = driver.findElement(By.id("Submit"));
		search.click();
	}

	

	@When("^user Click The Select Button$")
	public void user_Click_The_Select_Button() throws Throwable {
		WebElement Radio = driver.findElement(By.name("radiobutton_0"));
		Radio.click();
		Thread.sleep(2000);
	}

	@Then("^user Confirm To Continue And It Navigates To Book Hotel Webpage$")
	public void user_Confirm_To_Continue_And_It_Navigates_To_Book_Hotel_Webpage() throws Throwable {
		WebElement cont = driver.findElement(By.id("continue"));
		cont.click();
	}

	

	@When("^user Enter The First Name In The First Name Field$")
	public void user_Enter_The_First_Name_In_The_First_Name_Field() throws Throwable {
		WebElement fname = driver.findElement(By.name("first_name"));
		fname.sendKeys("Rathai");
		
	}

	@When("^user Enter The Last Name In The Last Name Field$")
	public void user_Enter_The_Last_Name_In_The_Last_Name_Field() throws Throwable {
		WebElement lname = driver.findElement(By.name("last_name"));
		lname.sendKeys("Chellamuthu");
	}

	@When("^user Enter The Billing Address In The Billing Address Field$")
	public void user_Enter_The_Billing_Address_In_The_Billing_Address_Field() throws Throwable {
		WebElement BillAddress = driver.findElement(By.name("address"));
		BillAddress.sendKeys("3/25,R.M.Colony,Dindigul");
	}
	@When("^user Enter The Card Number$")
	public void user_Enter_The_Card_Number() throws Throwable {
		WebElement Ccard = driver.findElement(By.id("cc_num"));
		Ccard.sendKeys("908070605040302010");
	}
	@When("^user Enter The Credit Card Type In The Credit Card Type Field$")
	public void user_Enter_The_Credit_Card_Type_In_The_Credit_Card_Type_Field() throws Throwable {
		WebElement ctype = driver.findElement(By.id("cc_type"));
		Select type = new Select(ctype);
		type.selectByValue("VISA");
		
	}

	@When("^user Enter The Card Expiry Date In The Card Expiry Date Field$")
	public void user_Enter_The_Card_Expiry_Date_In_The_Card_Expiry_Date_Field() throws Throwable {
		WebElement month = driver.findElement(By.id("cc_exp_month"));
		Select m = new Select(month);
		m.selectByValue("1");
		WebElement year = driver.findElement(By.id("cc_exp_year"));
		Select y = new Select(year);
		y.selectByValue("2022");
		
	}
	@When("^user Enter The CVV Number$")
	public void user_Enter_The_CVV_Number() throws Throwable {
		WebElement cvv= driver.findElement(By.id("cc_cvv"));
		cvv.sendKeys("311");
	}

	@Then("^user Click The Book Now Button And It Navigates To Booking Confirmation Webpage$")
	public void user_Click_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation_Webpage() throws Throwable {
	WebElement submit = driver.findElement(By.id("book_now"));
	submit.click();
	}

	

	

	@Then("^user Logout From The Adactin Application$")
	public void user_Logout_From_The_Adactin_Application() throws Throwable {
		WebElement logout = driver.findElement(By.xpath("(//a[@href])[4]"));
		logout.click();
	}
}
