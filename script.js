


$(document).ready(function () {

var today = dayjs().format("MMMM D, YYYY, hh:mm A");

//function for changing colors for past, present and future time slots
function updateDisplay() {
  currentTime = dayjs().hour(); 
//loop through hours 
for (var i = 8; i < 18; i++){

    if (i === currentTime) {
      $("#" + i).addClass("present");
    } else if (i < currentTime) {
      $("#" + i).addClass("past");
    } 
  }
}
setInterval(updateDisplay, 10000)


// array of different values for timeMarker, hour, and scheduleInput properties
var schedTable = [
  
  {
    timeMarker: 8,
    hour: "8:00 am",
    scheduleInput: "",
  },

  {
    timeMarker: 9,
    hour: "9:00 am",
    scheduleInput: "",
    
  },
  {
    timeMarker: 10,
    hour: "10:00 am",
    scheduleInput: "",
    
  },
  {
    timeMarker: 11,
    hour: "11:00 am",
    scheduleInput: "",
    
  },
  {
    timeMarker: 12,
    hour: "12:00 pm",
    scheduleInput: "",
    
  },
  {
    timeMarker: 13,
    hour: "1:00 pm",
    scheduleInput: "",
    
  },
  {
    timeMarker: 14,
    hour: "2:00 pm",
    scheduleInput: "",
    
  },
  {
    timeMarker: 15,
    hour: "3:00 pm",
    scheduleInput: "",
    
  },
  {
    timeMarker: 16,
    hour: "4:00 pm",
    scheduleInput: "",
    
  },
  {
    timeMarker: 17,
    hour: "5:00 pm",
    scheduleInput: "",
    
  },
  
  
];

//function to display table 
function fullSchedule() {
    //show current date
   $("#date").text(today);
  
    //Create rows to add to table headings
    for (var i = 0; i < schedTable.length; i++) {
      var timeTable = $(".time-table");
      var row = $("<tr>");
      timeTable.append(row);
    
    //Cells that will display working hours
        var timeDisplay = $("<td>");
        timeDisplay.text(schedTable[i].hour);
          
    // cells with text area for user input
          var textBlock = $("<td>");
          var activityInput =$("<textarea id=" + schedTable[i].timeMarker + ">")
          textBlock.append(activityInput)
          activityInput.text(schedTable[i].apptText);

          
  
          // cells block for save button
          var saveCol = $("<td>");
          var saveBtn = $("<button class=" + schedTable[i].timeMarker + ">");
          saveBtn.addClass("save-btn");
          saveBtn.text("Save");
          saveCol.append(saveBtn);
          row.append(timeDisplay, textBlock, saveCol);
        }

        var clearDiv = $("#clear");
        var clearButton = $('<button id="clear-button">');
        clearButton.text("Clear your schedule");
        clearDiv.append(clearButton);

      
}    
  

// storage save persists on refresh

//clear button


fullSchedule();




})
