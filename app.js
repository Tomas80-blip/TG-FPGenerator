// Sukurkite password generatorių, kuris leistų vartotojui:
//  o Pasirinkit kiek simbolių norės kad būtų slaptažodyje
//  o Ar būtų didžiosios raidės
//  o Ar būtų skaičiai
//  o Ar būtų simboliai
//  o Leistų sugeneruotą slaptažodį nusikopijuoti vieno mygtuko paspaudimu


const form = document.getElementById('pswForm');
const passwordOutput = document.getElementById('passwordOutput');
const copyButton = document.getElementById('copyButton');


const generatePassword = (length, Uppercase, Numbers, Symbols) => {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let container = lowerCase;
  if (Uppercase) container += upperCase;
  if (Numbers) container += numbers;
  if (Symbols) container += symbols;

  if (container.length === 0) return 'Please select at least one option.';

  
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * container.length);
    password += container[randomIndex];
  }

  return password;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const length = +document.getElementById('number').value;
  const Uppercase = document.getElementById('uppercase').checked;
  const Numbers = document.getElementById('numbers').checked;
  const Symbols = document.getElementById('symbols').checked;

  const password = generatePassword(length, Uppercase, Numbers, Symbols);
  passwordOutput.value = password;
});

copyButton.addEventListener('click', () => {
  const password = passwordOutput.value;
  navigator.clipboard.writeText(password);
});