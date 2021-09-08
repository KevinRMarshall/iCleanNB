window.onload = function() {
   document.querySelector(".giftcard-form").addEventListener("submit", submitForm);
}

function submitForm(e) {
   e.preventDefault();

   //user information
   let firstName = document.getElementById("inputFirstName").value;
   let lastName = document.getElementById("inputLastName").value;
   let email = document.getElementById("inputEmail").value;
   let phone = document.getElementById("inputPhone").value;
   let giftAmount = null;

   //validation

   let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   let validPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

   let valid = true;


   if (firstName == "") {
      document.getElementById("invalidFirstName").hidden = false;
      valid = false;
      document.getElementById('formGiftCard').scrollIntoView();
      document.getElementById("inputFirstName").style.borderColor = "red";

   } else {
      document.getElementById("invalidFirstName").hidden = true;
      document.getElementById("inputFirstName").style.borderColor = "#3498db";
   }
   if (lastName == "") {
      document.getElementById("invalidLastName").hidden = false;
      valid = false;
      document.getElementById('formGiftCard').scrollIntoView();
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
      document.getElementById('formGiftCard').scrollIntoView();
      document.getElementById("inputEmail").style.borderColor = "red";
   }

   if (phone.match(validPhone)) {
      document.getElementById("invalidPhone").hidden = true;
      document.getElementById("inputPhone").style.borderColor = "#3498db";

   } else {
      document.getElementById("invalidPhone").hidden = false;
      valid = false;
      document.getElementById('formGiftCard').scrollIntoView();
      document.getElementById("inputPhone").style.borderColor = "red";
   }

   //gift amount
   if (document.getElementById("threeHours").checked) {
      giftAmount = "$100 gift card";
      document.getElementById("invalidAmount").hidden = true;
   } else if (document.getElementById("sixHours").checked) {
      giftAmount = "$150  gift card";
      document.getElementById("invalidAmount").hidden = true;
   } else if (document.getElementById("nineHours").checked) {
      giftAmount = "$200 gift card";
      document.getElementById("invalidAmount").hidden = true;
   } else if (document.getElementById("other").checked) {
      document.getElementById("invalidAmount").hidden = true;
      let otherAmountInfo = document.getElementById("inputOther").value;

      if (otherAmountInfo == "") {
         valid = false;
         document.getElementById("invalidOther").hidden = false;
         document.getElementById("inputOther").style.borderColor = "red";
      } else {
         giftAmount = `$ ${otherAmountInfo}`;
         document.getElementById("invalidOther").hidden = true;
         document.getElementById("inputOther").style.borderColor = "#3498db";
      }
   } else {
      valid = false;
      document.getElementById("invalidAmount").hidden = false;
   }

   if (valid == true) {
      document.querySelector(".giftcard-form").reset();
      sendEmail(firstName, lastName, email, phone, giftAmount);
   }else {
      myAlertBottom();
      document.getElementById('formGiftCard').scrollIntoView();
   }
}

function sendEmail(firstName, lastName, email, phone, giftAmount) {

   document.getElementById("sending").hidden = false;
   document.getElementById("submitCard").disabled = true;

   Email.send({
      SecureToken: "2fe7a9b8-7fef-4a02-990c-f7716d6b3de4",
      To: "KevRMarshall@gmail.com , ramboknife1989@gmail.com , KMarshall3782@conestogac.on.ca",
      From: "KevRMarshall@gmail.com",
      Subject: `${firstName} ${lastName} has a gift card request!`,
      Body: `<b><u>Name:</b></u> ${firstName} ${lastName} <br/> <b><u>Email:</b></u> ${email} <br/> <b><u>Phone:</b></u> ${phone} <br/> <b><u>Gift Amount:</b></u> ${giftAmount}`,

   }).then((message) => window.location.href = 'thankyou.html');

}

function hiddenField() {
   document.getElementById("otherAmount").hidden = false;
}

function myAlertBottom() {
   $(".myAlert-bottom").show();
   setTimeout(function() {
      $(".myAlert-bottom").fadeIn(0).delay(8000).fadeOut(2000);
   });
}