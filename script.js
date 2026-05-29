/* ==========================================================================\
   📚 1. 歷史文章資料庫 & 隨機抽文功能
   ========================================================================== */
const articleDatabase = [
    {
        title: "盛唐氣象：中國歷史的黃金時代",
        content: "<p>唐朝（西元618年－907年）是中國歷史上最強盛的朝代之一。自唐太宗「貞觀之治」起，國力日益強盛。唐朝首都長安是當時世界上最大的城市，吸引了來自波斯、新羅、日本的使節與商人。</p><p>這個時代最大的成就在於文化與藝術。李白、杜甫的詩作流傳千古；吳道子的畫作被譽為神品。同時，唐朝展現了極高的包容性，展現了開放的「大唐氣度」。</p>"
    },
    {
        title: "秦始皇：千古一帝與帝國興衰",
        content: "<p>秦始皇贏政在西元前221年橫掃六國，建立了中國歷史上第一個大一統的封建帝國——秦朝。他廢除分封制，改行郡縣制，並將權力高度集中於皇帝手中。</p><p>為了鞏固統治，秦始皇下令「書同文、車同軌」，統一度量衡與貨幣（半兩錢）。雖然他修築萬里長城防禦匈奴，但也因焚書坑儒、濫用民力（如修築阿房宮與驪山陵）而留下暴政之名，導致秦朝二世而亡。</p>"
    },
    {
        title: "三國鼎立：英雄輩出的智謀時代",
        content: "<p>東漢末年，天下大亂，群雄並起。經歷官渡之戰與赤壁之戰後，形成了魏、蜀、吳三強鼎立的局面。曹操夾天子以令諸侯、劉備三顧茅廬請諸葛亮出山、孫權雄據江東，寫下無數傳奇故事。</p><p>這是一個戰火連天卻英雄輩出的時代，《三國演義》將這段歷史浪漫化，使得空城計、草船借箭等智謀故事家喻戶曉，成為中國文化中關於智慧與忠義的代表。</p>"
    },
    {
        title: "清明上河圖：繁華如夢的大宋經濟",
        content: "<p>宋朝（特別是北宋）雖然在軍事上相對弱勢，但在經濟、文化與科技上卻達到了中國古代的巔峰。首都汴京（開封）取消了宵禁，夜市繁榮，市民階層興起，紙幣「交子」也在此時誕生。</p><p>畫家張擇端的《清明上河圖》完美記錄了當時汴河兩岸的繁華景象。宋代也是科技大爆發的時期，活字印刷術、指南針與火藥的改良，對全世界的文明發展產生了深遠的影響。</p>"
    }
];

function getRandomArticle() {
    const titleEl = document.getElementById("article-title");
    const contentEl = document.getElementById("article-content");
    if (!titleEl || !contentEl) return;

    // 隨機選一篇
    const randomIndex = Math.floor(Math.random() * articleDatabase.length);
    const article = articleDatabase[randomIndex];

    // 特效：先淡出再淡入
    contentEl.style.opacity = 0;
    setTimeout(() => {
        titleEl.innerText = article.title;
        contentEl.innerHTML = article.content;
        contentEl.style.transition = "opacity 0.5s";
        contentEl.style.opacity = 1;
    }, 200);
}


/* ==========================================================================\
   ✍️ 2. 歷史超大型題庫 (共 15 題)
   ========================================================================== */
const megaQuizDatabase = [
    { question: "中國第一個統一貨幣與文字的皇帝是誰？", options: ["漢武帝", "秦始皇", "唐太宗", "明太祖"], correct: "秦始皇" },
    { question: "被後世譽為「詩仙」的是哪位唐代詩人？", options: ["杜甫", "白居易", "李白", "王維"], correct: "李白" },
    { question: "著名的跨國貿易通道「絲綢之路」是在哪個朝代大規模開啟的？", options: ["漢朝", "宋朝", "唐朝", "元朝"], correct: "漢朝" },
    { question: "指南針、活字印刷術是在什麼時期被廣泛應用與蓬勃發展？", options: ["秦朝", "唐朝", "宋朝", "清朝"], correct: "宋朝" },
    { question: "中國古代修築萬里長城，主要目的是為了抵禦哪種威脅？", options: ["南方洪水", "西方貿易衝突", "北方遊牧民族", "東方海盜"], correct: "北方遊牧民族" },
    { question: "三國時期，建立「蜀漢」政權並以恢復漢室為己任的人是誰？", options: ["曹操", "孫權", "劉備", "諸葛亮"], correct: "劉備" },
    { question: "北宋時期誕生了世界上最早的紙幣，它的名字叫什麼？", options: ["交子", "寶鈔", "飛錢", "銅錢"], correct: "交子" },
    { question: "大唐盛世中，歷史上唯一的女皇帝是誰？", options: ["慈禧太后", "武則天", "呂太后", "王昭君"], correct: "武則天" },
    { question: "提出「有教無類」、「因材施教」，被尊稱為至聖先師的是誰？", options: ["老子", "孔子", "孟子", "韓非子"], correct: "孔子" },
    { question: "歷史上著名的「貞觀之治」是哪位皇帝在位時的治世？", options: ["唐太宗", "唐高祖", "唐玄宗", "漢文帝"], correct: "唐太宗" },
    { question: "寫下史學巨著《史記》，被後世尊稱為史聖的人是誰？", options: ["班固", "司馬遷", "司馬光", "歐陽修"], correct: "司馬遷" },
    { question: "三國演義中，「三顧茅廬」請出來的曠世軍師是誰？", options: ["周瑜", "司馬懿", "諸葛亮", "郭嘉"], correct: "諸葛亮" },
    { question: "明朝時期，率領龐大船隊七次下西洋的航海家是誰？", options: ["鄭和", "戚繼光", "張騫", "玄奘"], correct: "鄭和" },
    { question: "西漢時期，派遣張騫出使西域的英明皇帝是誰？", options: ["漢高祖", "漢文帝", "漢景帝", "漢武帝"], correct: "漢武帝" },
    { question: "歷史上著名的「赤壁之戰」，是孫權與劉備聯軍對抗哪一位軍閥？", options: ["董卓", "曹操", "袁紹", "呂布"], correct: "曹操" }
];

// 存放當前被抽中的 5 題
let currentQuestions = [];

// 隨機抽題演算法 (Fisher-Yates Shuffle)
function prepareRandomQuestions() {
    // 複製一份題庫避免破壞原本的資料
    let shuffled = [...megaQuizDatabase];
    
    // 亂序排列題庫
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // 只拿前面 5 題
    currentQuestions = shuffled.slice(0, 5);
}

// 自動渲染考卷
function renderQuiz() {
    const container = document.getElementById("quiz-container");
    if (!container) return; 

    prepareRandomQuestions();

    container.innerHTML = currentQuestions.map((item, qIdx) => {
        // 連每題的選項也順便隨機亂序，防作弊極致！
        let shuffledOptions = [...item.options];
        shuffledOptions.sort(() => Math.random() - 0.5);

        return `
            <div class="question-group">
                <p><strong>第 ${qIdx + 1} 題：${item.question}</strong></p>
                ${shuffledOptions.map((opt, oIdx) => `
                    <label class="option-label">
                        <input type="radio" name="q${qIdx}" value="${opt}"> 
                        ${opt}
                    </label>
                `).join('')}
            </div>
        `;
    }).join('');
}

// 檢查答案
function checkQuiz() {
    let score = 0;

    for (let i = 0; i < currentQuestions.length; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            alert("⚠️ 殿下，您還有題目尚未作答完畢！");
            return;
        }
        
        // 改用文字比對，因為選項被打亂了
        if (selected.value === currentQuestions[i].correct) {
            score += 20; 
        }
    }

    let comment = "";
    if (score === 100) {
        comment = "👑 完美！隨機抽題也難不倒你，你根本是當代太史公！💯";
    } else if (score >= 60) {
        comment = "📜 相當不錯！這份隨機考卷很有難度，看來你確實有實力！";
    } else {
        comment = "⚔️ 烽火連天！這次抽到的題目太刁鑽了嗎？重新整理再試一次！";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.style.opacity = 0;
    resultDiv.innerHTML = `<div style="padding: 15px; background: #2a100c; border-radius: 8px; border: 1px dashed var(--gold); margin-top: 20px;">
        <span style="font-size: 1.5rem; color: var(--gold);">得分：${score} 分</span><br>${comment}
    </div>`;
    
    setTimeout(() => {
        resultDiv.style.transition = "opacity 0.5s";
        resultDiv.style.opacity = 1;
    }, 50);
}

/* ==========================================================================\
   🚀 3. 初始化觸發器
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // 如果在閱讀頁，自動先抽一篇顯示
    if (document.getElementById("article-title")) {
        getRandomArticle();
    }
    // 如果在測驗頁，自動抽 5 題出來考
    if (document.getElementById("quiz-container")) {
        renderQuiz();
    }
});