// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUu__xhKuLzqXnwiDNHvQ66roN6Z_47R0",
  authDomain: "soshgic-hostel-analytica.firebaseapp.com",
  databaseURL: "https://soshgic-hostel-analytica-default-rtdb.firebaseio.com",
  projectId: "soshgic-hostel-analytica",
  storageBucket: "soshgic-hostel-analytica.appspot.com",
  messagingSenderId: "532242787174",
  appId: "1:532242787174:web:fdbef779f67edb733236a7",
  measurementId: "G-XR5JCEH99T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// STANDARD FUNCTIONS TO BE CALLED FOR DAILY USE
// Update Lateness
// Update Streak
// Remove streak
// Remove Lateness

// UPDATE STREAK : this will increment the streak by 1
function update_streak(student_name, hostel_group) {
  // First get the current data and add 1
  console.log(`STUDENTS/${hostel_group}/${student_name}/0/streak`);
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0/streak`)
    .set(firebase.database.ServerValue.increment(1));
}
//   update_streak("Aaron Lovelace Nana Kwasi Abayie PREMPEH", "TITANS");

// UPDATE LATENESS : this will increment the lateness by 1 and set streak to 0 :( sad!

function update_lateness(student_name, hostel_group) {
  // First get the current data and add 1
  console.log(`STUDENTS/${hostel_group}/${student_name}/0/lateness`);
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0/lateness`)
    .set(firebase.database.ServerValue.increment(1));
  //
  // Now remove all the streak glory here
  let newupdateddata = {
    streak: 0,
  };
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0`)
    .update(newupdateddata);
}
//   update_lateness("Aaron Lovelace Nana Kwasi Abayie PREMPEH", "TITANS");

// I JUST WANTED TO ADD THIS BECAUSE HGIC STUDENTS CAN GIVE REASONS FOR BEING LATE SO JUST TO REMOVE THE LATENESS
// BUT THE STREAK WILL BE LOST UNLESS I ADD IT MANUALLY

function remove_lateness(student_name, hostel_group) {
  // First get the current data and add 1
  console.log(`STUDENTS/${hostel_group}/${student_name}/0/lateness`);
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0/lateness`)
    .set(firebase.database.ServerValue.increment(-1));
  //
  // Now remove all the streak glory here
  let newupdateddata = {
    streak: 1,
  };
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0`)
    .update(newupdateddata);
}
remove_lateness("Aaron Lovelace Nana Kwasi Abayie PREMPEH", "TITANS");

// EXPORTING THE FUNCTIONS FOR MODULE USE

// UPDATE STREAK : this will increment the streak by 1
export function update_streak(student_name, hostel_group) {
  // First get the current data and add 1
  console.log(`STUDENTS/${hostel_group}/${student_name}/0/streak`);
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0/streak`)
    .set(firebase.database.ServerValue.increment(1));
}

export function update_lateness(student_name, hostel_group) {
  // First get the current data and add 1
  console.log(`STUDENTS/${hostel_group}/${student_name}/0/lateness`);
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0/lateness`)
    .set(firebase.database.ServerValue.increment(1));
  //
  // Now remove all the streak glory here
  let newupdateddata = {
    streak: 0,
  };
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0`)
    .update(newupdateddata);
}

export function remove_lateness(student_name, hostel_group) {
  // First get the current data and add 1
  console.log(`STUDENTS/${hostel_group}/${student_name}/0/lateness`);
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0/lateness`)
    .set(firebase.database.ServerValue.increment(-1));
  //
  // Now remove all the streak glory here
  let newupdateddata = {
    streak: 1,
  };
  firebase
    .database()
    .ref(`STUDENTS/${hostel_group}/${student_name}/0`)
    .update(newupdateddata);
}