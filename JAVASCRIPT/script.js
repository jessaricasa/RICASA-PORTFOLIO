/ Function to handle button clicks
function alertMessage(message) {
    alert(You clicked on ${message}!);
}

// Add animation effects for the navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", () => {
        link.style.color = "red";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "white";
    });
});