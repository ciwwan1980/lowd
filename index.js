const low = require('lowdb')
console.log(low, "low")
const FileSync = require('lowdb/adapters/FileSync')
 
const adapter = new FileSync('db.json')
const db = low(adapter)
 
// Set some defaults
db.defaults({ students: [] })
  .write()
 
// Add a post
const result= 
    db.get('students')
  .push({ name:process.argv[2], age:process.argv[3]})
  .write()
 
console.log(result)