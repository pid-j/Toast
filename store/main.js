const appList = document.querySelector("app-list");
const initialItem = document.querySelector("app-item");

const toggleCompactMode = () => appList.setAttribute("compact", 
    appList.getAttribute("compact") == "true" ? "false": "true");

const populateAppList = store => {
    store.forEach(value => {
        if (!value.hasOwnProperty("id")) return;

        var appItem = initialItem.cloneNode(true);
        let icon = value.hasOwnProperty("icon");
        let _name = value.hasOwnProperty("name"); // name is a reserved variable
        let desc = value.hasOwnProperty("description");
        let creator = value.hasOwnProperty("creator");
        let dateoc = value.hasOwnProperty("dateofcreation");
        let creation = creator | dateoc;
        
        if (icon) appItem.querySelector("img").src = value["icon"];
        if (_name) appItem.querySelector(".title").innerText = value["name"];
        if (desc) appItem.querySelector(".subtitle").innerText = value["description"];
        if (creation) appItem.querySelector(".subtitle").innerText += "<br/>Created ";
        if (creator) appItem.querySelector(".subtitle").innerText += `by ${value["creator"]} `;
        if (dateoc) appItem.querySelector(".subtitle").innerText += `on ${value["dateofcreation"]}`;
        
        appItem.setAttribute("app-id", value["id"]);

        appList.append(appItem);
    });
};

const repository = "https://pid-j.github.io/Toast"; // Change it for different repos!
const storePromise = (async () => {return await fetch(`${repository}/apps/store.json`, {
    "credentials": "omit",
    "headers": {
        "Accept": "*",
        "Upgrade-Insecure-Requests": "1",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Priority": "u=0, i"
    },
    "referrer": `${repository}/apps/store.json`,
    "method": "GET",
    "mode": "cors"
}).then(async value => {populateAppList(await value.json())})})();