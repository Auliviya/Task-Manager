const scanner = document.getElementById("scanner");
const statusMessage = document.getElementById("status-message");

scanner.addEventListener("click", () => {
  statusMessage.textContent = "Authenticating...";
  scanner.classList.add("scanning");

  setTimeout(() => {
    const authenticated = Math.random() > 0.5; // Simulate authentication success/failure
    if (authenticated) {
      statusMessage.textContent = "Authentication Successful!";
      statusMessage.style.color = "lime";
    } else {
      statusMessage.textContent = "Authentication Failed. Try Again.";
      statusMessage.style.color = "red";
    }
    scanner.classList.remove("scanning");
  }, 2000);
});
Features:
Fingerprint Scanner Animation: A glowing circular fingerprint scanner for interactivity.
Black Background: Clean and professional aesthetic.
Real-time Feedback: Status messages update to show progress and results.
JavaScript Logic: Simulates success/failure randomly for testing.
Feel free to adjust the animations and logic as needed!








