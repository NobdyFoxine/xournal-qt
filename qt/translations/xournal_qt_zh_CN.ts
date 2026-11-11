<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
    <context>
        <name>AdaptiveDialog</name>
        <message>
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <source>Close (Esc)</source>
            <translation>关闭（Esc）</translation>
        </message>
    </context>
    <context>
        <name>AppButtons</name>
        <message>
            <source>Hand</source>
            <translation>手形工具</translation>
        </message>
        <message>
            <source>Mark PDF text</source>
            <translation>标记 PDF 文字</translation>
        </message>
        <message>
            <source>Settings</source>
            <translation>设置</translation>
        </message>
    </context>
    <context>
        <name>AppController</name>
        <message>
            <source>White</source>
            <translation>白色</translation>
        </message>
        <message>
            <source>Illustration paper</source>
            <translation>绘图纸</translation>
        </message>
        <message>
            <source>Kraft</source>
            <translation>牛皮纸</translation>
        </message>
        <message>
            <source>Soft green</source>
            <translation>浅绿色</translation>
        </message>
        <message>
            <source>Soft blue</source>
            <translation>浅蓝色</translation>
        </message>
        <message>
            <source>Grey</source>
            <translation>灰色</translation>
        </message>
        <message>
            <source>Dark grey</source>
            <translation>深灰色</translation>
        </message>
        <message>
            <source>Black</source>
            <translation>黑色</translation>
        </message>
    </context>
    <context>
        <name>ColorPalettes</name>
        <message>
            <source>Body</source>
            <translation>正文</translation>
        </message>
        <message>
            <source>Warnings</source>
            <translation>提醒</translation>
        </message>
        <message>
            <source>Key terms</source>
            <translation>关键词</translation>
        </message>
        <message>
            <source>Examples</source>
            <translation>示例</translation>
        </message>
        <message>
            <source>Definitions</source>
            <translation>定义</translation>
        </message>
        <message>
            <source>Headings</source>
            <translation>标题</translation>
        </message>
        <message>
            <source>Questions</source>
            <translation>问题</translation>
        </message>
        <message>
            <source>Ideas</source>
            <translation>想法</translation>
        </message>
    </context>
    <context>
        <name>FuzzyHelp</name>
        <message>
            <source>Fuzzy search</source>
            <translation>模糊搜索</translation>
        </message>
        <message>
            <source>Typos are not tolerated (Settings → Search).</source>
            <translation>不容许拼写错误（设置 → 搜索）。</translation>
        </message>
        <message>
            <source>A typo is tolerated in words of 5 or more letters: one letter swapped, left out, added or wrong (turbnie finds "turbine"; Settings → Search).</source>
            <translation>含 5 个及以上字母的单词允许一处错误，包括相邻字母颠倒、漏写、多写或写错。例如输入 turbnie 可以找到 turbine（设置 → 搜索）。</translation>
        </message>
        <message>
            <source>Typos are tolerated: one in words of 5 to 7 letters, two in words of 8 or more (one letter swapped, left out, added or wrong each; Settings → Search).</source>
            <translation>含 5～7 个字母的单词允许一处错误，含 8 个及以上字母的单词允许两处。每处可以是相邻字母颠倒、漏写、多写或写错（设置 → 搜索）。</translation>
        </message>
        <message>
            <source>names with these letters in this order, best first; in the text, words with the letters close together from their first letter on, or with a typo</source>
            <translation>名称中的字母需按此顺序出现，最接近的排在前面。正文匹配从首字母起间隔较小或有少量拼写错误的单词。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;tbine&lt;/tt&gt; finds "turbine", &lt;tt&gt;klmn&lt;/tt&gt; "Kalman"</source>
            <translation>&lt;tt&gt;tbine&lt;/tt&gt; 可找到 turbine，&lt;tt&gt;klmn&lt;/tt&gt; 可找到 Kalman。</translation>
        </message>
        <message>
            <source>both (in any order, anywhere in the document)</source>
            <translation>两项都要出现，顺序和文档中的位置不限。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;kalman filter&lt;/tt&gt;</source>
            <translation>&lt;tt&gt;kalman filter&lt;/tt&gt;</translation>
        </message>
        <message>
            <source>either; &lt;tt&gt;a b | c&lt;/tt&gt; is a and (b or c)</source>
            <translation>匹配任一项。&lt;tt&gt;a b | c&lt;/tt&gt; 表示 a 且（b 或 c）。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;lecture | exercise&lt;/tt&gt;</source>
            <translation>&lt;tt&gt;lecture | exercise&lt;/tt&gt;</translation>
        </message>
        <message>
            <source>without it: not in the name, the folder or the text</source>
            <translation>排除名称、文件夹和正文中含有这一项的结果。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;kalman !draft&lt;/tt&gt;</source>
            <translation>&lt;tt&gt;kalman !draft&lt;/tt&gt;</translation>
        </message>
        <message>
            <source>a group, also negated: &lt;tt&gt;!(a b)&lt;/tt&gt;</source>
            <translation>用括号分组，也可排除整组，例如 &lt;tt&gt;!(a b)&lt;/tt&gt;。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;(lecture | exercise) !draft&lt;/tt&gt;</source>
            <translation>&lt;tt&gt;(lecture | exercise) !draft&lt;/tt&gt;</translation>
        </message>
        <message>
            <source>exactly these letters, also in names (no fuzzy words)</source>
            <translation>只匹配完全相同的字母序列，名称也按精确匹配处理。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;'turbine&lt;/tt&gt;: not "turbnie"</source>
            <translation>&lt;tt&gt;'turbine&lt;/tt&gt; 不会匹配 turbnie。</translation>
        </message>
        <message>
            <source>the whole word</source>
            <translation>匹配完整单词。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;'wind'&lt;/tt&gt;: not "window"</source>
            <translation>&lt;tt&gt;'wind'&lt;/tt&gt; 不会匹配 window。</translation>
        </message>
        <message>
            <source>the name starts with it; in the text, a word</source>
            <translation>匹配名称开头。正文中匹配单词开头。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;^intro&lt;/tt&gt;: "Introduction"</source>
            <translation>&lt;tt&gt;^intro&lt;/tt&gt; 可找到 Introduction。</translation>
        </message>
        <message>
            <source>the name ends with it; in the text, a word</source>
            <translation>匹配名称结尾。正文中匹配单词结尾。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;sheet$&lt;/tt&gt;: "Exercise sheet"</source>
            <translation>&lt;tt&gt;sheet$&lt;/tt&gt; 可找到 Exercise sheet。</translation>
        </message>
        <message>
            <source>the name is it; in the text, the whole word</source>
            <translation>名称必须完全相同。正文中匹配完整单词。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;^lecture 3$&lt;/tt&gt;</source>
            <translation>&lt;tt&gt;^lecture 3$&lt;/tt&gt;</translation>
        </message>
        <message>
            <source>documents with the tag #a (typed in them, or a keyword of the PDF), also the tags inside it; &lt;tt&gt;tag:a/&lt;/tt&gt; only those inside it. Also in the plain search</source>
            <translation>查找带有 #a 标签的文档及其子标签。标签可来自正文或 PDF 关键词。&lt;tt&gt;tag:a/&lt;/tt&gt; 仅匹配子标签。普通搜索也支持此语法。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;tag:course&lt;/tt&gt; finds #course and #course/math; &lt;tt&gt;kalman !tag:draft&lt;/tt&gt;</source>
            <translation>&lt;tt&gt;tag:course&lt;/tt&gt; 可找到 #course 和 #course/math。也可以输入 &lt;tt&gt;kalman !tag:draft&lt;/tt&gt;。</translation>
        </message>
        <message>
            <source>a space, a parenthesis within a term</source>
            <translation>把空格或括号作为搜索词的一部分。</translation>
        </message>
        <message>
            <source>&lt;tt&gt;kalman filter&lt;/tt&gt;: the phrase</source>
            <translation>&lt;tt&gt;kalman filter&lt;/tt&gt; 匹配该短语。</translation>
        </message>
        <message>
            <source>&lt;b&gt;Names&lt;/b&gt; (and folders) match when their letters come in the typed order, like fzf; the best matches come first, their matched letters are marked.</source>
            <translation>&lt;b&gt;名称&lt;/b&gt;和文件夹中的字母按输入顺序出现时即可匹配，类似 fzf。最佳匹配排在前面，命中的字母会标出。</translation>
        </message>
        <message>
            <source>&lt;b&gt;Text&lt;/b&gt; is matched word by word: a word matches when it contains the typed letters, or starts with the first one and has all of them in this order with few letters between (tbine: "turbine", not "tambourine"). The whole word is marked. Words of 1-2 letters and terms with other characters are found as typed. Documents with the word as typed come before fuzzy matches.</source>
            <translation>&lt;b&gt;正文&lt;/b&gt;按单词匹配。单词包含输入的字母，或从相同的首字母开始、按顺序且间隔较小地包含这些字母时，就会命中。例如 tbine 匹配 turbine。命中时标出整个单词。1～2 个字母或含其他字符的词按原样查找，精确匹配的文档排在前面。</translation>
        </message>
        <message>
            <source>e.g. %1</source>
            <translation>例如 %1</translation>
        </message>
        <message>
            <source>&lt;b&gt;Pages with hits&lt;/b&gt; (the pages button): the pages on which the whole expression holds, a term counting as found on a page when the page, the name or the folder has it; if it holds on no single page (the words are on different pages), all pages with hits. The count on a card is the hits of the terms that are not negated.</source>
            <translation>&lt;b&gt;命中页面&lt;/b&gt;按钮显示满足整个搜索条件的页。搜索词出现在该页、文档名或文件夹名中都算命中。若搜索词分散在不同页面，则列出所有命中页。卡片上的数字只统计未被排除的搜索词。</translation>
        </message>
        <message>
            <source>Case never matters. An expression that is not complete (a ( not closed, a | alone) is searched as plain text, with a short hint next to the field.</source>
            <translation>搜索不区分大小写。括号未闭合或缺少分隔项等不完整的条件会按普通文本查找，搜索框旁会显示提示。</translation>
        </message>
    </context>
    <context>
        <name>ModelLicenceDialog</name>
        <message>
            <source>Licence of the handwriting model %1</source>
            <translation>手写识别模型 %1 的许可证</translation>
        </message>
        <message>
            <source>Close</source>
            <translation>关闭</translation>
        </message>
    </context>
    <context>
        <name>PaperSwatches</name>
        <message>
            <source>This page's color</source>
            <translation>本页颜色</translation>
        </message>
        <message>
            <source>Textured paper</source>
            <translation>纸张纹理</translation>
        </message>
    </context>
    <context>
        <name>SettingsDisplay</name>
        <message>
            <source>Real size</source>
            <translation>实际尺寸</translation>
        </message>
        <message>
            <source>Hold a ruler against the screen and move the slider, or drag the ruler on the screen, until its marks match the real ones. Pages at 100 % (Ctrl+1) are then as large as the paper, and the set square and compass measure real centimetres. Each screen keeps its own.</source>
            <translation>把尺子贴在屏幕上，移动滑块或拖动屏幕上的刻度尺，直到两者对齐。校准后，100% 缩放（Ctrl+1）与纸张实际尺寸一致，三角板和圆规也会使用真实厘米。每块屏幕单独保存校准结果。</translation>
        </message>
        <message>
            <source>This screen: %1, scaled %2 %.</source>
            <translation>当前屏幕为 %1，系统缩放 %2%。</translation>
        </message>
        <message>
            <source>unnamed</source>
            <translation>未命名</translation>
        </message>
        <message>
            <source>It says it has %1 dpi.</source>
            <translation>屏幕报告的分辨率为 %1 dpi。</translation>
        </message>
        <message>
            <source>It does not tell its size: 96 dpi until it is calibrated.</source>
            <translation>屏幕未报告实际尺寸，校准前按 96 dpi 计算。</translation>
        </message>
        <message>
            <source>A little shorter</source>
            <translation>缩短一点</translation>
        </message>
        <message>
            <source>A little longer</source>
            <translation>加长一点</translation>
        </message>
        <message>
            <source>%1 dpi</source>
            <translation>%1 dpi</translation>
        </message>
        <message>
            <source>Save for this screen</source>
            <translation>保存此屏幕的校准</translation>
        </message>
        <message>
            <source>Back to what the screen says</source>
            <translation>恢复屏幕报告的数值</translation>
        </message>
        <message>
            <source>Calibrated: 100 % is the real size on this screen. Another screen keeps its own calibration; the window takes it when it is moved there.</source>
            <translation>已校准。100% 在此屏幕上等于实际尺寸。窗口移到其他屏幕时使用该屏幕的校准值。</translation>
        </message>
        <message>
            <source>Not calibrated yet: 100 % follows what the screen says.</source>
            <translation>尚未校准。100% 根据屏幕报告的尺寸计算。</translation>
        </message>
        <message>
            <source>Zoom</source>
            <translation>缩放</translation>
        </message>
        <message>
            <source>Smallest zoom</source>
            <translation>最小缩放比例</translation>
        </message>
        <message>
            <source>How far pinching, Ctrl+wheel and Ctrl+minus zoom out. A page, or a row of pages side by side, that would not fit whole at this zoom can always be zoomed out until it does.</source>
            <translation>设置双指捏合、Ctrl+滚轮及 Ctrl+减号的最小缩放比例。如果整页或一排并列页面仍放不下，仍可继续缩小到完整显示。</translation>
        </message>
        <message>
            <source>Canvas controls</source>
            <translation>画布控件</translation>
        </message>
        <message>
            <source>Hide scroll bars while writing</source>
            <translation>手写时隐藏滚动条</translation>
        </message>
        <message>
            <source>The scroll bars are hidden with the pen, highlighter or eraser. Switch to the hand to show them again.</source>
            <translation>使用笔、荧光笔或橡皮擦时隐藏滚动条。切回手形工具即可恢复。</translation>
        </message>
        <message>
            <source>Show page and zoom controls on the left</source>
            <translation>将页码和缩放控件放在左侧</translation>
        </message>
        <message>
            <source>Window size</source>
            <translation>窗口大小</translation>
        </message>
        <message>
            <source>Adapt the layout to the window size</source>
            <translation>根据窗口大小调整布局</translation>
        </message>
        <message>
            <source>a wide desktop window</source>
            <translation>宽桌面窗口</translation>
        </message>
        <message>
            <source>a narrow desktop window or a tablet in landscape</source>
            <translation>窄桌面窗口或横屏平板</translation>
        </message>
        <message>
            <source>a tablet in portrait</source>
            <translation>竖屏平板</translation>
        </message>
        <message>
            <source>a phone in portrait</source>
            <translation>竖屏手机</translation>
        </message>
        <message>
            <source>a phone in landscape or a low window</source>
            <translation>横屏手机或较矮的窗口</translation>
        </message>
        <message>
            <source>a tiny window</source>
            <translation>极小窗口</translation>
        </message>
        <message>
            <source>This window is %1 (%2 × %3).</source>
            <translation>当前布局为%1（%2 × %3）。</translation>
        </message>
        <message>
            <source>The page sidebar shows beside the page when there is room for it. What you show or hide by hand is kept for each kind of window.</source>
            <translation>有足够空间时，页面侧栏会显示在页面旁。各类窗口会分别记住你手动显示或隐藏的项目。</translation>
        </message>
        <message>
            <source>The window keeps the desktop layout at every size.</source>
            <translation>所有窗口尺寸都使用桌面布局。</translation>
        </message>
        <message>
            <source>Reset the layout choices</source>
            <translation>重置布局选择</translation>
        </message>
    </context>
    <context>
        <name>SettingsDocuments</name>
        <message>
            <source>Keep documents as</source>
            <translation>文档保存格式</translation>
        </message>
        <message>
            <source>Documents you have keep their format: a .xopp stays a .xopp until you save it as a PDF with notes (Save as…). Copies for Xournal++: Share → “For Xournal++”.</source>
            <translation>现有文档保留原格式。.xopp 文件可通过「另存为」转换为带笔记的 PDF。若需要 Xournal++ 副本，选择「共享 → 适用于 Xournal++」。</translation>
        </message>
        <message>
            <source>New text documents</source>
            <translation>新建文本文档</translation>
        </message>
        <message>
            <source>PDF document</source>
            <translation>PDF 文档</translation>
        </message>
        <message>
            <source>Markdown file</source>
            <translation>Markdown 文件</translation>
        </message>
        <message>
            <source>A PDF document opens in any PDF app and carries its text as a Markdown file inside. Markdown files you have stay Markdown files.</source>
            <translation>PDF 文档可在任意 PDF 应用中打开，内部保留一份 Markdown 文本。现有 Markdown 文件保留原格式。</translation>
        </message>
        <message>
            <source>Quick note</source>
            <translation>快速笔记</translation>
        </message>
        <message>
            <source>A new note</source>
            <translation>新建一条笔记</translation>
        </message>
        <message>
            <source>A line in today's Markdown note</source>
            <translation>追加到当天的 Markdown 笔记</translation>
        </message>
        <message>
            <source>Quick notes go into the folder “Inbox” of the library: a new note is named by the date and time; today's Markdown note by the date, a line with the time added each time.</source>
            <translation>快速笔记保存在书库的 Inbox 文件夹。新笔记按日期和时间命名。当天的 Markdown 笔记按日期命名，每次追加一行并注明时间。</translation>
        </message>
        <message>
            <source>Start</source>
            <translation>启动</translation>
        </message>
        <message>
            <source>Reopen the documents of the last session</source>
            <translation>重新打开上次会话中的文档</translation>
        </message>
        <message>
            <source>Open documents where they were left off</source>
            <translation>打开文档时恢复上次的位置</translation>
        </message>
        <message>
            <source>Links</source>
            <translation>链接</translation>
        </message>
        <message>
            <source>A link to another document opens</source>
            <translation>打开其他文档的链接时</translation>
        </message>
        <message>
            <source>Ask each time</source>
            <translation>每次询问</translation>
        </message>
        <message>
            <source>In a new tab</source>
            <translation>在新标签页打开</translation>
        </message>
        <message>
            <source>As reference, beside this one</source>
            <translation>在当前文档旁作为参考打开</translation>
        </message>
        <message>
            <source>Here, in place of this one</source>
            <translation>在这里替换当前文档</translation>
        </message>
        <message>
            <source>To-dos</source>
            <translation>待办事项</translation>
        </message>
        <message>
            <source>Collect to-dos from</source>
            <translation>从这些位置收集待办事项</translation>
        </message>
        <message>
            <source>Lines marked as to-dos</source>
            <translation>带待办标记的行</translation>
        </message>
        <message>
            <source>Every check box</source>
            <translation>所有复选框</translation>
        </message>
        <message>
            <source>Marker</source>
            <translation>马克笔</translation>
        </message>
        <message>
            <source>A check box line (- [ ] …) of a Markdown text, a sticky note or a Markdown file is a to-do when it has the marker anywhere in it (upper or lower case); the list does not show the marker. Check-box stamps for handwritten to-dos always count. A due date: 📅 2026-10-12 or due:2026-10-12.</source>
            <translation>Markdown 文本、便笺或 Markdown 文件中的复选框行（- [ ] …）只要含此标记，就会被列为待办，标记不区分大小写，也不会显示在列表里。手写待办使用的复选框印章始终会收集。截止日期可写成 📅 2026-10-12 或 due:2026-10-12。</translation>
        </message>
        <message>
            <source>Web and citations</source>
            <translation>网页与文献</translation>
        </message>
        <message>
            <source>Ask before opening a web address (it is shown whole)</source>
            <translation>打开网址前询问并显示完整网址</translation>
        </message>
        <message>
            <source>Connect to the web: arXiv (searching sends the title's words; downloading fetches the PDF), web pictures of Markdown texts (when "Load image" is chosen)</source>
            <translation>允许联网访问 arXiv（搜索时发送标题关键词，下载时获取 PDF），以及在选择「加载图片」时获取 Markdown 中的网络图片。</translation>
        </message>
        <message>
            <source>Ask the first time</source>
            <translation>首次询问</translation>
        </message>
        <message>
            <source>Allowed</source>
            <translation>允许</translation>
        </message>
        <message>
            <source>Off</source>
            <translation>关闭</translation>
        </message>
        <message>
            <source>Search the web with</source>
            <translation>网页搜索引擎</translation>
        </message>
        <message>
            <source>Custom…</source>
            <translation>自定义…</translation>
        </message>
        <message>
            <source>{text} is replaced by the selected text.</source>
            <translation>所选文字将替换 {text}。</translation>
        </message>
        <message>
            <source>The address must start with http:// or https:// and contain {text}.</source>
            <translation>网址须以 http:// 或 https:// 开头，并包含 {text}。</translation>
        </message>
        <message>
            <source>Translate with</source>
            <translation>翻译服务</translation>
        </message>
        <message>
            <source>Custom address…</source>
            <translation>自定义网址…</translation>
        </message>
        <message>
            <source>{text} is replaced by the selected text, {lang} by the language below.</source>
            <translation>所选文字将替换 {text}，下方选择的语言将替换 {lang}。</translation>
        </message>
        <message>
            <source>Translate into</source>
            <translation>翻译成</translation>
        </message>
        <message>
            <source>The system's language (%1)</source>
            <translation>系统语言（%1）</translation>
        </message>
        <message>
            <source>Hybrid PDF</source>
            <translation>带笔记的 PDF</translation>
        </message>
        <message>
            <source>A PDF with notes (Save as… → "PDF with notes, editable") shows your notes in any PDF app and opens here with everything editable.</source>
            <translation>通过「另存为 → 带笔记的可编辑 PDF」保存后，任何 PDF 应用都能显示你的笔记，本应用还可以继续编辑。</translation>
        </message>
        <message>
            <source>Save notes into the PDF itself</source>
            <translation>将笔记保存到 PDF 文件中</translation>
        </message>
        <message>
            <source>On every save of a hybrid PDF, also write a .xopp for Xournal++</source>
            <translation>每次保存带笔记的 PDF 时，额外为 Xournal++ 写入一份 .xopp 文件</translation>
        </message>
        <message>
            <source>A document saved as a .xopp is saved as a PDF with notes: its .xopp</source>
            <translation>把 .xopp 文档另存为带笔记的 PDF 时，如何处理原 .xopp 文件</translation>
        </message>
        <message>
            <source>Move it to the trash</source>
            <translation>移到废纸篓</translation>
        </message>
        <message>
            <source>Keep it updated for Xournal++</source>
            <translation>继续同步更新，供 Xournal++ 使用</translation>
        </message>
        <message>
            <source>Keep it as it is</source>
            <translation>保留原样</translation>
        </message>
        <message>
            <source>Version history</source>
            <translation>版本历史</translation>
        </message>
        <message>
            <source>A PDF with notes can keep its versions inside itself: one for each day you save it, plus milestones you name. Turn it on for a document in the sidebar's History panel, or here for every new one.</source>
            <translation>带笔记的 PDF 可以在文件内保留版本：每天保存一个版本，并保留你命名的里程碑。可以在侧栏的「历史」里为单个文档启用，也可以在这里为所有新文档启用。</translation>
        </message>
        <message>
            <source>Keep versions of new PDFs with notes</source>
            <translation>为新建的带笔记 PDF 保留历史版本</translation>
        </message>
        <message>
            <source>Autosave</source>
            <translation>自动保存</translation>
        </message>
        <message>
            <source>Save a backup of unsaved changes regularly</source>
            <translation>定期备份未保存的改动</translation>
        </message>
        <message>
            <source>Every</source>
            <translation>间隔</translation>
        </message>
        <message>
            <source>Memory</source>
            <translation>内存</translation>
        </message>
        <message>
            <source>Rendered pages of the open documents</source>
            <translation>已打开文档的页面渲染缓存</translation>
        </message>
        <message>
            <source>Pages are drawn ahead and kept: scrolling shows them at once and needs no drawing again. The document in use may take 70 % of it while others are open.</source>
            <translation>应用会提前绘制并缓存页面，滚动时便可直接显示。同时打开多个文档时，当前文档可使用其中 70%。</translation>
        </message>
        <message>
            <source>Page previews (sidebar, overviews)</source>
            <translation>页面预览（侧栏和总览）</translation>
        </message>
        <message>
            <source>File names</source>
            <translation>文件名</translation>
        </message>
        <message>
            <source>Name for new documents</source>
            <translation>新文档的文件名</translation>
        </message>
        <message>
            <source>%F is the date (2026-09-19), %H-%M the time.</source>
            <translation>%F 表示日期（2026-09-19），%H-%M 表示时间。</translation>
        </message>
        <message>
            <source>Pictures copied to the clipboard</source>
            <translation>复制到剪贴板的图片</translation>
        </message>
        <message>
            <source>Snip</source>
            <translation>区域截图</translation>
        </message>
        <message>
            <source>A snip of a large area gets fewer pixels than asked (at most about 36 megapixels at 300 or 600 dpi, 4 at the screen's); the note after a snip says its size.</source>
            <translation>截取较大区域时可能降低分辨率。300 或 600 dpi 时最多约 3600 万像素，按屏幕分辨率时最多约 400 万像素。截取后会提示图片尺寸。</translation>
        </message>
        <message>
            <source>Pages</source>
            <translation>页面</translation>
        </message>
        <message>
            <source>%1 dpi</source>
            <translation>%1 dpi</translation>
        </message>
        <message>
            <source>Copy page as image (Ctrl+Shift+C) puts the page on the clipboard at this resolution; a screenshot has the screen's. Export as pictures starts with it.</source>
            <translation>「复制页面为图片」（Ctrl+Shift+C）会按此分辨率复制到剪贴板。截屏使用屏幕分辨率。导出图片时也会默认使用此设置。</translation>
        </message>
        <message>
            <source>Built-in stickers</source>
            <translation>内置贴纸</translation>
        </message>
        <message>
            <source>%1 (%2)</source>
            <translation>%1（%2）</translation>
        </message>
        <message>
            <source>Paste built-in stickers in the pen's colour (else black)</source>
            <translation>粘贴内置贴纸时使用当前笔色（关闭时用黑色）</translation>
        </message>
        <message>
            <source>Restore hidden collections</source>
            <translation>恢复隐藏的贴纸集</translation>
        </message>
        <message>
            <source>Hidden collections are left out of the sticker picker's “Built in” and its search; they stay with the app and come back here or with “Show” in the picker.</source>
            <translation>隐藏的贴纸集不会出现在「内置」列表和搜索结果里。可在此恢复，也可在贴纸选择器中点「显示」。</translation>
        </message>
        <message>
            <source>Audio recordings</source>
            <translation>录音</translation>
        </message>
        <message>
            <source>Playing from ink starts this much earlier</source>
            <translation>从笔迹播放时提前</translation>
        </message>
        <message>
            <source>%1 s</source>
            <translation>%1 秒</translation>
        </message>
        <message>
            <source>Recordings are kept in the app's audio folder, as Xournal++ keeps them; a PDF with notes carries its own.</source>
            <translation>录音保存在应用的录音文件夹，方式与 Xournal++ 相同。带笔记的 PDF 会把相关录音一并嵌入。</translation>
        </message>
        <message>
            <source>Notes in the PDF itself</source>
            <translation>将笔记写入 PDF 本身</translation>
        </message>
        <message>
            <source>Saving an annotated PDF now writes your notes into that PDF, as in Xodo or Drawboard: Ctrl+S saves it without asking. Other PDF apps show the notes as annotations, and xournal-qt opens them with everything editable.</source>
            <translation>启用后，Ctrl+S 会直接把笔记写入当前 PDF，类似 Xodo 或 Drawboard。其他 PDF 应用会把笔记显示为批注，本应用仍可继续编辑。</translation>
        </message>
        <message>
            <source>The first time a PDF gets notes, its original is kept next to it as “name.original.pdf”. Turned off, notes go into a new file “name.notes.pdf” and the PDF is left alone.</source>
            <translation>首次为 PDF 添加笔记时，会在旁边保留一份 name.original.pdf 原件。关闭此选项后，笔记将写入新的 name.notes.pdf。</translation>
        </message>
        <message>
            <source>English</source>
            <translation>英语</translation>
        </message>
        <message>
            <source>Deutsch</source>
            <translation>德语</translation>
        </message>
        <message>
            <source>Français</source>
            <translation>法语</translation>
        </message>
        <message>
            <source>Español</source>
            <translation>西班牙语</translation>
        </message>
        <message>
            <source>Italiano</source>
            <translation>意大利语</translation>
        </message>
        <message>
            <source>Português</source>
            <translation>葡萄牙语</translation>
        </message>
        <message>
            <source>Nederlands</source>
            <translation>荷兰语</translation>
        </message>
        <message>
            <source>Polski</source>
            <translation>波兰语</translation>
        </message>
        <message>
            <source>Čeština</source>
            <translation>捷克语</translation>
        </message>
        <message>
            <source>Svenska</source>
            <translation>瑞典语</translation>
        </message>
        <message>
            <source>Türkçe</source>
            <translation>土耳其语</translation>
        </message>
        <message>
            <source>Українська</source>
            <translation>乌克兰语</translation>
        </message>
        <message>
            <source>Русский</source>
            <translation>俄语</translation>
        </message>
        <message>
            <source>中文 (简体)</source>
            <translation>简体中文</translation>
        </message>
        <message>
            <source>日本語</source>
            <translation>日语</translation>
        </message>
        <message>
            <source>한국어</source>
            <translation>韩语</translation>
        </message>
        <message>
            <source>OK</source>
            <translation>确定</translation>
        </message>
    </context>
    <context>
        <name>SettingsHelp</name>
        <message>
            <source>Getting started</source>
            <translation>入门</translation>
        </message>
        <message>
            <source>A few pages about what the app is for: notes and PDFs you write on, Markdown, libraries and search, and how documents are kept.</source>
            <translation>了解如何在笔记和 PDF 上书写，如何使用 Markdown、书库和搜索，以及文档的保存方式。</translation>
        </message>
        <message>
            <source>Show the introduction</source>
            <translation>查看入门介绍</translation>
        </message>
        <message>
            <source>Tutorial</source>
            <translation>教程</translation>
        </message>
        <message>
            <source>A document that asks you to try the tools, pages, search, tabs, Markdown and the library, one page each. It is your copy to write on, kept in the app's own folder, not in your library.</source>
            <translation>这份文档会逐页带你试用工具、页面、搜索、标签页、Markdown 和书库。教程副本保存在应用自己的文件夹里，可以直接在上面练习。</translation>
        </message>
        <message>
            <source>Open the tutorial</source>
            <translation>打开教程</translation>
        </message>
        <message>
            <source>Start it again…</source>
            <translation>重新开始…</translation>
        </message>
        <message>
            <source>Keyboard shortcuts</source>
            <translation>键盘快捷键</translation>
        </message>
        <message>
            <source>%1 shows them over the page; Shortcuts here changes them.</source>
            <translation>按 %1 可在页面上查看快捷键。打开这里的「快捷键」可修改。</translation>
        </message>
        <message>
            <source>Shortcuts here changes them.</source>
            <translation>打开这里的「快捷键」可修改按键。</translation>
        </message>
        <message>
            <source>Show the shortcuts</source>
            <translation>查看快捷键</translation>
        </message>
        <message>
            <source>About</source>
            <translation>关于</translation>
        </message>
        <message>
            <source>Xournal Qt %1: Xournal++'s core with a Qt frontend. Free software under the GNU General Public License, version 2 or later.</source>
            <translation>Xournal Qt %1 使用 Xournal++ 的核心与 Qt 界面。它是依据 GNU 通用公共许可证第 2 版或后续版本发布的自由软件。</translation>
        </message>
        <message>
            <source>The handwriting model %1 (%2) is for non-commercial use: it was trained on data licensed for non-commercial research only. The app's code stays under the GPL.</source>
            <translation>手写识别模型 %1（%2）仅供非商业用途，因为它使用了仅许可用于非商业研究的数据进行训练。应用代码仍按 GPL 许可发布。</translation>
        </message>
        <message>
            <source>The handwriting model %1 (%2) comes with its own licence.</source>
            <translation>手写识别模型 %1（%2）有单独的许可证。</translation>
        </message>
        <message>
            <source>Licence</source>
            <translation>许可证</translation>
        </message>
    </context>
    <context>
        <name>SettingsNewPages</name>
        <message>
            <source>New pages</source>
            <translation>新建页面</translation>
        </message>
        <message>
            <source>Use the background of the current page</source>
            <translation>沿用当前页面的背景</translation>
        </message>
        <message>
            <source>Use the size of the current page</source>
            <translation>沿用当前页面的尺寸</translation>
        </message>
        <message>
            <source>Background</source>
            <translation>背景</translation>
        </message>
        <message>
            <source>Paper size</source>
            <translation>纸张尺寸</translation>
        </message>
        <message>
            <source>Other: %1</source>
            <translation>其他：%1</translation>
        </message>
        <message>
            <source>Landscape</source>
            <translation>横向</translation>
        </message>
        <message>
            <source>Paper</source>
            <translation>纸张</translation>
        </message>
    </context>
    <context>
        <name>SettingsPage</name>
        <message>
            <source>Pen</source>
            <translation>手写笔</translation>
        </message>
        <message>
            <source>Touch</source>
            <translation>触控</translation>
        </message>
        <message>
            <source>Stabilizer</source>
            <translation>笔迹防抖</translation>
        </message>
        <message>
            <source>Documents</source>
            <translation>文档</translation>
        </message>
        <message>
            <source>Display</source>
            <translation>显示</translation>
        </message>
        <message>
            <source>Search</source>
            <translation>搜索</translation>
        </message>
        <message>
            <source>New pages</source>
            <translation>新建页面</translation>
        </message>
        <message>
            <source>Storage</source>
            <translation>存储</translation>
        </message>
        <message>
            <source>Shortcuts</source>
            <translation>快捷键</translation>
        </message>
        <message>
            <source>Plugins</source>
            <translation>插件</translation>
        </message>
        <message>
            <source>Help</source>
            <translation>帮助</translation>
        </message>
        <message>
            <source>%1 MB</source>
            <translation>%1 MB</translation>
        </message>
        <message>
            <source>%1 kB</source>
            <translation>%1 kB</translation>
        </message>
        <message>
            <source>Back</source>
            <translation>返回</translation>
        </message>
        <message>
            <source>Close</source>
            <translation>关闭</translation>
        </message>
        <message>
            <source>Settings</source>
            <translation>设置</translation>
        </message>
    </context>
    <context>
        <name>SettingsPen</name>
        <message>
            <source>Tools</source>
            <translation>工具</translation>
        </message>
        <message>
            <source>The toolbox holds your own tools, each with its color and width, beside the page (drag its dotted grip to another edge). Tap a tool to take it, tap it again to change it; hold it for its menu, hold and move it to sort it, onto another to group them, onto the top bar or away from both bars. + adds a tool or a command.</source>
            <translation>工具栏保存你自定义的工具、颜色和线宽。拖动点状手柄可改变工具栏位置。点工具选用，再点一次编辑。长按打开菜单，长按后拖动可以排序、与其他工具分组、移到顶部栏或移出两栏。点「＋」添加工具或命令。</translation>
        </message>
        <message>
            <source>Back to the first layout…</source>
            <translation>恢复初始布局…</translation>
        </message>
        <message>
            <source>Back to the first tools…</source>
            <translation>恢复初始工具…</translation>
        </message>
        <message>
            <source>Pressure</source>
            <translation>压感</translation>
        </message>
        <message>
            <source>Pressure changes the line width</source>
            <translation>根据压力调整线宽</translation>
        </message>
        <message>
            <source>Minimum pressure</source>
            <translation>最低压力</translation>
        </message>
        <message>
            <source>Pressure multiplier</source>
            <translation>压力倍率</translation>
        </message>
        <message>
            <source>Guess pressure from the speed (for pens and mice without pressure)</source>
            <translation>根据移动速度模拟压感（适用于无压感的笔和鼠标）</translation>
        </message>
        <message>
            <source>Buttons and eraser</source>
            <translation>按键与橡皮擦</translation>
        </message>
        <message>
            <source>Side button / eraser end</source>
            <translation>侧键或笔尾橡皮擦</translation>
        </message>
        <message>
            <source>Eraser</source>
            <translation>橡皮擦</translation>
        </message>
        <message>
            <source>Hand (scroll)</source>
            <translation>手形工具（滚动）</translation>
        </message>
        <message>
            <source>Highlighter</source>
            <translation>荧光笔</translation>
        </message>
        <message>
            <source>Rectangle selection</source>
            <translation>矩形选区</translation>
        </message>
        <message>
            <source>Lasso selection</source>
            <translation>套索选区</translation>
        </message>
        <message>
            <source>No change (keep the tool)</source>
            <translation>保持当前工具</translation>
        </message>
        <message>
            <source>Lower side button</source>
            <translation>下方侧键</translation>
        </message>
        <message>
            <source>Upper side button</source>
            <translation>上方侧键</translation>
        </message>
        <message>
            <source>Standard (cuts strokes)</source>
            <translation>普通擦除（可截断笔迹）</translation>
        </message>
        <message>
            <source>Whole strokes</source>
            <translation>整笔擦除</translation>
        </message>
        <message>
            <source>Whiteout</source>
            <translation>涂白</translation>
        </message>
        <message>
            <source>Pointer over the page</source>
            <translation>页面上的指针</translation>
        </message>
        <message>
            <source>Dot</source>
            <translation>圆点</translation>
        </message>
        <message>
            <source>Crosshair</source>
            <translation>十字准星</translation>
        </message>
        <message>
            <source>What the mouse and the hovering pen show over the page: a small dot where the pen will write, or the crosshair. With the eraser it is the eraser itself, gray, as big as it erases at the zoom (dashed when it erases whole strokes).</source>
            <translation>鼠标或笔尖悬停时，显示落笔位置的小圆点或十字准星。使用橡皮擦时，显示与当前缩放下擦除范围一致的灰色指针。整笔擦除时显示虚线。</translation>
        </message>
        <message>
            <source>Gestures</source>
            <translation>手势</translation>
        </message>
        <message>
            <source>Hold to straighten</source>
            <translation>停笔后自动规整形状</translation>
        </message>
        <message>
            <source>Hold for</source>
            <translation>停留时间</translation>
        </message>
        <message>
            <source>Finish a line, a circle, an ellipse, a rectangle or a triangle with the pen or the highlighter and keep the pen still on the screen for a moment: the stroke becomes that shape, straight and neat. Undo brings the stroke back as you drew it.</source>
            <translation>用笔或荧光笔画出直线、圆、椭圆、矩形或三角形后，让笔尖在屏幕上停留片刻，笔迹会规整成对应形状。撤销可恢复原笔迹。</translation>
        </message>
        <message>
            <source>Scratch out to erase</source>
            <translation>涂划擦除</translation>
        </message>
        <message>
            <source>Scribble quickly back and forth over handwriting (at least four strokes across, like crossing out on paper): what the zigzag covers is erased, and the zigzag goes too. Undo brings it back. A zigzag over nothing stays a stroke.</source>
            <translation>在笔迹上快速来回涂划至少四次，可擦掉覆盖到的笔迹和涂划本身。撤销可恢复。未覆盖笔迹的涂划会保留。</translation>
        </message>
        <message>
            <source>Laser pointer</source>
            <translation>激光笔</translation>
        </message>
        <message>
            <source>The ink fades after</source>
            <translation>笔迹消失时间</translation>
        </message>
        <message>
            <source>The laser pointer and the laser highlighter draw temporary ink that fades after the pen is lifted.</source>
            <translation>激光笔和激光荧光笔的笔迹会在抬笔后逐渐消失。</translation>
        </message>
        <message>
            <source>Presenting</source>
            <translation>演示</translation>
        </message>
        <message>
            <source>Presenter view on a second screen</source>
            <translation>在第二块屏幕显示演示者视图</translation>
        </message>
        <message>
            <source>Swap the screens</source>
            <translation>交换两块屏幕</translation>
        </message>
        <message>
            <source>The audience sees the space for notes too</source>
            <translation>向观众显示笔记区</translation>
        </message>
        <message>
            <source>The audience follows the zoom of the console</source>
            <translation>观众画面跟随演示者的缩放</translation>
        </message>
        <message>
            <source>The laser pointer on the rail while presenting</source>
            <translation>演示时在工具栏显示激光笔</translation>
        </message>
        <message>
            <source>With a second screen (a projector), presenting%1 shows only the slide there, and on this screen the page with its space for notes and the tools, as when presenting on one screen, and a small pill with the minutes since the start (a tap: the clock, the next page and these switches; its grid: all pages). Write on the page here: the audience sees it at once. Zoom in here to write a detail: the audience keeps the whole slide, unless it follows the zoom of the console (a frame then shows what they see). The audience's screen is the one that is not the main screen; swap them when it is the other way round. With the space for notes shown too, the audience sees the whole page and what is written beside the slide. While presenting the rail leads with the laser pointer when it holds none of its own.</source>
            <translation>使用第二块屏幕或投影仪演示%1时，观众屏幕显示幻灯片，本机保留笔记区、工具和计时控件。点计时控件可查看时间、翻页或调整设置，点网格可查看所有页面。此处书写会实时显示给观众。放大写细节时，观众仍看到整页，除非启用跟随缩放。观众屏幕默认是副屏，可交换。启用笔记区后，观众也能看到幻灯片旁的笔记。工具栏没有激光笔时，演示模式会在栏首提供。</translation>
        </message>
        <message>
            <source>Darkness of the curtain and the spotlight</source>
            <translation>遮挡板和聚光灯的暗度</translation>
        </message>
        <message>
            <source>Black at 100 %. Below that the page shows through, dimmed. Either way nothing is written on it.</source>
            <translation>100% 时为纯黑，降低后可隐约看到页面。两种情况下都不会在遮挡层上留下笔迹。</translation>
        </message>
        <message>
            <source>Grid</source>
            <translation>网格</translation>
        </message>
        <message>
            <source>Snap to the grid</source>
            <translation>吸附到网格</translation>
        </message>
        <message>
            <source>Selections that are moved and the corners of shapes jump onto the nearest point of a half-centimetre grid when they come close to it (as in Xournal++). Hold Alt to do the opposite for a moment.</source>
            <translation>移动选区或形状角点时，靠近网格交点便会吸附。网格间距为半厘米，与 Xournal++ 相同。按住 Alt 可暂时反转此设置。</translation>
        </message>
        <message>
            <source>Colors</source>
            <translation>颜色</translation>
        </message>
        <message>
            <source>Color palette</source>
            <translation>调色板</translation>
        </message>
        <message>
            <source>From: %1</source>
            <translation>来源：%1</translation>
        </message>
        <message>
            <source>A tool's editor (a tap on the tool in hand) offers the palette's colors and this choice too. Each color of a palette has a meaning (warnings, key terms, headings, …) that stays the same in every palette: a tool with a palette's color follows when another palette is chosen. With the highlighter the palettes give their highlight colors, half see-through on light paper and stronger on dark paper.</source>
            <translation>再点一次当前工具即可编辑它并选择调色板颜色。各调色板中的颜色对应相同用途，例如提醒、关键词和标题。切换调色板时，使用这些颜色的工具会同步更新。荧光笔在浅色纸上较透明，在深色纸上颜色更鲜明。</translation>
        </message>
        <message>
            <source>Back to the first layout?</source>
            <translation>恢复初始布局？</translation>
        </message>
        <message>
            <source>The rail and the top bar are arranged as at the first start: their order, groups and dividers. Your tools stay on the rail, with their colors and widths.</source>
            <translation>侧边和顶部工具栏的顺序、分组及分隔线会恢复为初始布局。你自定义的工具、颜色和线宽仍会保留在侧边工具栏。</translation>
        </message>
        <message>
            <source>Reset</source>
            <translation>重置</translation>
        </message>
        <message>
            <source>Cancel</source>
            <translation>取消</translation>
        </message>
        <message>
            <source>Back to the first tools?</source>
            <translation>恢复初始工具？</translation>
        </message>
        <message>
            <source>Your tools, their order and their settings are replaced by the toolbox of the first start.</source>
            <translation>工具、顺序及设置将恢复为首次启动时的状态。</translation>
        </message>
    </context>
    <context>
        <name>SettingsPlugins</name>
        <message>
            <source>Plugins add commands (in ⋮ → Plugins, the toolbox's +, and on keys). They can only do what you allow them when they first need it. Your own plugins go into %1.</source>
            <translation>插件可在「⋮ → 插件」、工具栏的「＋」或快捷键中添加命令。首次需要相关权限时会询问。自定义插件存放在 %1。</translation>
        </message>
        <message>
            <source>Reload</source>
            <translation>重新加载</translation>
        </message>
        <message>
            <source>No plugins found.</source>
            <translation>未找到插件。</translation>
        </message>
        <message>
            <source>Comes with the app</source>
            <translation>应用内置</translation>
        </message>
        <message>
            <source>Your plugin</source>
            <translation>自定义插件</translation>
        </message>
        <message>
            <source>Commands: %1</source>
            <translation>命令：%1</translation>
        </message>
        <message>
            <source>Ask first</source>
            <translation>先询问</translation>
        </message>
        <message>
            <source>Allowed</source>
            <translation>允许</translation>
        </message>
        <message>
            <source>Not allowed</source>
            <translation>不允许</translation>
        </message>
        <message>
            <source>Hide the log</source>
            <translation>隐藏日志</translation>
        </message>
        <message>
            <source>Log</source>
            <translation>日志</translation>
        </message>
        <message>
            <source>(empty)</source>
            <translation>（空）</translation>
        </message>
    </context>
    <context>
        <name>SettingsSearch</name>
        <message>
            <source>Fuzzy search</source>
            <translation>模糊搜索</translation>
        </message>
        <message>
            <source>Help: syntax and examples</source>
            <translation>查看语法和示例</translation>
        </message>
        <message>
            <source>Fuzzy search in the library and the tab overview (the "Fuzzy" button next to their search fields)</source>
            <translation>在书库和标签页总览中使用模糊搜索（搜索框旁的「模糊」按钮）。</translation>
        </message>
        <message>
            <source>Names match when their letters come in this order (like fzf). In the text of the documents, a word of three or more letters matches when it has the letters close together (tbine finds "turbine"), or with a typo; the whole word is marked. Shorter words are found as they are typed.</source>
            <translation>名称按字母顺序匹配，类似 fzf。正文中，含三个及以上字母的单词允许字母之间有少量间隔或拼写错误。例如 tbine 可找到 turbine。命中时标出整个单词。更短的词按输入查找。</translation>
        </message>
        <message>
            <source>Typo tolerance in text</source>
            <translation>正文拼写容错</translation>
        </message>
        <message>
            <source>Off</source>
            <translation>关闭</translation>
        </message>
        <message>
            <source>1 letter, in words of 5+ letters</source>
            <translation>5 个及以上字母的单词允许错 1 个字母</translation>
        </message>
        <message>
            <source>Up to 2 letters, in words of 8+ letters</source>
            <translation>8 个及以上字母的单词最多允许错 2 个字母</translation>
        </message>
        <message>
            <source>A typo is one letter swapped with the next, left out, added or wrong: with 1, turbnie, trbine and turbime find "turbine". With 2, words of 8 or more letters may have two (trasnfromation finds "transformation"), shorter ones one. Documents with the word as typed come first.</source>
            <translation>一次错误包括相邻字母颠倒、漏写、多写或写错。容许 1 处时，turbnie、trbine 和 turbime 都可找到 turbine。容许 2 处时，含 8 个及以上字母的单词最多允许两处，例如 trasnfromation 可找到 transformation。较短的词最多允许一处。精确匹配的文档排在前面。</translation>
        </message>
        <message>
            <source>Search handwriting</source>
            <translation>搜索手写内容</translation>
        </message>
        <message>
            <source>Handwritten words become searchable: in open documents, in the library, and (as invisible text) in PDFs with notes and archive PDFs that other PDF apps open. The handwriting is never turned into text. The recogniser runs on this computer at the lowest priority, one document of the library at a time.</source>
            <translation>手写内容可在已打开的文档和书库中搜索，也会作为不可见的索引写入带笔记的 PDF 和归档 PDF，供其他阅读器搜索。笔迹本身仍以手写形式保留。识别在本机以最低优先级运行，每次处理一本书库文档。</translation>
        </message>
        <message>
            <source>Handwriting languages</source>
            <translation>手写识别语言</translation>
        </message>
        <message>
            <source>English</source>
            <translation>英语</translation>
        </message>
        <message>
            <source>German</source>
            <translation>德语</translation>
        </message>
        <message>
            <source>English and German</source>
            <translation>英语和德语</translation>
        </message>
        <message>
            <source>With both, a document's language is found from its first lines: the other model then reads only the lines the first one is unsure of. ⋮ → Document → Handwriting language sets it for one document.</source>
            <translation>同时启用时，应用根据文档前几行判断语言，第二个模型仅复查第一个模型不确定的行。可在「⋮ → 文档 → 手写识别语言」中单独设置某个文档。</translation>
        </message>
        <message>
            <source>%1: %2</source>
            <translation>%1：%2</translation>
        </message>
        <message>
            <source>Choose a folder…</source>
            <translation>选择文件夹…</translation>
        </message>
        <message>
            <source>Use the app's own</source>
            <translation>使用应用内置模型</translation>
        </message>
        <message>
            <source>Comes with the app, nothing to download. The model is for non-commercial use.</source>
            <translation>应用已内置，无需下载。模型仅供非商业用途。</translation>
        </message>
        <message>
            <source>Comes with the app, nothing to download.</source>
            <translation>应用已内置，无需下载。</translation>
        </message>
        <message>
            <source>Licence</source>
            <translation>许可证</translation>
        </message>
        <message>
            <source>The model (%1) is downloaded once from:</source>
            <translation>模型（%1）将从以下位置下载一次：</translation>
        </message>
        <message>
            <source>Download</source>
            <translation>下载</translation>
        </message>
        <message>
            <source>Cancel</source>
            <translation>取消</translation>
        </message>
        <message>
            <source>In %1</source>
            <translation>位于 %1</translation>
        </message>
        <message>
            <source>Remove</source>
            <translation>移除</translation>
        </message>
        <message>
            <source>The model is the one in %1 (chosen here, or XQT_HWR_MODEL / XQT_HWR_MODEL_DE): it is never downloaded over or removed here.</source>
            <translation>正在使用 %1 中的模型。该路径可在此选择，或通过 XQT_HWR_MODEL / XQT_HWR_MODEL_DE 指定。应用不会在这里覆盖或移除这个模型。</translation>
        </message>
        <message>
            <source>A folder with a handwriting model (model.json)</source>
            <translation>含手写识别模型的文件夹（model.json）</translation>
        </message>
    </context>
    <context>
        <name>SettingsShortcuts</name>
        <message>
            <source>Tap a shortcut and press the keys. Backspace removes it, Esc keeps it as it is.</source>
            <translation>点快捷键后按下组合键。按退格键清除，按 Esc 保留原设置。</translation>
        </message>
        <message>
            <source>Default keys</source>
            <translation>恢复默认按键</translation>
        </message>
        <message>
            <source>also used by “%1”</source>
            <translation>「%1」也使用此快捷键</translation>
        </message>
        <message>
            <source>none</source>
            <translation>未设置</translation>
        </message>
        <message>
            <source>Press the keys</source>
            <translation>按下快捷键</translation>
        </message>
        <message>
            <source>Press the key combination for this action. Backspace removes the shortcut.</source>
            <translation>按下此操作的快捷键组合。按退格键可清除快捷键。</translation>
        </message>
        <message>
            <source>Cancel</source>
            <translation>取消</translation>
        </message>
    </context>
    <context>
        <name>SettingsStabilizer</name>
        <message>
            <source>Stroke stabilizer</source>
            <translation>笔迹防抖</translation>
        </message>
        <message>
            <source>Smooths strokes while writing, as in Xournal++.</source>
            <translation>书写时平滑笔迹，效果与 Xournal++ 一致。</translation>
        </message>
        <message>
            <source>Averaging</source>
            <translation>平均方式</translation>
        </message>
        <message>
            <source>None</source>
            <translation>无</translation>
        </message>
        <message>
            <source>Arithmetic mean</source>
            <translation>算术平均</translation>
        </message>
        <message>
            <source>Velocity based Gaussian weights</source>
            <translation>按速度进行高斯加权</translation>
        </message>
        <message>
            <source>Buffer size</source>
            <translation>缓冲大小</translation>
        </message>
        <message>
            <source>Sigma</source>
            <translation>标准差（Sigma）</translation>
        </message>
        <message>
            <source>Preprocessor</source>
            <translation>预处理方式</translation>
        </message>
        <message>
            <source>Deadzone</source>
            <translation>死区</translation>
        </message>
        <message>
            <source>Inertia</source>
            <translation>惯性</translation>
        </message>
        <message>
            <source>Deadzone radius</source>
            <translation>死区半径</translation>
        </message>
        <message>
            <source>Cusp detection</source>
            <translation>尖角检测</translation>
        </message>
        <message>
            <source>Drag</source>
            <translation>阻力</translation>
        </message>
        <message>
            <source>Mass</source>
            <translation>质量</translation>
        </message>
        <message>
            <source>Finish the stroke at the pen position (no gap at the end)</source>
            <translation>让笔迹结束于笔尖位置（末端不留空隙）</translation>
        </message>
    </context>
    <context>
        <name>SettingsStorage</name>
        <message>
            <source>Cache of this library</source>
            <translation>当前书库的缓存</translation>
        </message>
        <message>
            <source>“%1” keeps the previews of its documents and its search index in a hidden folder .xournal_library in each folder with documents, or in the app's cache folder. It only makes the app faster: it can be removed at any time and is built again when needed.</source>
            <translation>「%1」的文档预览和搜索索引保存在各文档文件夹中的 .xournal_library 隐藏目录，或应用缓存文件夹中。缓存仅用于加速，可以随时移除，需要时会重新生成。</translation>
        </message>
        <message>
            <source>No library is open in this window.</source>
            <translation>此窗口未打开书库。</translation>
        </message>
        <message>
            <source>Counting …</source>
            <translation>正在统计…</translation>
        </message>
        <message>
            <source>It takes %1 in %2 files.</source>
            <translation>共 %2 个文件，占用 %1。</translation>
        </message>
        <message>
            <source>Keep the cache in the app's cache folder, not in the library's folders</source>
            <translation>将缓存放在应用缓存目录</translation>
        </message>
        <message>
            <source>Recommended for folders that are synced (OneDrive, Dropbox, Nextcloud …): the library's folders then stay free of the app's files, and nothing of it is uploaded. Switching moves the cache. The app's cache folder of this library: %1</source>
            <translation>同步文件夹建议启用此选项，例如 OneDrive、Dropbox 或 Nextcloud。书库文件夹中不会写入缓存，缓存也不会随书库上传。更改此选项会移动已有缓存。此书库的应用缓存位置为 %1。</translation>
        </message>
        <message>
            <source>Clean up</source>
            <translation>清理</translation>
        </message>
        <message>
            <source>Remove all cache folders of this library, e.g. to zip the library and send it. Where you were in each document is kept.</source>
            <translation>删除此书库的全部缓存文件夹，例如打包分享书库时。文档的阅读位置会保留。</translation>
        </message>
        <message>
            <source>Remove all cache folders of this library …</source>
            <translation>删除此书库的全部缓存文件夹…</translation>
        </message>
        <message>
            <source>Removed. They are built again the next time the library is opened.</source>
            <translation>已删除。下次打开书库时会重新生成。</translation>
        </message>
        <message>
            <source>Remove the cache folders?</source>
            <translation>删除缓存文件夹？</translation>
        </message>
        <message>
            <source>All .xournal_library folders of “%1” are removed, and its cache in the app's cache folder (%2). Only files the app wrote are removed; where you were in each document is kept.</source>
            <translation>将删除「%1」中的所有 .xournal_library 文件夹，以及应用缓存目录（%2）中的书库缓存。只删除应用写入的缓存文件，文档阅读位置会保留。</translation>
        </message>
        <message>
            <source>The app closes afterwards, so it does not build them again right away (for example while you zip the library to send it). The next time the library is opened, they are built again.</source>
            <translation>清理后应用会关闭，以便在打包分享等操作期间避免立即生成缓存。下次打开书库时会重建缓存。</translation>
        </message>
        <message>
            <source>Remove and close the app</source>
            <translation>删除并关闭应用</translation>
        </message>
        <message>
            <source>Cancel</source>
            <translation>取消</translation>
        </message>
    </context>
    <context>
        <name>SettingsTouch</name>
        <message>
            <source>Palm rejection</source>
            <translation>防误触</translation>
        </message>
        <message>
            <source>Touch is ignored while the pen is near the screen, so a hand resting on it while writing does nothing (it stays ignored until it is lifted). Once the pen is away, touch works again after:</source>
            <translation>手写笔靠近屏幕时，屏幕会忽略手掌触碰，直到手掌抬起。手写笔离开后，等待以下时间再恢复触控。</translation>
        </message>
        <message>
            <source>Touch waits after the pen</source>
            <translation>抬笔后的触控等待时间</translation>
        </message>
        <message>
            <source>For a pen that never tells when it is near, the time counts from the last moment it was used.</source>
            <translation>如果手写笔不报告悬停状态，则从上次使用手写笔时开始计时。</translation>
        </message>
        <message>
            <source>The pen counts as near up to</source>
            <translation>判定手写笔靠近的高度上限</translation>
        </message>
        <message>
            <source>Your pen is at %1 % now</source>
            <translation>当前笔尖高度为 %1%</translation>
        </message>
        <message>
            <source>Your pen is away</source>
            <translation>手写笔已离开屏幕</translation>
        </message>
        <message>
            <source>Hold the pen there … %1</source>
            <translation>保持笔尖高度… %1</translation>
        </message>
        <message>
            <source>Take the pen's height</source>
            <translation>以当前笔尖高度校准</translation>
        </message>
        <message>
            <source>100 %: as far up as the pen is noticed at all. Lower: above that height it counts as away, so a finger can scroll right after writing while the pen stays close. "Take the pen's height": tap it, then hold the pen where it should start to count as away.</source>
            <translation>100% 表示使用设备能检测到的最大悬停高度。调低后，超过设定高度就算抬笔，手指可以更早开始滚动。若要采集高度，点「以当前笔尖高度校准」，再把笔停在你希望视为抬笔的高度。</translation>
        </message>
        <message>
            <source>Hover the pen over this page: if it tells how high it is above the screen, you can also choose here from which height on it counts as away.</source>
            <translation>将笔悬停在此页上。如果设备报告笔尖高度，就可以在这里设置超过多高视为抬笔。</translation>
        </message>
        <message>
            <source>Gestures</source>
            <translation>手势</translation>
        </message>
        <message>
            <source>Ignore long presses while writing</source>
            <translation>手写时忽略长按</translation>
        </message>
        <message>
            <source>With the pen, highlighter or eraser, holding the screen does not open the page menu or select PDF text. Use Mark PDF text to select text on purpose.</source>
            <translation>使用笔、荧光笔或橡皮擦时，长按页面不会打开页面菜单或选中 PDF 文字。需要选字时请使用「标记 PDF 文字」工具。</translation>
        </message>
        <message>
            <source>Draw with the finger</source>
            <translation>允许用手指绘制</translation>
        </message>
        <message>
            <source>One finger draws with the current tool (the hand still scrolls), two fingers scroll and zoom. The same as the finger button in the tool bar. The mouse always draws with its left button.</source>
            <translation>单指使用当前工具绘制，选中手形工具时仍可滚动。双指可滚动和缩放。此设置与工具栏的手指按钮同步。鼠标始终用左键绘制。</translation>
        </message>
        <message>
            <source>Open documents with the hand</source>
            <translation>打开文档时使用手形工具</translation>
        </message>
        <message>
            <source>A document opens with the hand tool, so one finger scrolls. Choose the pen (or another tool) to write.</source>
            <translation>打开文档后可单指滚动。选择笔或其他工具即可开始书写。</translation>
        </message>
        <message>
            <source>Buttons sized for fingers</source>
            <translation>使用适合触控的按钮尺寸</translation>
        </message>
        <message>
            <source>When a finger is used</source>
            <translation>使用手指时</translation>
        </message>
        <message>
            <source>Always</source>
            <translation>始终</translation>
        </message>
        <message>
            <source>Never</source>
            <translation>从不</translation>
        </message>
        <message>
            <source>Some buttons get bigger when the screen is touched with a finger, and smaller again when the mouse is used. The pen changes nothing.</source>
            <translation>用手指触摸屏幕时，部分按钮会变大。使用鼠标时会恢复较小的尺寸。使用手写笔时尺寸不会变化。</translation>
        </message>
        <message>
            <source>Pinch with two fingers to zoom</source>
            <translation>双指捏合缩放</translation>
        </message>
        <message>
            <source>One finger scrolls (unless it draws), two fingers pan and zoom. Tap with two fingers to undo, with three fingers to redo.</source>
            <translation>单指可滚动，开启手指绘制时用于绘制。双指可平移和缩放。双指轻点可撤销，三指轻点可重做。</translation>
        </message>
        <message>
            <source>Turn the canvas with two fingers</source>
            <translation>双指旋转画布</translation>
        </message>
        <message>
            <source>Twist two fingers (or turn them on the touchpad) to turn the canvas, not the pages. It snaps to quarter turns. Two taps on the page, a fit or the chip beside the page number turn it upright again; Ctrl+] and Ctrl+[ turn it by a quarter.</source>
            <translation>在屏幕或触控板上转动双指可旋转画布，页面本身不会转动。角度吸附到 90° 的倍数。双击页面、适应页面或点页码旁的按钮可恢复正向。Ctrl+] 和 Ctrl+[ 可旋转 90°。</translation>
        </message>
        <message>
            <source>On Huawei tablets, choose a double-tap action in System settings → Accessibility features → Stylus. Double-tap the pen barrel to switch to the eraser or the previous tool.</source>
            <translation>在华为平板的「系统设置 → 辅助功能 → 手写笔」里选择双击操作。双击笔身可切换橡皮擦或上次使用的工具。</translation>
        </message>
    </context>
    <context>
        <name>ToolGroups</name>
        <message>
            <source>As sharp as the screen (at least 200 dpi)</source>
            <translation>屏幕清晰度（至少 200 dpi）</translation>
        </message>
        <message>
            <source>High resolution (300 dpi)</source>
            <translation>高分辨率（300 dpi）</translation>
        </message>
        <message>
            <source>Very high resolution (600 dpi)</source>
            <translation>超高分辨率（600 dpi）</translation>
        </message>
    </context>
    <context>
        <name>ToolboxMenus</name>
        <message>
            <source>Settings</source>
            <translation>设置</translation>
        </message>
    </context>
    <context>
        <name>xqt::HandwritingSettings</name>
        <message>
            <source>English</source>
            <translation>英语</translation>
        </message>
        <message>
            <source>German</source>
            <translation>德语</translation>
        </message>
        <message>
            <source>%1 MB</source>
            <translation>%1 MB</translation>
        </message>
        <message>
            <source>Off</source>
            <translation>关闭</translation>
        </message>
        <message>
            <source>Downloading a model…</source>
            <translation>正在下载模型…</translation>
        </message>
        <message>
            <source>This version of the app has no recogniser for handwriting.</source>
            <translation>此版本未包含手写识别器。</translation>
        </message>
        <message>
            <source>The recogniser is not ready.</source>
            <translation>手写识别器尚未就绪。</translation>
        </message>
        <message numerus="yes">
            <source>Reading handwriting: %n page(s) of open documents left</source>
            <translation>
                <numerusform>正在识别手写内容，已打开文档还剩 %n 页</numerusform>
            </translation>
        </message>
        <message numerus="yes">
            <source>Reading the library's handwriting: %n document(s) left</source>
            <translation>
                <numerusform>正在识别书库的手写内容，还剩 %n 个文档</numerusform>
            </translation>
        </message>
        <message>
            <source>Ready</source>
            <translation>已就绪</translation>
        </message>
        <message>
            <source>No model for %1 yet: its handwriting is read with the other model only.</source>
            <translation>目前没有适用于 %1 的模型，将仅用另一种模型尝试识别该语言。</translation>
        </message>
        <message>
            <source>Downloading… %1 %</source>
            <translation>正在下载… %1%</translation>
        </message>
        <message>
            <source>In use (%1)</source>
            <translation>使用中（%1）</translation>
        </message>
        <message>
            <source>Installed (%1)</source>
            <translation>已安装（%1）</translation>
        </message>
        <message>
            <source>Installed (%1), its language is not read</source>
            <translation>已安装（%1），当前未启用此语言</translation>
        </message>
        <message>
            <source>Built in, in use (%1, %2)</source>
            <translation>内置，使用中（%1，%2）</translation>
        </message>
        <message>
            <source>Built in (%1, %2)</source>
            <translation>内置（%1，%2）</translation>
        </message>
        <message>
            <source>The model in this folder does not read %1</source>
            <translation>此文件夹中的模型无法识别 %1</translation>
        </message>
        <message>
            <source>Read by %1</source>
            <translation>由 %1 识别</translation>
        </message>
        <message>
            <source>Not installed</source>
            <translation>未安装</translation>
        </message>
    </context>
    <context>
        <name>xqt::SettingsModel</name>
        <message>
            <source>%1 × %2 mm</source>
            <extracomment>A page size, width x height</extracomment>
            <translation>%1 × %2 毫米</translation>
        </message>
        <message>
            <source>Letter</source>
            <translation>美式信纸（Letter）</translation>
        </message>
        <message>
            <source>Legal</source>
            <translation>美式法律用纸（Legal）</translation>
        </message>
        <message>
            <source>16:9 (presentation)</source>
            <translation>16:9（宽屏）</translation>
        </message>
    </context>
    <context>
        <name>xqt::ShortcutsModel</name>
        <message>
            <source>Document</source>
            <translation>文档</translation>
        </message>
        <message>
            <source>Pages</source>
            <translation>页面</translation>
        </message>
        <message>
            <source>Editing</source>
            <translation>编辑</translation>
        </message>
        <message>
            <source>View</source>
            <translation>视图</translation>
        </message>
        <message>
            <source>Search</source>
            <translation>搜索</translation>
        </message>
        <message>
            <source>Tools</source>
            <translation>工具</translation>
        </message>
        <message>
            <source>New document</source>
            <translation>新建文档</translation>
        </message>
        <message>
            <source>Quick note</source>
            <translation>快速笔记</translation>
        </message>
        <message>
            <source>Record audio (start or stop)</source>
            <translation>开始或停止录音</translation>
        </message>
        <message>
            <source>Open…</source>
            <translation>打开…</translation>
        </message>
        <message>
            <source>Save</source>
            <translation>保存</translation>
        </message>
        <message>
            <source>Save as…</source>
            <translation>另存为…</translation>
        </message>
        <message>
            <source>Save with a message…</source>
            <translation>保存并添加版本说明…</translation>
        </message>
        <message>
            <source>Export as plain PDF…</source>
            <translation>导出为普通 PDF…</translation>
        </message>
        <message>
            <source>Print…</source>
            <translation>打印…</translation>
        </message>
        <message>
            <source>Close the document</source>
            <translation>关闭文档</translation>
        </message>
        <message>
            <source>Quit</source>
            <translation>退出</translation>
        </message>
        <message>
            <source>Library and recent documents</source>
            <translation>书库和最近文档</translation>
        </message>
        <message>
            <source>All open documents</source>
            <translation>所有打开的文档</translation>
        </message>
        <message>
            <source>Next document</source>
            <translation>下一个文档</translation>
        </message>
        <message>
            <source>Previous document</source>
            <translation>上一个文档</translation>
        </message>
        <message>
            <source>Add a page</source>
            <translation>添加页面</translation>
        </message>
        <message>
            <source>All pages</source>
            <translation>所有页面</translation>
        </message>
        <message>
            <source>Contents overview</source>
            <translation>目录总览</translation>
        </message>
        <message>
            <source>Copy the page as an image</source>
            <translation>复制页面为图片</translation>
        </message>
        <message>
            <source>Undo</source>
            <translation>撤销</translation>
        </message>
        <message>
            <source>Redo</source>
            <translation>重做</translation>
        </message>
        <message>
            <source>Copy</source>
            <translation>复制</translation>
        </message>
        <message>
            <source>Cut</source>
            <translation>剪切</translation>
        </message>
        <message>
            <source>Paste</source>
            <translation>粘贴</translation>
        </message>
        <message>
            <source>Delete what is selected</source>
            <translation>删除选中内容</translation>
        </message>
        <message>
            <source>Select everything on the page</source>
            <translation>选择页面上的所有内容</translation>
        </message>
        <message>
            <source>Group what is selected</source>
            <translation>将选中内容分组</translation>
        </message>
        <message>
            <source>Ungroup what is selected</source>
            <translation>取消选中内容的分组</translation>
        </message>
        <message>
            <source>Markdown box</source>
            <translation>Markdown 文本框</translation>
        </message>
        <message>
            <source>Zoom in</source>
            <translation>放大</translation>
        </message>
        <message>
            <source>Zoom out</source>
            <translation>缩小</translation>
        </message>
        <message>
            <source>Fit the width</source>
            <translation>适应宽度</translation>
        </message>
        <message>
            <source>Real size (100 %, as large as the paper)</source>
            <translation>实际尺寸（100%，与纸张大小一致）</translation>
        </message>
        <message>
            <source>Turn the canvas clockwise (90°)</source>
            <translation>顺时针旋转画布（90°）</translation>
        </message>
        <message>
            <source>Turn the canvas counter-clockwise (90°)</source>
            <translation>逆时针旋转画布（90°）</translation>
        </message>
        <message>
            <source>Full screen</source>
            <translation>全屏</translation>
        </message>
        <message>
            <source>Scroll the document and the reference together</source>
            <translation>同步滚动文档和参考资料</translation>
        </message>
        <message>
            <source>Present (full screen, page by page)</source>
            <translation>演示（全屏逐页显示）</translation>
        </message>
        <message>
            <source>Present without controls</source>
            <translation>隐藏控件并演示</translation>
        </message>
        <message>
            <source>All pages while presenting</source>
            <translation>演示时查看所有页面</translation>
        </message>
        <message>
            <source>Read (Zen, read only, full screen)</source>
            <translation>阅读模式（专注、只读、全屏）</translation>
        </message>
        <message>
            <source>Zen (only the page)</source>
            <translation>专注模式（仅显示页面）</translation>
        </message>
        <message>
            <source>Back</source>
            <translation>返回</translation>
        </message>
        <message>
            <source>Forward</source>
            <translation>前进</translation>
        </message>
        <message>
            <source>Settings</source>
            <translation>设置</translation>
        </message>
        <message>
            <source>These shortcuts</source>
            <translation>查看这些快捷键</translation>
        </message>
        <message>
            <source>Pen</source>
            <translation>手写笔</translation>
        </message>
        <message>
            <source>Eraser</source>
            <translation>橡皮擦</translation>
        </message>
        <message>
            <source>Highlighter</source>
            <translation>荧光笔</translation>
        </message>
        <message>
            <source>Text box (Markdown)</source>
            <translation>文本框（Markdown）</translation>
        </message>
        <message>
            <source>Select (rectangle)</source>
            <translation>矩形选取</translation>
        </message>
        <message>
            <source>Select (lasso)</source>
            <translation>套索选取</translation>
        </message>
        <message>
            <source>Snip: copy the picture of a rectangle</source>
            <translation>截取并复制矩形区域</translation>
        </message>
        <message>
            <source>Snip with the lasso</source>
            <translation>套索截图</translation>
        </message>
        <message>
            <source>Copy handwriting as text</source>
            <translation>将手写内容复制为文本</translation>
        </message>
        <message>
            <source>Hand (scroll)</source>
            <translation>手形工具（滚动）</translation>
        </message>
        <message>
            <source>Insert an image…</source>
            <translation>插入图片…</translation>
        </message>
        <message>
            <source>Curtain (hide part of the page)</source>
            <translation>遮挡板（遮住部分页面）</translation>
        </message>
        <message>
            <source>Spotlight (only a part of the page shown)</source>
            <translation>聚光灯（仅显示部分页面）</translation>
        </message>
        <message>
            <source>Find and replace</source>
            <translation>查找和替换</translation>
        </message>
        <message>
            <source>Search all open documents</source>
            <translation>搜索所有打开的文档</translation>
        </message>
        <message>
            <source>Search the library</source>
            <translation>搜索书库</translation>
        </message>
        <message>
            <source>Next hit</source>
            <translation>下一个匹配项</translation>
        </message>
        <message>
            <source>Previous hit</source>
            <translation>上一个匹配项</translation>
        </message>
        <message>
            <source>Plugins</source>
            <translation>插件</translation>
        </message>
    </context>
    <context>
        <name>SettingsData</name>
        <message>
            <source>3D solids</source>
            <translation>三维几何体</translation>
        </message>
        <message>
            <source>Circuit symbols (IEC)</source>
            <translation>电路符号（IEC）</translation>
        </message>
        <message>
            <source>Classic</source>
            <translation>经典</translation>
        </message>
        <message>
            <source>Colorblind-safe (6)</source>
            <translation>色觉友好（6 色）</translation>
        </message>
        <message>
            <source>Colorblind-safe (8)</source>
            <translation>色觉友好（8 色）</translation>
        </message>
        <message>
            <source>Dark</source>
            <translation>深色</translation>
        </message>
        <message>
            <source>Dotted</source>
            <translation>点阵</translation>
        </message>
        <message>
            <source>Graph</source>
            <translation>方格</translation>
        </message>
        <message>
            <source>Graph with border</source>
            <translation>带边框的方格</translation>
        </message>
        <message>
            <source>Graph with border (bold every 5th)</source>
            <translation>带边框的方格（每五格加粗）</translation>
        </message>
        <message>
            <source>Isometric Dotted</source>
            <translation>等距点阵</translation>
        </message>
        <message>
            <source>Isometric Graph</source>
            <translation>等距网格</translation>
        </message>
        <message>
            <source>Lab glassware</source>
            <translation>实验室玻璃器皿</translation>
        </message>
        <message>
            <source>Logic gates</source>
            <translation>逻辑门</translation>
        </message>
        <message>
            <source>Logic gates (IEC)</source>
            <translation>逻辑门（IEC）</translation>
        </message>
        <message>
            <source>Marker</source>
            <translation>马克笔</translation>
        </message>
        <message>
            <source>Okabe-Ito + Paul Tol (indigo, wine); some inks darkened for legibility, highlights derived. Weakest pair: questions vs ideas.</source>
            <translation>采用 Okabe-Ito 和 Paul Tol 的靛蓝、酒红配色。部分笔迹颜色加深以便阅读，荧光色由这些配色衍生。「问题」和「想法」两色较难区分。</translation>
        </message>
        <message>
            <source>Okabe-Ito; keyTerms and questions inks darkened for legibility, highlights derived</source>
            <translation>采用 Okabe-Ito 配色。关键词和问题的笔迹加深以便阅读，荧光色由这些配色衍生。</translation>
        </message>
        <message>
            <source>Open Color (MIT): ink = step 8, highlight = step 2 (keyTerms highlight = yellow 3)</source>
            <translation>Open Color（MIT）：笔迹用第 8 阶色，荧光用第 2 阶色，关键词荧光用第 3 阶黄色。</translation>
        </message>
        <message>
            <source>Pastel study</source>
            <translation>柔和学习</translation>
        </message>
        <message>
            <source>Plain</source>
            <translation>空白</translation>
        </message>
        <message>
            <source>Ruled</source>
            <translation>横线</translation>
        </message>
        <message>
            <source>Ruled with vertical line</source>
            <translation>横线带左侧竖线</translation>
        </message>
        <message>
            <source>Ruled with vertical line on the right</source>
            <translation>横线带右侧竖线</translation>
        </message>
        <message>
            <source>Staves</source>
            <translation>五线谱</translation>
        </message>
    </context>
</TS>
