# Simple trick to load resources that will not be cached by browser

```js
function loadUncachedImage() {
  // Create a new Image element
  var img = new Image();

  // Generate a unique parameter (timestamp)
  var timestamp = new Date().getTime();

  // Set the image source with the cache-busting parameter
  img.src = "path/to/your/image.jpg?" + timestamp;

  // Append the image to the body or any other element
  document.body.appendChild(img);
}

// Call the function to load the uncached image
loadUncachedImage();
```
