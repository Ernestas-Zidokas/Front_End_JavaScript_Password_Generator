document.querySelector('#submit').addEventListener('click', event => {
  const name = document.querySelector('#serviceName').value;
  const pass = document.querySelector('#basicPassword').value;

  const charArray = name.split('');
  const lastNameLetter = charArray[charArray.length - 1];

  let regexVowelCount = name.match(/[a, o, e, i, y, u]/gi).length;
  console.log(regexVowelCount);

  const vowelArray = ['a', 'e', 'i', 'y', 'o', 'u'];
  const vowelCount = charArray.reduce((result, char) => {
    if(vowelArray.includes(char)){
      result++;
    }
    return result;
  }, 0);

  const secondChar = charArray[vowelCount == 0 ? 1 : vowelCount - 1 ];

  let h2 = document.createElement('h2');
  h2.textContent = lastNameLetter + secondChar + pass + (charArray.length - vowelCount) + charArray[0];
  document.querySelector('#output').appendChild(h2);
})
