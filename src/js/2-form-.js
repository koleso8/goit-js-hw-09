const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('[name = email]'),
};
const formData = { email: ``, message: '' };

refs.formEl.addEventListener('input', e => {
  e.preventDefault();
  if (Object.keys(formData)[0] === e.target.name) {
    formData.email = e.target.value;
  } else {
    formData.message = e.target.value;
  }

  console.log(formData);
});
