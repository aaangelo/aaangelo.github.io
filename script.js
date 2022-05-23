    function validate() {
        let value = document.getElementById('card').value;
        // Luhn Algorithm check.
            var nCheck = 0, nDigit = 0, bEven = false;
            value = value.replace(/\D/g, "");
        
            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n),
                    nDigit = parseInt(cDigit, 10);
        
                if (bEven) {
                    if ((nDigit *= 2) > 9) nDigit -= 9;
                }
        
                nCheck += nDigit;
                bEven = !bEven;
            }
            //pop up alerts
            let b = (nCheck % 10) == 0;
            if (b){
                alert('Thank You!')
                location.reload()
            } else {
                alert('The card number is invalid, please check the digits.')
            }
    }
//checks if a name has been entered
function namecheck(){
 let name = document.getElementById('name').value
 if(name === ""){
    alert('Please enter your name')
 }
 }
//checks if an email has been entered
 function emailcheck(){
     let email = document.getElementById('email').value
     if(email === "")
     alert('Please enter a valid email address')
 }

function doEverything(){
    namecheck()
    emailcheck()
    validate()
}
//looks for submit to be clicked, then runs all checks
function init(){
    document.getElementById('submit').onclick = doEverything
}
window.onload = init;