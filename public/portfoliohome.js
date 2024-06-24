
    document.addEventListener("DOMContentLoaded", function() {
        // Add the 'loaded' class to the body once the content is fully loaded
        document.body.classList.add('loaded');
    });
    function formWorker(){
        alert("Hey Thank You for sending the message");
    }
// scripts.js
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');
    navLinks.style.display="flex";
    navLinks.style.flexDirection="column";
    navLinks.style.marginTop="23px";
    navLinks.style.backgroundColor="hotpink";
    navLinks.style.margin="12px 12px";
    navLinks.style.width="177px";
}

