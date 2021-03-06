# Changes from the Class diagram

## Identifying between User types

We have 3 different types of users
- Admin
- Junior Media Manager (JMM)
- Senior Media Manager (SMM)

> SMM is not included in the prototype

Django has a built in user model for authentication. They contain the following fields:

- Email Address
- username
- password
- id (auto generated by django)

To add additional information to the user, Django recommends to create another model (e.g. profile) and give that model a one-to-one relationship between the user model and the newly created model. The profile then contains the additional information as fields. 

The auth model contains an additional field `username`. In our class diagram, we did not include a username as we wanted the email-address to serve as the username. In our implementation, we will set the username to the email address so it will appear that the user is logging in with his email address but in the backgroud, he is actually logging in with the username which happens to be the same as the email address. 

The profile model contains these additional fields: 

| field              	| Use                                                                                             	|
|--------------------	|-------------------------------------------------------------------------------------------------	|
| userid             	| used to link the user model to the profile                                                      	|
| is_dashlab_admin   	| a boolean to determine if user is an admin or not                                               	|
| first_name         	| user first name                                                                                 	|
| last_name          	| user last name                                                                                  	|
| account_permission 	| a many to many relationship that associates a user to what social media accounts he can post to 	|

> if `is_dashlab_admin = True`, `account_permission` will be `NULL`

## Class methods

Since our backend is a REST API, the methods are implemented via REST API calls. These API calls include: 

| API Call 	| Explanation                       	|
|----------	|-----------------------------------	|
| `GET`    	| Used to get data                  	|
| `POST`   	| Used to create a new object       	|
| `PATCH`  	| Used to update an existing object 	|
| `DELETE` 	| Used to delete an object          	|

