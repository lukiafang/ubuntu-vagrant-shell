var Prompt = require('prompt-checkbox');
var prompt = new Prompt({
  name: 'install',
  message: 'Which packages do you want to install?',
  radio: true,
  choices: {
    dependencies: ['generate', 'micromatch'],
    devDependencies: ['mocha', 'kind-of']
  }
});
.then
console.log(prompt)