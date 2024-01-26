function searchImages() {
    var searchQuery = document.getElementById('search-bar').value;
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      if (images[i].getAttribute('alt').toLowerCase().includes(searchQuery.toLowerCase())) {
        var img = document.createElement('img');
        img.src = images[i].src;
        img.alt = images[i].alt;
        document.body.appendChild(img);
      }
    }
  }