function getDocContent(docId) {
  let doc = DocumentApp.openById(docId);
  let content = doc.getBody().getText();
  return content;
}

function findUrl(text) {
  let urlRegex = /(https?:\/\/[^\s]+)/g;
  let matches = text.match(urlRegex);
  return matches[0];
}

function redirectToUrl(url) {
  var template = HtmlService.createTemplateFromFile('Redirect');
  template.url = url;
  var page = template.evaluate();
  return page;
}

function doGet(e) {
  let docId = e.parameter.id;
  let content = getDocContent(docId);
  let link = findUrl(content);
  return ContentService.createTextOutput(link);
}
