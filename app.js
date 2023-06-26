const getColor=()=>{
    //Hex code
    const randomNumber=Math.floor(Math.random() *16777215);
    const randomCode="#"+randomNumber.toString(16);
    document.body.style.backgroundColor=randomCode; //background color set
    document.getElementById("color-code").innerText=randomCode; //inner color text

    //click board WITH COPY PAST COLOR
    navigator.clipboard.writeText(randomCode)


}
document.getElementById("btn").addEventListener(
    "click",
    getColor
    )