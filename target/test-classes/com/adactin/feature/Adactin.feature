Feature: Hotel Booking in Adactin Application


Scenario: Uaser login the Adactin Application
Given user Launch The Adactin Application
When user Enter The Username In The Username Field
And user Enter The Password In The Password Field
Then user Click The Login Button And It Navigates To Search Hotel Webpage


Scenario: User Search The Hotel

When user Select The Location In The Location Field
And user Select The Hotel In Select The Hotel Field
And user Select The Room Type In Select The Room Type Field
And user Select The Number Of Room In Select The Number Of Room Field
And user Enter The Date_In Date In The Date_In Field
And user Enter The Date_Out Date In The Date_Out Field 
And user Select The Number Of Adults In The Number Of Adults Field
And user Select The Number Of Childrens In The Number Of Childrens Field
Then user Click The Submit Button And It Navigate To Select Hotel Webpage

Scenario: User Select The Hotel In The Select Hotel WebPage

When user Click The Select Button 
Then user Confirm To Continue And It Navigates To Book Hotel Webpage

Scenario: User Book The Hotel From Webpage
When user Enter The First Name In The First Name Field
And user Enter The Last Name In The Last Name Field
And user Enter The Billing Address In The Billing Address Field
And user Enter The Card Number 
And user Enter The Credit Card Type In The Credit Card Type Field
And user Enter The Card Expiry Date In The Card Expiry Date Field
And user Enter The CVV Number
Then user Click The Book Now Button And It Navigates To Booking Confirmation Webpage

Scenario: User Logout From The Adactin Webpage


Then user Logout From The Adactin Application