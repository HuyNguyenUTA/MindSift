from sqlalchemy import text
from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy import inspect

# connection string format: dialect+driver://username:password@host:port/database
engine = create_engine('postgresql://postgres:4y7sV96vA9wv46VR@localhost:5432/mindsift')

metadata = MetaData()
user = Table('users', metadata,
  Column('id', Integer, primary_key=True, autoincrement=True),
  Column('data', String),
)

metadata.create_all(engine)

map = {'id': 1, 'data': 'value2'}

with engine.connect() as connection:
    user_data = connection.execute(text("INSERT INTO users (id, data) VALUES (:id, :data)"), {'id':map['id'], 'data':map['data']})
    connection.commit()
    rs = connection.execute(text('SELECT * FROM users'))
    for row in rs:
      print(row)
        

