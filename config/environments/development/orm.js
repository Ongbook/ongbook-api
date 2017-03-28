const orm = {
  adapters: {
    disk: 'sails-disk',
    mongo: 'sails-mongo'
  },
  defaultConnection: 'disk',
  connections: {
    disk: {
      adapter: 'disk',
      filePath: './data/development/',
      fileName: 'database.db',
      migrate: 'alter'
    },
    document: {
      adapter: 'mongo',
      url: process.env.MONGO_URL,
      migrate: 'alter'
    }
  }
}

module.exports = orm;