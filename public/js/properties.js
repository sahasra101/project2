// $(document).ready(function () {
/* globalmoment */

// propertyContainer holds all of our Properties
// var propertyContainer = $(".property-container");
// var postCategorySelect = $("#category");
// // Click events for the edit and delete buttons
// // $(document).on("click", "button.delete", handlePostDelete);
// // $(document).on("click", "button.edit", handlePostEdit);
// // Variable to hold our Properties
// var properties;

// // The code below handles the case where we want to get blog properties for a specific address
// // Looks for a query param in the url for address_id
// var url = window.location.search;
// var addressId;
// if (url.indexOf("?address_id=") !== -1) {
//   addressId = url.split("=")[1];
//   getProperties(addressId);
// }
// // If there's no addressId we just get all properties as usual
// else {
//   getProperties();
// }

// This function grabs properties from the database and updates the view
// function getProperties(address) {
//   addressId = address || "";
//   if (addressId) {
//     addressId = "/?address_id=" + addressId;
//   }
//   $.get("/api/properties" + addressId, function (data) {
//     console.log("properties", data);
//     Properties = data;
//     if (!Properties || !Properties.length) {
//       displayEmpty(address);
//     } else {
//       initializeRows();
//     }
//   });
// }

// This function does an API call to delete Properties
// function deletePost(id) {
//   $.ajax({
//     method: "DELETE",
//     url: "/api/properties/" + id
//   }).then(function () {
//     getProperties(postCategorySelect.val());
//   });
// }

// InitializeRows handles appending all of our constructed post HTML inside blogContainer
// function initializeRows() {
//   propertyContainer.empty();
//   var propertiesToAdd = [];
//   for (var i = 0; i < Properties.length; i++) {
//     propertiesToAdd.push(createNewRow(properties[i]));
//   }
//   propertyContainer.append(propertiesToAdd);
// }

// // This function figures out which post we want to delete and then calls deletePost
// function handlePostDelete() {
//   var currentPost = $(this)
//     .parent()
//     .parent()
//     .data("post");
//   deletePost(currentPost.id);
// }

// This function displays a message when there are no properties
// function displayEmpty(id) {
//   var query = window.location.search;
//   var partial = "";
//   if (id) {
//     partial = " for Author #" + id;
//   }
//   propertyContainer.empty();
//   var messageH2 = $("<h2>");
//   messageH2.css({ "text-align": "center", "margin-top": "50px" });
//   messageH2.html(
//     "No Properties yet" +
//     partial +
//     ", navigate <a href='/cms" +
//     query +
//     "'>here</a> in order to get started."
//   );
//   propertyContainer.append(messageH2);
// }
// creating delete onclick function here.
// $(".delete").on("click", function() {
//   var deleteButtonID = $(this).data("id");
//   console.log(deleteButtonID);
//   // $.ajax({
//   //   method: "DELETE",
//   //   url: "/api/property/:id" + id
//   // })
//   //   .then(function(){
//   //     console.log("this works.")
//   //   });

//   $(document).ready(function () {
//     // creating delete onclick function here.
//     $(".delete").on("click", function () {
//       console.log("THIS BUTTON HAS BEEN CLICKED")
//       // var deleteButtonID = $(this).data("id");
//       // console.log(deleteButtonID);
//       // $.ajax({
//       //   method: "DELETE",
//       //   url: "/api/property/:id" + id
//       // })
//       //   .then(function(){
//       //     console.log("this works.")
//       //   });
//     });
//   });
//   // });
// });
