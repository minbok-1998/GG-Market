const headFeed = document.querySelector('.head-feed');
const headSearch = document.querySelector('.head-search');

const btnSearchUser = document.querySelector('.btn-search-user');
const btnBackToFeed = document.querySelector('.btn-back-to-feed');

const contFeed = document.querySelector('.cont-feed');

// hidden 클래스 토글시키는 함수
function addClassHidden() {
    contFeed.classList.toggle('hidden');
    headFeed.classList.toggle('hidden');
    headSearch.classList.toggle('hidden');
}

function clickBtnSearch(event) {
    addClassHidden();
}

function clickBtnBack(event) {
    addClassHidden();
}

btnSearchUser.addEventListener('click',clickBtnSearch);
btnBackToFeed.addEventListener('click',clickBtnBack);