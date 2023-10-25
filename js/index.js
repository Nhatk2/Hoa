const mainBtn = document.querySelector(".btn");

const transitionDuration = 500;

function displayAndHideElement(hide, show, transitionDuration) {
  // make hidding element smoothly disappear
  hide.style.opacity = 0;

  // wait for the transition duration to compelte
  setTimeout(() => {
    hide.style.display = "none";

    // the show element should have fadeIn animation (using opacity from 0 to 1)
    // to archive smoothest animation
    show.style.display = "block";
  }, transitionDuration);
}
mainBtn.addEventListener("click", () => {
    var myDiv = document.getElementById('flower');
    myDiv.style.display = 'block'; // Hiển thị div khi nút được nhấn
    var show = document.getElementById('show');
    show.style.display = 'none';
    displayAndHideElement(mainBtn,transitionDuration)
    
})