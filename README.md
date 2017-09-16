# usersnack

// TODO: virtualenv

// TODO: save pip requirements

Repair broken data.json
```bash
python json_parser.py
```

Start MongoDB daemon
```bash
mongod --config mongod.conf
```

create db and insert data into collections
```bash
python.py init_db.py
```

Connect to db for debugging reasons
```bash
mongo usersnack
show collections
db.pizzas.find()
db.extras.find()
```

Start the backend (on a Windows based machine)
```bash
. venv/Scripts/activate
export FLASK_APP=app.py
export FLASK_DEBUG=1
flask run
```

The API base path is [localhost:5000/api/v1/](localhost:5000/api/v1/)

// TODO: cors?

Stop the backend
Hit `ctrl + c`
```bash
deactivate
```

// TODO: frontend