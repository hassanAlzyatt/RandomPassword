const b1=document.getElementById("b1");
const b2=document.getElementById("b2");
const b3=document.getElementById("b3");
const b4=document.getElementById("b4");
const length=document.getElementById("length");
const password =document.getElementById("pass");
const btn =document.getElementById("btn");



let smallLetter=false;
let CapitalLetter=false;
let SpecialSymbols=false;
let Numbers= false;
let passwordLength=0;
let generatedPassword="";
btn.onclick =function(){
    
    smallLetter= b1.checked? true:false;
    CapitalLetter= b2.checked? true:false;
    SpecialSymbols= b3.checked? true:false;
    Numbers= b4.checked? true:false;
    passwordLength=Number(length.value);
    generatePassword(smallLetter,CapitalLetter,SpecialSymbols,Numbers,passwordLength);
}
    


function generatePassword(smallLetter,CapitalLetter,SpecialSymbols,Numbers,passwordLength){
    generatedPassword="";
    let chars ='';
    chars +=smallLetter ? "asdfghjklzxcvbnmqwertyuiop" :"";
    chars += CapitalLetter ? "ASDFGHJKLQWERTYUIOPZXCVBNM":"";
    chars += SpecialSymbols ? "!@#$%&*+_.":"";
    chars +=Numbers? "0123456789":"";

    if(passwordLength===0){
        password.textContent="password length should be bigger than 1";

    }
    else if(!(smallLetter||CapitalLetter||SpecialSymbols||Numbers))
    {
        password.textContent="a checbox at least must be picked";

    } else{
        let index=0;
        for(let i=0 ;i<passwordLength;i++){
            index=Math.floor(Math.random()*(chars.length));

            generatedPassword+=chars[index];
           
        }
        password.textContent=generatedPassword;
    }
    
   
}

