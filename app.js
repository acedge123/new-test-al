function submitForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const income = document.getElementById('income').value;
    const jobStatus = document.getElementById('jobStatus').value;

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>User Information</h2>
                           <p>Name: ${name}</p>
                           <p>Income: ${income}</p>
                           <p>Job Status: ${jobStatus}</p>`;
}
