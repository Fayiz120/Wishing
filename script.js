var currentURL = window.location.href;
var url = new URL(currentURL);
var searchParams = url.searchParams;
var extractedValue = searchParams.get('?=');
document.getElementById('extractedValue').textContent = 'Extracted Value: ' + extractedValue;