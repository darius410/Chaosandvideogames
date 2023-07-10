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

    const setDark = () => {
        document.body.classList.add("dark-mode");
        buttonToggle.classList.add("button-dark-mode");
        
       localStorage.setItem('darkMode','enabled');
  
}

        const setLight = () => {

       document.body.classList.remove("dark-mode");
       buttonToggle.classList.remove("button-dark-mode");
       localStorage.setItem('darkMode',"None");
 
    
    };
  
    if(darkMode === "enabled"){
        setDark();
    }

buttonToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
        if (darkMode !== 'enabled') {
            setDark();
            console.log("Dark Mode Set");
        }else{
            setLight();
        }
         });
        






