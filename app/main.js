const inputURL = document.querySelector('.inp-url');
const btnFind = document.querySelector('.btn-find');
const imgIcon = document.querySelector('.img-icon');
const textIconURL = document.querySelector('.text-icon-url');
const BASE_ICON_URL = 'https://icon.horse/icon/';

const onLickBtnFind = () => {
    const rawUrl = inputURL.value;
    const regExpUrl = /http[s]?:/;
    const url = regExpUrl.test(rawUrl)? new URL(rawUrl).host : rawUrl;
    imgIcon.src = '';
    textIconURL.innerText = url;
    inputURL.value = '';
    imgIcon.src = `${ BASE_ICON_URL }${ url }`;
}

btnFind.addEventListener('click', onLickBtnFind);