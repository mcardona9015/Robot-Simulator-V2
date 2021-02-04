document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  // ADD CODE HERE!
  const controlPanel = document.querySelector("#control-panel")
  console.log('controlPanel: ', controlPanel);

  const moveButton = document.querySelector('#move-button')
  console.log('moveButton: ', moveButton);

  const movesContainer = document.querySelector('#moves-container')
  console.log('movesContainer: ', movesContainer);

  document.addEventListener("keydown", function(e) {
    // console.log('e: ', e)
    if (e.keyCode == 37) {
      // console.log("left");
      const left = document.createElement("li")
      left.innerText = "Left"
      movesContainer.append(left)
    }
    else if (e.keyCode == 38) {
      const up = document.createElement("li")
      up.innerText = "Up"
      movesContainer.append(up)
    }
    else if (e.keyCode == 39) {
      const right = document.createElement("li")
      right.innerText = "Right"
      movesContainer.append(right)
    }
    else if (e.keyCode == 40) {
      const down = document.createElement("li")
      down.innerText = "Down"
      movesContainer.append(down)
    }

  })

  movesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI"){
      e.target.remove()
    }
    console.log(e.target.tagName)

    // e.target.remove()
  })

  moveButton.addEventListener("click", function(e) {
    console.log('e: ', e);
    const moves = e.target.nextElementSibling
    const nextMove = moves.firstElementChild

    move(nextMove.innerText.toLowerCase())
    nextMove.remove()

  })


















})