/* ==========================================================================\
   🌓 0. 記憶流：深淺色模式切換與讀取功能 (LocalStorage)
   ========================================================================== */
function toggleTheme() {
    // 切換 body 的 dark-mode 類別
    document.body.classList.toggle("dark-mode");
    
    // 檢查切換後，到底是不是深色模式，並記錄在瀏覽器便利貼裡
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

function applyTheme() {
    // 網頁一打開，立刻去翻便利貼
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}


/* ==========================================================================\
   📚 1. 歷史文章資料庫 (10篇史詩擴充版) & 隨機抽文功能
   ========================================================================== */
const articleDatabase = [
    {
        title: "盛唐氣象：中國歷史的黃金時代",
        content: "<p>唐朝（西元618年－907年）是中國歷史上最強盛的朝代之一。自唐太宗「貞觀之治」起，國力日益強盛。唐朝首都長安是當時世界上最大的城市，吸引了來自波斯、新羅、日本的使節與商人。</p><p>這個時代最大的成就在於文化與藝術。李白、杜甫的詩作流傳千古；吳道子的畫作被譽為神品。同時，唐朝展現了極高的包容性，展現了開放的「大唐氣度」。</p>"
    },
    {
        title: "秦始皇：千古一帝與帝國興衰",
        content: "<p>秦始皇贏政在西元前221年橫鎖六國，建立了中國歷史上第一個大一統的封建帝國——秦朝。他廢除分封制，改行郡縣制，並將權力高度集中於皇帝手中。</p><p>為了鞏固統治，秦始皇下令「書同文、車同軌」，統一度量衡與貨幣。雖然他修築萬里長城防禦匈奴，但也因焚書坑儒、濫用民力而留下暴政之名，導致秦朝二世而亡。</p>"
    },
    {
        title: "三國鼎立：英雄輩出的智謀時代",
        content: "<p>東漢末年，天下大亂，群雄並起。經歷官渡之戰與赤壁之戰後，形成了魏、蜀、吳三強鼎立的局面。曹操夾天子以令諸侯、劉備三顧茅廬請諸葛亮出山、孫權雄據江東，寫下無數傳奇故事。</p><p>這是一個戰火連天卻英雄輩出的時代，《三國演義》將這段歷史浪漫化，使得空城計、草船借箭等智謀故事家喻戶曉，成為中國文化中關於智慧與忠義的代表。</p>"
    },
    {
        title: "清明上河圖：繁華如夢的大宋經濟",
        content: "<p>宋朝（特別是北宋）雖然在軍事上相對弱勢，但在經濟、文化與科技上卻達到了中國古代的巔峰。首都汴京（開封）取消了宵禁，夜市繁榮，市民階層興起，紙幣「交子」也在此時誕生。</p><p>畫家張擇端的《清明上河圖》完美記錄了當時汴河兩岸的繁華景象。宋代也是科技大爆發的時期，活字印刷術、指南針與火藥的改良，對全世界的文明發展產生了深遠的影響。</p>"
    },
    {
        title: "地下軍隊：震撼世界的秦始皇兵馬俑",
        content: "<p>1974年，幾位農民在西安打井時，意外發現了震驚世界的歷史奇蹟——秦始皇兵馬俑。這座龐大的地下軍陣是秦始皇的陪葬品，象徵著他在死後世界依然要統率萬軍、守衛帝國。</p><p>坑內出土了數千件與真人等高的陶俑，最讓人驚嘆的是，這些兵馬俑「千人千面」，每個將士的五官、髮型甚至面部表情都完全不同。這展示了兩千年前秦代工匠高超的雕塑工藝與嚴格的工業標準。</p>"
    },
    {
        title: "長河落日：成吉思汗與元朝的歐亞狂飆",
        content: "<p>13世紀，一代梟雄成吉思汗統一蒙古各部，依靠強悍的鐵騎發動了震動世界的西征，建立起橫跨歐亞大陸的超級帝國。隨後，其孫忽必烈在1271年建立元朝，並攻滅南宋，實現了中國歷史上首次由北方遊牧民族建立的全国性統一政權。</p><p>元朝時期，中外交通極其發達，義大利旅行家馬可·波羅遠渡重洋來到大都（今北京），並在遊記中讚嘆東方的富庶與繁華，激發了歐洲人對神祕東方的無限嚮往。</p>"
    },
    {
        title: "巨艦出海：明代鄭和下西洋的航海奇蹟",
        content: "<p>明朝永樂年間（1405年），明成祖派遣太監鄭和率領當時世界上規模最大的船隊出使西洋。在接下來的二十多年裡，鄭和率領兩萬多名官兵、乘坐長達百米的「寶船」，先後七次遠航。</p><p>他們的足跡遍及東南亞、印度洋，最遠甚至到達了東非紅海沿岸。與西方後來的殖民擴張不同，鄭和下西洋主要是為了宣揚國威並進行和平貿易。他帶回了各國使節以及長頸鹿（當時被稱為麒麟）等奇珍異獸，寫下了人類航海史上的壯麗篇章。</p>"
    },
    {
        title: "荊軻刺秦王：戰國末期的悲壯絕唱",
        content: "<p>戰國末期，秦國勢如破竹，即將吞併天下。燕國太子丹為了挽救國家，秘密招募了勇士荊軻執行刺殺秦王的驚天計畫。臨行前，高漸離擊筑，荊軻在易水河畔高歌：「風蕭蕭兮易水寒，壯士一去兮不復還」，場面極其悲壯。</p><p>荊軻帶著燕國督亢的地圖與秦國叛將的首級晉見秦王。在獻上地圖時「圖窮匕見」，他抓起淬毒的匕首刺向秦王，可惜最終因秦王左右閃躲及御醫投擲藥袋干擾而失敗。這場刺殺雖然沒有阻止秦國統一，但荊軻的俠義與勇氣卻流傳了兩千年。</p>"
    },
    {
        title: "康乾盛世：清朝疆域奠基與最後的輝煌",
        content: "<p>清朝康熙、雍正、乾隆三代皇帝統治的時期（西元1661年－1796年），被歷史學家稱為「康乾盛世」。在這一百多年間，社會穩定，經濟繁榮，人口出現了爆發性增長，突破了三億大關。</p><p>更重要的是，這段時期清朝有效平定了多方叛亂，將西藏、新疆、台灣等地區牢牢納入版圖，奠定了現代中國的宏偉疆域。然而，盛世背後也隱藏著危機，當時朝廷推行「閉關鎖國」政策，使得中國逐漸與西方工業革命的科技浪潮脫節。</p>"
    },
    {
        title: "一字千金：呂不韋與《呂氏春秋》的豪賭",
        content: "<p>戰國末年，大商人呂不韋憑藉高超的政治手腕，成功輔佐秦莊襄王與後來的秦始皇登基，成為一人之下、萬人之上的相國。為了樹立自己的學術威望並為未來的統一帝國提供治國方針，他召集了數千名門客，共同編纂了一部巨著——《呂氏春秋》。</p><p>書成之後，呂不韋將懸賞告示貼在秦國首都咸陽的城門口，將書放在上面。他向天下豪傑放話：如果有人能在這本書裡增加或減少一個字，甚至只要改動一個字，就能立刻獲得「一千金」的巨額賞金！這就是成語「一字千金」的由來，展現了他極度的自信與當時權傾朝野的氣魄。</p>"
    }
];
function getRandomArticle() {
    const titleEl = document.getElementById("article-title");
    const contentEl = document.getElementById("article-content");
    if (!titleEl || !contentEl) return;

    const randomIndex = Math.floor(Math.random() * articleDatabase.length);
    const article = articleDatabase[randomIndex];

    contentEl.style.opacity = 0;
    setTimeout(() => {
        titleEl.innerText = article.title;
        contentEl.innerHTML = article.content;
        contentEl.style.transition = "opacity 0.5s";
        contentEl.style.opacity = 1;
    }, 200);
}


/* ==========================================================================\
   ✍️ 2. 歷史超大型題庫 & 亂序抽題
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

let currentQuestions = [];

function prepareRandomQuestions() {
    let shuffled = [...megaQuizDatabase];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    currentQuestions = shuffled.slice(0, 5);
}

function renderQuiz() {
    const container = document.getElementById("quiz-container");
    if (!container) return; 

    prepareRandomQuestions();

    container.innerHTML = currentQuestions.map((item, qIdx) => {
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

function checkQuiz() {
    let score = 0;
    const perQuestionScore = 100 / currentQuestions.length;

    document.querySelectorAll('.feedback-tag').forEach(el => el.remove());

    for (let i = 0; i < currentQuestions.length; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) {
            alert("⚠️ 殿下，您還有題目尚未作答完畢！");
            return;
        }
        
        const questionGroup = document.querySelectorAll('.question-group')[i];
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-tag';
        feedbackDiv.style.marginTop = '10px';
        feedbackDiv.style.fontWeight = 'bold';

        if (selected.value === currentQuestions[i].correct) {
            score += perQuestionScore;
            feedbackDiv.innerHTML = `<span style="color: #4caf50;">🟢 答對了！太史公點頭表示讚賞。</span>`;
        } else {
            feedbackDiv.innerHTML = `<span style="color: var(--primary);">🔴 答錯囉！正確答案應該是：【${currentQuestions[i].correct}】</span>`;
        }
        
        questionGroup.appendChild(feedbackDiv);
    }

    let comment = "";
    if (score === 100) {
        comment = "👑 完美！隨機抽題也難不倒你，你根本是當代太史公！💯";
    } else if (score >= 60) {
        comment = "📜 相當不錯！錯的題目已經在上方為您標出，吸收後必成大器！";
    } else {
        comment = "⚔️ 烽火連天！上方已開啟錦囊妙計，看清正確答案後重新整修吧！";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.style.opacity = 0;
    resultDiv.innerHTML = `<div style="padding: 15px; background: var(--nav-bg); border-radius: 8px; border: 1px dashed var(--gold); margin-top: 20px;">
        <span style="font-size: 1.5rem; color: var(--gold);">得分：${score} 分</span><br>${comment}
    </div>`;
    
    setTimeout(() => {
        resultDiv.style.transition = "opacity 0.5s";
        resultDiv.style.opacity = 1;
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }, 50);
}

/* ==========================================================================\
   🚀 3. 初始化觸發器
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // ⚡ 網頁加載第一件事：檢查並套用上一次的深淺色記憶！
    applyTheme();

    if (document.getElementById("article-title")) {
        getRandomArticle();
    }
    if (document.getElementById("quiz-container")) {
        renderQuiz();
    }
});