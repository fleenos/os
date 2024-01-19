/* Fleen5177 webkit */
/* версия 1.2 */
/* Я так устал.. */
let tabs = [];
let currentTab = null;

function addTab() {
  let tabId = tabs.length + 1;

  if (currentTab) {
    currentTab.classList.add("hidden");
    currentTab = null;
  }

  let tabBar = document.getElementById("tab-bar");
  let tab = document.createElement("div");
  tab.innerText = "Вкладка " + tabId;
  tab.className = "tab";
  tab.addEventListener("click", function() {
    switchTab(tabId);
  });
  
  tabBar.appendChild(tab);

  let content = document.getElementById("content");
  
  let newTabContent = document.createElement("iframe");
  newTabContent.id = "tab-content-" + tabId;
  newTabContent.classList.add("framestyle"); 
  
  content.appendChild(newTabContent);
  
  tabs.push(newTabContent);
  
  switchTab(tabId);

  let closeButton = document.createElement("button");
  closeButton.innerText = "×";
  closeButton.className = "close-button";
  closeButton.addEventListener("click", function() {
    closeTab(tabId);
  });

  tab.appendChild(closeButton);
}

function switchTab(tabId) {
  
  if (currentTab) {
    currentTab.classList.add("hidden");
  }
  
  let tab = document.getElementsByClassName("tab");
  for (let i = 0; i < tab.length; i++) {
    tab[i].classList.remove("active");
  }
  tab[tabId - 1].classList.add("active");

  let content = document.getElementById("content");
  let tabContent = content.getElementsByTagName("iframe");
  tabContent[tabId - 1].classList.remove("hidden");

  currentTab = tabContent[tabId - 1];
}

/* -1 день жизни..  */

function closeTab(tabId) {
  let index = tabId - 1;
  tabs.splice(index, 1);
  
  let content = document.getElementById("content");
  let tabContent = content.getElementsByTagName("iframe")[index];
  tabContent.parentNode.removeChild(tabContent);
  
  let tabBar = document.getElementById("tab-bar");
  let tab = tabBar.getElementsByClassName("tab")[index];
  tab.parentNode.removeChild(tab);
}

function search() {
  let input = document.getElementById("search-input").value;
  if (input && currentTab) {
    if (input.startsWith("http://") || input.startsWith("https://")) {
      currentTab.src = input;
    } else {
      currentTab.src = "https://www.google.com/search?q=" + input;
    }
  }
}

window.addEventListener("load", function() {
  addTab();
  
  let newTabContent = document.getElementById("tab-content-1");
  newTabContent.src = "onload/newtab.html";
});
/* Привет любитель копаться в коде */
/* Жулик не воруй  */
/* А если хочешь украть то напиши By Fleen5177 прямо тут */
/* Пока  */