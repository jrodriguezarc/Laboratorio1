#API Reference

The following resources are made available by the *SmartShopping* API:

* [Articles](#articles)
* [smart_users](#smart_users)
* [tag_articles](#tag_articles)
* [tagarticles](#tagarticles)
* [taggings](#taggings)
* [taggs](#taggs)
* [users](#users)



The API follows a MVC design to control the access and manipulation of these resources. 

This file is auto-generated from the current state of the database. Instead of editing this file, please use the migrations feature of `Active Record` to incrementally modify your database, and then regenerate this schema definition.

##Articles
A articles represents a register article and the following properties:

| Property    | Data Type | Description                                                                             |
|:------------|-----------|:----------------------------------------------------------------------------------------|
| title       | t.string        |  Associates a article with specific name                                          | 
| costo       | t.integer       |  Indicates a price of a product or article                                        |
| email       | t.string        |                                                                                   |
| direccion   | t.string        |                                                                        |
| created_at  | t.datetime      |                                                                              |
| updated_at  | t.datetime      |                        |
| pic_file_name  | t.string     |                                    |
| pic_content_type  | t.string  |                                                                             |
| pic_file_size     | t.integer |                                                                                       |
| pic_updated_at    | t.datetime|    Date when the picture has updated         |
| userid      | t.integer       |                                                                                         |
| username    | t.string        |                                                                                         |
| fotoname    | t.string        |                                                                                         |
| score       | t.integer       |                                                                                         |
| total_scores| t.integer       |                                                                                         |
| text        | t.text          |                                                                                         |

     
 
       
###Endpoints

| Method | Request URI                              | Description                               |
|:-------|:-----------------------------------------|:------------------------------------------|
| GET    | [/users](#users-1)                       | Obtains user data for a list of user id's |
| POST   | [/users](#users-1)                       | Creates or updates a user                 |
| GET    | [/users/*{id}*](#usersid)                | Obtains a user's data                     |
| PUT    | [/users/*{id}*](#usersid)                | Creates or updates a user                 |
| GET    | [/users/*{id}*/matches](#usersidmatches) | Obtains the matches associated to a use   |

###/articles
**Method**: GET

Obtains user data for a list of user id's

**Request Parameters**:

| Parameter | Data Type  | Description                                       |
|:----------|:-----------|:--------------------------------------------------|
| users     | JSON array | Id's of the users                                 |
| pretty    | boolean    | Whether to output in human readable format or not |

**Example Request**

```HTTP
GET /users HTTP/1.1
Host: canyousinkme.vodkasoft.com

["facebookId1","facebookId2"]
```

**Example Response**

```HTTP
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 211

[{"rank":5,"displayName":"Example User 1","avatar":"image data","countryCode":"CR","id":"facebookId1"},{"rank":2,"displayName":"Example User 2","avatar":"other image data","countryCode":"US","id":"facebookId2"}]
```
___

**Method**: POST

Creates or updates a user

**Request Parameters**:

| Parameter | Data Type   | Description                                       |
|:----------|:------------|:--------------------------------------------------|
| user      | JSON object | Data for the user                                 |
| pretty    | boolean     | Whether to output in human readable format or not |

Only the following attributes are accepted for `user`:

* id
* avatar
* countryCode
* displayName

All the parameters are required when creating a user but optional when updating it. Other attributes are ignored.

**Example Request**

```HTTP
POST /users HTTP/1.1
Host: canyousinkme.vodkasoft.com

user={"id":"facebookId","avatar":"image data","countryCode":"CR","displayName":"Example User"}
```

**Example Response**

```HTTP
HTTP/1.1 201 CREATED
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"id":"facebookId"}
```

---

###/users/*{id}*
**Method**: GET

Obtains a user's data

**URI Parameters**

| Parameter | Data Type | Description        |
|:----------|:----------|:-------------------|
| id        | string    | User's Facebook id |

**Request Parameters**:

| Parameter | Data Type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| pretty    | boolean   | Whether to output in human readable format or not |

**Example Request**

```HTTP
GET /users/facebookId HTTP/1.1
Host: canyousinkme.vodkasoft.com
```

**Example Response**

```HTTP
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"rank":5,"displayName":"Example User","avatar":"image data","countryCode":"CR","id":"facebookId"}
```
___
**Method**: PUT

Creates or updates a user

**URI Parameters**

| Parameter | Data Type | Description        |
|:----------|:----------|:-------------------|
| id        | string    | User's Facebook id |

**Request Parameters**:

| Parameter | Data Type   | Description                                       |
|:----------|:------------|:--------------------------------------------------|
| user      | JSON object | Data for the user                                 |
| pretty    | boolean     | Whether to output in human readable format or not |

Only the following attributes are accepted for `user`:

* id
* avatar
* countryCode
* displayName

All the parameters are required when creating a user but optional when updating it. Other attributes are ignored.

**Example Request**

```HTTP
PUT /users/facebookId1 HTTP/1.1
Host: canyousinkme.vodkasoft.com

user={"avatar":"new image"}
```

**Example Response**

```HTTP
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"id":"facebookId"}
```

---

###/users/*{id}*/matches
**Method**: GET

Obtains the matches associated to a use

**URI Parameters**

| Parameter | Data Type | Description        |
|:----------|:----------|:-------------------|
| id        | string    | User's Facebook id |

**Request Parameters**:

| Parameter | Data Type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| offset    | integer   | Number of entries to skip                         |
| limit     | integer   | Maximum number of entries to return               |
| pretty    | boolean   | Whether to output in human readable format or not |

**Example Request**

```HTTP
GET /users/facebookId/matches HTTP/1.1
Host: canyousinkme.vodkasoft.com
```

**Example Response**

```HTTP
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 184

[{"hostPoints":175,"guestPoints":100,"id":"ahNkZXZ-Y2EmptyXlvdS1zaW5rLW1lchEgVNYXRjaBIgAsSCAtICACgw","host":"facebookId","timestamp":"2014-04-07T00:42:49.382506","guest":"facebookId2"}]
```
___

##Matches

A match represents a game and has the following properties:

| Property    | Data Type | Description                                               |
|:------------|-----------|:----------------------------------------------------------|
| id          | string    | the id of that uniquely identifies the match              |
| guest       | id        | the id associated with the **User** that joined the match |
| guestPoints | integer   | the points scored by the guest player                     |
| host        | id        | the id associated with the **User** that hosted the match |
| hostPoints  | integer   | the points scored by the host_player                      |

###Endpoints

| Method | Request URI                 | Description                       |
|:-------|:----------------------------|:----------------------------------|
| POST   | [/matches](#matches-1)      | Creates a match                   |
| GET    | [/matches/{id}](#matchesid) | Obtains data for a specific match |
| DELETE | [/matches/{id}](#matchesid) | Deletes a match                   |

###/matches
**Method**: POST

Creates or updates a user

**Request Parameters**:

| Parameter | Data Type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| offset    | integer   | Number of entries to skip                         |
| limit     | integer   | Maximum number of entries to return               |
| pretty    | boolean   | Whether to output in human readable format or not |

The following attributes are required for `match`:

* guest
* guestPoints
* host
* hostPoints

Other attributes are ignored.

**Example Request**

```HTTP
POST /matches HTTP/1.1
Host: canyousinkme.vodkasoft.com

{"guest":"facebookId2","guestPoints":100,"host":"facebookId","hostPoints":175}
```

**Example Response**

```HTTP
HTTP/1.1 201 CREATED
Content-Type: application/json; charset=utf-8
Content-Length: 64

{"id":"shNkZXZ-Y2FuLYlvdS1zaW52LY1lchILEgVNYXJjaBiAgICAgICZCmm"}
```

---
###/matches/{id}
**Method**: GET

Obtains data for a specific match

**URI Parameters**

| Parameter | Data Type | Description     |
|:----------|:----------|:----------------|
| id        | string    | Id of the match |

**Request Parameters**:

| Parameter | Data Type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| pretty    | boolean   | Whether to output in human readable format or not |

**Example Request**

```HTTP
GET /matches/shItZXZ-Y2FuLYlvdS1zaW52LY1lchILEgVNYXJjaBiAgICAgICZCmm HTTP/1.1
Host: canyousinkme.vodkasoft.com
```

**Example Response**

```HTTP
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"hostPoints":175,"guestPoints":100,"id":"shItZXZ-Y2FuLYlvdS1zaW52LY1lchILEgVNYXJjaBiAgICAgICZCmm","host":"facebookId","timestamp":"2014-04-07T01:48:46.494089","guest":"facebookId2"}
```
___
**Method**: DELETE

Deletes a match

**URI Parameters**

| Parameter | Data Type | Description     |
|:----------|:----------|:----------------|
| id        | string    | Id of the match |

**Request Parameters**:

| Parameter | Data Type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| pretty    | boolean   | Whether to output in human readable format or not |

**Example Request**

```HTTP
DELETE /matches HTTP/1.1
Host: canyousinkme.vodkasoft.com
```

**Example Response**

```HTTP
HTTP/1.1 200 NO CONTENT
Content-Type: application/json; charset=utf-8
```

---

##Leaderboards

Leaderboards contain lists of sorted Users according to their experience. There are three types of leaderboards: global, country and friends.

###Endpoints

| Method | Request URI                                             | Description                           |
|:-------|:--------------------------------------------------------|:--------------------------------------|
| GET    | [/leaderboards](#leaderboards-1)                        | Obtains the global leaderboard        |
| GET    | [/leaderboards/{countrycode}](#leaderboardscountrycode) | Obtains the leaderboard for a country |

###/leaderboards

**Method**: GET

Obtains the global leaderboard

**Request Parameters**:

| Parameter | Data Type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| offset    | integer   | Number of entries to skip                         |
| limit     | integer   | Maximum number of entries to return               |
| pretty    | boolean   | Whether to output in human readable format or not |

**Example Request**

```HTTP
GET /leaderboards HTTP/1.1
Host: canyousinkme.vodkasoft.com

["offset":10,"limit":"20"]
```

**Example Response**

```HTTP
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 211

[{"id":"facebookId"},{"id": "facebookId1"}]
```
___

###/leaderboards/{countryCode}

**Method**: GET

Obtains the leaderboard for a country

**URI Parameters**

| Parameter   | Data Type | Description                             |
|:------------|:----------|:----------------------------------------|
| countryCode | string    | Code for the country of the leaderboard |

**Request Parameters**:

| Parameter | Data Type | Description                                       |
|:----------|:----------|:--------------------------------------------------|
| offset    | integer   | Number of entries to skip                         |
| limit     | integer   | Maximum number of entries to return               |
| pretty    | boolean   | Whether to output in human readable format or not |

**Example Request**

```HTTP
GET /leaderboards/CR HTTP/1.1
Host: canyousinkme.vodkasoft.com

["offset":10,"limit":"20"]
```

**Example Response**

```HTTP
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 211

[{"id":"facebookId"},{"id": "facebookId1"}]
```
___

###Friends leaderboards

The friends leaderboards includes only those player who are friends on Facebook with the player who queries the leaderboard. This feature is currently **not available** since Facebook integration is currently not supported.


#Concepts 

##Active Record
**Active Record** is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database. It is an implementation of the Active Record pattern which itself is a description of an Object Relational Mapping system.

