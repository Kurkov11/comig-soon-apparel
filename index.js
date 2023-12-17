
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
document.getElementById('submit-btn').onclick = function(){
    if(isEmail(document.getElementById('email-input').value)){
        document.getElementById('email-form').style.border = '1px solid hsla(0, 36%, 70%, 0.8)';
        document.getElementById('error-msg').style.display = 'none';
        document.getElementById('error-icon').style.display = 'none';
    }else{
        document.getElementById('email-form').style.border = '1px solid red';
        document.getElementById('error-msg').style.display = 'inline';
        document.getElementById('error-icon').style.display = 'inline';
    }
}