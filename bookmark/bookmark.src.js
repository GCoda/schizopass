var iframe = document.createElement('iframe');

function showIframe() {
  iframe.setAttribute('src', 'http://localhost:8000/frame');
  iframe.setAttribute('scrolling', 'no');
  iframe.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  iframe.style.border = 'none';
  iframe.style.overflow = 'hidden';
  iframe.style.position = 'fixed';
  iframe.style.top = 0;
  iframe.style.left = '40%';
  iframe.style.zIndex = 100000;
  iframe.style.width = '22em';
  iframe.style.height = '25em';
  document.body.appendChild(iframe);
  iframe.focus();
}


window.addEventListener('message', receiveMessage, false);

function receiveMessage(event) {
  if (event.origin === 'http://example.org:8080') {
    return;
  }
  if (event.data === 'closeIframe') {
    document.body.removeChild(iframe);
  }
  console.log(event);
}

showIframe();
