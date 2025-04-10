const Registration = require("../models/bookingModel");
const Event = require("../models/eventModel");
const User = require("../models/userModel");

// CREATE - S'inscrire à un événement
const registerForEvent = async (req, res) => {
    try {
        const {eventId, userId} = req.body;

        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({error: "Événement non trouvé"});
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({error: "Utilisateur non trouvé"});
        }

        const existingRegistration = await Registration.findOne({
            user: userId,
            event: eventId,
        });
        if (existingRegistration) {
            return res.status(400).json({error: "Vous êtes déjà inscrit à cet événement"});
        }

        const registration = new Registration({
            user: userId,
            event: eventId,
        });

        await registration.save();
        res.status(201).json({message: "Inscription réussie", registration});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// READ - Lister les événements auxquels un utilisateur est inscrit
const getUserRegistrations = async (req, res) => {
    try {
        const userId = req.params.userId;
        const registrations = await Registration.find({user: userId}).populate("event");

        if (!registrations.length) {
            return res.status(404).json({message: "Aucune inscription trouvée"});
        }

        res.status(200).json(registrations);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

// DELETE - Se désinscrire d'un événement
const unregisterFromEvent = async (req, res) => {
    try {
        const {eventId, userId} = req.body;

        // Vérifier si l'inscription existe
        const registration = await Registration.findOne({user: userId, event: eventId});
        if (!registration) {
            return res.status(404).json({error: "Inscription non trouvée"});
        }

        // Supprimer l'inscription
        await registration.remove();
        res.status(200).json({message: "Désinscription réussie"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
};

module.exports = {
    registerForEvent,
    getUserRegistrations,
    unregisterFromEvent,
};