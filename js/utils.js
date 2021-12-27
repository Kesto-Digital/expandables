async function displayErrorMessage(message, timed=true) {
    if (!($("#error-popup").length)) {
        let fakeJSX = `<div id="error-popup"><p>${message}</p></div>`;
        $("body").append(fakeJSX);
        let height = $(document).height();
        $("body").append(`<div id='block-screen-error' style="height:${height}px"></div>`);
        if (timed) {
            await sleep(2500);
            $("#error-popup").remove();
            $("#block-screen-error").remove();
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const fixHeight = async() => {
    let claimContainers = [];
    $("#claim-sections > div").each((index, elem) => {
        claimContainers.push(elem.id);
    });

    let tallestClaim = $(`#${claimContainers[0]}`).height();
    for (let i=1; i< claimContainers.length; i++) {
        if ($(`#${claimContainers[i]}`).height() > tallestClaim) {
            tallestClaim = $(`#${claimContainers[i]}`).height();
        } 
    }

    for (let i=0; i< claimContainers.length; i++) {
        $(`#${claimContainers[i]}`).height(tallestClaim);
    }
};