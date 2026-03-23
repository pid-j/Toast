# Toast

Toast (TurboWarp OS App Storage Template) is a template structure for app storage to be (remotely) downloaded from OSes based on Scratch, mainly its forks. Forever FOSS under GPLv2.

## Apps

Apps are put in the `apps` folder in the `.sprite3` format.

### Definitions

- App ID/`app_id`: An identifier for an app that only contains lowercase letters as well as underscores.
- Package ID/`pkg_id`: Ditto but for a package of apps.

### Store Directory

The `store.json` file is important as this file allows the store to know where the apps are located. Each entry in this file corresponds to a store app/package, and a sample file is provided in the `apps` folder. The format for the entry of a standalone app is ```
{
  "name": "App Name Here",
  "description": "App Description Here",
  "icon": "https://example.com/whatever.png",
  "id": "app_id",
  "creator": "@AddUsernameHere",
  "dateofcreation": "1st of Jan. 1970"
}``` 

For packaged apps, an extra key is added named `apps`. The `apps` list is a list of the app IDs in the package so the store knows where to find the apps in the package. Examples: `["app_name.sprite3", "different_app.sprite3", "another_one.sprite3"]`. This means that the format for the entry of a package is ```
{
  "name": "Package Name Here",
  "description": "Package Description Here",
  "icon": "https://example.com/whatever.png",
  "id": "pkg_id",
  "creator": "@AddUsernameHere",
  "dateofcreation": "1st of Jan. 1970",
  "apps": ["app_name.sprite3", "different_app.sprite3", "another_one.sprite3"]
}``` 

Extra keys can also be added for custom purposes, e.g. a category key.

### Standalone Apps

For standalone apps, add it to `apps` and use the name format `{app_id}.sprite3`. Examples: `cookie_clicker.sprite3`, `chicken_mcnugget.sprite3`.

### Packaged Apps

To package apps together, create a folder with the name of the package ID in the `apps` folder (lowercase letters + underscore). Add the standalone apps in the package folder following the same naming convention as above.

## Store

Assets for your app store are put in the `store` folder.

### Main App

The main app store is built with HTML like the [OpenMX AppExplorer](https://github.com/Makssuper747/OpenMX-Add-ons/tree/main/AppExplorer) and a test store is provided at [`TestAppStore.html`](https://pid-j.github.io/Toast/store/TestAppStore.html) and can be tweaked to fit your purposes.

### Downloader

The downloader on the receiving end (usually an app in your OS) will probably show an [iframe](https://turbowarp.org/editor?extension=https://extensions.turbowarp.org/iframe.js) of the main app. A test downloader, [`TestAppDownloader.sb3`](https://turbowarp.org/?project_url=raw.githubusercontent.com/pid-j/Toast/main/store/TestAppDownloader.sb3), is provided and can be tweaked.