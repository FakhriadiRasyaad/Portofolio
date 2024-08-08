//  // Get the modal
//  var modal = document.getElementById("myModal");

//  // Get the <span> element that closes the modal
//  var span = document.getElementsByClassName("close")[0];

//  // When the user clicks on a card, open the modal
//  document.querySelectorAll('.card').forEach(card => {
//      card.addEventListener('click', function() {
//          var url = this.getAttribute('data-url');
//          document.getElementById('modelIframe').src = url;
//          modal.style.display = "block";
//      });
//  });

//  // When the user clicks on <span> (x), close the modal
//  span.onclick = function() {
//      modal.style.display = "none";
//      document.getElementById('modelIframe').src = "";
//  }

//  // When the user clicks anywhere outside of the modal, close it
//  window.onclick = function(event) {
//      if (event.target == modal) {
//          modal.style.display = "none";
//          document.getElementById('modelIframe').src = "";
//      }
//  }






// document.addEventListener("DOMContentLoaded", function() {
//     var cards = document.querySelectorAll(".card");
//     var modal = document.getElementById("myModal");
//     var iframe = document.getElementById("modelIframe");
//     var span = document.getElementsByClassName("close")[0];

//     cards.forEach(function(card) {
//         card.addEventListener("click", function() {
//             var url = this.getAttribute("data-url");
//             iframe.src = url;
//             modal.style.display = "block";
//         });
//     });

//     span.onclick = function() {
//         modal.style.display = "none";
//         iframe.src = "";  // Clear the iframe source to stop the model
//     };

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//             iframe.src = "";  // Clear the iframe source to stop the model
//         }
//     };
// });
