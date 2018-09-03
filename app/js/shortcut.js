document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.which == 74) {
    e.preventDefault();
    window.chrome.runtime.sendMessage(
        { cmd: 'openApp', data: true },
        response => {
          if (response) {
            console.log(response)
          }
        }
      );
  }
});
