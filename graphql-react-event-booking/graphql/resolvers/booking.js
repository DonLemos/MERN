const Booking = require("../../models/booking");
const { transformBooking, transformEvent } = require('./merge');
const Event = require('../../models/event');


module.exports = {

  bookings: async () => {
    try {
      const bookings = await Booking.find();
      return bookings.map((booking) => {
        return transformBooking(booking);
      });
    } catch (err) {
      throw err;
    }
  },

  bookEvent: async (args) => {
    const fetcheEevent = await Event.findOne({ _id: args.eventId });
    const booking = new Booking({
      user: "66b61568560418c9d2af2373",
      event: fetcheEevent,
    });
    const result = await booking.save();
    return transformBooking(result);
  },

  cancelBooking: async args => {
    try {
      const booking = await Booking.findById(args.bookingId).populate('event');
      const event = transformEvent(booking.event);
      await Booking.deleteOne({ _id: args.bookingId });
      return event;
    } catch (err) {
      throw err;
    }
  }
};
