let cards = document.getElementById("cards-area");
let cardPattern = [0,1,2,3,4,5]; // カードの絵柄種類

/** カードを生成する
 * @param {array} cardPattern カード名の配列
 */
function createCards(cardPattern) {
    for ( i of shuffle(cardPattern.concat(cardPattern))) {
        const card = document.createElement("div");
        card.style = `background-image: url('./img/${i}.png');`
        card.className = "card facedown";
        card.onclick = (e) => {
            e.target.classList.remove("facedown");
        }
        cards.appendChild(card);
    }
}

/** カードのシャッフル (Fisher–Yates shuffle)
 * @link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 * @param {array} array シャッフルしたい配列
 * @returns {array} シャッフルされた配列
 */
const shuffle = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

createCards(cardPattern);

