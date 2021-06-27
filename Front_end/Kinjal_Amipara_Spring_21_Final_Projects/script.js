// /* toggle/burger Menu */



const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

/* Email Send */

function sendMail(params)
{
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        phone:document.getElementById("phone").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("msg").value,
    };
  if (tempParams.from_name == "" || tempParams.phone == "" || tempParams.email=="" || tempParams.subject=="" || tempParams.message=="" )
  {
    alert("Please Enter Details");

  }

  else{
    emailjs.send('gmail', 'template_tefrce3',tempParams)
    .then(function(res)
    {
        console.log("success", res.status);
        alert("Thank You For Your Message");
        
    })
  }
    
}

  /* Translate to other language */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en',layout: google.translate.TranslateElement.InlineLayout.SIMPLE}, 'google_translate_element');
}



//dark-light mode
  function darkmode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}