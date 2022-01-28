const card = document.querySelectorAll('.hire-us-card');
const cardContent = document.querySelectorAll('.hire-us-content');


const firstJob=document.querySelector('.first-job');
const secondJob=document.querySelector('.second-job');
const thirdJob=document.querySelector('.third-job');
const firstJobRoles=document.querySelector('.first-job-roles');
const secondJobRoles=document.querySelector('.second-job-roles');
const thirdJobRoles=document.querySelector('.third-job-roles');

// card info in the info and form section
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
      card[i].classList.toggle("card-height-increase");
      cardContent[i].classList.toggle("card-content-animation")
    });
}

secondJobRoles.style.display="none";
thirdJobRoles.style.display="none";

$(document).on('click','.jobs', function(){
  $(this).addClass('active').siblings().removeClass('active');
  if(firstJob.classList.contains('active')){
    firstJobRoles.style.display="";
    secondJobRoles.style.display="none";
    thirdJobRoles.style.display="none";
  }
  else if(secondJob.classList.contains('active')){
    firstJobRoles.style.display="none";
    secondJobRoles.style.display="";
    thirdJobRoles.style.display="none";
  }
  else if(thirdJob.classList.contains('active')){
    firstJobRoles.style.display="none";
    secondJobRoles.style.display="none";
    thirdJobRoles.style.display="";
  }
  
})
