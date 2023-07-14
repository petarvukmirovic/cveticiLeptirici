function isWhitespace(str) {
    return str.trim() == "";
}

function flowerOrButterfly(idx) {
    const flower = String.fromCodePoint('0x1F33A')
    const butterfly = String.fromCodePoint('0x1F98B')
    return idx % 2 == 0 ? flower : butterfly;
}

function replaceWithFlowerOrButterfly(tweetText) {
    let tweetCharacters = [];
    let replacedCharacters = 0;
    for(let i=0; i<tweetText.length; i++) {
        if(isWhitespace(tweetText[i])) {
            tweetCharacters.push(tweetText[i]);
        }
        else {
            tweetCharacters.push(flowerOrButterfly(replacedCharacters++));
        }
    }
    console.log(`zamenjeno sa: '${tweetCharacters.join("")}'`);
    return tweetCharacters.join("");
}


function replaceTweetText() {
    document.querySelectorAll('div[data-testid="tweetText"]').forEach(
        container => {
            let tweetText = container.textContent.toLowerCase(); 
            if (tweetText.includes("#caosvima")) {
                console.log(`found container: ${container.textContent}`);
                container.textContent = 'Ovaj tweet je zamenjen nečim lepšim: ' +
                replaceWithFlowerOrButterfly(container.textContent);
            }
        });
}

window.setInterval(replaceTweetText, 1000);

