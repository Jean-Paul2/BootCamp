const mongoose = require("mongoose");
const Course = require("./models/course");
const Participant = require("./models/participant");
const express = require("express");
const ParticipantService = require("./services/participantsService");
const CourseService = require("./services/coursesService");

const host = "http://localhost";
const port = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//GET01
app.get("/participants", ParticipantService.getAllParticipants);

//GET02
app.get("/participants/:id", ParticipantService.getParticipantById);

//POST03
app.post("/participants", ParticipantService.postParticipant);

//DELETE04
app.delete("/participants/:id", ParticipantService.deleteParticipantById);

//PATCH05
app.patch("/participants/:id", ParticipantService.patchParticipantById);

//GET06
app.get("/courses", CourseService.getAllCourses);

//GET07
app.get("/courses/:id", CourseService.getCourseById);

//POST08
app.post("/courses", CourseService.postCourse);

//DELETE09
app.delete("/courses/:id", CourseService.deleteCourseById);

//PATCH10
app.patch("/courses/:id", CourseService.patchCourseById);

//GET11
app.get("/participants/courses", async function (req, res) {
  try {
    const participants = await Participant.find();
    const courses = await Course.find();

    res.json(participants);
    res.json(courses);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(port, function () {
  console.log(`Server listening  on ${host}:${port}`);
});

const connecter = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/BootCamp");
    console.log("Connected to the DataBase");

    // const participantinfo = await Participant.find();
    // const courseinfo = await Course.find();

    // const info = participantinfo.map((p) => {
    //   let result = {};
    //   result.name = p.prenom + " " + p.nom;
    //   result.totalhours = 33;
    //   result.courses = [
    //     `{ label: "HTML", volume: 25 }
    //      { label: "JS", volume: 8 }`,
    //   ];

    //   return result;
    // });
    // console.log(info);
    // const infos = courseinfo.map((p) => {
    //   let result = [];
    //   result.courses = { label: `${p.label}`, volumne: `${p.volumne}` };

    //   return result;
    // });
    // console.log(infos);
  } catch (e) {
    console.error(e.massage);
  }
};

const creercourse = async () => {
  //course 1
  try {
    const course = await Course.create({
      label: "JS",
      description: "JavaScript",
      volumne: 8,
      startDate: "08/12/2021",
    });
    console.log(course);
  } catch (e) {
    console.error(e.massage);
  }
  //course 2
  try {
    const course = await Course.create({
      label: "HTML",
      description: "HyperText Markup Language",
      volumne: 25,
      startDate: "09/12/2021",
    });
    console.log(course);
  } catch (e) {
    console.error(e.massage);
  }
  //course 3
  try {
    const course = await Course.create({
      label: "CSS",
      description: "Cascading Style Sheet",
      volumne: 10,
      startDate: "12/12/2021",
    });
    console.log(course);
  } catch (e) {
    console.error(e.massage);
  }
};

const creerparticipant = async () => {
  //participant 1
  try {
    const participant = await Participant.create({
      prenom: "JP",
      nom: "Sagna",
      email: "jps@bc.sn",
      ine: "N00524A20211",
      num: 33354587422,
      courses: ["61b214c0434722dcfa26f8fc", "61b21564c6c7948c1d5ad414"],
    });
    console.log(participant);
  } catch (e) {
    console.error(e.massage);
  }
  //participant 2
  try {
    const participant = await Participant.create({
      prenom: "Ferid",
      nom: "Nasralha",
      email: "young@yahoo.fr",
      ine: "NPC5620201",
      num: 761236548,
      courses: ["61b214bf434722dcfa26f8f6", "61b21564c6c7948c1d5ad412"],
    });
    console.log(participant);
  } catch (e) {
    console.error(e.massage);
  }
  //participant 3
  try {
    const participant = await Participant.create({
      prenom: "Ababacar",
      nom: "Gueye",
      email: "ag@gmail.com",
      ine: "N82HA20212",
      num: 778542695,
      courses: ["61b2110744aa41bfe61bb137", "61b21563c6c7948c1d5ad40c"],
    });
    console.log(participant);
  } catch (e) {
    console.error(e.massage);
  }
};

connecter();
//creercourse();
//creerparticipant();
