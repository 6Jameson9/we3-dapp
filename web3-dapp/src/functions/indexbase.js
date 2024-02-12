document.addEventListener("DOMContentLoaded", function () {
    const profileButton = document.getElementById("profileButton");
    const connectWalletButton = document.getElementById("connectWalletButton");
  
    profileButton.addEventListener("click", function () {
      // Redirect to profile page
      window.location.href = "profile.html";
    });
  
    connectWalletButton.addEventListener("click", function () {
      // Connect wallet functionality
      // Add your wallet connection logic here
      console.log("Connecting wallet...");
    });
  });
  