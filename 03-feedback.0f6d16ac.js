!function(){var e={email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]'),button:document.querySelector(".feedback-form")},t={email:"",message:""};e.email.addEventListener("input",throttle((function(e){a&&(t.email=m.email,t.message=m.message);t.email=e.target.value,s()}),500)),e.message.addEventListener("input",throttle((function(e){a&&(t.email=m.email,t.message=m.message);t.message=e.target.value,s()}),500)),e.button.addEventListener("submit",(function(a){if(a.preventDefault(),""===t.email&&""===t.message)return;localStorage.removeItem("feedback-form-state"),console.log(t),e.message.textContent="",e.button.reset()}));var a=localStorage.getItem("feedback-form-state"),m=JSON.parse(a);function s(){localStorage.setItem("feedback-form-state",JSON.stringify(t))}a&&(e.email.value=m.email,e.message.textContent=m.message)}();
//# sourceMappingURL=03-feedback.0f6d16ac.js.map
