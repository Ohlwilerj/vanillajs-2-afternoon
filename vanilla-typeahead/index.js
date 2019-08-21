const characters = []
const list = document.getElementById('list');
const search = document.querySelector('input')
    // console.dir(list);

fetch('http://swapi.co/api/people')
    .then(response => response.json())
    .then(response => characters.push(...response.results))
    
function filterText() {
    const filtered = characters
        .filter(val => val.name.toLowerCase().includes(this.value.toLowerCase()))
        .map(val => `<li>${val.name}</li>`)

    if (filtered.length) {
        render(filtered)
    }
        
}
function render(array) {
    const html = array.join('');
    list.innerHTML = html;
}

search.addEventListener('keyup', filterText);