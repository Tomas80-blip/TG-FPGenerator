// Sukurkite password generatorių, kuris leistų vartotojui:
//  o Pasirinkit kiek simbolių norės kad būtų slaptažodyje
//  o Ar būtų didžiosios raidės
//  o Ar būtų skaičiai
//  o Ar būtų simboliai
//  o Leistų sugeneruotą slaptažodį nusikopijuoti vieno mygtuko paspaudimu


const form = document.getElementById('pswForm');
const passwordOutput = document.getElementById('passwordOutput');
const copyButton = document.getElementById('copyButton');


const generatePassword = (length, includeUppercase, includeNumbers, includeSymbols) => {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characterPool = lowerCase; //visi simboliai tik mazosios raides
  if (includeUppercase) characterPool += upperCase;// prideda pazymejus didziasias raides
  if (includeNumbers) characterPool += numbers;// prideda pazymejus sk.
  if (includeSymbols) characterPool += symbols;// prideda pazymejus simbolius

  if (characterPool.length === 0) return 'Please select at least one option.';

  //sugeneruojamas slaptazodis is atsitiktiniu simboliu ir raidziu
  let password = '';//tarkim slaptazodis tuscias stringas
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  return password;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const length = +document.getElementById('number').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
  passwordOutput.value = password;
});
//event liseneris mygtukui
copyButton.addEventListener('click', () => {
  const password = passwordOutput.value;
  navigator.clipboard.writeText(password);
});