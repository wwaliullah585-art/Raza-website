/**
 * Kondee AI Chatbot - Main JavaScript File
 * This creates a floating chatbot widget that can be embedded on any page
 * The chatbot answers questions based on website content defined in chatbot-data.js
 */

class KondeeAIChatbot {
  constructor() {
    this.chatActive = false;
    this.messages = [];
    this.isTyping = false;
    this.init();
  }

  /**
   * Initialize the chatbot - Create DOM elements and attach event listeners
   */
  init() {
    // Create chatbot button and window elements
    this.createChatbotUI();
    this.attachEventListeners();
    this.loadChatHistory();
  }

  /**
   * Create the chatbot button and chat window HTML
   */
  createChatbotUI() {
    // Create chatbot container
    const container = document.createElement('div');
    container.id = 'kondee-chatbot';
    container.innerHTML = `
      <!-- Chatbot Button (Floating) -->
      <div id="chatbot-button" class="chatbot-button" title="Chat with Kondee AI">
        <i class="fas fa-comments"></i>
        <span class="notification-badge" id="notification-badge" style="display:none;">1</span>
      </div>

      <!-- Chat Window -->
      <div id="chat-window" class="chat-window" style="display:none;">
        <!-- Header -->
        <div class="chat-header">
          <div class="chat-header-title">
            <i class="fas fa-robot"></i> Kondee AI
            <span class="status-indicator" title="Online"></span>
          </div>
          <button id="close-chat" class="close-chat-btn" title="Close chat">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Messages Container -->
        <div id="messages-container" class="messages-container">
          <!-- Initial greeting message -->
          <div class="message bot-message">
            <div class="message-avatar">
              <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
              <p>👋 Hi there! I'm Kondee AI, your personal website assistant. How can I help you today?</p>
              <small class="message-time">Just now</small>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="chat-input-area">
          <form id="chat-form" class="chat-form">
            <input 
              type="text" 
              id="message-input" 
              class="message-input" 
              placeholder="Ask me anything about our courses..."
              autocomplete="off"
            >
            <button type="submit" class="send-button" title="Send message">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>

        <!-- Footer -->
        <div class="chat-footer">
          <small>Powered by Kondee AI • Answers based on website content</small>
        </div>
      </div>
    `;

    document.body.appendChild(container);
  }

  /**
   * Attach event listeners to chatbot elements
   */
  attachEventListeners() {
    const chatbotButton = document.getElementById('chatbot-button');
    const closeButton = document.getElementById('close-chat');
    const chatForm = document.getElementById('chat-form');
    const messageInput = document.getElementById('message-input');

    // Toggle chat window
    chatbotButton.addEventListener('click', () => this.toggleChatWindow());

    // Close chat window
    closeButton.addEventListener('click', () => this.toggleChatWindow());

    // Send message on form submit
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = messageInput.value.trim();
      if (message) {
        this.sendMessage(message);
        messageInput.value = '';
        messageInput.focus();
      }
    });

    // Allow Enter key to send message (Shift+Enter for new line)
    messageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        chatForm.dispatchEvent(new Event('submit'));
      }
    });
  }

  /**
   * Toggle chat window visibility
   */
  toggleChatWindow() {
    const chatWindow = document.getElementById('chat-window');
    const messageInput = document.getElementById('message-input');
    
    if (chatWindow.style.display === 'none') {
      chatWindow.style.display = 'flex';
      this.chatActive = true;
      messageInput.focus();
      this.removeBadge();
    } else {
      chatWindow.style.display = 'none';
      this.chatActive = false;
    }
  }

  /**
   * Send a message and get bot response
   * @param {string} userMessage - The user's message
   */
  sendMessage(userMessage) {
    // Add user message to chat
    this.addMessageToChat(userMessage, 'user');

    // Show typing indicator
    this.showTypingIndicator();

    // Simulate API delay (more natural conversation)
    setTimeout(() => {
      const botResponse = this.generateBotResponse(userMessage);
      this.removeTypingIndicator();
      this.addMessageToChat(botResponse, 'bot');
      this.saveChatHistory();
    }, 600 + Math.random() * 400); // 600-1000ms delay
  }

  /**
   * Generate bot response based on user message
   * @param {string} userMessage - The user's question
   * @returns {string} - Bot's response
   */
  generateBotResponse(userMessage) {
    // Check if generateResponse function exists (from chatbot-data.js)
    if (typeof generateResponse === 'function') {
      return generateResponse(userMessage);
    }

    // Fallback if chatbot-data.js is not loaded
    return this.fallbackResponse(userMessage);
  }

  /**
   * Fallback response if data file is not loaded
   * @param {string} userMessage - User's question
   * @returns {string} - Fallback response
   */
  fallbackResponse(userMessage) {
    const responses = [
      "That's a great question! I'm learning about our courses and services. Please check our website pages for more detailed information.",
      "I'd love to help! For detailed information, please visit our Services page or Contact us directly.",
      "You can find more information about this topic on our website. Feel free to explore our courses and services sections!"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }

  /**
   * Add a message to the chat display
   * @param {string} message - Message text
   * @param {string} sender - 'user' or 'bot'
   */
  addMessageToChat(message, sender) {
    const messagesContainer = document.getElementById('messages-container');
    const messageElement = document.createElement('div');
    
    messageElement.className = `message ${sender}-message`;

    const now = new Date();
    const timeString = now.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    if (sender === 'user') {
      messageElement.innerHTML = `
        <div class="message-content">
          <p>${this.escapeHtml(message)}</p>
          <small class="message-time">${timeString}</small>
        </div>
        <div class="message-avatar user-avatar">
          <i class="fas fa-user"></i>
        </div>
      `;
    } else {
      messageElement.innerHTML = `
        <div class="message-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
          <p>${this.escapeHtml(message)}</p>
          <small class="message-time">${timeString}</small>
        </div>
      `;
    }

    messagesContainer.appendChild(messageElement);
    this.scrollToBottom();

    // Store message in memory
    this.messages.push({
      text: message,
      sender: sender,
      timestamp: now
    });
  }

  /**
   * Show typing indicator
   */
  showTypingIndicator() {
    const messagesContainer = document.getElementById('messages-container');
    const typingElement = document.createElement('div');
    typingElement.id = 'typing-indicator';
    typingElement.className = 'message bot-message';
    typingElement.innerHTML = `
      <div class="message-avatar">
        <i class="fas fa-robot"></i>
      </div>
      <div class="message-content">
        <div class="typing-animation">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `;
    messagesContainer.appendChild(typingElement);
    this.scrollToBottom();
  }

  /**
   * Remove typing indicator
   */
  removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  /**
   * Scroll chat to bottom
   */
  scrollToBottom() {
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  /**
   * Escape HTML to prevent injection
   * @param {string} text - Text to escape
   * @returns {string} - Escaped text
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Save chat history to localStorage
   */
  saveChatHistory() {
    try {
      localStorage.setItem('kondeeChat_history', JSON.stringify(this.messages));
    } catch (e) {
      console.warn('Unable to save chat history:', e);
    }
  }

  /**
   * Load chat history from localStorage
   */
  loadChatHistory() {
    try {
      const saved = localStorage.getItem('kondeeChat_history');
      if (saved) {
        this.messages = JSON.parse(saved);
        // Could restore messages here if desired
      }
    } catch (e) {
      console.warn('Unable to load chat history:', e);
    }
  }

  /**
   * Remove notification badge
   */
  removeBadge() {
    const badge = document.getElementById('notification-badge');
    if (badge) {
      badge.style.display = 'none';
    }
  }

  /**
   * Method to show notification badge when new message arrives
   */
  showBadge() {
    if (!this.chatActive) {
      const badge = document.getElementById('notification-badge');
      if (badge) {
        badge.style.display = 'block';
      }
    }
  }

  /**
   * Clear chat history
   */
  clearChatHistory() {
    this.messages = [];
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = `
      <div class="message bot-message">
        <div class="message-avatar">
          <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
          <p>👋 Chat cleared! How can I help you?</p>
          <small class="message-time">Just now</small>
        </div>
      </div>
    `;
    localStorage.removeItem('kondeeChat_history');
  }
}

/**
 * Initialize chatbot when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.kondeeAI = new KondeeAIChatbot();
  });
} else {
  window.kondeeAI = new KondeeAIChatbot();
}
