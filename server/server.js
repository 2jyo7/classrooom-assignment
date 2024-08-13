const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
  }));
  app.use(express.json());
  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// create a connection from the pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

db.getConnection((err) => {
if (err){console.log(err);
};
console.log("MySQL connection established");
app.listen(process.env.PORT || 4200,() => {
  console.log(`Server started on port ${process.env.PORT || 4000}`);
  })
})


// Principal registration endpoint
app.post("/principal/register", (req, res) => {
  const { email, password } = req.body;

  // Check if the email already exists
  const checkEmailQuery = "SELECT * FROM Users WHERE email = ?";
  db.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error("Error checking email:", err);
      return res.send("Server error");
    }

    if (results.length > 0) {
      // Email already exists
      return res.send("Email already registered");
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error("Error hashing password:", err);
      }

      // Insert the new principal into the database
      const insertQuery = "INSERT INTO Users (email, password, role) VALUES (?, ?, ?)";
      db.query(insertQuery, [email, hash, "Principal"], (err, result) => {
        if (err) {
          console.error("Error inserting user:", err);
        }
        res.send("Principal registered successfully");
      });
    });
  });
});

// Principal login endpoint
app.post("/principal/login", (req, res) => {
  const { email, password } = req.body;

  // Query to find the principal with the given email
  const selectSql = "SELECT * FROM Users WHERE email = ? AND role = 'Principal'";
  db.query(selectSql, [email], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
    }

   if (results.length === 0) {
      // No user found
      return res.send("Invalid email or password");
    }

    const user = results[0];

    // Compare the password with the stored hashed password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error("Error comparing passwords:", err);
      }

      if (!isMatch) {
        // Passwords do not match
        return res.send("Invalid email or password");
      }

      // Successful login
      res.send("Login successful");
    });
  });
});

app.post("/principal/createClassRoom", (req, res) =>{
const {name, startTime,endTime, daysInSession} = req.body;
  const postClassR = "INSERT INTO classrooms (name, start_time,end_time, days_in_session) VALUES (?,?,?,?)";
  db.query(postClassR,[name,startTime,endTime,daysInSession] ,(err,results) =>{
    if (err) {console.log(err);
    }
    res.send(results);
  });
})

//timetable created by teachers
app.post("/teacher/timetable", (req, res) =>{
  const {subject, startTime,endTime, day} = req.body;
  console.log(subject, startTime,endTime, day);
  
    const postClassR = "INSERT INTO timetable (subject, start_time,end_time, day) VALUES (?,?,?,?)";
    db.query(postClassR,[subject,startTime,endTime,day] ,(err,results) =>{
      if (err) {console.log(err);
      }
      res.send(results);
    });
  })

  app.get("/teacher/getTimeTable", (req, res) =>{
    const getClassR = "SELECT * FROM timetable";
    db.query(getClassR,(err,results) =>{
      if (err) {console.log(err);
      }
      res.send(results);
    });
  })


