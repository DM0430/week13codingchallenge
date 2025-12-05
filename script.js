function createGreeting() {
    //Declare variables to store the input values
    let userName = document.getElementById("nameInput").value;
    let magicWord = document.getElementById("magicWordInput").value;

    //create the magical greeting message
    let greetingMessage = `Greetings, ${userName}! May the power of ${magicWord} be with you!`;

    //display the greeting on the webpage
    document.getElementById("greetingOutput").innerHTML = greetingMessage;

    //display the greeting in the alert box
    alert(greetingMessage);
}