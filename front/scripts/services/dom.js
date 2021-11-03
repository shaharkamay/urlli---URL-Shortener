export { starter };
import { applyTheme } from './event-handlers';

const starter = () => {
    // dark theme
    document.addEventListener("DOMContentLoaded", () => {
        const savedTheme = localStorage.getItem("theme") || "auto";
        
        applyTheme(savedTheme);
        
        for(const optionElement of document.querySelectorAll("#select-theme option")) {
            optionElement.selected = savedTheme === optionElement.value;
        }
        
        document.getElementById("select-theme").addEventListener("change", function () {
            localStorage.setItem("theme", this.value);
            applyTheme(this.value);
        });
    });
};