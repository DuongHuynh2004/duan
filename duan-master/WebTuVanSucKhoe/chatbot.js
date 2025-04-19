// Lấy các phần tử từ DOM
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Hàm hiển thị tin nhắn
function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');

    // Thêm nội dung tin nhắn
    const messageText = document.createElement('p');
    messageText.textContent = message;
    messageDiv.appendChild(messageText);

    // Thêm thời gian
    const timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    const now = new Date();
    timestamp.textContent = now.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
    messageDiv.appendChild(timestamp);

    // Thêm tin nhắn vào chat box
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Cuộn xuống tin nhắn mới nhất
}

// Hàm trả lời tự động từ bác sĩ
function botReply(userMessage) {
    let botMessage = "Cảm ơn bạn đã chia sẻ. Tôi sẽ kiểm tra và tư vấn ngay.";
    
    // Ví dụ đơn giản: trả lời dựa trên từ khóa
    if (userMessage.toLowerCase().includes('đau')) {
        botMessage = "Bạn bị đau ở đâu? Hãy mô tả chi tiết hơn để tôi hỗ trợ nhé.";
    } else if (userMessage.toLowerCase().includes('sốt')) {
        botMessage = "Bạn bị sốt bao lâu rồi? Có triệu chứng nào khác không?";
    }

    setTimeout(() => {
        addMessage(botMessage, false);
    }, 1000); // Trả lời sau 1 giây để tạo cảm giác tự nhiên
}

// Hàm gửi tin nhắn
function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return; // Không gửi nếu tin nhắn rỗng

    // Thêm tin nhắn của người dùng
    addMessage(message, true);

    // Xóa nội dung ô nhập
    messageInput.value = '';

    // Gọi hàm trả lời tự động từ bác sĩ
    botReply(message);
}

// Sự kiện nhấn nút Gửi
sendBtn.addEventListener('click', sendMessage);

// Sự kiện nhấn Enter
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Tin nhắn chào đầu tiên từ bác sĩ
addMessage("Xin chào! Tôi là bác sĩ tư vấn. Bạn khỏe không? Có điều gì cần hỗ trợ không?", false);