const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(
 path.resolve(__dirname,'..','db','rawsqlite.db'),
 sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
 err=> {
     if(err) console.error(err.message);
     else{
         console.log('Connected to the raw_sqlite database');
        }
    }
 );

db.run(`CREATE TABLE IF NOT EXISTS articles (
    '_id' UUID PRIMARY KEY,
    'title' VARCHAR(255),
    'game' VARCHAR(255),
    'text' VARCHAR(255),
    'Author' VARCHAR(255),
    'date' DATE 
)`);

module.exports= db;
