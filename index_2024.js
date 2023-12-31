const KUJI_DETAIL = {
    1: "綺麗な星々があなたに輝きを贈ります!!夜空を見上げて、夢や目標に向かって努力を続けましょう!",
    2: "運命は常に変わりやすいもの!!今年のアナタは逆転のチャンス!!逆転勝利の大吉が期待できます!!",
    3: "今年はルーチンを打破し、冒険に飛び込む年。新たなことに挑戦すると素晴らしい結果が待ってます!!",
    4: "これは逆に良いこと!!未知の中にこそ、成長や学びが潜んでいます。怖がらずに前進です!!",
    5: "今年は笑顔が最大の武器!!どんな困難も笑顔で乗り越えられる年です!!笑う門にはフクキタル!!",
    6: "今年はまさにジャンプの日！大胆な行動で、驚くべき結果が得られるでしょう!!心の飛躍です!!",
    7: "新しい場所への旅行が成功する年。知らない土地での経験が、人生に新たな色を添えることでしょう!",
    8: "芸術的な表現が成功する年!絵を描いたり、音楽を奏でたり、内なる才能が開花するでしょう!",
    9: "自分と向き合う年。過去の誤りから学び、新しい自己発見ができます!苦しい瞬間こそ成長の瞬間!!",
    10: "笑いが運を呼び寄せます!友達と笑って過ごすと大吉!私はｽｽﾞｶさんとお笑い番組でも見ます!",
    11: "美味しいものに囲まれる年。ジャンジャン食べて、食事を楽しむことで心を豊かにしましょう!",
    12: "ま、まるで理想的な世界にいるような感覚...!!何事も前進あるのみ!!私って才能あるかも...!?",
    13: "混沌とした状況に挑戦する年!意外な形で秩序が生まれ、予想外の成果を得ることができるかも。",
    14: "宇宙のエネルギーがあなたを支えます...!自分の目標や夢は宇宙と共に歩んでいけるでしょう(?)",
    15: "自分らしいファッションで周りの注目を集めて大吉に!!私はフルアーマー大吉装備でいきます!!",
    16: "人間関係が広がる年。新しいつながりや友達が増えて充実した日々に...!フォロワーを大切に!!",
    17: "ムフフ、人生はまるで巨大なパズル...!今年はピースがうまくはまり、物事がスムーズに進む年!!",
    18: "奇跡が起きるかもしれない年。奇跡を信じて前進あるのみです!!エクストリームミラクルハッピー!!",
    19: "相手との距離感を大切にし、ハグでハッピーをもらえちゃう年!!...トレーナーさん今日暇でしょうか...",
    20: "ちょっとしたドジが運気を上げる、笑い飛ばすことでポジティブなエネルギーが広がります!!ハッピー!!",
    21: "ネコが全ての鍵を握っています。柔軟でマイペースな態度を真似てみると吉!私はにゃーさんを離さず寝ます",
    22: "ランダムな出来事が多発する年。しかし!!人生はランダムなものです!奇跡的な出会いが多くなる予感!!",
    23: "賑やかな雰囲気が広がる年。交流やイベントで、ワイワイ頑張ろうの気分が高まります!!ワイワイ!!",
    24: "他人の成功を見てヤキモキすることで、自分の可能性を高めましょう!他人から刺激を受けて過ごすと吉",
    25: "無敵の年です!困難も余裕余裕の毎日です!!ムフフ、私も今ならだれにも負ける気がしませんﾑｯﾌｰ"
}
const KUJI_DETAIL_SUMMARY = {
    1: "星降る大吉",
    2: "逆転大吉",
    3: "冒険の超吉",
    4: "未知の大凶",
    5: "笑顔の大吉",
    6: "飛躍の超吉",
    7: "旅の超吉",
    8: "芸術の大吉",
    9: "自己発見の大凶",
    10: "笑いの大吉",
    11: "食欲の大吉",
    12: "ユートピアの超吉",
    13: "カオスの中吉",
    14: "宇宙の超吉",
    15: "ファッションの大吉",
    16: "ネットワークの大吉",
    17: "パズルの大吉",
    18: "ミラクルの大吉",
    19: "ハグの大吉",
    20: "ドジの大大吉",
    21: "ネコの超吉",
    22: "ランダムな大吉",
    23: "ワイワイの大吉",
    24: "隣の芝生の大吉",
    25: "無敵の大吉"
}
const KUJI_NUM = Object.keys(KUJI_DETAIL).length;
const LOCALSTORAGE_KEY = "mikokitaru_result_2024";
const BASE_TWITTER_SHARE_LINK = "https://twitter.com/intent/tweet?url=https://patiopatimon.com/umamusume/index_2024.html&hashtags=マチカネミコキタル占い,新春マチカネミコキタル&text=";

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
                document.querySelector(".img__main img").src = `./img/2024/${num}.webp`;

                // localstorageに保存
                setStorage(num);

                const resultText = document.querySelector(".kuji-result-text");
                resultText.textContent = `${KUJI_DETAIL[num]}`;
                document.querySelector(".img__main img").classList.add("kuji-result");
                document.querySelector(".wrapper").style.backgroundImage = "url('./happy_Matikanefukukitaru/result_2024_hukukitaru_1.png')";
                document.querySelector(".button__share-tweet").style.display = "block";
                document.querySelector(".button__share-tweet").href = `${BASE_TWITTER_SHARE_LINK}占い結果は......「${KUJI_DETAIL_SUMMARY[num]}」でした!!%0a%0a${KUJI_DETAIL[num]}%0a`
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