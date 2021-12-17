const mongoose = require("mongoose");
const Course = require("../models/course");

async function getAllCourses(req, res) {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error.message);
  }
}

async function getCourseById(req, res) {
  try {
    const id = req.params.id;
    const course = await Course.findById(id);
    res.json(course);
  } catch (error) {
    console.error(error.message);
  }
}

async function postCourse(req, res) {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error.message);
  }
}

async function deleteCourseById(req, res) {
  try {
    const id = req.params.id;
    const courses = await Course.findById(id);
    res.json(courses);
  } catch (error) {
    console.error(error.message);
  }
}

async function patchCourseById(req, res) {
  try {
    const id = req.params.id;
    const course = await Course.findById(id);
    res.json(course);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  getAllCourses,
  getCourseById,
  postCourse,
  deleteCourseById,
  patchCourseById,
};
