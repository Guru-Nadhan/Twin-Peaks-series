const card = document.querySelectorAll('.chars-card');
const cardContent = document.querySelectorAll('.chars-content');


const first=document.querySelector('.first-ssn');
const second=document.querySelector('.second-ssn');
const third=document.querySelector('.third-ssn');
const firstSeason=document.querySelector('.first-season');
const secondSeason=document.querySelector('.second-season');
const thirdSeason=document.querySelector('.third-season');

// card info in the info and form section
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
      card[i].classList.toggle("card-height-increase");
      cardContent[i].classList.toggle("card-content-animation")
    });
}

secondSeason.style.display="none";
thirdSeason.style.display="none";

$(document).on('click','.seasons', function(){
  $(this).addClass('active').siblings().removeClass('active');
  if(first.classList.contains('active')){
    firstSeason.style.display="";
    secondSeason.style.display="none";
    thirdSeason.style.display="none";
  }
  else if(second.classList.contains('active')){
    firstSeason.style.display="none";
    secondSeason.style.display="";
    thirdSeason.style.display="none";
  }
  else if(third.classList.contains('active')){
    firstSeason.style.display="none";
    secondSeason.style.display="none";
    thirdSeason.style.display="";
  }
  
})
