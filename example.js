// U99796912

// Function to load data from CSV and display it as a list
function loadAndDisplayData() {
    // Define the delimiter for the CSV file
    const delimiter = ",";

    // Load the CSV file using d3.dsv
    d3.dsv(delimiter, "data/purchase_orders.csv").then(data => {
        // Select the body element and append an unordered list
        const ul = d3.select("body").append("ul");

        // Append a list item for each purchase order
        ul.selectAll("li")
            .data(data)
            .enter()
            .append("li")
            .text(d => `${d.customerName} - Order ID: ${d.orderId} - Purchase Amount: ${d.purchaseAmount}`);
    }).catch(error => {
        console.error('Error loading or parsing data:', error);
    });
}

// Call the function to load and display data
loadAndDisplayData();
