$(document).ready(function() {
  $(document).on("click", ".saveSearch", function(event) {
    event.preventDefault();
    var saveId = $(this).attr("data-id");
    console.log(saveId);
    console.log(resultsArray[saveId]);
  });
});
