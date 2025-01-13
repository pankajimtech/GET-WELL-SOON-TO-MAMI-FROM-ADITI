// Simple wellness chatbot responses
const responses = {
  hello: "Hello! I'm here to help you feel better. 😊",
  "how are you":
    "I'm just a bot, but I'm doing great! How are you feeling today?",
  "feel sad":
    "I'm really sorry you're feeling this way. Remember, you're not alone. Take a deep breath, everything will be okay. 💚",
  "thank you": "You're very welcome! I'm here for you anytime. 💖",
  bye: "Goodbye! Take care and be kind to yourself. 🌟",
};

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();

  if (userMessage === "") {
    return;
  }

  // Display user message
  appendMessage(userMessage, "user");

  // Clear input field
  inputField.value = "";

  // Generate bot response
  const botMessage = getBotResponse(userMessage);
  appendMessage(botMessage, "bot");
}

function appendMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", `${sender}-message`);
  messageDiv.textContent = message;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto scroll to the latest message
}

function getBotResponse(userMessage) {
  // Check for specific responses or default to a general one
  const normalizedMessage = userMessage.toLowerCase();

  if (responses[normalizedMessage]) {
    return responses[normalizedMessage];
  } else {
    return "I'm here for you. Feel free to tell me more! 😊";
  }
}

// async function getBotResponse(userMessage) {
//   const response = await fetch("YOUR_API_URL", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer YOUR_API_KEY`,
//     },
//     body: JSON.stringify({ prompt: userMessage, max_tokens: 100 }),
//   });

//   const data = await response.json();
//   return data.choices[0].text.trim();
// }
