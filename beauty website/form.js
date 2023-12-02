var em=document.getElementById("email");
var pwd= document.getElementById("Password");
var ph=document.getElementById("number")
var err1= document.getElementById("err1");
var err2=document.getElementById("err2");
var err3=document.getElementById("err3");

var regex=/^([A-Za-z0-9\-#_.])@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/
var regex1=/([0.9]{3}-[0-9]{3}-[0-9]{4})||([0-9]{3}.[0-9]{3}.[0-9]{4})||([0-9]{3} [0-9]{3} [0-9]{4})/
var regex2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function validateemail(){
    if(em.value==""){
        err1.innerHTML="Field cannot be empty";
        err1.style.color="red"
        em.style.border="2px solid red";
        return false
    }
    else if(!regex.test(em.value)){

        err1.innerHTML="Please enter proper email";
        err1.style.color="red"
        em.style.border="2px solid red";
        return false
    }
    else{ 
        err1.innerText="";
        em.style.border="2px solid green";
        return true
    }
}
function validatephone(){
    if(ph.value==""){
        err3.innerHTML="Feild Cannot Be Empty";
        err3.style.color="red"

    }
    else if(!regex1.test(ph.value)){
        err3.innerHTML="Please Enter Proper Phone Number Format"
        err3.style.color="red"
        ph.style.border="2px solid red";
    }
    else{
        err3.innertext="";
        ph.style.border="2px solid green";
        return true
    }
}

function validatepassword(){
    if(pwd.value==""){
        err2.innertext="Feild cannot be empty";
        err2.style.color="red"
        pwd.style.border="2px solid red";
    }
    else if(!regex2.test(pwd.value)){
        err2.innerHTML="Should have minimum 8 characters, atleat one upper case letter, and one lower case letter, and atleast one number"
        err2.style.color="red"
        err2.style.border="2px solid red"
    }
    else{
        err2.innerText="";
        pwd.style.border="2px solid green"
    }
}
