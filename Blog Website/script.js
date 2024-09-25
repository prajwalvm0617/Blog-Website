// Handling comments for post 1
document.getElementById("commentForm1").addEventListener("submit", function(event) {
    event.preventDefault();
    addComment("comments1", "name1", "message1");
});

// Handling comments for post 2
document.getElementById("commentForm2").addEventListener("submit", function(event) {
    event.preventDefault();
    addComment("comments2", "name2", "message2");
});

// Handling comments for post 3
document.getElementById("commentForm3").addEventListener("submit", function(event) {
    event.preventDefault();
    addComment("comments3", "name3", "message3");
});

// Function to add comments dynamically
function addComment(commentSectionId, nameInputId, messageInputId) {
    const name = document.getElementById(nameInputId).value;
    const message = document.getElementById(messageInputId).value;

    if (name && message) {
        const commentSection = document.getElementById(commentSectionId);
        const newComment = document.createElement("p");
        newComment.innerHTML = `<strong>${name}:</strong> ${message}`;
        commentSection.appendChild(newComment);

        // Clear form inputs after submission
        document.getElementById(nameInputId).value = '';
        document.getElementById(messageInputId).value = '';
    } else {
        alert("Please fill in both fields.");
    }
}
