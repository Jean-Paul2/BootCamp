const mongoose = require("mongoose");
const Participant = require("../models/participant")

async function getAllParticipants (req, res) {
    try {
      const participants = await Participant.find();
      res.json(participants);
    } catch (error) {
      console.error(error.message);
    }
}

async function getParticipantById (req, res) {
    try {
      const id = req.params.id
      const participant = await Participant.findById(id);
      res.json(participant);
  
    } catch (error) {
      console.error(error.message);
    }
}

async function postParticipant (req, res) {
    try {
      const participants = await Participant.find();
      res.json(participants);
    } catch (error) {
      console.error(error.message);
    }
}

async function deleteParticipantById (req, res) {
    try {
      const id = req.params.id
      const participant = await Participant.findById(id);
      res.json(participant);
  
    } catch (error) {
      console.error(error.message);
    }
}

async function patchParticipantById (req, res) {
    try {
      const id = req.params.id
      const participant = await Participant.findById(id);
      res.json(participant);
  
    } catch (error) {
      console.error(error.message);
    }
}

module.exports = {
    getAllParticipants,
    getParticipantById,
    postParticipant,
    deleteParticipantById,
    patchParticipantById
}