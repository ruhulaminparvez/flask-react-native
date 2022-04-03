from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import datetime


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/flask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100) , nullable=False)
    content = db.Column(db.Text())
    date = db.Column(db.Date, default=datetime.datetime.utcnow)

    def __init__(self, title, content):
        self.title = title
        self.content = content


class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'content', 'date')
    

article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)


@app.route('/get', methods=['GET'])
def get_articles():
    all_articles = Articles.query.all()
    result = articles_schema.dump(all_articles)
    return jsonify(result)



@app.route('/add', methods=['POST'])
def add_article():
    title = request.json['title']
    content = request.json['content']

    articles = Articles(title, content)
    db.session.add(articles)
    db.session.commit()
    return articles_schema.jsonify(articles)



@app.route('/get/<id>', methods=['GET'])
def detail_article(id):
    article = Articles.query.get(id)
    return article_schema.jsonify(article)



@app.route('/update/<id>', methods=['PUT'])
def update_article(id):
    title = request.json['title']
    content = request.json['content']
    id = request.json['id']
    article = Articles.query.get(id)
    article.title = title
    article.content = content
    db.session.commit()
    return article_schema.jsonify(article)



@app.route('/delete/<id>', methods=['DELETE'])
def delete_article(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()
    return article_schema.jsonify(article)




if __name__ == '__main__':
    app.run(debug=True)