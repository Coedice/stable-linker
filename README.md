# StableLinker
StableLinker allows you to create a link that redirects to a URL found in a Google Doc using Google Apps Script.

# How to use
Firstly you need a Google Doc you want StableLinker to read from. Copy it's ID (it is the part that follows `docs.google.com/document/d/` in the URL).
Paste this ID into the string at the top of `/appsScript/Code.gs`.

Then you need to create your own Google Apps Script. The code to do so can be found in the `/appsScript` folder.

Once you have deployed your Apps Script as a web app, copy down your Deployment ID (it is the part that follows `script.google.com/macros/s/` up until `/exec` in the URL)

Put your Deployment ID in the link below, and you will have set up your StableLinker link:
```
https://coedice.github.io/stable-linker?id=<Your Deployment ID>
```

# Why link to this repo instead of the App Script?
Apps Scripts cannot execute redirects since they are in a sandbox, so we can circumvent that
by getting redirect URL outside the App Script, and redirecting to it from an external source (such as this repo).

This repo's HTML file simply follows the redirect link that the Apps Script outputs.

# Fail-safe
If the Google Apps Script query results in an error, the redirect is to the Google Doc file instead.