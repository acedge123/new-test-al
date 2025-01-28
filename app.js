async function submitForm() {
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

    // Prepare data for API
    const formData = {
        name: name,
        income: income,
        jobStatus: jobStatus
    };

    try {
        // Send data to API
        const response = await fetch('https://api.homefinancecheck.com/api/v1/leads/', { // Replace with your API endpoint
            method: 'POST',
            headers: {
                Authorization: Token 9cf28cc76e1099e957a4ba53ccc4510b77e8e832
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            resultDiv.innerHTML += `<p>Submission Successful: ${result.message}</p>`;
        } else {
            const error = await response.json();
            resultDiv.innerHTML += `<p>Error: ${error.message}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML += `<p>Unexpected Error: ${error.message}</p>`;
    }
}
