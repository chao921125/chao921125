from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
import SqlConfig
from functools import wraps
import jwt
from flask import Flask, request, jsonify, make_response

class dotdict(dict):
    """dot.notation access to dictionary attributes"""
    __getattr__ = dict.get
    __setattr__ = dict.__setitem__
    __delattr__ = dict.__delitem__


print("------初始化中-----")
app = Flask(__name__)
app.config.from_object(SqlConfig)
db = SQLAlchemy(app)
def create_app():
    return app

# app.config['SQLALCHEMY_DATABASE_URI'] = DB_URI
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = "1qaz@WSX#EDC"

def create_db():

    # print("调用绑定app后的db")
    return db

def create_migrate():
    db = create_db()
    migrate = Migrate(app, db)
    # print("调用绑定app与db后migrate")
    return migrate

def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):

        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return jsonify({'message': 'a valid token is missing'})

        try:
            data = jwt.decode(token,algorithms=["HS256"])
            # current_user = UserModel.query.filter_by(public_id=data['public_id']).first()
        except:
            return jsonify({'message': 'token is invalid'})
        return f( *args, **kwargs)
        # return f(current_user, *args, **kwargs)

    return decorator
