// light and dark mode start
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode != "active" ? enableDarkmode() : disableDarkmode() 
})
// light and dark mode end


let expression = ''
function handleClickButton(ele){
    let value = ele.innerText;

    if (value === "") value = "DEL";

    if (value === "AC"){
        reset();
        return;
    }

    if (value === "DEL"){
        expression = expression.slice(0, -1);
    }
    else if(value === "="){
        try{
            result.innerText = eval(expression);
            expression = eval(expression).toString();
        }catch {
            result.innerText = "Error";
        }
        return;
    }
    else {
        expression += value;
    }

    document.getElementById('input').innerText = expression;
}
function reset() {
    expression = "";
    document.getElementById('input').innerText = "";
    result.innerText = "0";
}
