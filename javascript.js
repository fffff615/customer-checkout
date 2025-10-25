const button = document.querySelectorAll("#heart");
const favouriteProduct = document.querySelectorAll('[data-id]');
// console.log(favouriteProduct);

function chooseFavourite() {
  button.forEach(element => {
    element.addEventListener("click", (event) => {

      const favourite = event.target.classList.toggle("active")
      console.log(favourite);

    favouriteProduct.forEach(element => {
      if (favourite === element.element.attributes[1]) {

        console.log("hello:", element.attributes[1])
      }
    })




  });
})
}

chooseFavourite();

//Get its data-id
//if favourite (i.e classList.toggle.active)
//find the div on the favourites page with the same data-id
//display that div by set style.display ="block"
//else
//show text that there are no favourites
