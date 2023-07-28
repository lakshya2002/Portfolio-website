// theme : light and dark mode
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        daynight.querySelector("i").classList.add("fa-moon");
    }
})

//  typing animation
var typed = new Typed(".typing",{
    strings:["","Frontend Developer","GUI Developer","Analyse Your Data"],
    typeSpeed:120,
    BackSpeed:30,
    loop:true
})

//   Aside
const navv  = document.querySelector(".nav"),
navList = navv.querySelectorAll("li"),
totalNavList = navList.length;
for(let i=0;i<totalNavList;i++)
{
    const a  = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for (let j=0; j<totalNavList; j++)
        {
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this)
    })
}
function showSection(element){
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#"+ target).classList.add("active")

}

const navtogglerbtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navtogglerbtn.addEventListener("click" ,() => 
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navtogglerbtn.classList.toggle("open");
}
// Send Email
function sendEmail(){
    sendEmail.send({
        Host: "smtp.gmail.com",
        Username: "heoraj634@gmail.com",
        Password: "demoaccount@09",
        To: "lakshya29.verma@gmail.com",
        From: "heoraj634@gmail.com",    
        Subject : "demo",
        Body: "Hi this is first message"
    }).then(
        message => alert(message)
    );
}

// document.getElementById("form").addEventListener("submit", sendEmail);
// function validation(){
//     var email = document.getElementById('email').value;
//     var emailcheck = /^[A-Za-z_0-9.]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
//     if (emailcheck.test(email)){
//         document.getElementById('erroremail').innerHTML=" ";
//     }
//     else{
//         document.getElementById('erroremail').innerHTML=" **invaild mail id ";
//         return false;
//     }

// }

// const backtotopbutton = document.querySelector("#back-to-top-btn");
// const backtotopbutton = document.getElementById('back-to-top-btn');
// // window.addEventListener("scroll", scrollFunction);
// window.addEventListener("scroll", scrollFunction);
// function scrollFunction(){
//     if (window.pageYOffsetd  > 300)
//     {
//         backtotopbutton.style.display= "block";
//     }
//     else{
//         backtotopbutton.style.display="none";
//     }
// }
// backtotopbutton.addEventListener('click',backtotop);
// function backtotop(){
//     window.scrollTo(0,0);
// }


// Get the button:
let mybutton = document.getElementById("backtotopbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display="block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;}