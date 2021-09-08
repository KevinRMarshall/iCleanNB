//new times
let bathroomSmall = 15;
let bathroomMedium = 45;
let bathroomLarge = 60;

let bedroomSmall = 15;
let bedroomMedium = 30;
let bedroomLarge = 45;

let commonSmall = 15;
let commonMedium = 30;
let commonLarge = 45;

let kitchenSmall = 15;
let kitchenMedium = 30;
let kitchenLarge = 45;

let walkTest = false;
let cottage = false;

//cleaning services
function houseCleaning() {

  if (document.getElementById("houseCleaningSelect").checked = true) {

    document.getElementById("houseClean").hidden = false;
    document.getElementById("cottage").hidden = false;
    document.getElementById("maidServices").hidden = true;
    document.getElementById("officeClean").hidden = true;
    document.getElementById("totalPriceText").style.visibility = 'visible';

  }

  if (walkTest == true) {
    document.getElementById("houseSelected").hidden = true;
    document.getElementById("totalPriceText").style.visibility = 'hidden';
    document.getElementById("walkThroughNeeded").hidden = false;
    document.getElementById("maidSelected").hidden = true;
    document.getElementById("officeSelected").hidden = true;
    document.getElementById("walkThrough").hidden = false;

  } else {
    walkTest == false;
    document.getElementById("houseSelected").hidden = false;
    document.getElementById("maidSelected").hidden = true;
    document.getElementById("officeSelected").hidden = true;
    document.getElementById("walkThroughNeeded").hidden = true;
    document.getElementById("walkThrough").hidden = true;
  }

}

function maidService() {

  if (document.getElementById("maidServicesSelect").checked = true) {

    document.getElementById("maidServices").hidden = false;
    document.getElementById("houseClean").hidden = true;
    document.getElementById("cottage").hidden = true;
    document.getElementById("officeClean").hidden = true;
    //clear estimation time
    document.getElementById("totalPriceText").style.visibility = 'hidden';
    document.getElementById("walkThrough").hidden = true;
    document.getElementById("walkThroughNeeded").hidden = true;
  }

  document.getElementById("maidSelected").hidden = false;
  document.getElementById("houseSelected").hidden = true;
  document.getElementById("officeSelected").hidden = true;

}

function officeCleaning() {

  if (document.getElementById("officeCleaningSelect").checked = true) {

    document.getElementById("officeClean").hidden = false;
    document.getElementById("houseClean").hidden = true;
    document.getElementById("cottage").hidden = true;
    document.getElementById("maidServices").hidden = true;
    //clear estimation time
    document.getElementById("totalPriceText").style.visibility = 'hidden';
    document.getElementById("walkThrough").hidden = true;
    document.getElementById("walkThroughNeeded").hidden = true;

  }

  document.getElementById("officeSelected").hidden = false;
  document.getElementById("houseSelected").hidden = true;
  document.getElementById("maidSelected").hidden = true;

}

function updatePrice() {

  let bathroomPrice = document.getElementById("bathroomCountHouse").value;
  let bedroomPrice = document.getElementById("bedroomCountHouse").value;
  let kitchenPrice = document.getElementById("kitchenCountHouse").value;
  let commonPrice = document.getElementById("commonCountHouse").value;
  let floorAmount = document.getElementById("floorCount").value;
  let basementType = document.getElementById("basement").value;
  let cottage = document.querySelector('input[name="cottage"]:checked').value;
  let totalTime = 0;

  if (bathroomPrice === "5+" || bedroomPrice === "7+" || kitchenPrice === "5+" || commonPrice === "5+" || cottage == "Yes") {
    WalkThrough();
  } else {
    WalkThroughNotNeeded();
  }

  //new time taken
  var oneBedroom = $("input:radio[name=btnradioCleanNew]:checked").val();
  var twoBedroom = $("input:radio[name=btnradioClean1]:checked").val();
  var threeBedroom = $("input:radio[name=btnradioClean2]:checked").val();
  var fourBedroom = $("input:radio[name=btnradioClean3]:checked").val();
  var fiveBedroom = $("input:radio[name=btnradioClean4]:checked").val();
  var sixBedroom = $("input:radio[name=btnradioClean5]:checked").val();

  var oneBathroom = $("input:radio[name=btnradioCleanBath]:checked").val();
  var twoBathroom = $("input:radio[name=btnradioCleanBath1]:checked").val();
  var threeBathroom = $("input:radio[name=btnradioCleanBath2]:checked").val();
  var fourBathroom = $("input:radio[name=btnradioCleanBath3]:checked").val();

  var oneKitchen = $("input:radio[name=btnradioCleanKitch]:checked").val();
  var twoKitchen = $("input:radio[name=btnradioCleanKitch1]:checked").val();
  var threeKitchen = $("input:radio[name=btnradioCleanKitch2]:checked").val();
  var fourKitchen = $("input:radio[name=btnradioCleanKitch3]:checked").val();

  var oneCommon = $("input:radio[name=btnradioCleanCommon]:checked").val();
  var twoCommon = $("input:radio[name=btnradioCleanCommon1]:checked").val();
  var threeCommon = $("input:radio[name=btnradioCleanCommon2]:checked").val();
  var fourCommon = $("input:radio[name=btnradioCleanCommon3]:checked").val();

  //figuring out bedroom time
  if (bedroomPrice == 1) {

    if (oneBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (oneBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (oneBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bedroomPrice == 2) {

    if (oneBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (oneBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (oneBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (twoBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (twoBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bedroomPrice == 3) {

    if (oneBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (oneBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (oneBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (twoBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (twoBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (threeBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (threeBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (threeBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bedroomPrice == 4) {

    if (oneBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (oneBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (oneBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (twoBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (twoBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (threeBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (threeBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (threeBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (fourBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (fourBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (fourBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bedroomPrice == 5) {

    if (oneBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (oneBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (oneBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (twoBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (twoBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (threeBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (threeBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (threeBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (fourBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (fourBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (fourBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
    if (fiveBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (fiveBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (fiveBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bedroomPrice == 6) {

    if (oneBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (oneBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (oneBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (twoBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (twoBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (threeBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (threeBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (threeBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }

    if (fourBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (fourBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (fourBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
    if (fiveBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (fiveBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (fiveBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
    if (sixBedroom == "Small") {
      totalTime += bedroomSmall;
    } else if (sixBedroom == "Medium") {
      totalTime += bedroomMedium;
    } else if (sixBedroom == "Large") {
      totalTime += bedroomLarge;
    } else {
      totalTime += 0;
    }
  }
  //figuring out bathroom time
  if (bathroomPrice == 1) {

    if (oneBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (oneBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (oneBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bathroomPrice == 2) {

    if (oneBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (oneBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (oneBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (twoBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (twoBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bathroomPrice == 3) {

    if (oneBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (oneBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (oneBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (twoBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (twoBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }

    if (threeBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (threeBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (threeBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }
  } else if (bathroomPrice == 4) {

    if (oneBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (oneBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (oneBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }

    if (twoBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (twoBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (twoBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }

    if (threeBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (threeBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (threeBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }
    if (fourBathroom == "Halfbath") {
      totalTime += bathroomSmall;
    } else if (fourBathroom == "Full") {
      totalTime += bathroomMedium;
    } else if (fourBathroom == "Custom") {
      totalTime += bathroomLarge;
    } else {
      totalTime += 0;
    }
  }
  //figuring out kitchen
  if (kitchenPrice == 1) {

    if (oneKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (oneKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (oneKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }
  } else if (kitchenPrice == 2) {

    if (oneKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (oneKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (oneKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }

    if (twoKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (twoKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (twoKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }
  } else if (kitchenPrice == 3) {

    if (oneKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (oneKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (oneKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }

    if (twoKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (twoKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (twoKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }

    if (threeKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (threeKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (threeKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }
  } else if (kitchenPrice == 4) {

    if (oneKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (oneKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (oneKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }

    if (twoKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (twoKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (twoKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }

    if (threeKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (threeKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (threeKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }
    if (fourKitchen == "Small") {
      totalTime += kitchenSmall;
    } else if (fourKitchen == "Medium") {
      totalTime += kitchenMedium;
    } else if (fourKitchen == "Large") {
      totalTime += kitchenLarge;
    } else {
      totalTime += 0;
    }
  }

  //figuring out common time
  if (commonPrice == 1) {

    if (oneCommon == "Small") {
      totalTime += commonSmall;
    } else if (oneCommon == "Medium") {
      totalTime += commonMedium;
    } else if (oneCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }
  } else if (commonPrice == 2) {

    if (oneCommon == "Small") {
      totalTime += commonSmall;
    } else if (oneCommon == "Medium") {
      totalTime += commonMedium;
    } else if (oneCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }

    if (twoCommon == "Small") {
      totalTime += commonSmall;
    } else if (twoCommon == "Medium") {
      totalTime += commonMedium;
    } else if (twoCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }
  } else if (commonPrice == 3) {

    if (oneCommon == "Small") {
      totalTime += commonSmall;
    } else if (oneCommon == "Medium") {
      totalTime += commonMedium;
    } else if (oneCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }

    if (twoCommon == "Small") {
      totalTime += commonSmall;
    } else if (twoCommon == "Medium") {
      totalTime += commonMedium;
    } else if (twoCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }

    if (threeCommon == "Small") {
      totalTime += commonSmall;
    } else if (threeCommon == "Medium") {
      totalTime += commonMedium;
    } else if (threeCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }
  } else if (commonPrice == 4) {

    if (oneCommon == "Small") {
      totalTime += commonSmall;
    } else if (oneCommon == "Medium") {
      totalTime += commonMedium;
    } else if (oneCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }

    if (twoCommon == "Small") {
      totalTime += commonSmall;
    } else if (twoCommon == "Medium") {
      totalTime += commonMedium;
    } else if (twoCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }

    if (threeCommon == "Small") {
      totalTime += commonSmall;
    } else if (threeCommon == "Medium") {
      totalTime += commonMedium;
    } else if (threeCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }
    if (fourCommon == "Small") {
      totalTime += commonSmall;
    } else if (fourCommon == "Medium") {
      totalTime += commonMedium;
    } else if (fourCommon == "Large") {
      totalTime += commonLarge;
    } else {
      totalTime += 0;
    }
  }

  var num = totalTime;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  totalPriceText.innerHTML = rhours + " hour(s) and " + rminutes + " minute(s)";

  document.getElementById("bathroomCountText").innerHTML = bathroomPrice;
  document.getElementById("bedroomCountText").innerHTML = bedroomPrice;
  document.getElementById("kitchenCountText").innerHTML = kitchenPrice;
  document.getElementById("commonCountText").innerHTML = commonPrice;
  document.getElementById("floorCountText").innerHTML = floorAmount;
  document.getElementById("basementCountText").innerHTML = basementType;

  //bedroom information	
  if (bedroomPrice == 1) {
    document.getElementById("bedroomOne").hidden = false;
    document.getElementById("bedroomTwo").hidden = true;
    document.getElementById("bedroomThree").hidden = true;
    document.getElementById("bedroomFour").hidden = true;
    document.getElementById("bedroomFive").hidden = true;
    document.getElementById("bedroomSix").hidden = true;
  } else if (bedroomPrice == 2) {
    document.getElementById("bedroomOne").hidden = false;
    document.getElementById("bedroomTwo").hidden = false;
    document.getElementById("bedroomThree").hidden = true;
    document.getElementById("bedroomFour").hidden = true;
    document.getElementById("bedroomFive").hidden = true;
    document.getElementById("bedroomSix").hidden = true;
  } else if (bedroomPrice == 3) {
    document.getElementById("bedroomOne").hidden = false;
    document.getElementById("bedroomTwo").hidden = false;
    document.getElementById("bedroomThree").hidden = false;
    document.getElementById("bedroomFour").hidden = true;
    document.getElementById("bedroomFive").hidden = true;
    document.getElementById("bedroomSix").hidden = true;
  } else if (bedroomPrice == 4) {
    document.getElementById("bedroomOne").hidden = false;
    document.getElementById("bedroomTwo").hidden = false;
    document.getElementById("bedroomThree").hidden = false;
    document.getElementById("bedroomFour").hidden = false;
    document.getElementById("bedroomFive").hidden = true;
    document.getElementById("bedroomSix").hidden = true;
  } else if (bedroomPrice == 5) {
    document.getElementById("bedroomOne").hidden = false;
    document.getElementById("bedroomTwo").hidden = false;
    document.getElementById("bedroomThree").hidden = false;
    document.getElementById("bedroomFour").hidden = false;
    document.getElementById("bedroomFive").hidden = false;
    document.getElementById("bedroomSix").hidden = true;
  } else if (bedroomPrice == 6) {
    document.getElementById("bedroomOne").hidden = false;
    document.getElementById("bedroomTwo").hidden = false;
    document.getElementById("bedroomThree").hidden = false;
    document.getElementById("bedroomFour").hidden = false;
    document.getElementById("bedroomFive").hidden = false;
    document.getElementById("bedroomSix").hidden = false;

  } else {
    document.getElementById("bedroomOne").hidden = true;
    document.getElementById("bedroomTwo").hidden = true;
    document.getElementById("bedroomThree").hidden = true;
    document.getElementById("bedroomFour").hidden = true;
    document.getElementById("bedroomFive").hidden = true;
    document.getElementById("bedroomSix").hidden = true;
  }

  //kitchen information
  if (kitchenPrice == 1) {
    document.getElementById("kitchenOne").hidden = false;
    document.getElementById("kitchenTwo").hidden = true;
    document.getElementById("kitchenThree").hidden = true;
    document.getElementById("kitchenFour").hidden = true;
  } else if (kitchenPrice == 2) {
    document.getElementById("kitchenOne").hidden = false;
    document.getElementById("kitchenTwo").hidden = false;
    document.getElementById("kitchenThree").hidden = true;
    document.getElementById("kitchenFour").hidden = true;
  } else if (kitchenPrice == 3) {
    document.getElementById("kitchenOne").hidden = false;
    document.getElementById("kitchenTwo").hidden = false;
    document.getElementById("kitchenThree").hidden = false;
    document.getElementById("kitchenFour").hidden = true;
  } else if (kitchenPrice == 4) {
    document.getElementById("kitchenOne").hidden = false;
    document.getElementById("kitchenTwo").hidden = false;
    document.getElementById("kitchenThree").hidden = false;
    document.getElementById("kitchenFour").hidden = false;
  } else {
    document.getElementById("kitchenOne").hidden = true;
    document.getElementById("kitchenTwo").hidden = true;
    document.getElementById("kitchenThree").hidden = true;
    document.getElementById("kitchenFour").hidden = true;
  }

  //common information
  if (commonPrice == 1) {
    document.getElementById("commonOne").hidden = false;
    document.getElementById("commonTwo").hidden = true;
    document.getElementById("commonThree").hidden = true;
    document.getElementById("commonFour").hidden = true;
  } else if (commonPrice == 2) {
    document.getElementById("commonOne").hidden = false;
    document.getElementById("commonTwo").hidden = false;
    document.getElementById("commonThree").hidden = true;
    document.getElementById("commonFour").hidden = true;
  } else if (commonPrice == 3) {
    document.getElementById("commonOne").hidden = false;
    document.getElementById("commonTwo").hidden = false;
    document.getElementById("commonThree").hidden = false;
    document.getElementById("commonFour").hidden = true;
  } else if (commonPrice == 4) {
    document.getElementById("commonOne").hidden = false;
    document.getElementById("commonTwo").hidden = false;
    document.getElementById("commonThree").hidden = false;
    document.getElementById("commonFour").hidden = false;
  } else {
    document.getElementById("commonOne").hidden = true;
    document.getElementById("commonTwo").hidden = true;
    document.getElementById("commonThree").hidden = true;
    document.getElementById("commonFour").hidden = true;
  }

  //bathroom information
  if (bathroomPrice == 1) {
    document.getElementById("bathroomOne").hidden = false;
    document.getElementById("bathroomTwo").hidden = true;
    document.getElementById("bathroomThree").hidden = true;
    document.getElementById("bathroomFour").hidden = true;
  } else if (bathroomPrice == 2) {
    document.getElementById("bathroomOne").hidden = false;
    document.getElementById("bathroomTwo").hidden = false;
    document.getElementById("bathroomThree").hidden = true;
    document.getElementById("bathroomFour").hidden = true;
  } else if (bathroomPrice == 3) {
    document.getElementById("bathroomOne").hidden = false;
    document.getElementById("bathroomTwo").hidden = false;
    document.getElementById("bathroomThree").hidden = false;
    document.getElementById("bathroomFour").hidden = true;
  } else if (bathroomPrice == 4) {
    document.getElementById("bathroomOne").hidden = false;
    document.getElementById("bathroomTwo").hidden = false;
    document.getElementById("bathroomThree").hidden = false;
    document.getElementById("bathroomFour").hidden = false;

  } else {
    document.getElementById("bathroomOne").hidden = true;
    document.getElementById("bathroomTwo").hidden = true;
    document.getElementById("bathroomThree").hidden = true;
    document.getElementById("bathroomFour").hidden = true;
  }

}

//sending email stuff

window.onload = function() {
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
}

function submitForm(e) {

  e.preventDefault();

  let valid = true;

  //contact information
  let firstName = document.getElementById("inputFirstName").value;
  let lastName = document.getElementById("inputLastName").value;
  let email = document.getElementById("inputEmail").value;
  let phone = document.getElementById("inputPhone").value;

  //contact method
  let emailContact = document.getElementById("emailContact").checked ? 'Email, ' : '';
  let phoneContact = document.getElementById("phoneContact").checked ? 'Phone, ' : '';
  let textContact = document.getElementById("textContact").checked ? 'Text' : '';

  let contactString = (emailContact + phoneContact + textContact);
  let contactStringClean = contactString.replace(/,(?=\s*$)/, '');

  if (contactStringClean == "") {
    document.getElementById("invalidContact").hidden = false;
    valid = false;
  } else {
    document.getElementById("invalidContact").hidden = true;
  }

  //address
  let address = document.getElementById("inputStreet").value;
  let apartment = document.getElementById("inputApart").value;
  let city = document.getElementById("inputCity").value;
  let postalCode = document.getElementById("inputPostal").value;

  //userServices	
  let serviceType = "";

  if (document.getElementById("maidServicesSelect").checked) {
    serviceType = "Maid Service";
    //get information for maid service
    serviceString = "Walkthrough needed";
    document.getElementById("invalidService").hidden = true;

  } else if (document.getElementById("houseCleaningSelect").checked) {
    var bedroomSelect = document.getElementById("bedroomCountHouse");
    var bathroomSelect = document.getElementById("bathroomCountHouse");
    var kitchenSelect = document.getElementById("kitchenCountHouse");
    var commonSelect = document.getElementById("commonCountHouse");

    serviceType = "House Cleaning";
    var serviceString = "";
    var cleaningSpecifics = document.getElementById("cleaningSpecificsHouse").value;
    document.getElementById("invalidService").hidden = true;
    //get information for house service
    //bedroom info
    let bedroomCountHouse = document.getElementById("bedroomCountHouse").value;
    if (bedroomCountHouse == 1) {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var oneBedroom = $("input:radio[name=btnradioCleanNew]:checked").val();
      document.getElementById("invalidBedroom").hidden = true;
      var bedroomInfo = `One: ${oneBedroom}`;

    } else if (bedroomCountHouse == 2) {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var oneBedroom = $("input:radio[name=btnradioCleanNew]:checked").val();
      var twoBedroom = $("input:radio[name=btnradioClean1]:checked").val();
      document.getElementById("invalidBedroom").hidden = true;
      var bedroomInfo = `Two: ${oneBedroom} , ${twoBedroom}`;

    } else if (bedroomCountHouse == 3) {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var oneBedroom = $("input:radio[name=btnradioCleanNew]:checked").val();
      var twoBedroom = $("input:radio[name=btnradioClean1]:checked").val();
      var threeBedroom = $("input:radio[name=btnradioClean2]:checked").val();
      document.getElementById("invalidBedroom").hidden = true;
      var bedroomInfo = `Three: ${oneBedroom} , ${twoBedroom} , ${threeBedroom}`;

    } else if (bedroomCountHouse == 4) {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var oneBedroom = $("input:radio[name=btnradioCleanNew]:checked").val();
      var twoBedroom = $("input:radio[name=btnradioClean1]:checked").val();
      var threeBedroom = $("input:radio[name=btnradioClean2]:checked").val();
      var fourBedroom = $("input:radio[name=btnradioClean3]:checked").val();
      document.getElementById("invalidBedroom").hidden = true;
      var bedroomInfo = `Four: ${oneBedroom} , ${twoBedroom} , ${threeBedroom} , ${fourBedroom}`;

    } else if (bedroomCountHouse == 5) {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var oneBedroom = $("input:radio[name=btnradioCleanNew]:checked").val();
      var twoBedroom = $("input:radio[name=btnradioClean1]:checked").val();
      var threeBedroom = $("input:radio[name=btnradioClean2]:checked").val();
      var fourBedroom = $("input:radio[name=btnradioClean3]:checked").val();
      var fiveBedroom = $("input:radio[name=btnradioClean4]:checked").val();
      document.getElementById("invalidBedroom").hidden = true;
      var bedroomInfo = `Five: ${oneBedroom} , ${twoBedroom} , ${threeBedroom} , ${fourBedroom} , ${fiveBedroom}`;

    } else if (bedroomCountHouse == 6) {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var oneBedroom = $("input:radio[name=btnradioCleanNew]:checked").val();
      var twoBedroom = $("input:radio[name=btnradioClean1]:checked").val();
      var threeBedroom = $("input:radio[name=btnradioClean2]:checked").val();
      var fourBedroom = $("input:radio[name=btnradioClean3]:checked").val();
      var fiveBedroom = $("input:radio[name=btnradioClean4]:checked").val();
      var sixBedroom = $("input:radio[name=btnradioClean5]:checked").val();
      document.getElementById("invalidBedroom").hidden = true;
      var bedroomInfo = `Six: ${oneBedroom} , ${twoBedroom} , ${threeBedroom} , ${fourBedroom} , ${fiveBedroom} , ${sixBedroom}`;

    } else if (bedroomCountHouse === "7+") {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      document.getElementById("invalidBedroom").hidden = true;
      var bedroomInfo = "7+ bedrooms, WALKTHROUGH REQUIRED!";

    } else if (bedroomSelect.selectedIndex == 0) {
      valid = false;
      document.getElementById("bedroomCountHouse").style.borderColor = "red";
      document.getElementById("invalidBedroom").hidden = false;
    } else {
      document.getElementById("invalidBedroom").hidden = true
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var bedroomInfo = "None";
    }

    //bathroom
    let bathroomCountHouse = document.getElementById("bathroomCountHouse").value;
    if (bathroomCountHouse == 1) {
      document.getElementById("bedroomCountHouse").style.borderColor = "#3498db";
      var oneBathroom = $("input:radio[name=btnradioCleanBath]:checked").val();
      document.getElementById("invalidBathroom").hidden = true;
      var bathroomInfo = `One: ${oneBathroom}`;

    } else if (bathroomCountHouse == 2) {
      document.getElementById("bathroomCountHouse").style.borderColor = "#3498db";
      var oneBathroom = $("input:radio[name=btnradioCleanBath]:checked").val();
      var twoBathroom = $("input:radio[name=btnradioCleanBath1]:checked").val();
      document.getElementById("invalidBathroom").hidden = true;
      var bathroomInfo = `Two: ${oneBathroom} , ${twoBathroom}`;

    } else if (bathroomCountHouse == 3) {
      document.getElementById("bathroomCountHouse").style.borderColor = "#3498db";
      var oneBathroom = $("input:radio[name=btnradioCleanBath]:checked").val();
      var twoBathroom = $("input:radio[name=btnradioCleanBath1]:checked").val();
      var threeBathroom = $("input:radio[name=btnradioCleanBath2]:checked").val();
      document.getElementById("invalidBathroom").hidden = true;
      var bathroomInfo = `Three: ${oneBathroom} , ${twoBathroom} , ${threeBathroom}`;

    } else if (bathroomCountHouse == 4) {
      document.getElementById("bathroomCountHouse").style.borderColor = "#3498db";
      var oneBathroom = $("input:radio[name=btnradioCleanBath]:checked").val();
      var twoBathroom = $("input:radio[name=btnradioCleanBath1]:checked").val();
      var threeBathroom = $("input:radio[name=btnradioCleanBath2]:checked").val();
      var fourBathroom = $("input:radio[name=btnradioCleanBath3]:checked").val();
      document.getElementById("invalidBathroom").hidden = true;
      var bathroomInfo = `Four: ${oneBathroom} , ${twoBathroom} , ${threeBathroom} , ${fourBathroom}`;

    } else if (bathroomCountHouse === "5+") {
      document.getElementById("bathroomCountHouse").style.borderColor = "#3498db";
      document.getElementById("invalidBathroom").hidden = true;
      var bathroomInfo = "5+ bedrooms, WALKTHROUGH REQUIRED!";

    } else if (bathroomSelect.selectedIndex == 0) {
      valid = false;
      document.getElementById("bathroomCountHouse").style.borderColor = "red";
      document.getElementById("invalidBathroom").hidden = false;
    } else {
      document.getElementById("invalidBathroom").hidden = true
      document.getElementById("bathroomCountHouse").style.borderColor = "#3498db";
      var bathroomInfo = "None";
    }

    //kitchen
    let kitchenCountHouse = document.getElementById("kitchenCountHouse").value;
    if (kitchenCountHouse == 1) {
      document.getElementById("kitchenCountHouse").style.borderColor = "#3498db";
      var oneKitchen = $("input:radio[name=btnradioCleanKitch]:checked").val();
      document.getElementById("invalidKitchen").hidden = true;
      var kitchenInfo = `One: ${oneKitchen}`;

    } else if (kitchenCountHouse == 2) {
      document.getElementById("kitchenCountHouse").style.borderColor = "#3498db";
      var oneKitchen = $("input:radio[name=btnradioCleanKitch]:checked").val();
      var twoKitchen = $("input:radio[name=btnradioCleanKitch1]:checked").val();
      document.getElementById("invalidKitchen").hidden = true;
      var kitchenInfo = `Two: ${oneKitchen} , ${twoKitchen}`;

    } else if (kitchenCountHouse == 3) {
      document.getElementById("kitchenCountHouse").style.borderColor = "#3498db";
      var oneKitchen = $("input:radio[name=btnradioCleanKitch]:checked").val();
      var twoKitchen = $("input:radio[name=btnradioCleanKitch1]:checked").val();
      var threeKitchen = $("input:radio[name=btnradioCleanKitch2]:checked").val();
      document.getElementById("invalidKitchen").hidden = true;
      var kitchenInfo = `Three: ${oneKitchen} , ${twoKitchen} , ${threeKitchen}`;

    } else if (kitchenCountHouse == 4) {
      document.getElementById("kitchenCountHouse").style.borderColor = "#3498db";
      var oneKitchen = $("input:radio[name=btnradioCleanKitch]:checked").val();
      var twoKitchen = $("input:radio[name=btnradioCleanKitch1]:checked").val();
      var threeKitchen = $("input:radio[name=btnradioCleanKitch2]:checked").val();
      var fourKitchen = $("input:radio[name=btnradioCleanKitch3]:checked").val();
      document.getElementById("invalidKitchen").hidden = true;
      var kitchenInfo = `Four: ${oneKitchen} , ${twoKitchen} , ${threeKitchen} , ${fourKitchen}`;

    } else if (kitchenCountHouse === "5+") {
      document.getElementById("kitchenCountHouse").style.borderColor = "#3498db";
      document.getElementById("invalidKitchen").hidden = true;
      var kitchenInfo = "5+ kitchens, WALKTHROUGH REQUIRED!";

    } else if (kitchenSelect.selectedIndex == 0) {
      valid = false;
      document.getElementById("kitchenCountHouse").style.borderColor = "red";
      document.getElementById("invalidKitchen").hidden = false;
    } else {
      document.getElementById("invalidKitchen").hidden = true
      document.getElementById("kitchenCountHouse").style.borderColor = "#3498db";
      var kitchenInfo = "None";
    }

    //common area
    let commonCountHouse = document.getElementById("commonCountHouse").value;
    if (commonCountHouse == 1) {
      document.getElementById("commonCountHouse").style.borderColor = "#3498db";
      var oneCommon = $("input:radio[name=btnradioCleanCommon]:checked").val();
      document.getElementById("invalidCommon").hidden = true;
      var commonInfo = `One: ${oneCommon}`;

    } else if (commonCountHouse == 2) {
      document.getElementById("commonCountHouse").style.borderColor = "#3498db";
      var oneCommon = $("input:radio[name=btnradioCleanCommon]:checked").val();
      var twoCommon = $("input:radio[name=btnradioCleanCommon1]:checked").val();
      document.getElementById("invalidCommon").hidden = true;
      var commonInfo = `Two: ${oneCommon} , ${twoCommon}`;

    } else if (commonCountHouse == 3) {
      document.getElementById("commonCountHouse").style.borderColor = "#3498db";
      var oneCommon = $("input:radio[name=btnradioCleanCommon]:checked").val();
      var twoCommon = $("input:radio[name=btnradioCleanCommon1]:checked").val();
      var threeCommon = $("input:radio[name=btnradioCleanCommon2]:checked").val();
      document.getElementById("invalidCommon").hidden = true;
      var commonInfo = `Three: ${oneCommon} , ${twoCommon} , ${threeCommon}`;

    } else if (commonCountHouse == 4) {
      document.getElementById("commonCountHouse").style.borderColor = "#3498db";
      var oneCommon = $("input:radio[name=btnradioCleanCommon]:checked").val();
      var twoCommon = $("input:radio[name=btnradioCleanCommon1]:checked").val();
      var threeCommon = $("input:radio[name=btnradioCleanCommon2]:checked").val();
      var fourCommon = $("input:radio[name=btnradioCleanCommon3]:checked").val();
      document.getElementById("invalidCommon").hidden = true;
      var commonInfo = `Three: ${oneCommon} , ${twoCommon} , ${threeCommon} , ${fourCommon}`;

    } else if (commonCountHouse === "5+") {
      document.getElementById("commonCountHouse").style.borderColor = "#3498db";
      document.getElementById("invalidCommon").hidden = true;
      var commonInfo = "5+ common rooms, WALKTHROUGH REQUIRED!";

    } else if (commonSelect.selectedIndex == 0) {
      valid = false;
      document.getElementById("commonCountHouse").style.borderColor = "red";
      document.getElementById("invalidCommon").hidden = false;
    } else {
      document.getElementById("invalidCommon").hidden = true
      document.getElementById("commonCountHouse").style.borderColor = "#3498db";
      var commonInfo = "None";
    }

    //floor count
    let floorCountHouse = document.getElementById("floorCount");
    if (floorCountHouse.selectedIndex == 0) {
      document.getElementById("floorCount").style.borderColor = "red";
      valid = false;
      document.getElementById("invalidFloors").hidden = false;
    } else {
      document.getElementById("floorCount").style.borderColor = "#3498db";
      document.getElementById("invalidFloors").hidden = true;
      var floorCount = document.getElementById("floorCount").value;

    }

    //basement style
    let basementHouse = document.getElementById("basement");
    if (basementHouse.selectedIndex == 0) {
      document.getElementById("basement").style.borderColor = "red";
      valid = false;
      document.getElementById("invalidBasement").hidden = false;
    } else {
      document.getElementById("basement").style.borderColor = "#3498db";
      document.getElementById("invalidBasement").hidden = true;
      var basementStyle = document.getElementById("basement").value;
    }

    let bathroomPrice = document.getElementById("bathroomCountHouse").value;
    let bedroomPrice = document.getElementById("bedroomCountHouse").value;
    let kitchenPrice = document.getElementById("kitchenCountHouse").value;
    let commonPrice = document.getElementById("commonCountHouse").value;
    //cottage
    let cottage = document.querySelector('input[name="cottage"]:checked').value;

    if (bathroomPrice === "5+" || bedroomPrice === "7+" || kitchenPrice === "5+" || commonPrice === "5+" || cottage == "Yes") {
      serviceString = `Walkthrough needed, space too large. Room counts: Bedroom: ${bedroomPrice} || Bathroom: ${bathroomPrice} || Kitchen: ${kitchenPrice} || Common: ${commonPrice} || Floor count- ${floorCount} || Basement style- ${basementStyle} || Cleaning specifics: ${cleaningSpecifics} || Cottage?- ${cottage}`;
    } else {

      var estTime = document.getElementById("totalPriceText").innerHTML;
      serviceString = `Bedroom - ${bedroomInfo} || Bathroom- ${bathroomInfo} || Kitchen- ${kitchenInfo} || Common room- ${commonInfo} || Floor count- ${floorCount} || Basement style- ${basementStyle} || Cleaning specifics: ${cleaningSpecifics} || Time Estimation- ${estTime} || Cottage?- ${cottage}`;
    }

  } else if (document.getElementById("officeCleaningSelect").checked) {
    serviceType = "Office Cleaning";
    document.getElementById("invalidService").hidden = true;
    //get information for office service
    //location gathering
    let offStreet = document.getElementById("inputStreetOff").value;
    let offNeigh = document.getElementById("inputNeighOff").value;
    let offCity = document.getElementById("inputCityOff");
    let cityOffice = document.getElementById("inputCityOff").value;
    let postalOff = document.getElementById("inputPostalOff").value;
    let offComment = document.getElementById("cleaningSpecificsOff").value;
    let validPostalOff = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    //validating office
    if (offStreet == "") {
      document.getElementById("inputStreetOff").style.borderColor = "red";
      document.getElementById("invalidStreetOff").hidden = false;
      valid = false;
    } else {
      document.getElementById("inputStreetOff").style.borderColor = "#3498db";
      document.getElementById("invalidStreetOff").hidden = true;
    }
    if (offCity.selectedIndex == 0) {
      valid = false;
      document.getElementById("inputCityOff").style.borderColor = "red";
      document.getElementById("invalidCityOff").hidden = false;
    } else {
      document.getElementById("inputCityOff").style.borderColor = "#3498db";
      document.getElementById("invalidCityOff").hidden = true;
    }
    if (postalOff.match(validPostalOff)) {
      document.getElementById("invalidPostalOff").hidden = true;
      document.getElementById("inputPostalOff").style.borderColor = "#3498db";
    } else {
      document.getElementById("invalidPostalOff").hidden = false;
      valid = false;
      document.getElementById("inputPostalOff").style.borderColor = "red";
    }

    serviceString = `Office Street Address: ${offStreet} || Office Neighbourhood: ${offNeigh} || Office City: ${cityOffice} || Office Postal Code: ${postalOff} || Office Requests: ${offComment}`;

  } else {
    valid = false;
    document.getElementById("invalidService").hidden = false;
  }

  //days	
  let monday = document.getElementById("monday").checked ? 'Monday, ' : '';
  let tuesday = document.getElementById("tuesday").checked ? 'Tuesday, ' : '';
  let wednesday = document.getElementById("wednesday").checked ? 'Wednesday, ' : '';
  let thursday = document.getElementById("thursday").checked ? 'Thursday, ' : '';
  let friday = document.getElementById("friday").checked ? 'Friday, ' : '';
  let saturday = document.getElementById("saturday").checked ? 'Saturday, ' : '';
  let sunday = document.getElementById("sunday").checked ? 'Sunday' : '';

  let dateString = (monday + tuesday + wednesday + thursday + friday + saturday + sunday);
  let dateStringClean = dateString.replace(/,(?=\s*$)/, '');

  if (dateStringClean == "") {
    document.getElementById("invalidDay").hidden = false;
    valid = false;
  } else {
    document.getElementById("invalidDay").hidden = true;
  }

  //times
  let morning = document.getElementById("morning").checked ? 'Morning, ' : '';
  let afternoon = document.getElementById("afternoon").checked ? 'Afternoon, ' : '';
  let evening = document.getElementById("evening").checked ? 'Evening' : '';

  let timeString = (morning + afternoon + evening);
  let timeStringClean = timeString.replace(/,(?=\s*$)/, '');

  if (timeStringClean == "") {
    document.getElementById("invalidTime").hidden = false;
    valid = false;
  } else {
    document.getElementById("invalidTime").hidden = true;
  }

  //how often	
  let howOften = "";

  if (document.getElementById("oneTime").checked) {
    howOften = "One Time Cleaning";
    document.getElementById("invalidOften").hidden = true;
  } else if (document.getElementById("biweek").checked) {
    howOften = "Bi-weekly Cleaning";
    document.getElementById("invalidOften").hidden = true;
  } else if (document.getElementById("weekly").checked) {
    howOften = "Weekly Cleaning";
    document.getElementById("invalidOften").hidden = true;
  } else if (document.getElementById("triweek").checked) {
    howOften = "Tri-weekly Cleaning";
    document.getElementById("invalidOften").hidden = true;
  } else if (document.getElementById("monthly").checked) {
    howOften = "Monthly Cleaning";
    document.getElementById("invalidOften").hidden = true;
  } else {
    valid = false;
    document.getElementById("invalidOften").hidden = false;
  }

  //comments
  let comment = document.getElementById("commentQuestion").value;

  //validation
  let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let validPhone = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  let validPostal = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

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

  if (postalCode.match(validPostal)) {
    document.getElementById("invalidPostal").hidden = true;
    document.getElementById("inputPostal").style.borderColor = "#3498db";

  } else {
    document.getElementById("invalidPostal").hidden = false;
    valid = false;
    document.getElementById("inputPostal").style.borderColor = "red";
  }

  if (address == "") {
    document.getElementById("invalidStreet").hidden = false;
    valid = false;
    document.getElementById("inputStreet").style.borderColor = "red";

  } else {
    document.getElementById("invalidStreet").hidden = true;
    document.getElementById("inputStreet").style.borderColor = "#3498db";
  }

  var citySelect = document.getElementById("inputCity");
  if (citySelect.selectedIndex == 0) {
    document.getElementById("invalidCity").hidden = false;
    valid = false;
    document.getElementById("inputCity").style.borderColor = "red";

  } else {
    document.getElementById("invalidCity").hidden = true;
    document.getElementById("inputCity").style.borderColor = "#3498db";
  }

  //valid
  if (valid == true) {
    document.querySelector(".contact-form").reset();
    sendEmail(firstName, lastName, email, phone, address, apartment, city, postalCode, contactStringClean, serviceType, serviceString, dateStringClean, timeStringClean, howOften, comment);
  } else {
    myAlertBottom();
    document.getElementById('formInformation').scrollIntoView();
  }
}

function sendEmail(firstName, lastName, email, phone, address, apartment, city, postalCode, contactStringClean, serviceType, serviceString, dateStringClean, timeStringClean, howOften, comment) {

  document.getElementById("sending").hidden = false;
  document.getElementById("submitButton").disabled = true;

  Email.send({
    SecureToken: "2fe7a9b8-7fef-4a02-990c-f7716d6b3de4",
    To: "KevRMarshall@gmail.com",
    From: email,
    Subject: `${firstName} ${lastName} has a booking request!`,
    Body: `<b><u>Name:</b></u> ${firstName} ${lastName} <br/> <b><u>Email:</b></u> ${email} <br/> <b><u>Phone:</b></u> ${phone} <br/> <b><u>Address:</b></u> ${address} <br/> <b><u>Apartment #:</b></u> ${apartment} <br/> <b><u>City:</b></u> ${city} <br/> <b><u>Postal Code:</b></u> ${postalCode}
		<br/> <b><u>Best way to contact:</b></u> ${contactStringClean} <br/> <b><u>Type of Service Request:</b></u> ${serviceType} <br/> <b><u>Service specifics:</b></u> ${serviceString} <br/> <b><u>Days Interested:</b></u> ${dateStringClean} <br/> <b><u>Time Slots:</b></u> ${timeStringClean} <br/> <b><u>How often?:</b></u> ${howOften} <br/> <b><u>Question/Comments:</b></u>  ${comment}`,

  }).then((message) => window.location.href = 'thankyou');

}

function updateTextInput(val) {
  document.getElementById('textInput').value = val;
}

function weekendNotice() {

  if (document.getElementById("saturday").checked == true || document.getElementById("sunday").checked == true) {

    document.getElementById("weekendWarning").hidden = false;
  } else {
    document.getElementById("weekendWarning").hidden = true;
  }
}

function weekendNoticeTwo() {

  if (document.getElementById("evening").checked == true) {

    document.getElementById("weekendWarningTwo").hidden = false;
  } else {
    document.getElementById("weekendWarningTwo").hidden = true;
  }
}

function myAlertBottom() {
  $(".myAlert-bottom").show();
  setTimeout(function() {
    $(".myAlert-bottom").fadeIn(0).delay(8000).fadeOut(2000);
  });
}

function WalkThrough() {
  walkTest = true;
  document.getElementById("walkThrough").hidden = false;
  document.getElementById("walkThroughNeeded").hidden = false;
  document.getElementById("houseSelected").hidden = true;
  document.getElementById("totalPriceText").style.visibility = 'hidden';
  document.getElementById("selectorSection").style.display = 'none';
  document.getElementById("selectSize").style.display = 'none';

}

function WalkThroughNotNeeded() {
  walkTest = false;
  document.getElementById("walkThrough").hidden = true;
  document.getElementById("walkThroughNeeded").hidden = true;
  document.getElementById("houseSelected").hidden = false;
  document.getElementById("totalPriceText").style.visibility = 'visible';
  document.getElementById("selectorSection").style.display = 'initial';
  document.getElementById("selectSize").style.display = 'initial';
}