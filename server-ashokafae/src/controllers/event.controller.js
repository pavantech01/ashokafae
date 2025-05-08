// const eventService = require('../services/event.service');
// const notificationService = require('../services/notification.service');
// const catchAsync = require('../utils/catchAsync');
// const { ApiError } = require('../utils/apiError');

// const eventController = {
//     createEvent: catchAsync(async (req, res) => {
//         if (req.user.role !== 'admin') {
//             throw new ApiError(403, 'Access denied. Admins only.');
//         }
//         const eventData = {
//             ...req.body,
//             organizer: req.user.id
//         };

//         const image = req.file;

//         try {
//             // const event = await eventService.createEvent(eventData, image);
//             const event = await eventService.createEvent(eventData, image, req.user.id);

//             res.status(201).json({
//                 success: true,
//                 data: event
//             });
//         } catch (error) {
//             console.error('Error creating event:', error);
//             throw new ApiError(500, 'Internal Server Error');
//         }   
//     }),

//     getAllEvents: catchAsync(async (req, res) => {
//         const { page = 1, limit = 10, category, search } = req.query;
//         const events = await eventService.getAllEvents(page, limit, category, search);
//         res.status(200).json(events);
//     }),

//     getEventById: catchAsync(async (req, res) => {
//         const event = await eventService.getEventById(req.params.id);
//         res.status(200).json(event);
//     }),

//     updateEvent: catchAsync(async (req, res) => {
//         const { id } = req.params;
//         const userId = req.user.id;

//         console.log('Update Request Details:', {
//             eventId: id,
//             userId: userId,
//             body: req.body,
//             userRole: req.user.role
//         });

//         if (req.user.role !== 'admin') {
//             throw new ApiError(403, 'Admin access required');
//         }

//         const event = await eventService.updateEvent(id, req.body, userId);

//         res.status(200).json({
//             success: true,
//             message: 'Event updated successfully',
//             data: event
//         });
//     }),

//     deleteEvent: catchAsync(async (req, res) => {
//         if (req.user.role !== 'admin') {
//             throw new ApiError(403, 'Access denied. Admins only.');
//         }
//         await eventService.deleteEvent(req.params.id, req.user.id);
//         res.status(204).send();
//     })
// };

// module.exports = { eventController };

const eventService = require('../services/event.service');
const notificationService = require('../services/notification.service');
const catchAsync = require('../utils/catchAsync');
const { ApiError } = require('../utils/apiError');
const { Event } = require('../models/event.model');
const cloudinary = require('../config/cloudinary.config');

// Helper to wrap cloudinary.upload_stream into a Promise
const uploadToCloudinary = (buffer) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {
                folder: 'events',
                resource_type: 'image',
            },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        ).end(buffer);
    });
};

const eventController = {
    createEvent: catchAsync(async (req, res) => {
        // Optional: keep your original method here if needed
    }),

    getAllEvents: catchAsync(async (req, res) => {
        const events = await Event.find().sort({ createdAt: -1 });
        res.status(200).json(events);
    }),

    getEventsByCategory: catchAsync(async (req, res) => {
        const category = req.params.category.toLowerCase();
        const events = await Event.find({ category }).sort({ createdAt: -1 });
        res.status(200).json(events);
    }),
    
    
    getEventById: catchAsync(async (req, res) => {
        const event = await Event.findById(req.params.id);
        if (!event) throw new ApiError(404, 'Event not found');
        res.status(200).json(event);
    }),

    updateEvent: catchAsync(async (req, res) => {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) throw new ApiError(404, 'Event not found');
        res.status(200).json({ message: 'Event updated', event });
    }),

    deleteEvent: catchAsync(async (req, res) => {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) throw new ApiError(404, 'Event not found');
        res.status(200).json({ message: 'Event deleted successfully' });
    }),

    addEvent: catchAsync(async (req, res) => {
        const { title, description, category, status } = req.body;
        const file = req.file;

        if (!title || !description || !category) {
            return res.status(400).json({ message: 'Title, description, and category are required' });
        }

        let uploadedImage = { public_id: '', url: '' };

        if (file) {
            try {
                const result = await uploadToCloudinary(file.buffer);
                uploadedImage.public_id = result.public_id;
                uploadedImage.url = result.secure_url;
            } catch (err) {
                console.error('Cloudinary upload error:', err);
                return res.status(500).json({ message: 'Image upload failed', error: err.message });
            }
        }

        const event = new Event({
            title,
            description,
            category,
            status: status || 'draft',
            image: uploadedImage
        });

        const savedEvent = await event.save();
        res.status(201).json({ message: 'Event created successfully', event: savedEvent });
    })
};

module.exports = { eventController };
