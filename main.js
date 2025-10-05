const DOM = {
  ratingStateDiv: document.querySelector(".rating-state"),
  thankingStateDiv: document.querySelector(".thank-you-state"),
  rates: document.querySelectorAll("ul li"),
  submitBtn: document.querySelector("button"),
  messageSpan: document.querySelector(".message"),
  rateResult: document.querySelector(".rate-result"),
};

DOM.rates.forEach((li) => {
  li.addEventListener("click", (e) => {
    DOM.rates.forEach((li) => li.classList.remove("active")); //remove active class from all
    e.target.classList.add("active"); //add active class to selected rate
    const rateValue = e.target.dataset.rate;
    // console.log(rateValue)
    DOM.rateResult.textContent = `You selected ${rateValue} out of 5`;
  });
});

DOM.submitBtn.addEventListener("click", () => {
  DOM.rates.forEach((li) => {
    if (li.classList.contains("active")) {
      DOM.ratingStateDiv.style.display = "none";
      DOM.thankingStateDiv.style.display = "block";
    } else {
      DOM.messageSpan.innerHTML = `You didn't rate us. <br> Please give a rate`;
    }
  });
});
