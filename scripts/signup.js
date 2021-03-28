

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
	window.location.href = 'index.html';
  }
});
