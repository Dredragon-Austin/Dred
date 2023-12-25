function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function copyText() {
  const textToCopy = "example.com";

  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);

  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);

  document.execCommand('copy');

  document.body.removeChild(tempTextArea);

  showCopiedBoard();
  showCopiedOverlay();
  showCopiedMessage();
}
function showCopiedBoard() {
  const copiedBoard = document.querySelector('.copied-board');
  copiedBoard.style.display = 'block';

  setTimeout(() => {
    copiedBoard.style.display = 'none';
  }, 2000); // Hide after 2 seconds (you can adjust this duration)
}
// JavaScript to toggle the body class for the overlay (you can replace this with your actual copy logic)
function showCopiedOverlay() {
  document.body.classList.add('copied-active');

  setTimeout(() => {
    document.body.classList.remove('copied-active');
  }, 2000); // Remove the class after 2 seconds (you can adjust this duration)
}
function showCopiedMessage() {
  const copiedMessage = document.querySelector('.copied-message');
  copiedMessage.style.opacity = '1';

  setTimeout(() => {
    copiedMessage.style.opacity = '0';
  }, 2000); // Hide after 2 seconds (you can adjust this duration)
}
