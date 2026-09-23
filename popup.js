document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveBtn");
  const tabList = document.getElementById("tabList");

  function loadTabs() {
    chrome.storage.local.get({ savedTabs: [] }, (data) => {
      tabList.innerHTML = "";
      data.savedTabs.forEach((tab, index) => {
        const li = document.createElement("li");

        const link = document.createElement("a");
        link.href = tab.url;
        link.textContent = tab.title;
        link.target = "_blank";

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.addEventListener("click", () => removeTab(index));

        li.appendChild(link);
        li.appendChild(removeBtn);
        tabList.appendChild(li);
      });
    });
  }

  function removeTab(index) {
    chrome.storage.local.get({ savedTabs: [] }, (data) => {
      const updated = data.savedTabs.filter((_, i) => i !== index);
      chrome.storage.local.set({ savedTabs: updated }, loadTabs);
    });
  }

  saveBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      chrome.storage.local.get({ savedTabs: [] }, (data) => {
        const updated = [...data.savedTabs, { title: currentTab.title, url: currentTab.url }];
        chrome.storage.local.set({ savedTabs: updated }, loadTabs);
      });
    });
  });

  loadTabs();
});
