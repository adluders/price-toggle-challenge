const toggleInput = document.getElementById("choice");
const monthPrice = document.querySelectorAll(".monthly-price");
const yearPrice = document.querySelectorAll(".yearly-price");

const monthPriceDisp = () => {
  monthPrice.forEach(price => {
    price.style.display = "block";
  });
  yearPrice.forEach(price => {
    price.style.display = "none";
  });
};

const yearPriceDisp = () => {
  monthPrice.forEach(price => {
    price.style.display = "none";
  });
  yearPrice.forEach(price => {
    price.style.display = "block";
  });
};

const priceDisplay = () => {
  if (toggleInput.checked) {
    monthPriceDisp();
  } else {
    yearPriceDisp();
  }
};

toggleInput.addEventListener("change", priceDisplay);
