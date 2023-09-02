# Plant Assist

Project Title
The name of the Project

Screenshots
![Writing](https://unsplash.com/photos/VBPzRgd7gfc)

Setup
download or clone the repository
run npm install

Status
Foliage Finder is still in progress. Newer versions will be released.

User can browse an array of plants, or narrow down their search based on their zipcode to locate their hardiness zone.
Even further filtering by type of plant, sun exposure, or season of blooming is optional.
User can save Favorites for quick viewing later.
A filter of bloom color planned for future releases.

Also in future releases, a user will be able to:
    create folders identify plants for certain areas of their home.
    add and remove items from the folder.
    a recent collection of viewed plants will be saved to their Recent File.

Seeding was used to create an array of plants for functioning purposes.
mySQL is being used to store users, plants, folders, favorites, and recents. 
There are plans to increase the API for plants.

Folder, Favorite, and Recent is recognized by the userId, and data saved with plantIds.

Postman Testing:

POST:
http://localhost:8000/api/auth/signup
{
    "firstName": "Test",
    "lastName": "Test",
    "email": "test@test",
    "username": "test",
    "password": "test"
}

POST:
http://localhost:8000/api/auth/login
{
    "firstName": "Test",
    "lastName": "Test",
    "email": "test@test",
    "username": "test",
    "password": "test"
}

GET:
http://localhost:8000/api/users/
should return:
{
 "result": 200,
    "success": true,
    "data": [],
},

GET:
http://localhost:8080/api/favorites/
should return:
{
 "result": 200,
    "data": [],
},

POST:
http://localhost:8080/api/folder/create
{
   "plantIds" : [8,9]
}

DELETE:
http://localhost:8080/api/favorites/<user_id>  
{
   "plantIds" : [8,9]
}

GET:
http://localhost:8080/api/folder/
{
 "result": 200,
    "data" : [],
},

POST:
http://localhost:8080/api/folder/create
{
   "plantIds" : [8,9]
}

PUT:
http://localhost:8080/api/folder/:<user_id>
make changes to folder:
{
    "title" : "Folder Title"
   "plantIds" : [8,9]
}


DELETE:
http://localhost:8080/api/favorites/<user_id>  
{
    "title" : "Folder Title"
   "plantIds" : [8,9]
}

POST: 
http://localhost:8080/api/recent/create
{
   "plantIds" : [8,9]
}