## 📎 Technologies

Project was developed with the following technologies:
- [NodeJs](https://nodejs.org/en/)

## 📎 Acquired knowledge
- I used this project to improve my knowledge about Javascript and NodeJs

This is a project developed with the team **[Alura](https://www.alura.com.br/)**

<hr>

<p align="center">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#installing">Installing</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#using-the-api">Using</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#routes">Routes</a>—↴
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#routes-to-providers">Provider</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <br>
 
## Installing

* First, clone the repository::

  ```bash
  git clone https://github.com/Gabriel-limadev/petshop-Api.git
  ```

* Install all the Package.json:

  ```bash
  cd petshop-Api
  npm install
  ```

* Run your server:

  ```bash
  npm start
  ```

Now you are ready to use it.

# Using the API

## Routes

### Routes to Providers

#### POST /api/providers/
###### The response code must be `201`.

Add a new provider in the database.

##### Request Body:

```json
{
    "company": "Dogs e Cia",
    "email": "dogscia@gmail.com",
    "categorie": "petFood"
}
"Category can be just petFood and the toys"
```

##### Response Body:

```json
{
    "id": 1,
    "company": "Dogs e Cia",
    "email": "dogscia@gmail.com",
    "categorie": "petFood",
}
```

#### PUT api/providers/:id/
###### The response code must be `204`.

Change all values in specified provider in the database.

##### Request Body:

> *Changing the provider we've **POST** earlier, at url `api/providers/1/`*
```json
{
    "id": 1,
    "company": "Dogs e Cia",
    "email": "dogscia@gmail.com",
    "categorie": "petFood",
}
```

#### GET api/providers/
###### The response code must be `200`.

Getting all the providers of the database.

##### Response Body:

```json
[
    {
      "id": 1,
      "company": "Dogs e Cia",
      "email": "dogscia@gmail.com",
      "categorie": "petFood",
    } 
]
```

#### DELETE api/providers/:id/
###### The response code must be `204`.
Deleting one provider of the database.
