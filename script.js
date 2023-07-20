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

      $(".saveBtn").on("click", function () {
        const value = $(this).siblings(".description").val();
        console.log(value);
        const timeBlockHour = $(this).parent().attr("id");
        console.log(timeBlockHour);
     
        localStorage.setItem(timeBlockHour, value);
      });
      for (i = 9; i < 17; i++) {
        $("#hour-" + i + " .description").val(
          localStorage.getItem("hour-" + i)
        );
      }
    });
  });
});
