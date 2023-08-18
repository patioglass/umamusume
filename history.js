const LOCALSTORAGE_KEY = "mikokitaru_result";
const KUJI_NUM = 50; // ここなんか良い感じにしたい

window.onload = () => {
    if (window.localStorage) {
        const historyJson = localStorage.getItem(LOCALSTORAGE_KEY);
        const historyArray = JSON.parse(historyJson);
        const show_hisotry = document.querySelector(".kuji__history");

        for(let num = 0; num <= KUJI_NUM; num++) {
            const img = document.createElement('img');
            img.className = "img__history-kuji";

            if (historyArray.includes(num)) {
                img.src = `./img/kuji/${num}.webp`; // 画像パス
            } else {
                img.src = `./img/unknown.png`;
            }
            
            show_hisotry.appendChild(img);
        }
    }
}