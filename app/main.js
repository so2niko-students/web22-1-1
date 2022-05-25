const inputURL = document.querySelector('.inp-url');
const btnFind = document.querySelector('.btn-find');
const imgIcon = document.querySelector('.img-icon');
const textIconURL = document.querySelector('.text-icon-url');
const BASE_ICON_URL = 'https://icon.horse/icon/';

const onLickBtnFind = () => {
    const url = new URL(inputURL.value);
    imgIcon.src = '';
    textIconURL.innerText = url.host;
    inputURL.value = '';
    imgIcon.src = `${ BASE_ICON_URL }${ url.host }`;
}

btnFind.addEventListener('click', onLickBtnFind);