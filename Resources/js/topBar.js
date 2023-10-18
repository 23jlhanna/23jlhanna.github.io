function dropdown() {
    const dropdownMenu = document.querySelector('.barDropdownMenuScreen');
    dropdownMenu.style.animation = 'dropdownMoveIn .4s ease-out forwards';
    dropdownMenu.style.display = 'flex';
}

function closeDropdown() {
    const dropdownMenu = document.querySelector('.barDropdownMenuScreen');
    dropdownMenu.style.animation = 'dropdownMoveOut .4s ease-in forwards';
}