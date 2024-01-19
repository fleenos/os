var WindowManager = {
  windows: [],

  createWindow: function(appName, width, height) {
    var appPath = "apps/" + appName + "/index.html";
    var newWindow = document.createElement('div');
    newWindow.className = 'window';
    newWindow.style.width = width + "px"; 
    newWindow.style.height = height + "px"; 
    newWindow.innerHTML = '<div class="title-bar">' + appName + '<span class="close-btn" onclick="WindowManager.closeWindow(this)"><img class="headericonadaptive" src="closebtn.png" style="top: -0.5px;  height: 18px; position: fixed; right: 1px;"></span><span class="full-screen-btn" onclick="WindowManager.toggleFullScreen(this)"><img class="headericonadaptive" src="fulls.png" style="top: -0.5px; height: 18px; position: fixed; right: 22px;"></span><img class="minimize-btn" style="height: 18px; position: fixed; top: -0.5px; right: 43px;" src="mimozate.png" onclick="WindowManager.minimizeWindow(this)"></div><iframe style="width: calc(100% - 2px);height: calc(100% - 20px); border: 1px solid rgba(17, 17, 17, 0.849); border-radius: 8px;" src="' + appPath + '"></iframe><div class="resize-handle" style="right: -3px; bottom: -3px;"></div><div class="resize-handle" style="left: -3px; bottom: -3px;"></div><div class="resize-handle" style="left: -3px; top: -3px;"></div>';
    document.body.appendChild(newWindow);
    this.windows.push(newWindow);
    this.makeDraggable(newWindow);
    this.makeResizable(newWindow);


      var div = document.getElementById('Launchpad');
      div.classList.remove('open');
    
  
    var dockIcon = document.createElement('img');
    dockIcon.src = 'apps/' + appName + '/icon.png';
    dockIcon.className = 'dockico';
    dockIcon.alt = appName;
    dockIcon.onclick = function() {
      if (newWindow.style.display === 'none') {
        newWindow.style.display = 'block';
      } else {
        newWindow.style.display = 'none';
      }
    };
    dockIcon.window = newWindow;
    document.getElementById('launactivity').appendChild(dockIcon);

  },

  minimizeWindow: function(btn) {
    var window = btn.parentNode.parentNode;
    if (window.style.display === 'none') {
      window.style.display = 'block';
    } else {
      window.style.display = 'none';
    }
  },

  makeDraggable: function(window) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    window.querySelector('.title-bar').onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      window.style.top = (window.offsetTop - pos2) + "px";
      window.style.left = (window.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  },

  makeResizable: function(window) {
    var handle = window.querySelector('.resize-handle');
    handle.onmousedown = resizeMouseDown;

    function resizeMouseDown(e) {
      e.preventDefault();
      var initWidth = window.offsetWidth;
      var initHeight = window.offsetHeight;
      var startX = e.clientX;
      var startY = e.clientY;

      document.onmousemove = elementResize;
      document.onmouseup = closeResizeElement;

      function elementResize(e) {
        var width = initWidth + (e.clientX - startX);
        var height = initHeight + (e.clientY - startY);
        window.style.width = width + "px";
        window.style.height = height + "px";
      }

      function closeResizeElement() {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  },

  closeWindow: function(closeBtn) {
    var window = closeBtn.parentNode.parentNode;
    var index = this.windows.indexOf(window);
    if (index > -1) {
      this.windows.splice(index, 1);
    }
    document.body.removeChild(window);
  }
};

WindowManager.toggleFullScreen = function(button) {
  var window = button.closest('.window');
  if (!window.classList.contains('full-screen')) {
      window.classList.add('full-screen');
      window.style.width = '100vw';
      window.style.height = '90vh';
      window.style.left = '0';
      window.style.top = '0';
  } else {
      window.classList.remove('full-screen');
      window.style.width = '800px';
      window.style.height = '600px';
      window.style.left = '25%';
      window.style.top = '25%';
  }
}


// By Fleen5177. Вроде ни ниче так (нерд)  