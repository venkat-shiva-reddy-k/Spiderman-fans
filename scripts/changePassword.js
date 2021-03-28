
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        $('#forgotPassword').prop('disabled', false);
    } else {
        $('#forgotPassword').prop('disabled', true);
    }
});
function changePassword() {

    var password = document.getElementById("password");
    var cnfPasswod = document.getElementById("conpassword");
    var oldpassword = document.getElementById("oldpassword");
    if (!oldpassword.value || !password.value || !cnfPasswod.value) {
        return;
    }
    if (password.value == cnfPasswod.value) {
        reauth();
    } else {
        alert('Please check new passwords');
    }
}

function reauth() {
    
	
var newPassword = document.getElementById("conpassword").value;

firebase.auth().currentUser.updatePassword(newPassword).then(function() {
  // Update successful.
  window.location.href = 'home.html';
}).catch(function(error) {
  // An error happened.
});
	
	
    
}