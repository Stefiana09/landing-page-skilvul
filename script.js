let mybutton = document.getElementById("back-to-top-btn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0; 
}

//6 
function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;

return {
  name,
  city,
  email,
  zipCode,
  status
  };
}

function checkboxIsChecked() {
  if(input == check) {
    return true;
    }else {
    return false;
    }
}