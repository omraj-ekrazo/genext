document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll(".sidebar .nav-link");
  
    // Check if there's a stored active tab and set it
    var activeTab = localStorage.getItem("activeTab");
    if (activeTab) {
      navLinks.forEach(function(navLink) {
        if (navLink.getAttribute("href") === activeTab) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    }
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        // Remove active class from all nav-links
        navLinks.forEach(function(navLink) {
          navLink.classList.remove("active");
        });
  
        // Add active class to the clicked nav-link
        event.target.closest("li").classList.add("active");
  
        // Store the active tab in localStorage
        localStorage.setItem("activeTab", event.target.getAttribute("href"));
      });
    });
  });
  