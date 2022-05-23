const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
const listElem = document.querySelector('ul');

buttonElem.addEventListener('click', function () {
    if (inputElem.value != '') {
        let inputValue = inputElem.value;
        inputElem.value = '';

        let listItem = document.createElement('li');
        let deleteButton = document.createElement('button');

        deleteButton.setAttribute('aria-label', `Remove ${inputValue}`);

        listItem.innerHTML = inputValue;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove chapter');

        listItem.appendChild(deleteButton);
        listElem.appendChild(listItem);

        deleteButton.addEventListener('click', function () {
            listElem.removeChild(listItem);
            input.focus();
        });

        input.focus();
    }
});