const Event = require("../../models/event");
const { transformEvent } = require('./merge');

module.exports = {
    events: async () => {
      try {
        const events = await Event.find();
        return events.map((event) => {
          return transformEvent(event);
        });
      } catch (err) {
        throw err;
      }
    },
  
    createEvent: async args => {
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: new Date(args.eventInput.date),
        creator: "66b61568560418c9d2af2373",
      });
  
      let createdEvent;
      try {
        const result = await event.save();
        createdEvent = transformEvent(result);
        const creator = await User.findById("66b61568560418c9d2af2373");
  
        if (!creator) {
          throw new Error("User Not Found.");
        }
        creator.createdEvents.push(event);
        await creator.save();
  
        return createdEvent;
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
};