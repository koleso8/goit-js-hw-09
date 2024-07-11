const refs = {
  formEl: document.querySelector('.feedback-form'),
  inputEl: document.querySelector('[name = email]'),
};
let formData = { email: '', message: '' };

refs.formEl.addEventListener('input', e => {
  e.preventDefault();
  if (Object.keys(formData)[0] === e.target.name) {
    formData.email = e.target.value;
  } else {
    formData.message = e.target.value;
  }

  saveToLs('feedback-form-state', formData);

  function saveToLs(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json);
    console.log(json);
  }
});
const loadStorage = loadFromLs('feedback-form-state');

function loadFromLs(key) {
  const json = localStorage.getItem(key);
  try {
    const data = JSON.parse(json);
    return data;
  } catch {
    return json;
  }
}
refs.formEl.elements.email.value = loadStorage.email;
refs.formEl.elements.message.value = loadStorage.message;
console.log(load);
