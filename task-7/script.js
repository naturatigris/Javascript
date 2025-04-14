document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');
    const chatWindow = document.getElementById('chat-window');
  
    function getTimestamp() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    }
  
    function displayMessage(content, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message', sender);
      
      const messageContent = document.createElement('span');
      messageContent.textContent = content;
      
      const timestamp = document.createElement('div');
      timestamp.classList.add('timestamp');
      timestamp.textContent = getTimestamp();
      
      messageDiv.appendChild(messageContent);
      messageDiv.appendChild(timestamp);
      chatWindow.appendChild(messageDiv);
      
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  
    function simulateBotResponse(message) {
      const responses = [
        'Hello! How can I assist you today?',
        'I am a simple bot. Tell me more!',
        'I am here to help. What can I do for you?',
        'I am processing your request...',
        'I’m glad you reached out. How can I help?'
      ];
      let randomResponse
      if (message.toLowerCase().includes('hi') || message.toLowerCase().includes('hello') || message.toLowerCase().includes('hey')) {
        randomResponse = responses[0];


      }else{
      randomResponse = responses[Math.floor(Math.random() * responses.length)];}
      
      setTimeout(() => {
        displayMessage(randomResponse, 'bot');
      }, 1000);  
    }
  
    sendBtn.addEventListener('click', () => {
      const message = messageInput.value.trim();
      
      if (message !== '') {
        displayMessage(message, 'user');
        messageInput.value = ''; 
        
        simulateBotResponse(message);
      }
    });
  
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendBtn.click();  
      }
    });
  });
  