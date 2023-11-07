// document.getElementById("getFile").onchange = function() {
//     // Retrieve information about the selected file
//     let userFile = this.files[0];
//    // Verify that a text file is selected
// try {
//     let isText = userFile.type.startsWith("text");
//     if (!isText) {
//     throw userFile.name + " is not a text file";
//     }
//    // Read the contents of the selected file
// let fr = new FileReader();
// fr.readAsText(userFile)
// // Once the file has finished loading, display in the page
// let sourceDoc = document.getElementById("wc_document");
// fr.onload=function(){
//  sourceDoc.innerHTML = fr.result;


// // Store the text of the document, removing HTML tags
// let sourceText = sourceDoc.textContent;
// wordCloud(sourceText);

// }}
// // Alert the user to select a text file
// catch(err) {
//     window.alert(err);
//     function wordCloud(sourceText) {
//         // Convert the source text to lowercase
//         // and remove leading and trailing whitespace
//         sourceText = sourceText.toLowerCase();
//         sourceText = sourceText.trim();
//         console.log(sourceText);
//         }

// };

// function wordCloud(sourceText) {
//     // Convert the source text to lowercase
//     // and remove leading and trailing whitespace
//     sourceText = sourceText.toLowerCase();
//     sourceText = sourceText.trim();
//     console.log(sourceText);
//     }
// }




document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-button");
    const searchButton = document.getElementById("search-button");
    const messageElement = document.getElementById("message");
    const tableBody = document.querySelector("table tbody");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const searchTextInput = document.getElementById("search-text");
  
    addButton.addEventListener("click", function () {
      const name = nameInput.value.trim().toLowerCase();
      const email = emailInput.value.trim().toLowerCase();
  
      if (name.length < 2) {
        messageElement.textContent = "Name should be at least 2 characters long.";
        return;
      }
  
      if (email.indexOf("@") === -1) {
        messageElement.textContent = "Email should include @.";
        return;
      }
  
      messageElement.textContent = "";
  
      // Create a new row in the table for the name and email
      const newRow = tableBody.insertRow();
      const nameCell = newRow.insertCell(0);
      const emailCell = newRow.insertCell(1);
      const actionCell = newRow.insertCell(2);
  
      nameCell.textContent = name;
      emailCell.textContent = email;
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("btn", "btn-danger", "btn-sm");
      removeButton.addEventListener("click", function () {
        newRow.remove();
      });
  
      actionCell.appendChild(removeButton);
  
      // Clear input fields
      nameInput.value = "";
      emailInput.value = "";
    });
  
    searchButton.addEventListener("click", function () {
      const searchQuery = searchTextInput.value.trim().toLowerCase();
  
      if (searchQuery === "") {
        messageElement.textContent = "Enter a search keyword.";
        return;
      }
  
      messageElement.textContent = "";
  
      // Loop through table rows and hide/show based on the search query
      const rows = tableBody.getElementsByTagName("tr");
      let found = false;
  
      for (const row of rows) {
        const name = row.cells[0].textContent.toLowerCase();
        const email = row.cells[1].textContent.toLowerCase();
  
        if (name.includes(searchQuery) || email.includes(searchQuery)) {
          row.style.display = "";
          found = true;
        } else {
          row.style.display = "none";
        }
      }
  
      if (found) {
        messageElement.innerHTML = `Found => [name: '${searchQuery}', email: '${searchQuery}']`;
      } else {
        messageElement.innerHTML = `No records found for '${searchQuery}'.`;
      }
    });
  });