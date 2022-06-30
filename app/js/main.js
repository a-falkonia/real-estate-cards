/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

// Hide / show mobile sidebar
sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('sidebar--mobile-active');
};

// Show more cards

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
  hiddenCards.forEach(function (card) {
    card.classList.remove('card-link--hidden');
  });
});

// Hide / show a widget

const widgetTitles = document.querySelectorAll('.widget');
widgetTitles.forEach(function (widget) {
  widget.addEventListener('click', function (e) {
    if (e.target.classList.contains('widget__title')) {
      e.target.classList.toggle('widget__title--active');
      e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
  });
});

// Location "Any" button

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll(
  '[data-location-param]'
);

// If "Any" button is selected, uncheck other options
checkBoxAny.addEventListener('change', function () {
  if (checkBoxAny.checked) {
    topLocationCheckboxes.forEach(function (item) {
      item.checked = false;
    });
  }
});

// Uncheck "Any" button if any other option is selected
topLocationCheckboxes.forEach(function (item) {
  item.addEventListener('change', function () {
    if (checkBoxAny.checked) {
      checkBoxAny.checked = false;
    }
  });
});

// Show more filteres in widget

const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
  e.preventDefault();

  if (showMoreOptions.dataset.options == 'hidden') {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = 'block';
    });
    showMoreOptions.innerText = 'Скрыть дополнительные опции';
    showMoreOptions.dataset.options = 'visible';
  } else if (showMoreOptions.dataset.options == 'visible') {
    hiddenCheckBoxes.forEach(function (item) {
      item.style.display = 'none';
    });
    showMoreOptions.innerText = 'Показать ещё';
    showMoreOptions.dataset.options = 'hidden';
  }
};
