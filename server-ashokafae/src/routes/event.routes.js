const express = require('express');
const router = express.Router();
const { eventController } = require('../controllers/event.controller');
const auth = require('../middleware/auth.middleware');
const role = require('../middleware/role.middleware');
const upload = require('../middleware/upload.middleware');

// Modified routes to match /api/events prefix
// router.post('/',
//     auth,
//     upload.single('image'),
//     eventController.createEvent);

router.post('/',
    upload.single('image'),
    eventController.addEvent);

// Make this public as per test requirements
router.get('/', eventController.getAllEvents);

router.get('/category/:category',
    eventController.getEventsByCategory);


// Make this public as per test requirements
router.get('/:id', eventController.getEventById);

router.put('/:id',
    auth,  // Keep auth middleware
    role.checkAdmin,
    eventController.updateEvent
);

router.delete('/:id',
    auth,  // Keep auth middleware
    role.checkAdmin,
    eventController.deleteEvent
);


module.exports = router;