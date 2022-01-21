const burgerBtn = document.querySelector('.mob-menu');
const wrapperMenuList = document.querySelector('.nav-list');

const showSidebar = () => {
    wrapperMenuList.classList.toggle('show');
}

burgerBtn.addEventListener('click', showSidebar);
wrapperMenuList.addEventListener('click', showSidebar);