var list  = require('./commands/list')
var add  = require('./commands/add')
var done  = require('./commands/done')

const input = process.argv[2]
const args = process.argv[3]

if (input === 'list' ) {
  list(console.log)
} else if ( input === 'add') {
  add(args)
} else if ( input === 'done') {
  done(args)
}
