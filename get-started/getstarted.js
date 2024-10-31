function searchResearchPapers() {
    const websiteSelect = document.getElementById('researchPaperWebsite');
    const queryInput = document.querySelector('#researchPaperSearch input[name="q"]');
    const selectedWebsite = websiteSelect.value;

    if (selectedWebsite && queryInput.value) {
        window.open(`${selectedWebsite}${encodeURIComponent(queryInput.value)}`, '_blank');
    }
    return false; // Prevent the form from submitting normally
}

function searchArticles() {
    const websiteSelect = document.getElementById('articleWebsite');
    const queryInput = document.querySelector('#articleSearch input[name="q"]');
    const selectedWebsite = websiteSelect.value;

    if (selectedWebsite && queryInput.value) {
        window.open(`${selectedWebsite}${encodeURIComponent(queryInput.value)}`, '_blank');
    }
    return false; // Prevent the form from submitting normally
}

function searchVideos() {
    const websiteSelect = document.getElementById('videoWebsite');
    const queryInput = document.querySelector('#videoSearch input[name="q"]');
    const selectedWebsite = websiteSelect.value;

    if (selectedWebsite && queryInput.value) {
        window.open(`${selectedWebsite}${encodeURIComponent(queryInput.value)}`, '_blank');
    }
    return false; // Prevent the form from submitting normally
}

function searchPodcasts() {
    const websiteSelect = document.getElementById('podcastWebsite');
    const queryInput = document.querySelector('#podcastSearch input[name="q"]');
    const selectedWebsite = websiteSelect.value;

    if (selectedWebsite && queryInput.value) {
        window.open(`${selectedWebsite}${encodeURIComponent(queryInput.value)}`, '_blank');
    }
    return false; // Prevent the form from submitting normally
}
