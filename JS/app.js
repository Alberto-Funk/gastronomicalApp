
document.getElementById('btn-one').addEventListener('click', function () {
  const cardOne = document.getElementById('card-one');
  const cardTwo = document.getElementById('card-two');
  cardOne.style.display = 'none';
  cardTwo.style.display = 'block';
});


document.getElementById('btn-two').addEventListener('click', function () {
  const cardTwo = document.getElementById('card-two');
  const cardThree = document.getElementById('card-three');
  cardTwo.style.display = 'none';
  cardThree.style.display = 'block';
});