/* istanbul ignore file */
try {
    const { isEmpty, isTagValid } = require("./services/validations");
    const gamerTagInput = document.getElementById("gamerTagInput");
    const checkButton = document.getElementById("gamerTagCheckButton");
    const feedbackMessage = document.getElementById("gamerTagFeedback");

    var gamerTagValue;
    var feedbackMessageText;

    gamerTagInput.addEventListener("change", (event) => {
        gamerTagValue = event.target.value;
    });

    checkButton.addEventListener("click", () => {
        // TODO: Add the logic to display the correct feedback message (error and validation)
        feedbackMessageText = (isEmpty(gamerTagValue) && !isTagValid(gamerTagValue))
            ? "Gamer tag cannot be empty and must at least has a length of 8, contains a number and a special character"
            : "Gamer tag is valid";
        feedbackMessage.textContent = feedbackMessageText;
    });
} catch (err) {
    console.error(JSON.stringify(err));
}
