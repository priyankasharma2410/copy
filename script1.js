document.getElementById("open-chat").addEventListener("click", function() {
    document.getElementById("chat-popup").style.display = "block";
});

document.getElementById("send-message").addEventListener("click", function() {
    var userInput = document.getElementById("user-input").value;
    var chatContent = document.getElementById("chat-content");
    
    // Create and append user message
    var message = document.createElement("div");
    message.classList.add("chat-message", "sent");
    message.innerHTML = "<p>" + userInput + "</p>";
    chatContent.appendChild(message);

    // Simulate response from the backend
    setTimeout(function() {
         // Check PostHog feature flag CAN REMOVE
        if (posthog.getFeatureFlag('click') === 'test') {
            // Custom behavior for users with 'test' flag enabled
            var response = getResponseForTestVariant(userInput);
        } else {
            // Default behavior
            var response = getResponse(userInput);
        }
        // Replace this section with actual response from the chatbot
        var response = getResponse(userInput);
        var reply = document.createElement("div");
        reply.classList.add("chat-message", "received");
        reply.innerHTML = "<p>" + response + "</p>";
        chatContent.appendChild(reply);
    }, 1000);

    // Clear user input after sending message
    document.getElementById("user-input").value = "";
});

// Function to get response from the chatbot
function getResponse(userInput) {
    // Add your logic here to handle user input and return appropriate response
    // This is a placeholder function, replace it with your actual chatbot logic
    const input = userInput.toLowerCase();
    if (userInput.toLowerCase().includes("copyright")) {
        return "Copyright laws protect original works of authorship.";
    } else if (userInput.toLowerCase().includes("copyright")) {
        return "Copyright laws protect original works of authorship.";
    } else if (userInput.toLowerCase().includes("fair use")) {
        return "Fair use is a doctrine that permits limited use of copyrighted material without permission from the rights holders.";
    } else if (userInput.toLowerCase().includes("hello") || input.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("good morning")) {
        return "Good morning! How can I help you today?";
    } else if (userInput.toLowerCase().includes("good afternoon")) {
        return "Good afternoon! What can I do for you today?";
    } else if (userInput.toLowerCase().includes("good evening")) {
        return "Good evening! How can I assist you?";
    } else if (userInput.toLowerCase().includes("how are you")) {
        return "I'm just a bot, but I'm here to help! How can I assist you today?";
    } else if (userInput.toLowerCase().includes("help") || input.includes("assist")) {
        return "Sure! Let me know what you need help with.";
    } else if (userInput.toLowerCase().includes("fair use")) {
        return "Fair use is a doctrine that permits limited use of copyrighted material without permission from the rights holders.";
    } else if (userInput.toLowerCase().includes("public domain")) {
        return "Public domain refers to works that are not protected by copyright and are available for use by the public without restriction.";
    } else if (userInput.toLowerCase().includes("plagiarism")) {
        return "Plagiarism is the act of using someone else's work or ideas without proper acknowledgment, passing them off as one's own.";
    } else if (userInput.toLowerCase().includes("intellectual property")) {
        return "Intellectual property refers to creations of the mind, such as inventions, literary and artistic works, designs, symbols, names, and images used in commerce.";
    } else if (userInput.toLowerCase().includes("derivative work")) {
        return "A derivative work is a new, original product that includes elements of pre-existing copyrighted material.";
    } else if (userInput.toLowerCase().includes("register my copyright")) {
        return "While copyright protection exists automatically upon creation of the work, registering your work with the U.S. Copyright Office provides additional benefits.";
    } else if (userInput.toLowerCase().includes("digital millennium copyright act")) {
        return "The Digital Millennium Copyright Act (DMCA) is a U.S. law that addresses issues related to digital rights management, including online piracy.";
    } else if (userInput.toLowerCase().includes("infringement")) {
        return "Copyright infringement occurs when someone uses, reproduces, or distributes copyrighted work without permission.";
    } else if (userInput.toLowerCase().includes("protect my work")) {
        return "To protect your work, you can use measures such as including a copyright notice, registering your copyright, and monitoring for infringement.";
    } else if (userInput.toLowerCase().includes("fair use guidelines")) {
        return "Fair use guidelines provide criteria for determining whether a particular use of copyrighted material is considered fair use, including factors like the purpose of the use, the nature of the work, and the amount used.";
    } else if (userInput.toLowerCase().includes("public domain works")) {
        return "Public domain works include works whose copyright has expired, works that were never copyrighted, and works created by the U.S. federal government.";
    } else if (userInput.toLowerCase().includes("derivative works")) {
        return "Derivative works are new works based on pre-existing copyrighted material, such as adaptations, translations, and compilations.";
    } else if (userInput.toLowerCase().includes("creative commons licenses")) {
        return "Creative Commons licenses are a set of licenses that allow creators to specify how their work can be used by others, offering a flexible alternative to traditional copyright.";
    } else if (userInput.toLowerCase().includes("dmca takedown notice")) {
        return "A DMCA takedown notice is a legal request sent to online service providers to remove infringing content.";
    } else if (userInput.toLowerCase().includes("international copyright law")) {
        return "International copyright law governs the protection of intellectual property across borders, often through treaties and agreements.";
    } else if (userInput.toLowerCase().includes("author's rights")) {
        return "Author's rights, also known as moral rights, are rights that protect the integrity of a creator's work and their reputation.";
    } else if (userInput.toLowerCase().includes("public performance rights")) {
        return "Public performance rights refer to the rights granted to copyright holders to control the public performance or display of their works.";
    } else if (userInput.toLowerCase().includes("royalties")) {
        return "Royalties are payments made to copyright holders for the use or distribution of their works, often based on factors such as sales, streams, or performances.";
    } else if (userInput.toLowerCase().includes("renewing copyright")) {
        return "In most cases, copyright does not need to be renewed. Works created on or after January 1, 1978, are protected for the life of the author plus 70 years.";
    } else {
        return "Sorry, I didn't understand that. Please ask another question.";
    }
}
