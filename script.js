const emailInput = document.querySelector('input');
const btn = document.querySelector('button');
const form = document.querySelector('form');
const errorMessage = document.querySelector('.error-message');

const UImessages = {
  emailPlaceHolder : 'example@email.com',
  emailPattern : /^(?=.*[a-zA-Z])[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
}



const {emailPattern, emailPlaceHolder} = UImessages;

form.addEventListener('submit',(e)=>{
  e.preventDefault()
})

const validateEmail = ()=>{

  let emailAddress = emailInput.value.trim()

  emailInput.placeholder = emailPlaceHolder;

  if( emailAddress ===''){
    errorMessage.textContent = 'Enter a valid email address';
    errorMessage.style.display ='flex';
    emailInput.placeholder = emailPlaceHolder;
    emailInput.classList.add('error-input');

    return

  } else if (!emailPattern.test(emailAddress)){
    errorMessage.style.display = 'flex';
    emailInput.classList.add('error-input');
  } else{
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error-input');
  }
}


btn.addEventListener('click',validateEmail);