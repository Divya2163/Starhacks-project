// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAULyqkRj7hlQD7TZ2vv3cfcr1BD37pe6Q",
    authDomain: "starhacks-project-8d697.firebaseapp.com",
    projectId: "starhacks-project-8d697",
    storageBucket: "starhacks-project-8d697.appspot.com",
    messagingSenderId: "513814327156",
    appId: "1:513814327156:web:f1e9c269eb2c6e20fbc621"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
  
function signUp(){
    var email=document.getElementById("mail");
    var password=document.getElementById("new");
      
      
      console.log("myscript");
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
   
    var user = userCredential.user;
    console.log("Successfully created account");
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
});
function signIn(){
      
    var email = document.getElementById("loginnew");
    var password = document.getElementById("word");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
}
auth.onAuthStateChanged(function(user){
    
    if(user){
      
      var email = user.email;
      alert("Active User " + email);
      
      //Take user to a different or home page

      //is signed in
      
    }else{
      
      alert("No Active User");
      //no user is signed in
    }
    
    
    
  });
  









  }
