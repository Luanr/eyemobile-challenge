# Eyemobile API

Eyemobile challenge API.

## Getting started

For deploying the server you must have **docker** and **docker-compose** installed.

    docker-compose build && docker-compose run

Now the API is served on localhost:3000.

## Using the api

Each route does a simple auth requiring an user and password.

### Get account balance

This method allows you to get the balance of the transactions.

Example input:

    curl --location --request GET 'http://localhost:3000/balance' --header 'Authorization: Basic cG9ydGFsOjEyMzQ1Ng=='

Example output:

    {
       "receber": 490.5,
       "disponivel": 0
    }


Authentication:
user = portal
password = 123456

### Send transaction

This method allows you to send a transaction to the database.

Example input:

    curl --location --request POST 'http://localhost:3000/transaction?nsu=0459357&valor=500.51&bandeira=VISA&modalidade=credito&horario=2020-05-02T06:02:01-03:00' --header 'Content-Type: application/x-www-form-urlencoded' --header 'Authorization: Basic dGVybWluYWw6MTIzNDU2'

Returns code 200 on sucess.

user = terminal
password = 123456

### Get transactions

This method allows you to get all the transactions recorded.

Example input:

      curl --location --request GET 'http://localhost:3000/transaction' --header 'Authorization: Basic cG9ydGFsOjEyMzQ1Ng=='

Example output:

	[
	    {
		    "nsu": "0459357",
		    "valor": 500.51,
		    "liquido": 490.5,
		    "bandeira": "VISA",
		    "modalidade": "credito",
		    "horario": "2020-05-02T09:02:01.000Z",
		    "disponivel": "2020-06-02T00:00:00.000Z"
	    },
	    {
		    "nsu": "0459359",
		    "valor": 1000.51,
		    "liquido": 970.49,
		    "bandeira": "MASTERCARD",
		    "modalidade": "debito",
		    "horario": "2020-01-02T09:02:01.000Z",
		    "disponivel": "2020-01-03T00:00:00.000Z"
	    }
    ]

user = portal
password = 123456

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Luanr/eyemobile-challenge)