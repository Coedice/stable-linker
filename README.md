# StableLinker
StableLinker allows you to create a link that redirects to a URL found in a Google Doc using Google App Script.

# How to use
Firstly you need a Google Doc you want StableLinker to read from. Copy down it's ID (it is the part that follows `docs.google.com/document/d/` in the URL).

Then you need to create your own Google App Script. The code to do so can be found in the `/appScript` folder.

Once you have deployed your App Script as a web app, copy down your App Script ID (it is the part that follows `script.google.com/macros/s/` up until `/exec` in the URL)

Put your two IDs in the link below, and you will have set up your StableLinker:
```
https://coedice.github.io/stable-linker?appScriptId=<Your App Script ID here>&docId=<Your Google Doc ID>
```

# Why link to this repo instead of the App Script?
App Scripts cannot execute redirects since they are in a sandbox, so we can circumvent that
by getting redirect URL outside the App Script, and redirecting to it from an external source (such as this repo).

This repo's HTML file simply follows the redirect link that the App Script outputs.