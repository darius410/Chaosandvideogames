const a=document.querySelectorAll("[data-navLink]");a.forEach(t=>{t.getAttribute("href")===window.location.pathname&&t.setAttribute("aria-current","page")});const d=document.querySelector("#darkLightButton");let e=localStorage.getItem("darkMode");const o=()=>{document.body.classList.add("dark-mode"),localStorage.setItem("darkMode","enabled")},r=()=>{document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode","None")};e==="enabled"&&o();d.addEventListener("click",()=>{e=localStorage.getItem("darkMode"),e!=="enabled"?(o(),console.log("hello")):r()});
