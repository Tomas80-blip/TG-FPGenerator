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

  let container = lowerCase; //visi simboliai tik mazosios raides
  if (Uppercase) container += upperCase;// prideda pazymejus didziasias raides
  if (Numbers) container += numbers;// prideda pazymejus sk.
  if (Symbols) container += symbols;// prideda pazymejus simbolius

  if (container.length === 0) return 'Please select at least one option.';

  //sugeneruojamas slaptazodis is atsitiktiniu simboliu ir raidziu
  let password = '';//tarkim slaptazodis tuscias stringas
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
//event liseneris mygtukui nusikopijuoti slaptazodi vienu paspaudimu
copyButton.addEventListener('click', () => {
  const password = passwordOutput.value;
  navigator.clipboard.writeText(password);
});