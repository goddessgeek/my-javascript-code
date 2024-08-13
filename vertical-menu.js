document.addEventListener(&#39;DOMContentLoaded&#39;, function() {
  var toggles = document.querySelectorAll(&#39;.menu-toggle&#39;);
  
  toggles.forEach(function(toggle) {
    toggle.addEventListener(&#39;click&#39;, function() {
      var content = this.nextElementSibling;
      if (content.style.display === &#39;block&#39;) {
        content.style.display = &#39;none&#39;;
      } else {
        content.style.display = &#39;block&#39;;
      }
    });
  });
});
