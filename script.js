// Get the chatbot elements from the HTML
const chatbotButton = document.getElementById("chatbot-button");
const chatbotBox = document.getElementById("chatbot-box");
const closeChat = document.getElementById("close-chat");
const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");


// Open the chatbot
chatbotButton.addEventListener("click", function () {
    chatbotBox.style.display = "block";
});


// Close the chatbot
closeChat.addEventListener("click", function () {
    chatbotBox.style.display = "none";
});


// Send a message when the Send button is clicked
sendButton.addEventListener("click", sendMessage);


// Send a message when the Enter key is pressed
userInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});


// Main chatbot function
function sendMessage() {

    const message = userInput.value.trim();

    // Don't send an empty message
    if (message === "") {
        return;
    }

    // Show the user's message
    addUserMessage(message);

    // Get the chatbot's response
    const response = getBotResponse(message);

    // Show the chatbot response
    setTimeout(function () {
        addBotMessage(response);
    }, 500);

    // Clear the input box
    userInput.value = "";
}


// Add user's message to the chat
function addUserMessage(message) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("user-message");

    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Add chatbot's message to the chat
function addBotMessage(message) {

    const messageDiv = document.createElement("div");

    messageDiv.classList.add("bot-message");

    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}


// Decide how the chatbot should respond
function getBotResponse(message) {

    const question = message.toLowerCase();


    // Greetings
    if (
        question.includes("hello") ||
        question.includes("hi") ||
        question.includes("hey")
    ) {
        return "Hi! I'm Jamal's portfolio assistant. You can ask me about his education, skills, certifications, projects, or career goals.";
    }


    // Education
    else if (
        question.includes("education") ||
        question.includes("school") ||
        question.includes("college") ||
        question.includes("bowie")
    ) {
        return "Jamal is a Computer Technology student at Bowie State University with a concentration in Network Enterprise Infrastructure. His anticipated graduation is December 2026.";
    }


    // Skills
    else if (
        question.includes("skill") ||
        question.includes("technology") ||
        question.includes("technologies")
    ) {
        return "Jamal has experience with Microsoft Azure, Windows Server, Active Directory, Linux, networking, Wireshark, Cisco Packet Tracer, Python, Java, JavaScript, SQL, HTML, CSS, and cybersecurity tools.";
    }


    // Certifications
    else if (
        question.includes("certification") ||
        question.includes("certified") ||
        question.includes("cisco")
    ) {
        return "Jamal has earned the Cisco CyberOps Associate credential and Cisco's Introduction to Packet Tracer credential.";
    }


    // Mitnick Attack Lab
    else if (
        question.includes("mitnick") ||
        question.includes("session hijacking")
    ) {
        return "In the Mitnick Attack Lab, Jamal performed a simulated TCP session hijacking attack in a controlled Docker environment. He used Python and Scapy for packet sniffing, TCP sequence analysis, and packet spoofing, and worked with an rsh trust relationship to demonstrate remote command execution and persistent access.";
    }


    // Firewall Lab
    else if (
        question.includes("firewall") ||
        question.includes("netfilter")
    ) {
        return "In the Firewall Lab, Jamal built and tested a Linux kernel firewall module using Netfilter. He worked with TCP, UDP, ICMP, DNS traffic filtering, Docker containers, protocol logging, and dmesg kernel logs to verify packet detection and filtering.";
    }


    // Wireshark Lab
    else if (
        question.includes("wireshark") ||
        question.includes("packet analysis") ||
        question.includes("forensics")
    ) {
        return "In the Wireshark Packet Analysis Lab, Jamal investigated suspicious HTTP network traffic. He analyzed IP and MAC addresses, protocols, HTTP requests, and POST data to reconstruct a timeline of activity and identify suspicious network behavior.";
    }


    // Projects
    else if (
        question.includes("project") ||
        question.includes("lab")
    ) {
        return "Some of Jamal's cybersecurity projects include the Mitnick Attack Lab, Firewall Lab Setup, and Wireshark Packet Analysis Lab. You can ask me about any one of these projects for more information.";
    }


    // Career goals
    else if (
        question.includes("career") ||
        question.includes("goal") ||
        question.includes("job")
    ) {
        return "Jamal is interested in building a career in system engineering and cloud engineering while continuing to develop his cybersecurity and networking skills.";
    }


    // Experience
    else if (
        question.includes("experience") ||
        question.includes("ibm") ||
        question.includes("internship")
    ) {
        return "Jamal worked as a Technical Operations Intern at IBM, where he supported internal teams, collaborated in an enterprise environment, helped troubleshoot issues, maintained documentation and tracking systems, and participated in team workflows.";
    }


    // Default response
    else {
        return "I'm not sure about that question yet. Try asking me about Jamal's education, skills, certifications, projects, experience, or career goals.";
    }

}

