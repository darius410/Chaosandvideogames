// ! SAVE THEME STATE FOR WHEN USER RESETS PAGE OR LEAVES 

const currentPage= document.querySelectorAll(
    "[data-navLink]"
);

currentPage.forEach((link) => {
    if( link.getAttribute('href') === window.location.pathname){
        link.setAttribute('aria-current', 'page')
      
    }
})



const toggleButtons = document.querySelectorAll(".theme-switch");
let darkMode = localStorage.getItem('darkMode');

const setThemeState = (isDark) => {
    document.body.classList.toggle("dark-mode", isDark);

    toggleButtons.forEach((buttonToggle) => {
        buttonToggle.classList.toggle("button-dark-mode", isDark);
        buttonToggle.setAttribute('aria-pressed', String(isDark));
    });

    localStorage.setItem('darkMode', isDark ? 'enabled' : 'None');
    localStorage.setItem('isActive', isDark ? '1' : '0');
};

const setDark = () => {
    setThemeState(true);
  };

  const setLight = () => {
    setThemeState(false);
  };
  
if(darkMode === "enabled"){
    setDark();
}
else{
    setLight();
}

toggleButtons.forEach((buttonToggle) => {
    buttonToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            setDark();
            console.log("Dark Mode Set");
        }else{
            setLight();
        }
    });
});
        






