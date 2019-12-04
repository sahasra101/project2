$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and address select
  // var bodyInput = $("#body");
  // var titleInput = $("#title");
  // var cmsForm = $("#submit");
  // var addressSelect = $("#address");
  // Adding an event listener for when the form is submitted
  $("#submit").on("click", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var postId;
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the post id from the url
  // In '?post_id=1', postId is 1
  if (url.indexOf("?post_id=") !== -1) {
    postId = url.split("=")[1];
    getPostData(postId, "post");
  }
  // Otherwise if we have an address_id in our url, preset the address select box to be our address
  else if (url.indexOf("?address_id=") !== -1) {
    addressId = url.split("=")[1];
  }

  // Getting the properties, and their posts
  // getAddress();

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or address
    // if (
    //   !titleInput.val().trim() ||
    //   !bodyInput.val().trim() ||
    //   !addressSelect.val()
    // ) {
    //   return;
    // }

    // Constructing a newPost object to hand to the database
    var newPost = {
      purchasePrice: $("#purchasePrice")
        .val()
        .trim(),
      body: bodyInput.val().trim(),
      addressId: addressSelect.val()
    };
    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    // if (updating) {
    //   newPost.id = postId;
    //   updatePost(newPost);
    // } else {
    submitPost(newPost);
    // }
  }

  // Submits a new post and brings user to properties page upon completion
  function submitPost(post) {
    $.post("/api/posts", post, function() {
      window.location.href = "/properties";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to a properties existing posts
  //   function getPostData(id, type) {
  //     var queryUrl;
  //     switch (type) {
  //     case "post":
  //       queryUrl = "/api/posts/" + id;
  //       break;
  //     case "address":
  //       queryUrl = "/api/properties/" + id;
  //       break;
  //     default:
  //       return;
  //     }

  // // A function to get an address and then render our list of addresses
  // function getAddress() {
  //   $.get("/api/address", renderAddressList);
  // }
  // // Function to either render a list of addresses, or if there are none, direct the user to the page
  // // to create an address first
  // function renderAddressList(data) {
  //   if (!data.length) {
  //     window.location.href = "/properties";
  //   }
  //   var rowsToAdd = [];
  //   for (var i = 0; i < data.length; i++) {
  //     rowsToAdd.push(createAddressRow(data[i]));
  //   }
  //   addressSelect.empty();
  //   console.log(rowsToAdd);
  //   console.log(addressSelect);
  //   addressSelect.append(rowsToAdd);
  //   addressSelect.val(addressId);
  // }

  // // Update a given post, bring user to the properties page when done
  // function updatePost(post) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/posts",
  //     data: post
  //   }).then(function() {
  //     window.location.href = "/properties";
  //   });
  // }
});
