document.getElementById('mortgageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loan = parseFloat(document.getElementById('loanAmount').value);
    const interest = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const years = parseInt(document.getElementById('loanTerm').value);
    const payments = years * 12;

    if (loan <= 0 || interest < 0 || years <= 0) {
        document.getElementById('result').textContent = "Please enter valid values.";
        return;
    }

    // Monthly Payment Formula
    const monthly =
        interest === 0
            ? loan / payments
            : (loan * interest) / (1 - Math.pow(1 + interest, -payments));

    document.getElementById('result').innerHTML = `
        <strong>Monthly Payment:</strong> $${monthly.toFixed(2)}<br>
        <strong>Total Payment:</strong> $${(monthly * payments).toFixed(2)}<br>
        <strong>Total Interest:</strong> $${((monthly * payments) - loan).toFixed(2)}
    `;
});