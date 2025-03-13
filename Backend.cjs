const express = require('express');
const app = express();
const port = 3000;
const bp = require('body-parser');
const mongoose = require('mongoose');


const link = "mongodb://localhost:27017/LabAttendance";
mongoose.connect(link).then(() => {
  console.log("Connected to database");
}).catch((error) => {
  console.error(`Error is ${error}`);
})

app.set('view engine','ejs')
app.use(bp.urlencoded({ extended: true }));


let dataSchema = new mongoose.Schema({
  subject: String,
  student_name: String,
  regno: Number,
  roll: Number
})

let profSchema = new mongoose.Schema({
  userName: String,
  subject: String,
  password: String
})

let dsa_students_data = new mongoose.model('dsa_students_data', dataSchema);
let oops_students_data = new mongoose.model('oops_students_data', dataSchema);
let aec_students_data = new mongoose.model('aec_students_data', dataSchema);
let profModel = new mongoose.model('profModel', profSchema);

app.listen(port, (err) => {
  if (err) { console.log(err); }
  console.log(`server is running on port ${port}`);
});

app.post('/professor-registration', async (req, res) => {
  let data = new profModel(req.body);
  let sub = await req.body.subject;
  let subject = await profModel.findOne({ subject: sub });
  if (subject) {
    res.send("You are registered earlier");
    return;
  }
  await data.save().then(() => { res.send("Registration Success!!") }).catch((E) => { res.send(`Error happened ${E}`) })
});


app.post('/dsa-lab-attendance', async (req, res) => {
  try {
    let formData = new dsa_students_data(req.body);
    let regno = formData.regno;
    let regnoMatch = await dsa_students_data.findOne({ regno: regno });
    if (regnoMatch) {
      res.send("You have submitted lab file previously");
      return;
    }
    await formData.save().then(() => { res.json({ Success: true }) }).catch((e) => {
      res.send(`Error is ${e}`);
    })


  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
app.post('/oops-lab-attendance', async (req, res) => {
  let formData = new oops_students_data(req.body);
  let regno = formData.regno;
  let regnoMatch = await oops_students_data.findOne({ regno: regno });
  if (regnoMatch) {
    res.send("You have submitted lab file previously");
    return;
  }
  await formData.save().then(() => { res.json({ success: true }) }).catch((error) => {
    res.send(`Error is ${error}`);
  })
})
app.post('/aec-lab-attendance', async (req, res) => {
  let formData = new aec_students_data(req.body);
  let regno = formData.regno;
  let regnoMatch = await aec_students_data.findOne({ regno: regno });
  if (regnoMatch) {
    res.send("You have submitted lab file previously");
    return;
  }
  await formData.save().then(() => { res.json({ success: true }) }).catch((error) => {
    res.send(`Error is ${error}`);
  })
})
app.post('/download-attendance-data', async (req, res) => {
  let user = await req.body.userId;
  let pass = await req.body.passw;
  let subject = await req.body.subject;


  let userIdMatch = await profModel.findOne({ userName: user });
  let passMatch = await profModel.findOne({ password: pass });


  let dsaData = await dsa_students_data.find().sort({regno:1});
  let oopsdata = await oops_students_data.find().sort({regno:1});
  let aecdata = await aec_students_data.find().sort({regno:1});



  if (userIdMatch) {
    if (passMatch) {
      switch (subject) {
        case "DSA":
          res.render('report',{report:dsaData})
          break;
        case "OOPS":
          res.render('report',{report:oopsdata})
          break;
        case "AEC":
          res.render('report',{report:aecdata});
          break;
        default:
          res.send("Unidentified subject");
          break;
      }
      
    }
    else{
      res.send("Inappropriate info!!")
    }
  }
  else{
    res.send("You are not registered as a professor!!")
  }


});

//5173 ->Frontend   === 3000->Backend