const authResolver = require('./auth');
const eventsResolver = require('./auth');
const bookingResolver = require('./auth');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver
};

module.exports = rootResolver;