if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var addButton = document.querySelectorAll(".add-button");

  console.log(
    addButton.forEach((add) => {
      add.addEventListener("click", (event) => {
        var addedItem = event.target;

        var package = addedItem.parentElement.childNodes[1].innerText;
        var Price = addedItem.parentElement.childNodes[3].innerText.replace(
          "Rs.",
          " "
        );

        addKart(package, Price);
      });
    })
  );

  function addKart(package, Price) {
    var newDiv = document.createElement("div");

    newDiv.innerHTML = `<div class="item">
        <div class="pack">
        ${package}
        </div>
        <div class="cost">${Price}</div>
        <div class="remove-button">button</div>
    </div>`;

    var kartElement = document.querySelector(".kart");

    kartElement.append(newDiv);
  }

  var pageUpdate = document.querySelectorAll("body");

  console.log(
    pageUpdate.forEach((buttonRemove) => {
      buttonRemove.addEventListener("mouseover", (event) => {
        updatePrice();
      });
    })
  );

  //remove
  var removeButton = document.querySelectorAll(".remove-button");

  console.log(
    removeButton.forEach((buttonRemove) => {
      buttonRemove.addEventListener("click", (event) => {
        var clickedButton = event.target;

        clickedButton.parentElement.remove();

        updatePrice();
      });
    })
  );

  function removeFunction(event) {}

  function updatePrice() {
    var price = document.querySelectorAll(".cost");
    var total = 0;
    price.forEach((selectedcost) => {
      total += parseInt(selectedcost.innerText);
    });

    document.querySelectorAll("span")[1].innerText = total;
  }
}
