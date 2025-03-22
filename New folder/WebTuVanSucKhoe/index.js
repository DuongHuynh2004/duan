const openChatButton = document.getElementById("openChatButton");
const chatbotModal = document.getElementById("chatbotModal");
const closeButton = document.querySelector(".close");

openChatButton.addEventListener("click", function() {
    chatbotModal.style.display = "block";
});

closeButton.addEventListener("click", function() {
    chatbotModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target === chatbotModal) {
        chatbotModal.style.display = "none";
    }
});