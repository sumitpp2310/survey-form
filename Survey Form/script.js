document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Thank you, your response is noted");
    this.reset(); // Reset the form
});
