export { getCookie, removeChildren, showLoader, removeLoader };
import { createElement } from '../services/dom.js';

// returns the cookie with the given name,
// or undefined if not found
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function removeChildren(elem) {
  while(elem.firstElementChild) elem.removeChild(elem.firstElementChild)
}

function showLoader(rootElem) {
  const cube = createElement('div', [], ['cube']);
  for (let i = 0; i < 6; i++) {
    const slide = createElement('div', [], ['side']);
    cube.append(slide);
  }
  const cubeContainer = createElement('div', [cube], ['cube-container']);
  rootElem.append(cubeContainer);
}
function removeLoader() {
  document.querySelector('.cube-container').remove();
}