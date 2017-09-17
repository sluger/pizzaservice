# usersnack

## Prerequisites
MongoDB shell version: 3.2
Node 6.9.0
NPM 3

## Instructions

// TODO: virtualenv

// TODO: save pip requirements

Repair broken data.json
```bash
cd scripts
python json_parser.py
```
### MongoDB
Start MongoDB daemon
```bash
mongod --config mongod.conf
```

create db and insert data into collections
```bash
cd scripts
python init_db.py
```

Connect to db for debugging reasons
```bash
mongo usersnack
show collections
db.pizzas.find()
db.extras.find()
```

### API with flask
Start the API (on a Windows based machine)
```bash
. venv/Scripts/activate
export FLASK_APP=api/app.py
export FLASK_DEBUG=1
flask run
```

The API base path is [http://localhost:5000/api/v1/](http://localhost:5000/api/v1/) with CORS enabled

Stop the backend
Hit `ctrl + c`
```bash
deactivate
```

// TODO: testing

### Angular CLI UI
```bash
cd ui
ng serve
```

The Angular UI is hosted on [http://localhost:4200](http://localhost:4200)

Hit `ctrl + c` to stop

// TODO: testing
