// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDUu__xhKuLzqXnwiDNHvQ66roN6Z_47R0",
    authDomain: "soshgic-hostel-analytica.firebaseapp.com",
    databaseURL: "https://soshgic-hostel-analytica-default-rtdb.firebaseio.com",
    projectId: "soshgic-hostel-analytica",
    storageBucket: "soshgic-hostel-analytica.appspot.com",
    messagingSenderId: "532242787174",
    appId: "1:532242787174:web:fdbef779f67edb733236a7",
    measurementId: "G-XR5JCEH99T"
    };
    

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();
    
    // Signup function
    function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(
        email.value,
        password.value
    );
    promise.catch((e) => alert(e.message));
    alert("SignUp Successfully");
    }
    
    // SignIN function
    function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(
                email.value, password.value);
    promise.catch((e) => alert(e.message));
    }
    
    // SignOut
    function signOut() {
    auth.signOut();
    alert("SignOut Successfully from System");
    }

 
    
    // Active user to homepage
    firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        var email = user.email;
        alert("Active user " + email);
        window.location.replace("spartans.html")

    } else {
        alert("No Active user Found");
    }
    });

    