document.addEventListener('DOMContentLoaded', () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'red', 'purple'];
    const colorsContainer = document.getElementById('colors-container');

    colors.map(color => {
        if (color === 'red') {
            const colorBox = document.createElement('div');
            colorBox.className = 'color-box';
            colorBox.style.backgroundColor = color;
            colorBox.textContent = color;
            colorsContainer.appendChild(colorBox);
        }
    });
});



// Filteration Task

const names = ['rameen', 'rashid', 'ali', 'alina', 'aliya', 'mahnoor', 'mehwish', 'sana', 'tahira', 'taimoor'];

        function displayNames(filteredNames) {
            const namesContainer = document.getElementById('names-container');
            namesContainer.innerHTML = '';
            filteredNames.map(name => {
                const nameItem = document.createElement('div');
                nameItem.className = 'name-item';
                nameItem.textContent = name;
                namesContainer.appendChild(nameItem);
            });
        }
        

        function searchName() {
            const searchField = document.getElementById('search-field');
            const searchValue = searchField.value.toLowerCase();
            const filteredNames = names.filter(name => name.toLowerCase().includes(searchValue));
            displayNames(filteredNames);
        }

        // Display all names initially
        displayNames(names);