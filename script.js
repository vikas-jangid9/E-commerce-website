const items = [
  { id: 1, name: 'Red T-shirt' },
  { id: 2, name: 'Blue Jeans' },
  { id: 3, name: 'Green Jacket' },
  { id: 4, name: 'Yellow Hat' },
  { id: 5, name: 'Purple Scarf' },
  { id: 6, name: 'Orange Shoes' }
];

function filterItems() {
  const searchBar = document.getElementById('search-bar');
  const results = document.getElementById('results');
  const query = searchBar.value.toLowerCase();

  results.innerHTML = '';
  results.style.display = 'none';  

  if (query.length > 3) {
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
    
    if (filteredItems.length > 0) {
      results.style.display = 'block';  
      results.style.width = `${searchBar.offsetWidth}px`;  
      
      filteredItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        div.textContent = item.name;
        results.appendChild(div);     
      });
    } else {
      results.textContent = 'No results found.';
      results.style.display = 'block';  
    }
  }
}