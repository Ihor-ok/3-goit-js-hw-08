import throttle from 'lodash.throttle';

const ref = {
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]'),
    button: document.querySelector('.feedback-form'),
};

const currentFormValues = {
    email: "",
    message: "",
};

ref.email.addEventListener('input', throttle(onEmailInput, 500));
ref.message.addEventListener('input', throttle(onMessageInput, 500));
ref.button.addEventListener('submit', onSubmit);

const formValuesLocalStorage = localStorage.getItem("feedback-form-state");
const parsedFormValuesLocalStorage = JSON.parse(formValuesLocalStorage);

if (formValuesLocalStorage) {
    
    ref.email.value = parsedFormValuesLocalStorage.email;
    ref.message.textContent = parsedFormValuesLocalStorage.message;
}


function onEmailInput(evt) {
     
    if (formValuesLocalStorage) {
        currentFormValues.email = parsedFormValuesLocalStorage.email;
        currentFormValues.message = parsedFormValuesLocalStorage.message;
    }

     currentFormValues.email = evt.target.value;
    // localStorage.setItem("feedback-form-state", JSON.stringify(currentFormValues));
    updatedStorage();

};

function onMessageInput(evt) {
    
    if (formValuesLocalStorage) {
        currentFormValues.email = parsedFormValuesLocalStorage.email;
        currentFormValues.message = parsedFormValuesLocalStorage.message;
    }
    
    currentFormValues.message = evt.target.value;
    // localStorage.setItem("feedback-form-state", JSON.stringify(currentFormValues));
    updatedStorage();
};

function onSubmit(evt) {
    evt.preventDefault();

    if (currentFormValues.email === "" && currentFormValues.message === "") {
        return
    }

    localStorage.removeItem("feedback-form-state");
    console.log(currentFormValues);
    ref.message.textContent = "";
    ref.button.reset();


};

function updatedStorage() {
    localStorage.setItem("feedback-form-state", JSON.stringify(currentFormValues));
}