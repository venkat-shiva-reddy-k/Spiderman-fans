// Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyBiIDvlMAAwjc34zECRq4CuRdTrhpfTtv4",
  authDomain: "signup-6b6a7.firebaseapp.com",
  databaseURL: "https://signup-6b6a7-default-rtdb.firebaseio.com",
  projectId: "signup-6b6a7",
  storageBucket: "signup-6b6a7.appspot.com",
  messagingSenderId: "629706530416",
  appId: "1:629706530416:web:2752e2ea5475f8ef769eb5"


};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  

	function signUp(){
		var email = document.getElementById("email");
    var password = document.getElementById("password");
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(uc => {
            let user = uc.user;
            user.updateProfile({}).then(function () {
                let key = firebase.database().ref().child('users').push().key;
                firebase.database().ref().child(`users/${key}`).set({
                    "email": email
                }, (error) => {
                    if (error) {
                        alert(error);
                    } else {
                        window.location.href = 'home.html';
                    }
                });
            }).catch(function (error) {
                alert(error);
            });
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert(`Email address ${email} already in use.`);
                    break;
                case 'auth/invalid-email':
                    alert(`Email address ${email} is invalid.`);
                    break;
                case 'auth/operation-not-allowed':
                    alert(`Error during sign up.`);
                    break;
                case 'auth/weak-password':
                    alert('Password is not strong enough. Add additional characters including special characters and numbers.');
                    break;
                default:
                    alert(error.message);
                    break;
            }
        });
	}
	function signIn() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
	
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then((userCredential) => {
            // Signed in
			
            window.location.href = 'home.html';
			var user = firebase.auth().currentUser;

			 alert(user);
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
		

}

function SignOut() {
firebase.auth().signOut().then(() => {
  // Sign-out successful.
  window.location.href = 'index.html';
//console.log("logged out");
}).catch((error) => {
  // An error happened.
  var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
});
}
















