// ! SAVE THEME STATE FOR WHEN USER RESETS PAGE OR LEAVES 

const currentPage= document.querySelectorAll(
    "[data-navLink]"
);

currentPage.forEach((link) => {
    if( link.getAttribute('href') === window.location.pathname){
        link.setAttribute('aria-current', 'page')
      
    }
})



const buttonToggle = document.querySelector("#darkLightButton");
let darkMode = localStorage.getItem('darkMode');
let isActive = localStorage.getItem('isActive');

const setDark = () => {
    document.body.classList.add("dark-mode");
    buttonToggle.classList.add("button-dark-mode");
    buttonToggle.setAttribute('aria-pressed', 'true');
    localStorage.setItem('darkMode', 'enabled');
    localStorage.setItem('isActive', '1');
  };

  const setLight = () => {
    document.body.classList.remove("dark-mode");
    buttonToggle.classList.remove("button-dark-mode");
    buttonToggle.setAttribute('aria-pressed', 'false');
    localStorage.setItem('darkMode', "None");
    localStorage.setItem('isActive', '0');
  };
  
    if(darkMode === "enabled"){
        setDark();
    }
    else{
        setLight();
    }

buttonToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    isActive = localStorage.getItem('isActive')
        if (darkMode !== 'enabled') {
            setDark();
            console.log("Dark Mode Set");
        }else{
            setLight();
        }
         });
        






