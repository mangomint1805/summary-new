/* =====================================================================
   DANH SÁCH LỚP: thầy chỉ cần sửa phần này
   ---------------------------------------------------------------------
   ma        : mã lớp học sinh nhập để vào trang (không phân biệt hoa/thường)
   ten       : tên hiện trên trang
   khaiGiang : ngày học buổi 1, dạng 'YYYY-MM-DD'
   thu       : các thứ trong tuần lớp học (2 = Thứ 2 … 7 = Thứ 7, 8 = Chủ nhật)
   nghi      : các ngày lớp NGHỈ (lễ, thầy bận…), dạng 'YYYY-MM-DD'.
               Buổi học rơi vào ngày nghỉ sẽ tự dời sang buổi kế tiếp.
   moc       : (không bắt buộc) ['YYYY-MM-DD', số buổi] = "tới ngày đó lớp đã
               học xong buổi số mấy". Dùng khi lớp chậm/nhanh hơn lịch: các buổi
               sau sẽ tính tiếp từ mốc này theo các thứ học.
   hocToi    : (không bắt buộc) ép mở tới buổi số mấy dù chưa tới ngày.
   Bài của buổi nào sẽ mở SAU GIỜ TAN HỌC của ngày học buổi đó (giờ tan lấy từ
               'ten', ví dụ '19h45 - 21h15' → mở lúc 21:15).
   gioMo     : (không bắt buộc) giờ mở bài khác giờ tan học, dạng 'HH:MM'.
   ===================================================================== */
var SN_CLASSES = [
  { ma: 'TOPRE115276', ten: 'TOPRE115276 (2-4-6, 19h45 - 21h15)', khaiGiang: '2026-09-25', thu: [2, 4, 6], nghi: [],
    moc: ['2026-10-14', 7] } // 14/10 mới học tới buổi 7 (Listening 3 – Information Questions)
];

/* Bài học ứng với buổi nào trong lịch 24 buổi (TOEIC PRE ver 3.0) */
var SN_SESSIONS = {
  R1: 1, L1: 2, R2: 3, L2: 4, W1: 5, R3: 6, L3: 7, R4: 8, W2: 9,
  L4: 12, R5: 13, L5: 14, W3: 15, L6: 16, R6: 17, L7: 18, R7: 19, L8: 20, W4: 21,
  PT1: 11, /* trang Ôn tập sau Progress Test 1 – mở sau buổi kiểm tra */
  PT2: 22  /* trang Ôn tập trước Progress Test 2 – mở trước buổi thi vài ngày */
};
var SN_TOTAL = 24;
/* Các buổi không có trang bài học */
var SN_OTHER = { 10: 'Exam master 1', 11: 'Progress Test 1', 22: 'Exam master 2', 23: 'Exam master 3', 24: 'Progress Test 2' };
/* Tên bài (dùng cho thông báo "bài mới mở"), lấy theo trang chủ */
var SN_TITLES = {
  "R1": "Reading Unit 1 · Nouns & Pronouns",
  "R2": "Reading Unit 2 · Adjectives, Adverbs & Comparison",
  "R3": "Reading Unit 3 · Verb Tenses",
  "R4": "Reading Unit 4 · Active & Passive Voice",
  "R5": "Reading Unit 5 · Participles",
  "R6": "Reading Unit 6 · Conjunctions & Prepositions",
  "R7": "Reading Unit 7 · Comparison",
  "L1": "Listening Unit 1 · Part 1 – Photos of People",
  "L2": "Listening Unit 2 · Part 1 – Photos of Objects & Scenes",
  "L3": "Listening Unit 3 · Part 2 – Information Questions",
  "L4": "Listening Unit 4 · Part 2 – Yes/No Questions",
  "L5": "Listening Unit 5 · Part 2 – Other Types of Questions",
  "L6": "Listening Unit 6 · Part 3 – At the Office",
  "L7": "Listening Unit 7 · Part 3 – Daily Life",
  "L8": "Listening Unit 8 · Part 4 – Telephone Messages & Advertisements",
  "W1": "Weekly Revision 1",
  "W2": "Weekly Revision 2",
  "W3": "Weekly Revision 3",
  "W4": "Weekly Revision 4",
  "PT1": "Ôn tập sau Progress Test 1",
  "PT2": "Ôn tập trước Progress Test 2"
 };
var SN_PREFIX = 'summaryNew';
var SN_FILES = {
  'review/progress-test-1.html': 'PT1',
  'review/progress-test-2.html': 'PT2',
  'reading/unit-01-nouns-pronouns.html': 'R1',
  'reading/unit-02-adjectives-adverbs-comparison.html': 'R2',
  'reading/unit-03-verb-tenses.html': 'R3',
  'reading/unit-04-active-passive-voice.html': 'R4',
  'reading/unit-05-participles.html': 'R5',
  'reading/unit-06-conjunctions-prepositions.html': 'R6',
  'reading/unit-07-comparison.html': 'R7',
  'listening/unit-01-photos-of-people.html': 'L1',
  'listening/unit-02-photos-of-objects-scenes.html': 'L2',
  'listening/unit-03-information-questions.html': 'L3',
  'listening/unit-04-yes-no-questions.html': 'L4',
  'listening/unit-05-other-types-of-questions.html': 'L5',
  'listening/unit-06-at-the-office.html': 'L6',
  'listening/unit-07-daily-life.html': 'L7',
  'listening/unit-08-telephone-messages-advertisements.html': 'L8',
  'weekly/revision-1.html': 'W1',
  'weekly/revision-2.html': 'W2',
  'weekly/revision-3.html': 'W3',
  'weekly/revision-4.html': 'W4'
};

/* ===================== phần xử lý (không cần sửa) ===================== */
/* giờ mở bài của lớp: gioMo, hoặc giờ tan học trong tên lớp, mặc định 21:15 */
function snEndHM(c) {
  var m = c && c.gioMo ? String(c.gioMo).match(/(\d{1,2})\D(\d{2})/) : null;
  if (!m && c) m = String(c.ten || '').match(/-\s*(\d{1,2})h(\d{2})/);
  return m ? [+m[1], +m[2]] : [21, 15];
}
function snEndText(c) { var e = snEndHM(c); return e[0] + 'h' + ('0' + e[1]).slice(-2); }

var SN = (function () {
  'use strict';
  var KEY = SN_PREFIX + '.lop', GV = SN_PREFIX + '.gv';
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) {} }
  function norm(s) { return String(s || '').replace(/\s+/g, '').toUpperCase(); }
  function find(code) {
    code = norm(code); if (!code) return null;
    for (var i = 0; i < SN_CLASSES.length; i++) if (norm(SN_CLASSES[i].ma) === code) return SN_CLASSES[i];
    return null;
  }
  function ymd(s) { var p = String(s).split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function key(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  var cache = {};
  function dates(c) {
    if (cache[c.ma]) return cache[c.ma];
    var out = [], d = ymd(c.khaiGiang), off = {}, days = {}, guard = 0;
    (c.nghi || []).forEach(function (x) { off[x] = 1; });
    (c.thu || []).forEach(function (t) { days[t === 8 ? 0 : t - 1] = 1; });
    function isDay(x) { return days[x.getDay()] && !off[key(x)]; }
    var m = c.moc && c.moc[1] ? { d: ymd(c.moc[0]), n: Math.min(+c.moc[1], SN_TOTAL) } : null;
    var need = m ? m.n : SN_TOTAL;
    while (out.length < need && guard++ < 800) {
      if (isDay(d)) out.push(new Date(d));
      d.setDate(d.getDate() + 1);
    }
    if (m) {
      // các buổi đã học: không trễ hơn ngày mốc, buổi mốc = đúng ngày mốc
      out = out.map(function (x) { return x > m.d ? new Date(m.d) : x; });
      out[m.n - 1] = new Date(m.d);
      d = new Date(m.d); d.setDate(d.getDate() + 1);
      while (out.length < SN_TOTAL && guard++ < 1600) {
        if (isDay(d)) out.push(new Date(d));
        d.setDate(d.getDate() + 1);
      }
    }
    return (cache[c.ma] = out);
  }
  function today() { var n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); }
  function doneSessions(c) {
    var now = new Date(), ds = dates(c), n = 0, e = snEndHM(c);
    ds.forEach(function (d, i) { var o = new Date(d); o.setHours(e[0], e[1], 0, 0); if (now >= o) n = i + 1; });
    return Math.max(n, c.hocToi || 0);
  }
  function isOpen(c, id) { var s = SN_SESSIONS[id]; return !s || s <= doneSessions(c); }
  function openDate(c, id) { var s = SN_SESSIONS[id]; return s ? dates(c)[s - 1] : null; }
  var TH = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  function fmt(d, withDay) {
    if (!d) return '';
    var s = ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2);
    return withDay ? TH[d.getDay()] + ', ' + s : s;
  }
  function current() { return find(get(KEY)); }
  function choose(code) { var c = find(code); if (c) set(KEY, c.ma); return c; }
  function leave() { set(KEY, null); }
  function teacher(v) { if (v === undefined) return get(GV) === '1'; set(GV, v ? '1' : null); }
  return { find: find, current: current, choose: choose, leave: leave, teacher: teacher, dates: dates,
    doneSessions: doneSessions, isOpen: isOpen, openDate: openDate, fmt: fmt, today: today, norm: norm };
})();

/* ===== Khoá trang bài học: bài chưa tới buổi thì không cho xem ===== */
(function () {
  'use strict';
  var path = location.pathname.replace(/\\/g, '/');
  var file = Object.keys(SN_FILES).filter(function (f) { return path.slice(-f.length) === f; })[0];
  if (!file) return; // không phải trang bài học (VD trang chủ)
  var id = SN_FILES[file];
  var q = new URLSearchParams(location.search);
  if (q.has('lop')) SN.choose(q.get('lop'));
  if (SN.teacher()) return;
  var c = SN.current();
  if (c && SN.isOpen(c, id)) return;

  var css = document.createElement('style');
  css.textContent = 'html.sn-lock main{display:none}' +
    '.sn-box{max-width:520px;margin:40px auto;padding:26px 24px;background:var(--card,#fff);border:1.5px solid var(--amber,#a8691a);border-radius:14px;text-align:center;font-family:inherit;}' +
    '.sn-box .ic{font-size:44px;line-height:1;}' +
    '.sn-box h2{font-family:Lora,"Times New Roman",serif;font-weight:600;font-size:23px;margin:12px 0 6px;}' +
    '.sn-box p{color:var(--dim,#666e7a);margin:6px 0;}' +
    '.sn-box a.btn{display:inline-block;margin:14px 6px 0;padding:11px 18px;border-radius:10px;font-weight:700;text-decoration:none;background:var(--amber,#a8691a);color:#fff;}' +
    '.sn-box a.alt{background:var(--card,#fff);color:var(--amber-ink,#6b4410);border:1.5px solid var(--amber,#a8691a);}';
  document.head.appendChild(css);
  document.documentElement.classList.add('sn-lock');
  document.addEventListener('DOMContentLoaded', function () {
    var home = '../index.html';
    var box = document.createElement('div'); box.className = 'sn-box';
    if (!c) {
      box.innerHTML = '<div class="ic">🔑</div><h2>Bạn chưa nhập mã lớp</h2><p>Vào trang chủ, nhập mã lớp thầy gửi để xem các bài lớp đã học nhé.</p>' +
        '<a class="btn" href="' + home + '">Về trang chủ nhập mã lớp</a>';
    } else {
      var d = SN.openDate(c, id);
      box.innerHTML = '<div class="ic">🔒</div><h2>Lớp mình chưa học tới bài này</h2>' +
        '<p>Bài này sẽ mở sau giờ học, lúc <b>' + snEndText(c) + ' ngày ' + SN.fmt(d, true) + '/' + d.getFullYear() + '</b> (buổi ' + SN_SESSIONS[id] + ' của lớp ' + c.ma + ').</p>' +
        '<p>Ôn lại các bài đã học trước nha!</p><a class="btn" href="' + home + '">← Về danh sách bài</a>';
    }
    var main = document.querySelector('main');
    (main ? main.parentNode : document.body).insertBefore(box, main || null);
  });
})();

/* ===== Thông báo "bài mới mở" khi học sinh vào lại web =====
   Máy học sinh nhớ các bài đã mở ở lần vào trước; lần sau có bài mới mở thì hiện thông báo
   ở góc dưới màn hình (nhãn "Mới" trên trang chủ do extras.js lo). Lần đầu vào chỉ ghi nhớ, không báo. */
(function () {
  'use strict';
  if (typeof SN_TITLES === 'undefined') return;
  var me = document.currentScript, src = me && me.getAttribute('src');
  var base = src ? src.replace(/classes\.js.*$/, '') : '';
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (ch) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]; }); }
  var FILE = {}; Object.keys(SN_FILES).forEach(function (f) { FILE[SN_FILES[f]] = f; });
  function run() {
    if (SN.teacher() || new URLSearchParams(location.search).has('xem')) return;
    var c = SN.current(); if (!c) return;
    var open = Object.keys(SN_SESSIONS).filter(function (id) { return FILE[id] && SN_TITLES[id] && SN.isOpen(c, id); });
    var k = SN_PREFIX + '.seen.' + c.ma, raw = get(k);
    set(k, JSON.stringify(open));
    if (raw === null) return;
    var seen = {}; try { JSON.parse(raw).forEach(function (id) { seen[id] = 1; }); } catch (e) { return; }
    var fresh = open.filter(function (id) { return !seen[id]; })
      .sort(function (a, b) { return SN_SESSIONS[a] - SN_SESSIONS[b]; });
    if (!fresh.length) return;
    var box = document.createElement('div');
    box.className = 'sn-toast'; box.setAttribute('role', 'status');
    box.innerHTML = '<button type="button" class="x" aria-label="Đóng thông báo">✕</button>' +
      '<p class="t">🎉 Lớp ' + esc(c.ma) + ' có ' + (fresh.length > 1 ? fresh.length + ' bài' : 'bài') + ' mới mở</p><ul>' +
      fresh.slice(0, 5).map(function (id) { return '<li><a href="' + esc(base + FILE[id]) + '">' + esc(SN_TITLES[id]) + '</a></li>'; }).join('') +
      (fresh.length > 5 ? '<li>… và ' + (fresh.length - 5) + ' bài khác trên trang chủ</li>' : '') + '</ul>';
    box.querySelector('.x').onclick = function () { box.remove(); };
    document.body.appendChild(box);
  }
  document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 0); });
})();

/* Nạp thêm tính năng: đánh dấu đã học + tìm kiếm (file extras.js) */
(function () {
  var me = document.currentScript; if (!me || !me.src) return;
  var s = document.createElement('script'); s.src = me.src.replace(/classes\.js(\?.*)?$/, 'extras.js'); s.defer = true;
  document.head.appendChild(s);
})();
