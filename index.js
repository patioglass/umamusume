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
    21: "当たり!!もう一回",
    22: "ふんぎゃろ",
    23: "絶妙に凶",
    24: "おそらく良い",
    25: "とりあえず吉",
    26: "ふんにゃかハッピー!",
    27: "はんにゃかラッキー!",
    28: "777",
    29: "明日に期待",
    30: "さっきと同じ",
    31: "良い感じ",
    32: "超良い感じ",
    33: "アルティメット良い感じ",
    34: "びみょー",
    35: "知らない方が良いかも...",
    36: "ばっちり!goodです!",
    37: "笑う門には福来る",
    38: "2等",
    39: "悪くは...ないはず",
    40: "背後に注意",
    41: "エクストリームハッピー",
    42: "金運上昇",
    43: "1/5大吉",
    44: "＼(＾o＾)／",
    45: "ヤバそう",
    46: "かなりヤバそう",
    47: "ちょっとヤバそう",
    48: "良すぎて計測不能",
    49: "売り切れ",
    50: "フルアーマーフクキタル",
}
const KUJI_NUM = Object.keys(KUJI_DETAIL).length;
const LOCALSTORAGE_KEY = "mikokitaru_result";
const BASE_TWITTER_SHARE_LINK = "https://twitter.com/intent/tweet?url=https://patiopatimon.com/umamusume/&hashtags=マチカネミコキタル占い&text=";

window.onload = () => {
    // 新年の年数追加
    const date = new Date();
    document.querySelector(".currentYear").textContent = date.getFullYear();
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

                // localstorageに保存
                setStorage(num);

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

function setStorage(num) {
    let updateHistoryArray = [];

    if (window.localStorage) {
        const prizeHistoryJson = window.localStorage.getItem(LOCALSTORAGE_KEY);
        if (prizeHistoryJson) {
            const prizeHistoryArray = JSON.parse(prizeHistoryJson);
            updateHistoryArray = prizeHistoryArray.concat();
        }
        // 今までに当たったことがなければ保存
        if (!updateHistoryArray.includes(num)) {
            updateHistoryArray.push(num);
            const updateHistory = JSON.stringify(updateHistoryArray, undefined, 1);
            window.localStorage.setItem(LOCALSTORAGE_KEY, updateHistory);
        }
    }
}