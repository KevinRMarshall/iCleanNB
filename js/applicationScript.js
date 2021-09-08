window.onload = function() {
   document.querySelector(".application-form").addEventListener("submit", submitForm);
}

function submitForm(e) {
   e.preventDefault();

   //user information
   let firstName = document.getElementById("inputFirstName").value;
   let lastName = document.getElementById("inputLastName").value;
   let email = document.getElementById("inputEmail").value;
   let phone = document.getElementById("inputPhone").value;
   let position = null;
   let resume = document.getElementById("resume").value;
   let city = null;
   let url = document.getElementById("inputLinkedin").value;

   //validation

   let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   let validPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

   let valid = true;


   if (firstName == "") {
      document.getElementById("invalidFirstName").hidden = false;
      valid = false;
      document.getElementById("inputFirstName").style.borderColor = "red";

   } else {
      document.getElementById("invalidFirstName").hidden = true;
      document.getElementById("inputFirstName").style.borderColor = "#3498db";
   }
   if (lastName == "") {
      document.getElementById("invalidLastName").hidden = false;
      valid = false;
      document.getElementById("inputLastName").style.borderColor = "red";
   } else {
      document.getElementById("invalidLastName").hidden = true;
      document.getElementById("inputLastName").style.borderColor = "#3498db";
   }
   if (email.match(validEmail)) {
      document.getElementById("invalidEmail").hidden = true;
      document.getElementById("inputEmail").style.borderColor = "#3498db";

   } else {
      document.getElementById("invalidEmail").hidden = false;
      valid = false;
      document.getElementById("inputEmail").style.borderColor = "red";

   }

   if (phone.match(validPhone)) {
      document.getElementById("invalidPhone").hidden = true;
      document.getElementById("inputPhone").style.borderColor = "#3498db";

   } else {
      document.getElementById("invalidPhone").hidden = false;
      valid = false;
      document.getElementById("inputPhone").style.borderColor = "red";
   }


   //city
   var card = document.getElementById("inputCity");
   if (card.selectedIndex == 0) {
      valid = false;
      document.getElementById("inputCity").style.borderColor = "red";
      document.getElementById("invalidCity").hidden = false;
   } else {

      document.getElementById("inputCity").style.borderColor = "#3498db";
      city = document.getElementById("inputCity").value;
      document.getElementById("invalidCity").hidden = true;
   }

   //position
   var pos = document.getElementById("inputPosition");
   if (pos.selectedIndex == 0) {
      valid = false;
      document.getElementById("inputPosition").style.borderColor = "red";
      document.getElementById("invalidPosition").hidden = false;
   } else {
      document.getElementById("inputPosition").style.borderColor = "#3498db";
      position = document.getElementById("inputPosition").value;
      document.getElementById("invalidPosition").hidden = true;
   }

   //resume
   if (resume == "") {
      document.getElementById("invalidResume").hidden = false;
      valid = false;
      document.getElementById("resume").style.borderColor = "red";

   } else {
      document.getElementById("invalidResume").hidden = true;
      document.getElementById("resume").style.borderColor = "#3498db";
   }
   
   //linkedin URL
   


   if (valid == true) {
      document.querySelector(".application-form").reset();
      sendEmail(firstName, lastName, email, phone, city, position, url, resume);
   }else {
      myAlertBottom();
	  document.getElementById('applicationForm').scrollIntoView();      
   }

}

function sendEmail(firstName, lastName, email, phone, city, position, url, resume) {

   document.getElementById("sending").hidden = false;
   document.getElementById("submitApp").disabled = true;

   Email.send({
      SecureToken: "2fe7a9b8-7fef-4a02-990c-f7716d6b3de4",
      To: "KevRMarshall@gmail.com",
      From: email,
      Subject: `${firstName} ${lastName} has submitted an application!`,
      Body: `<b><u>Name:</b></u> ${firstName} ${lastName} <br/> <b><u>Email:</b></u> ${email} <br/> <b><u>Phone:</b></u> ${phone} <br/> <b><u>Position:</b></u> ${position} <br/> <b><u>Location:</b></u> ${city} <br/> <b><u>LinkedIn URL:</b></u> ${url} <br/> <b><u>Résumé:</b></u> ${resume}`,

   }).then((message) => window.location.href = 'thankyou.html');

}

function bringToApplication() {

   document.getElementById('startApplication').scrollIntoView();
}

function myAlertBottom() {
   $(".myAlert-bottom").show();
   setTimeout(function() {
      $(".myAlert-bottom").fadeIn(0).delay(8000).fadeOut(2000);
   });
}