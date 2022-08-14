const txtInput = document.getElementById('text' );
const btn = document.getElementById('press');
const txtOutput = document.getElementById('output')

function printOutput() {
    txtOutput.innerHTML = txtInput.value
};

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.addEventListener('end', () => {
        txtInput.disabled = false
    })
    txtInput.disabled = true
    speechSynthesis.speak(utterance)
};

btn.addEventListener("click", () => {
    printOutput(txtInput.value)
    speak(txtInput.value)
});