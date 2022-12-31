// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar



function liveClock() {

  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D, YYYY h:mm:ss A'));
};
liveClock();
setInterval(liveClock, 1000)

var currentHour = dayjs().hour();






// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

var textAreaAll = document.querySelectorAll(".description");

var textAreaEl = $(".description");

// **************jquery get the attribute of an element (id)****************
// textAreaEl[i].attr('id')

function changeColor() {
  for (var i = 0; i < textAreaAll.length; i++) {

  // change first if to > currentHour
  // change second if to == currentHour
  // change third if to < currentHour
  if (Number(textAreaAll[i].id) < currentHour) {
    textAreaAll[i].classList.remove("past", "present", "future");
    textAreaAll[i].classList.add("past")
  }
  else if (textAreaAll[i].id == 10) {
    textAreaAll[i].classList.remove("past", "present", "future");
    textAreaAll[i].classList.add("present");
    console.log("it is" + i + "oclock")
  }
  else if (textAreaAll[i].id == 11) {
    textAreaAll[i].classList.remove("past", "present", "future");
    textAreaAll[i].classList.add("future")
  };
  };
};

changeColor();
setInterval(changeColor, 60000);

// ********NEW STUFF*************
// 1.  classList.remove to not only add
// 2.  figured out jquery to find id
// 3.  wrapped it in a function to call it again every minute to change colors dynamically
// 4.  Number(textAreaAll[i]).id to turn string into number (notice ===)
// 5.  added running clock

// var textAreaEl = $(".description");

// // **************jquery get the attribute of an element (id)****************
// // textAreaEl[i].attr('id')

// $(function changeColor() {
//   for (var i = 0; i < textAreaEl.length; i++) {

//   // change first if to > currentHour
//   // change second if to == currentHour
//   // change third if to < currentHour
//   if (Number(textAreaEl[i].attr('id')) < currentHour) {
//     textAreaEl[i].removeClass("past", "present", "future");
//     textAreaEl[i].addClass("past")
//   }
//   else if (Number(textAreaEl[i].attr('id')) === currentHour) {
//     textAreaEl[i].removeClass("past", "present", "future");
//     textAreaEl[i].addClass("present");
//     console.log("it is" + i + "oclock")
//   }
//   else if (Number(textAreaEl[i].attr('id')) > currentHour) {
//     textAreaEl[i].removeClass("past", "present", "future");
//     textAreaEl[i].addClass("future")
//   };
//   };


// changeColor();
// setInterval(changeColor, 60000);
// });
// WHEN I click into a timeblock
// THEN I can enter an event


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist





// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var entireSchedule = [hourNine, "hello", "goodbye"];
// var buttonNineEl = $("#btn-9");
// // var textNineEl = $("#txt-9");
// var textNineVanilla = document.querySelector("#txt-9");
// console.log(typeof(buttonNineEl))

// buttonNineEl.on('click', function() {
//   console.log("Hello")
  
  

//   var hourNine = {
//     hour : this.id,
//     // text: textNineEl.val()
//     text: textNineVanilla.value
//   }

//   entireSchedule.splice(0, 1, hourNine);
//   localStorage.setItem("localSchedule", JSON.stringify(entireSchedule))

//   var savedSchedule
// }
// )

// ***********attempt 2***************


// buttonNineEl.on('click', function() {
//   console.log("Hello")
  
//   // var entireSchedule = [hourNine, hourTen, hourEleven, hourTwelve, hourOne, hourTwo, hourThree, hourFour, hourFive];

//   // entireSchedule.forEach  
//   // }
//   var hourNine = {
//     hour : this.id,
//     // text: textNineEl.val()
//     text: textNineVanilla.value
//   }


//   entireSchedule.splice(0, 1, hourNine);
//   localStorage.setItem("localSchedule", JSON.stringify(entireSchedule))

//   var savedSchedule
// }
// )

// **********attempt 3.0**************

var buttonsAll = $(".saveBtn")
// var buttonsAll = document.querySelectorAll('.saveBtn');
var workHours = 8
// set a global empty object that we fill in dynamically
var savedSchedule = {};    
    buttonsAll.on("click", function(event) {
    // buttonsAll.addEventListener('click', function (event) {  
        event.preventDefault();
        var buttonId = this.id;
        var textEntry = this.previousElementSibling.value;
        // buttonId : textEntry
        savedSchedule["hour"+buttonId] = textEntry;
        savedSchedule["HAHAHAHAHAH"] = "nothing";
        console.log("Hello")
        localStorage.setItem("localSchedule", JSON.stringify(savedSchedule))
        
    });

var newItem = getItem(JSON.parse("localStorage"))

//****************** * make a for loop that loops through newItem and textAreaAll******************


// }

// function saveSchedule() {
//   console.log("Hello")
  
//   var entireSchedule = [hourNine, "hello", "goodbye"];

//   var hourNine = {
//     hour : this.id,
//     text: textNineEl.val()
    
//   }

//   entireSchedule.splice(0, 1, hourNine);
//   localStorage.setItem("localSchedule", JSON.stringify(entireSchedule))

  
// };

