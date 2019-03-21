const sample = () => {
  console.log('cool beans');
  return 'cool beans';
};

// const addButton = document.querySelector('add-idea');

// addButton.addEventListener('click', () => sample());

const math = (numOne = 0, numTwo = 0) => {
  return numOne + numTwo;
};

module.exports = {
  sample,
  math
};