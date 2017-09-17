# usersnack
A simple web app that lets you order pizzas, written with [Flask](http://flask.pocoo.org/) and [Angular CLI](https://github.com/angular/angular-cli), using [MongoDB](https://www.mongodb.com/) for persistence.
## Prerequisites
* MongoDB shell version: 3.2
* Node 6.9.0
* NPM 3

## Instructions

Virtualenv
```bash
todo: pip install with requirements
```

Repair broken data.json
```bash
cd scripts
python json_parser.py
```
### Persistence with [MongoDB](https://www.mongodb.com/)
Start MongoDB daemon
```bash
mongod --config mongod.conf
```

Generate database and insert pizzas and extras into collections
```bash
cd scripts
python init_db.py
```

Connect to MongoDB shell for debugging reasons
```bash
mongo usersnack
show collections
db.pizzas.find()
db.extras.find()
db.orders.find()
```

### API with [Flask](http://flask.pocoo.org/)
Start the API (on a Windows based machine)
```bash
. venv/Scripts/activate
export FLASK_APP=api/app.py
export FLASK_DEBUG=1
flask run
```

The API base path is [http://localhost:5000/api/v1/](http://localhost:5000/api/v1/) with CORS enabled

Hit `ctrl + c` to stop
```bash
deactivate
```

### UI with [Angular CLI](https://github.com/angular/angular-cli)
```bash
cd ui
ng serve
```

The Angular UI is hosted on [http://localhost:4200](http://localhost:4200)

Hit `ctrl + c` to stop

### TODOs
* Pip install with requirements
* Create Angular components
* Finish endpoints
* Import UI library e.g. [https://almsaeedstudio.com/preview](https://almsaeedstudio.com/preview)
* Responsive layout
* Setup mail server
* Test on Linux
* Test with multiple browsers

### Future work
* Cleanup python code
* Improve json validator
* Tune MongoDB configuration
* Flask unit testing
* Angular unit testing
* Angular end-to-end testing
* Development and production environment
* Ahead of Time Compilation
* Tree shaking
* Sass support
* Enable SSL
