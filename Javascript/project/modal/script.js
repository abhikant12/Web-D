
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


const openModal = () => {                                            //   Modal open function
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

 
const closeModal = () => {                                          //   Modal close function
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};