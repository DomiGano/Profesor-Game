const title = document.querySelector("h1")
const container = document.querySelector("#container")
const btn = document.querySelector("#btn")
const inputText = document.querySelector("#input")


function newHeader() {
    title.innerText = "Astronauta: " + inputText.value;
}

let count = 0;

function changeContainer() {
        if(count == 0) {
            container.className = "container2"
            btn.className = "btn--article--active"
            btn.innerText = "WRACAMY?"
            count++
        } else if(count == 1) {
            container.className = "container"
            btn.className = "btn--article btn--anim"
            btn.innerText = "START!"
            count--
        }
    }

    var dot = document.querySelector("#myDiv");
    var dotX = 20;
    var dotY = 20;

    function moveDot(keyCode) {
      switch (keyCode) {
        case 37: // Left arrow key
          dotX -= 3;
          dot.classList.add("leftAnim")
          break;
        case 38: // Up arrow key
          dotY -= 3;
          dot.classList.add("upAnim")
          break;
        case 39: // Right arrow key
          dotX += 3;
          dot.classList.add("rightAnim")
          break;
        case 40: // Down arrow key
          dotY += 3;
          dot.classList.add("downAnim")
          break;
          case 32: // Down arrow key
          dot.classList.remove('dprof');
          dot.classList.add("jump");
          break;
      }

      dot.style.left = dotX + "px";
      dot.style.top = dotY + "px";
    }

    document.addEventListener("keydown", function(event) {
      moveDot(event.keyCode);
    });

    document.addEventListener('keyup', function(event) {
      // Sprawdź, czy wciśnięty klawisz nie jest już wciśnięty
      if (event.keyCode === 39) { // 13 to kod klawisza Enter, możesz go zmienić na inny, jeśli to konieczne
        // Zmień klasę elementu
        dot.classList.remove('rightAnim');
        dot.classList.add('dProf');
      }
      if (event.keyCode === 40) { // 13 to kod klawisza Enter, możesz go zmienić na inny, jeśli to konieczne
        // Zmień klasę elementu
        dot.classList.remove('downAnim');
        dot.classList.add('dProf');
      }
      if (event.keyCode === 37) { // 13 to kod klawisza Enter, możesz go zmienić na inny, jeśli to konieczne
        // Zmień klasę elementu
        dot.classList.remove('leftAnim');
        dot.classList.add('dProf');
      }
      if (event.keyCode === 38) { // 13 to kod klawisza Enter, możesz go zmienić na inny, jeśli to konieczne
        // Zmień klasę elementu
        dot.classList.remove('upAnim');
        dot.classList.add('dProf');
      }
      if (event.keyCode === 32) { // 13 to kod klawisza Enter, możesz go zmienić na inny, jeśli to konieczne
        // Zmień klasę elementu
        let delay = setTimeout(() => {
          dot.classList.add('dProf');
          dot.classList.remove('jump');
        }, 1500)
      }
    });