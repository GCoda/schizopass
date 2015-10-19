var sha256 = require('../node_modules/js-sha256/src/sha256.js');
var Base64 = require('../node_modules/js-base64/base64.min.js').Base64;

var referrer = document.referrer;

// Document Ready
(function() {

  append = document.getElementById('append');
  append.value = localStorage.getItem('append');
  append.onkeyup = function() {
    localStorage.setItem('append', this.value);
  };
  localStorage.setItem('myCat', 'Tom');

  domainInput = document.getElementById('domain');
  domainInput.value = (getSalt(referrer));
  console.log(getSalt(referrer));

})();

function getSalt(referrer) {
  var domain;
  domain = referrer.split('/')[2] || '';
  domain = domain.split(':')[0] || '';

  var domainSource = domain.split('.');
  domainArray = domainSource.filter(function(v) {
    if (v.length > 3) { return true; }
  });
  if (domainArray[domainArray.length - 1]) {
    return domainArray[domainArray.length - 1];
  } else {
    return domain;
  }
}

function copyTextToClipboard(text) {
  var textArea = document.createElement('textarea');
  // Place in top-left corner of screen regardless of scroll position.
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  // Ensure it has a small width and height. Setting to 1px / 1em
  // doesn't work as this gives a negative w/h on some browsers.
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  // We don't need padding, reducing the size if it does flash render.
  textArea.style.padding = 0;
  // Clean up any borders.
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  // Avoid flash of white box if rendered for any reason.
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
  document.body.removeChild(textArea);
}

/*
// Here is ho it called
copyTextToClipboard(
  Base64.encode(
    sha256(password + salt)
  ).substring(0, 16)
);
/* */
