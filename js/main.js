var elSearchModalToggler = document.querySelector('.js-site-header__account--link');
var elModal = document.querySelector('.modal');

if (elSearchModalToggler) {
  elSearchModalToggler.addEventListener('click', function (evt) {
    evt.preventDefault();

    elModal.classList.add('modal--open');

    var elSearchInput = elModal.querySelector('.search-modal__input');
    elSearchInput.value = '';
    elSearchInput.focus();
  });
}

if (elModal) {
  elModal.addEventListener('click', function (evt) {
    if (evt.target.matches('.modal')) {
      elModal.classList.remove('modal--open');
    }
  });
}

/* NAVIGATION */
var elOpenNav = document.querySelector('.js-site-header__account--btn');
var elNav = document.querySelector('.sitenav');

elOpenNav.addEventListener('click', function() {
  elNav.classList.toggle('sitenav--open');
});

var elOpenNav = document.querySelector('.js-sitenav__icon-close');
var elNav = document.querySelector('.sitenav');

elOpenNav.addEventListener('click', function() {
  elNav.classList.remove('sitenav--open');
});




// PRODUCT GRID AND LIST VIEWS

var elGridViewButton = document.querySelector(".product-header__grid-view");
var elListViewButton = document.querySelector(".product-header__list-view");
var outComeList = document.querySelector(".outcomes__list");
var outcomeItems = document.querySelectorAll(".outcome");

// FUNCTION TO SWITCHINIG GRID VIEW
function switchOutcomeToGridView(params) {
  outComeList.classList.remove("outcomes__list--list");
  outComeList.classList.add("outcomes__list--grid");
  outcomeItems.forEach(function (outcomeItem){
    outcomeItem.classList.remove("outcome--list");
    outcomeItem.classList.add("outcome--grid");

  })
}

// FUNCTION TO SWITCHINIG LIST VIEW

function switchOutcomeToListView(params) {
  outComeList.classList.remove("outcomes__list--grid");
  outComeList.classList.add("outcomes__list--list");
  outcomeItems.forEach(function (outcomeItem){
    outcomeItem.classList.remove("outcome--grid");
    outcomeItem.classList.add("outcome--list");

  })
}

if (elGridViewButton) {
    elGridViewButton.addEventListener("click", switchOutcomeToGridView);


}

if (elListViewButton){
  elListViewButton.addEventListener("click", switchOutcomeToListView);
}

