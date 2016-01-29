(function (window, document) {
  "use strict";

  function get(url, params, callback) {
        var xhr = new XMLHttpRequest();
        console.log(url + params);
        xhr.open("GET", url + params, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(xhr.responseText);
                } else {
                    console.error(xhr.statusText);
                }
            } else {
                console.error(e);
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText + e);
        };
        xhr.send(null);
    }
  
  function renderPage(page) {
      window.history.pushState(page.slug, page.title.rendered, page.link);
      document.title = page.title.rendered;
      page = '<h1>' + page.title.rendered + '</h1>' + page.content.rendered;
      document.getElementsByTagName('main')[0].innerHTML = page;
  }
  
  function getPage(e) {
      e.preventDefault();
      
      var pageNumber = this.parentElement.className;
          pageNumber = pageNumber[pageNumber.search(/page-item-\d/) + ('page-item').length + 1];
    
      if(!(sessionStorage.getItem(pageNumber))) {
        var url = location.origin + "/wp-json/wp/v2/pages/" + pageNumber;
        var params = "";
        
        get(url, params, function (page) {
          // Save data to sessionStorage
          sessionStorage.setItem(pageNumber, page);
          page = JSON.parse(page);
          renderPage(page);
        });
      } else {
        // Get saved data from sessionStorage
        var page = JSON.parse(sessionStorage.getItem(pageNumber));
        renderPage(page);
      }
  }
  
  function setEvents(navClass) {
      var menuItems = document.querySelectorAll(navClass);

      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].children[0].addEventListener('click', getPage, false);
      }
  }
  
  setEvents('li.page_item'); //Classname for identifying links
  
}(this, this.document));
