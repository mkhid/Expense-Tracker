import { Router } from 'express';
const router = Router();
import { getEvents, updateEvent,deleteEvent, createEvent } from '../controllers/event.js';


// List all events
router.get('/', getEvents);

router.post('/', createEvent)
// Update an event by ID
router.put('/:id', updateEvent);

// Delete an event by ID
router.delete('/:id', deleteEvent);


export default router