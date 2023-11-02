// from:    GH workflow execution summary
// action:  click on the link to the previous execution list

javascript: (
    function () {
        var hrefPattern = /\/[^\/]+\/actions\/workflows\/[^\/]+\.yml/;
        var aElements = document.querySelectorAll('a');
        for (const aElement of aElements) {
            var href = aElement.getAttribute('href'); if (href && href.match(hrefPattern)) { aElement.click(); break; }
        }
    })();