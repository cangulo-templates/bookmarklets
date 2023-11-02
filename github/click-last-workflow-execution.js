// from:    GH workflow list
// action:  click last workflow executed

javascript: (
    function () {
        const hrefPattern = /\/[^\/]+\/actions\/runs\/(\d+)/;
        const aElements = document.querySelectorAll('a');
        let highestRunId = -1;
        let targetLink = null;
        for (const aElement of aElements) {
            const href = aElement.getAttribute('href');
            const match = href && href.match(hrefPattern);
            if (match) {
                const runId = parseInt(match[1]); if (runId > highestRunId) { highestRunId = runId; targetLink = aElement; }
            }
        } if (targetLink) { targetLink.click(); }
    }
)();