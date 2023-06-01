let subscribeBtn = (event) => {
  let formContainer = document.getElementById("formContainer");
  let thanksMessage = document.getElementById("thanksMessage");
  let successMessage = document.getElementById("successMessage");
  let emailAddress = document.getElementById("email");
  let emailError = document.getElementById("email-error");
  
  if (!emailAddress.value.split("").includes("@")) {
    emailError.style.visibility = "visible";
    emailAddress.style.backgroundColor = "#FFE8E6";
    emailAddress.style.color = "red";
    event.preventDefault();
  }
  else {
    formContainer.style.display = "none";
    thanksMessage.style.display = "block";
    successMessage.innerHTML = `A confirmation email has been sent to <b>${emailAddress.value}</b>. Please open it and click the button inside to confirm your subscription.`
    event.preventDefault();
  }
}

let dismissBtn = () => {
  let formContainer = document.getElementById("formContainer");
  let thanksMessage = document.getElementById("thanksMessage");
  let successMessage = document.getElementById("successMessage");
  let emailAddress = document.getElementById("email");
  
  thanksMessage.style.display = "none";
  successMessage.innerHTML = "";
  emailAddress.value = "";
  formContainer.style.display = "flex";
  
}