export { applyTheme, clickCloseErrorHandler };

function applyTheme(theme) {
    document.body.classList.remove("theme-auto", "theme-light", "theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

function clickCloseErrorHandler(e) {
    if(e.target.tagName !== 'BUTTON') return;

    const errorsSection = document.querySelector('.errors');
    errorsSection.classList.add('display-none');
}