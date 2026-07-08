/*
  Name: Sebastian Salazar
  File: SebasSal3371HW.js
  Purpose: Validating data from patient intake form (on the fly)
*/

function setup() {

var error_flag = 0;
}

function checkfname()
 {
        x = document.getElementById("fname").value;
        if(x.length < 1) {
              document.getElementById("namealert").innerHTML = "Entered name is too short.";
              error_flag = 1;
      }
      else {
         if (x.match(/[a-zA-Z']{1,30}/)) {
             document.getElementById("namealert").innerHTML = "";
         }
         else {
             document.getElementById("namealert").innerHTML = "Characters not allowed.";
             error_flag = 1;
         }
      }      
  }

function checkmi()
  {
        x = document.getElementById("mi").value;
        if(x.length > 0) {
              if (x.match(/[a-zA-Z]{1}/)) {
              document.getElementById("namealert").innerHTML = "";
           }
           else  {
              document.getElementById("namealert").innerHTML = "Characters not allowed.";
              error_flag = 1;
              }
         }
   }

function checklname()
 {
      x = document.getElementById("lname").value;
      if(x.length < 1) {
           document.getElementById("namealert").innerHTML = "Entered name is too short.";
           error_flag = 1;
      }
      else {
        if (x.match(/[a-zA-Z'-]{1,30}/)) {
           document.getElementById("namealert").innerHTML = "";
        }
        else {
           document.getElementById("namealert").innerHTML = "Characters not allowed.";
           error_flag = 1;
          }
      }
 }

function checkdates() {
}

function checkssn() {
}

function checkemail() {
}

function checkphone() {
}


function checkaddress1()
  {
       x = document.getElementById("addressline1").value;
       if (x.length < 2) {
          document.getElementById("addressalert").innerHTML = "Please enter an address.";
          error_flag = 1;
         }
         else {
            document.getElementById("addressalert").innerHTML = "";
         }
   }

function checkaddress2() {
        x = document.getElementById("addressline2").value;
        if (x.length < 2) {
           document.getElementById("addressalert").innerHTML = "Please enter a valid address.";
           error_flag = 1;
          }
          else {
             document.getElementById("addressalert").innerHTML = "";
          }
}

function checkcity() {
        if (document.getElementById("city").value.match(/[a-zA-Z]{2,30}/)) {
            document.getElementById("locationalert").innerHTML = "";
        }
        else {
           document.getElementById("locationalert").innerHTML = "Not enough characters in city field.";
           error_flag = 1;
              }
}

function checkstate() {
        if (document.getElementById("state").length = 0){
            error_flag = 1;
        }

        y = document.getElementById("state").value;
            if(y=="") {
                 document.getElementById("locationalert").innerHTML = "Please select a state";
                 error_flag = 1;
            }
            else {
              document.getElementById("locationalert").innerHTML = "";
            }
}

function checkzipcode() {
     x = document.getElementById("zipcode").value;
     if (x.match(/[\d]{5}/)) {
         document.getElementById("locationalert").innerHTML = "";
         }
         else {
           document.getElementById("locationalert").innerHTML = "Please enter a valid zip code.";
           error_flag = 1;
           }
    }


   

function checkuserid() {
  x = document.getElementById("userid").value;
  if (x.match(/[^\d][\w-]{5,20}/)) {
      document.getElementById("uservalidation").innerHTML = "";
      }
      else {
        document.getElementById("uservalidation").innerHTML = "Characters not allowed in user ID field.";
        error_flag = 1;
        }
   }
 

function verifypassword() {
   x = document.getElementById("pass").value;
       if(x.length < 8) {
           document.getElementById("passwordmessage1").innerHTML = "Not enough characters in password field.";
           error_flag = 1;
          }
       else {
       if (x.match(/[\w]/)) {
          document.getElementById("passwordmessage1").innerHTML = "";
          }
            else {
             document.getElementById("passwordmessage1").innerHTML = "Invalid characters in password field.";
             error_flag = 1;
             }
     } 

}


function checkpasswords() {
  x=document.getElementById("pass").value;
  y=document.getElementById("reenterpass").value;

  if ( x==y ) {
        document.getElementById("passwordmatching").innerHTML = "Your passwords   match.";
           }
           else {
              document.getElementById("passwordmatching").innerHTML = "Your passwords do not match.";
              error_flag = 1;
                 }
    }


function obtainresponses() {
   let formresponses = document.getElementById("formMedical");
   let outputofform;
   let datatype;
   let i;

}



/*
Used help from w3schools.com and https://profjake.w3spaces.com/MIS3371/homework3.html, https://profjake.w3spaces.com/MIS3371/homework3.js, and https://profjake.w3spaces.com/MIS3371/homework3.css.



*/


   

  