
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAUaMIC5mHMckjugs6pupH6ETBbxpFP7Hs",
      authDomain: "kwitter-e41eb.firebaseapp.com",
      databaseURL: "https://kwitter-e41eb-default-rtdb.firebaseio.com",
      projectId: "kwitter-e41eb",
      storageBucket: "kwitter-e41eb.appspot.com",
      messagingSenderId: "802512642538",
      appId: "1:802512642538:web:76dab0ee58117fddd79293"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
