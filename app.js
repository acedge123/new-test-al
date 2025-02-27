document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const income = document.getElementById('income').value;
    const jobStatus = document.getElementById('jobStatus').value;

    // Display loading message
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Submitting data...</p>`;

    // Prepare data for API
    const formData = {
        name: name,
        income: income,
        jobStatus: jobStatus,
    };

    try {
        // Send data to API
        const response = await fetch('https://api.homefinancecheck.com/api/v1/leads/', { // Replace with your API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Token 9cf28cc76e1099e957a4ba53ccc4510b77e8e832, // Replace with the correct token
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            resultDiv.innerHTML = `<p>Submission Successful: ${result.message}</p>`;
        } else {
            const errorData = await response.json();
            resultDiv.innerHTML = `<p>Submission Failed: ${errorData.message}</p>`;
        }
    } catch (error) {
        resultDiv.innerHTML = `<p>An unexpected error occurred: ${error.message}</p>`;
    }
});




