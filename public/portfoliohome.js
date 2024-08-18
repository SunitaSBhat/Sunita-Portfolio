
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
    var lists = document.getElementById('')
    if(navLinks.style.display!="none"){
        navLinks.style.display="none";
    }
    else{
    navLinks.style.display="flex";
    navLinks.style.flexDirection="column";
    // navLinks.style.marginTop="23px";
    navLinks.style.backgroundColor="hotpink";
    navLinks.style.width="177px";
    navLinks.style.zIndex="1";
    navLinks.style.height="209px";
    navLinks.style.position="relative";
    navLinks.style.top="130px";
    navLinks.style.left="-107px";
    navLinks.style.marginBottom="-40px";
    }
}

