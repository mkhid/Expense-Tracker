import Event from '../models/Event.js';

// List all events
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createEvent = async (req, res) => {
  const eventData = req.body; 

  try {
    const newEvent = new Event(eventData);
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update an event by ID
export const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const eventData = req.body; // You should have validation and data sanitization here.

  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, { new: true });
    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


// Delete an event by ID
export const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    await Event.findByIdAndRemove(eventId);
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
