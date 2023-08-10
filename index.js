const KUJI_NUM = 20;
const KUJI_DETAIL = {
    1: "大吉",
    2: "大大大吉",
    3: "大凶",
    4: "どちらかといえば大吉",
    5: "はずれ",
    6: "吉",
    7: "凶",
    8: "末吉",
    9: "小吉",
    10: "中吉",
    11: "ウルトラ吉",
    12: "超豪運",
    13: "天にも昇る運",
    14: "空前絶後の大吉",
    15: "やーれんそーらんほうれん草",
    16: "エコエコアザラシエコエコオットセイ",
    17: "ハッピーカムカムフクキタルー!",
    18: "ハイパー吉",
    19: "ダイナミック超吉",
    20: "逆に吉",
}
const BASE_TWITTER_SHARE_LINK = "https://twitter.com/intent/tweet?url=https://patiopatimon.com/umamusume/&hashtags=マチカネミコキタル占い&text=";

window.onload = () => {
    document.querySelectorAll(".button__omikuji, .button__omikuji-retly").forEach(dom => {
        dom.addEventListener("click", () => {
            document.querySelector(".modal").style.display = "block";
            // cssに記載されてるアニメーションが終わり次第結果表示
            setTimeout(() => {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });

                document.querySelector(".modal").style.display = "none";
                const num = getRandomInt(KUJI_NUM) + 1;
                document.querySelector(".img__main img").src = `./img/kuji/${num}.webp`;
                document.querySelector(".img__main img").classList.add("kuji-result");
                document.querySelector(".wrapper").classList.add("animate__animated", "animate__bounceIn");
                document.querySelector(".wrapper").style.backgroundImage = "url('./happy_Matikanefukukitaru/result_hukukitaru.png')";
                document.querySelector(".button__share-tweet").style.display = "block";
                document.querySelector(".button__share-tweet").href = `${BASE_TWITTER_SHARE_LINK}占い結果は......「${KUJI_DETAIL[num]}」でした!!`
                setTimeout(() => {
                    document.querySelector(".wrapper").classList.remove("animate__animated", "animate__bounceIn");
                }, 3 * 100);
            }, 16 * 1.5 * 100);
        })
    })
}

function getRandomInt(max) {
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}