document.getElementById('search-button').addEventListener('click', () => {
  const searchTerm = document.getElementById('search-input').value.trim();

  const outputElement = document.getElementById('output');
  outputElement.textContent = ''; 

  if (!searchTerm) {
    fetch('superheroes.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch superhero list.');
        }
        return response.text();
      })
      .then((data) => {
        outputElement.innerHTML = data; 
      })
      .catch((error) => {
        outputElement.textContent = `Error: ${error.message}`;
      });
    return;
  }

  fetch(`superheroes.php?query=${encodeURIComponent(searchTerm)}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch superhero details.');
      }
      return response.text();
    })
    .then((data) => {
      outputElement.innerHTML = data; 
    })
    .catch((error) => {
      outputElement.textContent = `Error: ${error.message}`;
    });
});
