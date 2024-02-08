// JUST FOR THE DEMO, change the color

// ('button').on('click', function(event){
  
//     event.preventDefault();
  
//     $(this)
//       .blur()
//       .addClass('is-submitted')
//       .find('.button__content')
//         .text('Thanks');
//   });
  
  // var i = 0;
  // var colors = [
  //   "#f39c12",
  //   "#16a085",
  //   "#27ae60",
  //   "#2980b9",
  //   "#8e44ad",
  //   "#2c3e50",
  //   "#c0392b",
  //   "#d35400"
  // ];
  
  
//   setTimeout(function(){
//     if (i >= colors.length) {
//       i = 0;
//     }
//     $('body').css('color', colors[i]);
    
//     i+=1;
//   }, 1000);
  

//   function ValidateEmail(mail) 
//   {
//    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
//     {
//       return (true)
//     }
//       alert("You have entered an invalid email address!")
//       return (false)
//   }

//   let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

// let testEmails = ["notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"];

// testEmails.forEach((address) => {
//   console.log(regex.test(address))
// });

function validateEmail(email) {
  // Regular expression pattern for email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Return true if the email matches the pattern, false otherwise
  return emailPattern.test(email);
}


const emailInput = document.getElementById('email');
const submitButton = document.getElementById("submit")


submitButton.addEventListener('click', function(event) {
  const email = emailInput.value.trim();

  if (email === '') {
    // Email field is empty, prevent form submission and display an error message
    event.preventDefault();
    alert('Ay yoo, you need to enter a valid email address plz');
  } else if (validateEmail(email)) {
    // Email is valid, proceed with form submission or further processing
    // ...
  } else {
    // Email is invalid, prevent form submission and display an error message
    event.preventDefault();
    alert('Please enter a valid email address.');
  }
});