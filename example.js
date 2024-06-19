// Function to load data from CSV and display it as a list
function loadAndDisplayData() {
    d3.csv("data/purchase_orders.csv").then(data => {
        // Select the body element and append an unordered list
        const ul = d3.select("body").append("ul");

        // Append a list item for each purchase order
        ul.selectAll("li")
            .data(data)
            .enter()
            .append("li")
            .text(d => `${d.CustomerName} - Order ID: ${d.OrderID} - Purchase Amount: ${d.PurchaseAmount}`);
    }).catch(error => {
        console.error('Error loading or parsing data:', error);
    });
}

// Call the function to load and display data
loadAndDisplayData();
