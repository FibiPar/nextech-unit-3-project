let submitButton= document.querySelector('.submitButton');
let storyOpening= document.querySelector('.story-opening');
let title= document.querySelector(".title");
let optionOne= document.querySelector('.option-one');
let optionTwo= document.querySelector('.option-two');
let optionThree=document.querySelector('.option-three');
let optionFour=document.querySelector('.option-four');

submitButton.addEventListener('click', function(){
    storyOpening.style.display="block";
title.style.display = "block";
optionOne.style.display ="block";
optionTwo.style.display ="block";
document.querySelector('.input').style.display="none";
});

optionOne.addEventListener('click',function(){
    document.querySelector(".option-one-screen").style.display="block";
    document.querySelector(".option-three").style.display="block";
    document.querySelector(".option-four").style.display="block";

    document.querySelector('.story-opening').style.display="none";
    document.querySelector('.title').style.display="none";
    document.querySelector('.option-one').style.display="none";
    document.querySelector('.option-two').style.display="none";
});

optionTwo.addEventListener('click',function(){
document.querySelector(".option-two-screen").style.display="block";

storyOpening.style.display="none";
title.style.display = "none";
optionOne.style.display ="none";
optionTwo.style.display ="none";
document.querySelector(".option-one-screen").style.display="none";
document.querySelector(".option-three").style.display="none";
document.querySelector(".option-four").style.display="none";
});

optionThree.addEventListener('click',function(){
document.querySelector(".option-three-screen").style.display="block";

document.querySelector(".option-one-screen").style.display="none";
document.querySelector(".option-three").style.display="none";
document.querySelector(".option-four").style.display="none";
});

optionFour.addEventListener('click', function(){
document.querySelector(".option-four-screen").style.display="block";

document.querySelector(".option-one-screen").style.display="none";
document.querySelector(".option-three").style.display="none";
document.querySelector(".option-four").style.display="none";
});


