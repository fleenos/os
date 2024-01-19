  //Launchpad
  var appsList = localStorage.getItem('FleenOS_appslist');;
  if (appsList) {
    var appNames = JSON.parse(appsList);
    var lappsDiv = document.getElementById('lapps');
    appNames.forEach(function(appName) {
      var img = document.createElement('img');
      img.src = 'apps/' + appName.trim() + '/icon.png';
      img.className = 'dockico';
      img.setAttribute('onclick', 'WindowManager.createWindow("' + appName.trim() + '", 800, 600);');
      lappsDiv.appendChild(img);
    });
  }
//dock
  var appsList = localStorage.getItem('FleenOS\_appslist\_dock');
if (appsList) {
  var dockAppsArray = JSON.parse(appsList);
  var dockDiv = document.getElementById('dock');
  dockAppsArray.forEach(function(appName) {
   var img = document.createElement('img');
   img.src = 'apps/' + appName.trim() + '/icon.png';
   img.className = 'dockico';
   img.setAttribute('onclick', 'WindowManager.createWindow("' + appName.trim() + '", 800, 600);');
   dockDiv.appendChild(img);
});
}

function setStyle(styleName) {
    localStorage.setItem('FleenOS_selectedStyle', styleName);
    document.getElementById('theme-style').setAttribute('href', styleName);
  }          
  var selectedStyle = localStorage.getItem('FleenOS_selectedStyle');
  if (selectedStyle) {
    document.getElementById('theme-style').setAttribute('href', selectedStyle);
  }
  document.getElementById('theme-style').setAttribute('href', selectedStyle);

  document.addEventListener('DOMContentLoaded', function() {
    var selectedBackground = localStorage.getItem('selectedBackground');
    if (selectedBackground) {
      document.body.style.backgroundImage = `url(${selectedBackground})`;
    }
  });

  window.addEventListener('message', function(event) {
    if (event.data === 'themeChanged') {
      var selectedStyle = localStorage.getItem('FleenOS_selectedStyle');
      if (selectedStyle) {
        document.getElementById('theme-style').setAttribute('href', selectedStyle);
      }
    }
  });