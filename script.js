function compare() {
  const q = document.getElementById('query').value.trim();
  const results = document.getElementById('results');
  results.innerHTML = '';
  if (!q) return;

  // Fake data - replace with real fetch/scrape later
  const data = [
    { site: 'Amazon', price: Math.floor(Math.random()*10000)/100, url: '#' },
    { site: 'Flipkart', price: Math.floor(Math.random()*10000)/100, url: '#' }
  ];

  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <h2>${item.site}</h2>
      <p>Price: ₹${item.price.toFixed(2)}</p>
      <p><a href="${item.url}" target="_blank">Buy now</a></p>`;
    results.appendChild(div);
  });
}
