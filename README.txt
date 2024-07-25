First We Need to Import The Folder in to Microsoft Visual Studio
and Open the folder

> Open Terminal and type " npm run server " //This is command is run the Project

> task 1

>To Create ProductSchema 
	>ProductSchema Attributes: (ProductID, ProductName, Price, Description)


#>To Insert the Value 
	>To Select the New HTTP server
	>To Select The "Post" method and Enter the URL : http://localhost:4000/createproduct
	>To Select The Body --> Select the "raw" --> "JSON" and type
	{
    	"ProductId": 1,
    	"ProductName":"Tata Salt",
    	"Price": 20,
   	 "Description": "Tata Salt Iodised Crystal Salt is sourced from the sea, is solar evaporated and hygienically packed"
	}
	>And Click the Send Button
	>To Get Message "Product Add Successfully"

#>To Retrieve The All Products in the Table
	>To Select the "Get" Method and Enter the URL : http://localhost:4000/products
	>To Click the Send Button
	>And Get the All Product Value

#>To Retrieve the Particular Product Id
	>To Select the "Get" Method and Enter the URL : http://localhost:4000/products/:id
	>and Select the "Header" option and Add Key is "Content-Type" and Value is "Application/json"
	>and Select the Body --> Select the "Raw" --> "JSON" 
	{
		"ProductId":1
	}
	>and select the Send Button
	>To Retrieve the id 1 Product data

#>To Update the Particular Product Details
	>To Select the "Patch" Method and Enter the URL : http://localhost:4000/products/1
	>and Select the Body --> Select the "Raw" --> "JSON" 
	{
   	 "ProductId" : 3,
    	"ProductName" : "Ashirvada Salt",
    	"Price" : 55,
    	"Description" : "Iodised Crystal Salt is sourced from the sea, is solar evaporated and hygienically packed"
	}
	>and select the send Button
	>To Succesfully Update the Value and Table

#>To Delete the Particular Product 
	>To Select the "Delete" Method and Enter the URL : http://localhost:4000/products/3
	>and select the send Button
	>To Succesfully Delete the Value and Table

> task 2

#>To Create User Schema
	>User Schema (name, email, password, phonenumber)

#>To Create the user in the Signup page
	>To Select The "Post" method and Enter the URL : http://localhost:4000/signup
	>To Select The Body --> Select the "raw" --> "JSON" and type
	{
    	"name": "Pandi",
    	"email":"peswaran40@yopmail.com",
    	"password": "User@123",
   	 "phonenumber": 1234567890
	}
	>And Click the Send Button
	>To Get Message "User Add Successfully"

#>To Login the User Page
	>To Select The "Post" method and Enter the URL : http://localhost:4000/login
	>To Select The Body --> Select the "raw" --> "JSON" and type
	{
    	"email":"peswaran40@yopmail.com",
    	"password": "User@123",
	}
	>And Click the Send Button
	>To Get Message "Login in Successfully" and get the Token For the Authorization

#>To Routes The Protected Pages (Profile / setting)
	>To Select The "Post" method and Enter the URL : http://localhost:4000/profile
	>Token is Expiry within 15 mins after Protected Page Not allowed to visit

> task 3

#> Data Fetching and in-memory cache (Using Free Api)
	>To Select The "Get" method and Enter the URL : http://localhost:4000/external	
	>To View The Cache Memory "Get" Method and Enter the URL: http://localhost:4000/show-cache

> task 4

#>To Create a User 
	>To Select The "Post" method and Enter the URL : http://localhost:4000/signupuser
	>To Select The Body --> Select the "raw" --> "JSON" and type
	{
    	"name": "Pandi",
    	"email":"peswaran40@yopmail.com",
    	"password": "User@123",
   	 "phonenumber": 1234567890
	}
	>And Click the Send Button
	>To Get Message "User Add Successfully"

#>To get the All User Details
	>To Select the "Get" Method and Enter the URL : http://localhost:4000/alluser
	>To Click the Send Button
	>And Get the All User Value

#>To get the particular User using id
	>To Select the "Get" Method and Enter the URL : http://localhost:4000/user/66a0f0338b2b9d58f6152579
	>To Click the Send Button
	>And Get the Particular User Details

#>To Update the Particular User by User id
	>To Select the "Patch" Method and Enter the URL : http://localhost:4000/user/66a0f0338b2b9d58f6152579
	>To Select The Body --> Select the "raw" --> "JSON" and type
	{
    	"name": "Eswaran",
    	"email":"peswaran40@yopmail.com",
   	 "phonenumber": 0987654321
	}
	>To Click the Send Button
	>And Update the Particular User Details

#>To Delete the Particular User by User id
	>To Select the "Delete" Method and Enter the URL : http://localhost:4000/userdelete/66a0f0338b2b9d58f6152579
	>To Click the Send Button
	>And Delete the  Particular user From the record


> task 5

	>First terminate All The Process
	>Folder Structure
		>Public folder => index.html
		>server.js

	>After Run node server
	>To Open Two Different Browser 
	>And enter the url: http://localhost:8000/
	>two browser side by side = one side of the button click and another window will get the reflect the count


> task 6
	#>To get the particular User using id
	>To Select the "Get" Method and Enter the URL : http://localhost:4000/users/66a0f0338b2b9d58f6152579
	>To Click the Send Button
	>Once user is Not There "Error Message Show and Store the log"
	>Folder Structure ==> Assignment -> logs Folder --> error.log
	>if incase User is Not Available Store the error message in Log File Data in below:
		>"{"level":"error","message":"Operational error: User not found"}

	