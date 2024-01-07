# Caching Image

> how to configure the caching ttl of img tag?

The img tag itself doesn't have a built-in mechanism to set a caching time (Time-To-Live or TTL). Caching is typically controlled on the server side through HTTP headers. You can configure the caching behavior for images by setting appropriate HTTP headers in the server response.

Here is an example using PHP to set caching headers for an image:

```php
<?php
// Set the path to your image
$imagePath = 'path/to/your/image.jpg';

// Get the file's last modified time
$lastModifiedTime = filemtime($imagePath);

// Set caching headers
header('Cache-Control: public');
header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 3600) . ' GMT'); // Cache for 1 hour
header('Last-Modified: ' . gmdate('D, d M Y H:i:s', $lastModifiedTime) . ' GMT');

// Check if the client has the same version already
if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']) &&
    strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE']) >= $lastModifiedTime) {
    header('HTTP/1.1 304 Not Modified');
    exit;
}

// Set the content type and output the image
header('Content-Type: image/jpeg');
readfile($imagePath);
?>
```

This example sets the Cache-Control header to allow public caching, Expires header to set the expiration time (1 hour in this case), and Last-Modified header to indicate the last modification time of the resource.

Note: The example assumes you're using PHP. If you're using a different server-side language, the approach may be different, but the general idea remains the same – set appropriate caching headers in the server response.
