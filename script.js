// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
document.addEventListener("DOMContentLoaded", function () {
  const now = dayjs();
  const time = now.hour();
  const blocks = document.getElementsByClassName("time-block");
  for (var i = 0; i < blocks.length; i++) {
    const timeBlock = blocks[i];
    const hoursPer = parseInt(timeBlock.id);

    timeBlock.classList.remove("past", "present", "future");

    if (hoursPer === time) {
      timeBlock.classList.add("present");
    } else if (hoursPer > time) {
      timeBlock.classList.add("past");
    } else {
      timeBlock.classList.add("future");
    }
  }

  $(function () {
    $(document).ready(function () {
      const today = dayjs();
      $("#currentDay").text(today.format("[Today is] MMM D, YYYY"));

      // const saveBtn = document.getElementById('saveBtn');

      // saveBtn.addEventListener("click", function() {
      //   const timeBlock = this.parentNode;
      //   const timeBlockId = timeBlock.id;
      //   const userClick = timeBlock.querySelector('btn').value;
      //   const currentDate = dayjs().format('YYYY MM DD');
      //   const currentTime = dayjs().format('HH:mm');

      //   const storageLocal = '${timeBlockId}_${currentDate}_${currentTime}';

      //   localStorage.setItem(storageLocal, userClick);
      // });
    });
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
  });
});
