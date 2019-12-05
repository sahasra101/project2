$(document).ready(function() {
  $(document).on("click", ".saveSearch", function(event) {
    event.preventDefault();
    var saveId = $(this).attr("data-id");
    console.log(saveId);
    console.log(resultsArray[saveId]);
    var data = {
      address: resultsArray[saveId][0],
      initialInvestment: parseFloat(resultsArray[saveId][1]),
      yearOneReturn: parseFloat(resultsArray[saveId][2]),
      yield: parseFloat(resultsArray[saveId][3])
    };
    console.log(data);

    $.ajax("/api/property", {
      type: "POST",
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json"
    }).then(function(res) {
      console.log(res);
    });
  });
});
