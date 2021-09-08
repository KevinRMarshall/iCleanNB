window.onload = function() {
   document.querySelector(".referral-form").addEventListener("submit", submitForm);
}

function submitForm(e) {
   e.preventDefault();

   //user information
   let firstName = document.getElementById("inputFirstName").value;
   let lastName = document.getElementById("inputLastName").value;
   let email = document.getElementById("inputEmail").value;
   let phone = document.getElementById("inputPhone").value;

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


   if (valid == true) {
      document.querySelector(".referral-form").reset();
      sendEmail(firstName, lastName, email, phone);
   }else {
      myAlertBottom();      
   }

}

function sendEmail(firstName, lastName, email, phone) {

   document.getElementById("sending").hidden = false;
   document.getElementById("submitRef").disabled = true;

   Email.send({
      SecureToken: "2fe7a9b8-7fef-4a02-990c-f7716d6b3de4",
      To: "KevRMarshall@gmail.com",
      From: email,
      Subject: `${firstName} ${lastName} has a referral request!`,
      Body: `<b><u>Name:</b></u> ${firstName} ${lastName} <br/> <b><u>Email:</b></u> ${email} <br/> <b><u>Phone:</b></u> ${phone} <br/>`,

   }).then((message) => window.location.href = 'thankyou.html');

}

function myAlertBottom() {
   $(".myAlert-bottom").show();
   setTimeout(function() {
      $(".myAlert-bottom").fadeIn(0).delay(8000).fadeOut(2000);
   });
}