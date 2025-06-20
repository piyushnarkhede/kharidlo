function searchProduct() {
  const input = document.getElementById("productInput").value.trim();
  if (!input) return;

  document.getElementById("productName").innerText = input;
  document.getElementById("results").classList.remove("hidden");

  // Dummy product data — replace with live API data or scraping
  const dummyResults = [
    { site: "Amazon", price: 5999, url: "https://amazon.in" },
    { site: "Flipkart", price: 6200, url: "https://flipkart.com" },
    { site: "Meesho", price: 6100, url: "https://meesho.com" }
  ];

  // Find best price
  const bestPrice = Math.min(...dummyResults.map(r => r.price));

  const table = document.getElementById("resultsTable");
  table.innerHTML = ""; // Clear previous results

  dummyResults.forEach(result => {
    const row = document.createElement("tr");
    if (result.price === bestPrice) row.classList.add("best");

    row.innerHTML = `
      <td>${result.site}</td>
      <td>₹${result.price}</td>
      <td><a href="${result.url}" target="_blank">Buy</a></td>
    `;
    table.appendChild(row);
  });
}
