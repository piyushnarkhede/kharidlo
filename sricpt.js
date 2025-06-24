const btn = document.getElementById('search-btn');
const input = document.getElementById('query');
const results = document.getElementById('results');

btn.addEventListener('click', performSearch);
input.addEventListener('keyup', e => { if (e.key === 'Enter') performSearch(); });

function performSearch() {
  const q = input.value.trim();
  results.innerHTML = '';
  if (!q) return;

  // Placeholder: simulate results
  const demo = [
    { site: 'Amazon', price: Math.random()*100, img: 'https://source.unsplash.com/200x150/?product', url: '#' },
    { site: 'Flipkart', price: Math.random()*100, img: 'https://source.unsplash.com/200x150/?electronics', url: '#' },
  ];

  demo.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.site}">
      <h3>${item.site}</h3>
      <p><strong>₹${item.price.toFixed(2)}</strong></p>
      <a href="${item.url}" target="_blank">View</a>
    `;
    results.appendChild(card);
  });
  
  // Future: Use browser extension or API to fetch real prices
}
