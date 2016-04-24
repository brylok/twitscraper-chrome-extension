
var element = null;


$(document).ready(function(){

  // listen for right click
  $(document).mousedown(function(e){
    if( e.button == 2 ) {
    element = $(event.target);
    return false;
    }
    return true;
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

      // copy to clipboard from Chrome extension
      // based on code from here: https://gist.github.com/joeperrin-gists/8814825
      function copyToClipboard(text) {
          const input = document.createElement('input');
          input.style.position = 'fixed';
          input.style.opacity = 0;
          input.value = text;
          document.body.appendChild(input);
          input.select();
          document.execCommand('Copy');
          document.body.removeChild(input);
      }

  console.log(request);

      if(request === "twitScraper") {

        if(element === null) {

            setTimeout(function() {
              // find usernames
              var input = $('.AdaptiveSearchTimeline .js-action-profile-name.username').not('s').text();

              var fullList = $.unique(input.split('@'));
              var shortList = fullList.join(",@");
              var finalList = shortList.substring(1);

                // copy link to clipboard
                copyToClipboard(finalList);

                finalList = null;
            }, 100);
        } else {

          // find usernames
          // find usernames
          var input = $('.AdaptiveSearchTimeline .js-action-profile-name.username').not('s').text();

          var fullList = $.unique(input.split('@'));
          var shortList = fullList.join(",@");
          var finalList = shortList.substring(1);

            // copy link to clipboard
            copyToClipboard(finalList);

            finalList = null;

        }
    }
});
