# Apps

Apps are put in this folder in the `.sprite3` format.

## Definitions

- App ID/`app_id`: An identifier for an app that only contains lowercase letters as well as underscores.
- Package ID/`pkg_id`: Ditto but for a package of apps.

## Store Directory

The `store.json` file is important as this file allows the store to know where the apps are located. Each entry in this file
corresponds to a store app/package. The format for the entry of a standalone app is ```
{
  "name": "Package Name Here",
  "description": "Package Description Here",
  "icon": "https://example.com/whatever.png",
  "id": "{app_id}",
  "creator": "@AddUsernameHere",
  "dateofcreation": "1st of Jan. 1970"
}``` 

For packaged apps, an extra key is added named `apps`. The `apps` list is a list of the app IDs in the package so the store knows
where to find the apps in the package. Examples: `["app_name.sprite3", "different_app.sprite3", "another_one.sprite3"]`.
This means that the format for the entry of a package is ```
{
  "name": "Package Name Here",
  "description": "Package Description Here",
  "icon": "https://example.com/whatever.png",
  "id": "{app_id}",
  "creator": "@AddUsernameHere",
  "dateofcreation": "1st of Jan. 1970",
  "apps": ["app_name.sprite3", "different_app.sprite3", "another_one.sprite3"]
}``` 

## Standalone Apps

For simgle apps, add it to this folder and use the name format `{app_id}.sprite3`. Examples: `cookie_clicker.sprite3`, `chicken_mcnugget.sprite3`.

## Packaged Apps

To package apps together, create a folder with the name of the package ID in this folder (lowercase letters + underscore). Add the
standalone apps in the package folder following the same naming convention as above.
