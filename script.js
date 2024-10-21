 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
 
 
 const firebaseConfig = {
apiKey: "AIzaSyDROuHKj-0FhMQbQtPVeEGVb4h89oME5T0",
authDomain: "fir-demo-4a5b4.firebaseapp.com",
projectId: "fir-demo-4a5b4",
storageBucket: "fir-demo-4a5b4.appspot.com",
messagingSenderId: "716679557063",
appId: "1:716679557063:web:603a78f59045ceeaf133e2"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 console.log(app);

 

 //----- New Registration code start	  
 document.getElementById("register").addEventListener("click", function() {
     var email =  document.getElementById("email").value;
     var password = document.getElementById("password").value;
     //For new registration
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       alert("Registration successfully!!");
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       // ..
       console.log(errorMessage);
       alert(error);
     });		  		  
 });


 //----- Login code start	  
 document.getElementById("login").addEventListener("click", function() {
     var email =  document.getElementById("login_email").value;
     var password = document.getElementById("login_password").value;

     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       console.log(user);
       alert(user.email+" Login successfully!!!");
       document.getElementById('logout').style.display = 'block';

     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.log(errorMessage);
       alert(errorMessage);
     });		  		  
 });

 //----- Logout code start	  
 document.getElementById("logout").addEventListener("click", function() {
     signOut(auth).then(() => {
         // Sign-out successful.
         console.log('Sign-out successful.');
         alert('Sign-out successful.');
         document.getElementById('logout').style.display = 'none';
       }).catch((error) => {
         // An error happened.
         console.log('An error happened.');
       });		  		  
 });

