// Lấy các phần tử
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const currentTimeHeader = document.getElementById("current-time");

// Hàm lấy thời gian hiện tại theo định dạng
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleString('vi-VN', { dateStyle: 'short', timeStyle: 'short' });
}

// Cập nhật thời gian trong chat-header
function updateHeaderTime() {
    currentTimeHeader.textContent = getCurrentTime();
}
updateHeaderTime();
setInterval(updateHeaderTime, 1000); // Cập nhật mỗi giây

// Hàm thêm tin nhắn vào chat-box
function addMessage(content, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", type);

    const messageText = document.createElement("span");
    messageText.classList.add("message-text");
    messageText.textContent = content;
    messageDiv.appendChild(messageText);

    const messageTime = document.createElement("span");
    messageTime.classList.add("message-time");
    messageTime.textContent = getCurrentTime();
    messageDiv.appendChild(messageTime);

    chatBox.appendChild(messageDiv);

    // Tự động cuộn xuống dưới cùng
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Cập nhật thời gian cho tin nhắn đầu tiên (tin nhắn mặc định của bot)
document.querySelector(".message.bot .message-time").textContent = getCurrentTime();

// Xử lý sự kiện khi người dùng gửi tin nhắn
sendButton.addEventListener("click", function() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        // Thêm tin nhắn của người dùng
        addMessage(userMessage, "user");

        // Xóa nội dung trong ô nhập
        userInput.value = "";

        // Phản hồi từ bot (giả lập)
        // Trong hàm xử lý tin nhắn
     setTimeout(() => {
        const userMessageLower = userMessage.toLowerCase();
         let botResponse = "Tôi đã nhận được tin nhắn của bạn. Vui lòng chờ trong giây lát.";
        if (userMessageLower.includes("bệnh")) {
          botResponse = "Bạn có thể mô tả chi tiết hơn về triệu chứng không? Tôi sẽ cố gắng hỗ trợ.";
          } else if (userMessageLower.includes("hello") || userMessageLower.includes("xin chào")) {
        botResponse = "Chào bạn! Rất vui được hỗ trợ. Bạn đang gặp vấn đề gì?";
         }
     addMessage(botResponse, "bot");
    }, 1000);
    }
    
});

// Cho phép gửi tin nhắn bằng phím Enter
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendButton.click();
    }
});