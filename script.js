// Function to handle click event on the heading
function handleHeadingClick() {
    alert("Heading clicked! Welcome to the Practice Git Basic page.");
}

// Add event listener to the heading
document.addEventListener("DOMContentLoaded", function() {
    const heading = document.querySelector("h1");
    if (heading) {
        heading.addEventListener("click", handleHeadingClick);
    }
});
