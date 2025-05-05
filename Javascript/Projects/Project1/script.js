// Get DOM elements
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.getElementById('messageContainer');

// Load messages from LocalStorage on page load
window.onload = function() {
  const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messages.forEach(msg => {
    displayMessage(msg.text, msg.type, msg.time);
  });
};

// Function to add a message
function sendMessage() {
  const text = messageInput.value.trim();
  if (text !== '') {
    const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    const msgData = { text, type: 'sent', time };

    displayMessage(text, 'sent', time);
    saveMessage(msgData);

    // Simulate receiving a reply after 1 second
    setTimeout(() => {
      const replyTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
      const replyData = { text: 'Auto-reply: ' + text, type: 'received', time: replyTime };
      displayMessage(replyData.text, 'received', replyTime);
      saveMessage(replyData);
    }, 1000);
    
    messageInput.value = '';
  }
}

// Function to display message
function displayMessage(text, type, time) {
  const div = document.createElement('div');
  div.classList.add('message', type);
  div.innerHTML = `${text}<span class="timestamp">${time}</span>`;
  messageContainer.appendChild(div);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}

// Function to save messages in LocalStorage
function saveMessage(msg) {
  let messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
  messages.push(msg);
  localStorage.setItem('chatMessages', JSON.stringify(messages));
}

// Send message on button click
sendBtn.addEventListener('click', sendMessage);

// Also allow "Enter" key to send
messageInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
