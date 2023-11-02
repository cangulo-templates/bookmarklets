// from:    JIRA ticket url
// action:  extract the ticket from the url and copy to clipboard

javascript: (function () {
    var url = window.location.href;
    var pattern = /\/browse\/([^\/]+)/;
    var match = pattern.exec(url);
    var key = match ? match[1] : null;
    if (key) {
        var tempInput = document.createElement('input');
        document.body.appendChild(tempInput);
        tempInput.value = key;
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Key copied: ' + key);
    } else {
        alert('No key found in the URL.');
    }
    location.reload();
}
)();