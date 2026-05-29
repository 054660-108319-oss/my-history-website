// 1. 題目資料庫
const quizDatabase = [
    {
        question: "1. 中國第一個統一貨幣與文字的皇帝是誰？",
        options: ["漢武帝", "秦始皇", "唐太宗", "明太祖"],
        correct: 1
    },
    {
        question: "2. 被後世譽為「詩仙」的是哪位唐代詩人？",
        options: ["杜甫", "白居易", "李白", "王維"],
        correct: 2
    },
    {
        question: "3. 著名的跨國貿易通道「絲綢之路」是在哪個朝代大規模開啟的？",
        options: ["漢朝", "宋朝", "唐朝", "元朝"],
        correct: 0
    },
    {
        question: "4. 指南針、活字印刷術是在什麼時期被廣泛應用與蓬勃發展？",
        options: ["秦朝", "唐朝", "宋朝", "清朝"],
        correct: 2
    },
    {
        question: "5. 中國古代修築萬里長城，主要目的是為了抵禦哪種威脅？",
        options: ["南方洪水侵襲", "西方貿易衝突", "北方遊牧民族入侵", "東方海盜突襲"],
        correct: 2
    }
];

// 2. 自動渲染題目
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("quiz-container");
    if (!container) return; 

    container.innerHTML = quizDatabase.map((item, qIdx) => `
        <div class="question-group">
            <p><strong>${item.question}</strong></p>
            ${item.options.map((opt, oIdx) => `
                <label class="option-label">
                    <input type="radio" name="q${qIdx}" value="${oIdx}"> 
                    ${opt}
                </label>
            `).join('<br>')}
        </div>
    `).join('');
});

// 3. 檢查答案
function checkQuiz() {
    let score = 0;
    const perQuestionScore = 100 / quizDatabase.length;

    for (let i = 0; i < quizDatabase.length; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            alert("⚠️ 殿下，您還有題目尚未作答完畢！");
            return;
        }
        if (parseInt(selected.value) === quizDatabase[i].correct) {
            score += perQuestionScore;
        }
    }

    let comment = "";
    if (score === 100) {
        comment = "👑 完美！你根本是當代太史公，歷史系教授都要敬你三分！💯";
    } else if (score >= 60) {
        comment = "📜 相當不錯！看來你在長安城裡也是個博學多聞的秀才！";
    } else {
        comment = "⚔️ 烽火連天！建議回大唐閱讀專區重新修練，重振旗鼓！";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.style.opacity = 0;
    resultDiv.innerHTML = `<div style="padding: 15px; background: #fdfae7; border-radius: 8px; border: 1px dashed #8c2d19; margin-top: 20px;">
        <span style="font-size: 1.5rem; color: #8c2d19;">得分：${score} 分</span><br>${comment}
    </div>`;
    
    setTimeout(() => {
        resultDiv.style.transition = "opacity 0.5s";
        resultDiv.style.opacity = 1;
    }, 50);
}