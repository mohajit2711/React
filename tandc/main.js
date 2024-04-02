const nav = document.querySelector('nav');
const header = document.querySelector('header');

// Terms and Conditions

// query selectors
const lastTermsElement = document.querySelector('.terms p:last-child');
const acceptBtn = document.querySelector('.btn-accept');

// callback function
const termsObserverCallback = (lastP, termsObserver) => {
  if(lastP[0].isIntersecting){
    acceptBtn.classList.add('enabled');
    acceptBtn.focus();
    termsObserver.unobserve(lastTermsElement);
  };
}

// options 
const termsObserverOptions = {
  threshold: 1
}

// observer
const termsObserver = new IntersectionObserver(termsObserverCallback,termsObserverOptions);

// call the observer
termsObserver.observe(lastTermsElement);

// eventlistner
acceptBtn.addEventListener('click', function(e){
  if(!e.target.classList.contains('enabled')){
    const btnMessage = document.querySelector('.btn-message');
    btnMessage.classList.add('visible');
    setTimeout(function(){
      btnMessage.classList.remove('visible');
    }, '2000');
  };
})