/* Flashcard từ vựng – tự đọc "Bảng từ vựng" ở cuối mỗi bài và tạo bộ thẻ.
   Thêm vào trang: <script src="../flashcards.js" defer></script> */
(function () {
  'use strict';

  // ---------- 1. Lấy từ vựng từ bảng ----------
  var h2 = [].slice.call(document.querySelectorAll('.doc h2')).filter(function (h) {
    return /Bảng từ vựng|Vocabulary/i.test(h.textContent);
  })[0];
  if (!h2) return;
  var table = h2.nextElementSibling;
  while (table && table.tagName !== 'TABLE') table = table.nextElementSibling;
  if (!table) return;

  var POS = /\s*\((n|v|adj|adv|phr|prep|conj|n\/v|v\/n|pron)\)\s*$/i;
  var cards = [];
  [].slice.call(table.querySelectorAll('tbody tr')).forEach(function (tr) {
    var td = tr.querySelectorAll('td');
    if (td.length < 2) return;
    var en = td[0].textContent.replace(/\s+/g, ' ').trim();
    var vi = td[1].textContent.replace(/\s+/g, ' ').trim();
    if (!en || !vi) return;
    var m = en.match(POS), pos = '';
    if (m) { pos = m[1].toLowerCase(); en = en.replace(POS, ''); }
    cards.push({ en: en, vi: vi, pos: pos });
  });
  if (cards.length < 2) return;

  // ---------- 2. Lưu tiến độ (theo từng bài, chỉ trên máy này) ----------
  var KEY = 'summaryNew.fc.' + location.pathname;
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(known)); } catch (e) {} }
  var known = load(); // { "word": 1 }

  // ---------- 3. CSS ----------
  var css = '' +
    '.fc-open{display:inline-flex;align-items:center;gap:8px;font:inherit;font-weight:700;font-size:15px;color:#fff;background:var(--amber,#a8691a);border:0;border-radius:10px;padding:11px 16px;cursor:pointer;margin:4px 0 8px;}' +
    '.fc-open:hover{filter:brightness(1.08);}' +
    '.fc-open small{font-weight:500;opacity:.85;}' +
    '.fc-jump{display:inline-flex;align-items:center;gap:6px;margin:16px 0 0;font:inherit;font-size:14.5px;font-weight:600;color:var(--amber-ink,#6b4410);background:var(--amber-soft,#f2e2c4);border:1.5px solid var(--amber,#a8691a);border-radius:999px;padding:7px 14px;cursor:pointer;}' +
    '.fc-bg{position:fixed;inset:0;z-index:50;background:rgba(30,35,43,.55);display:none;align-items:center;justify-content:center;padding:16px;}' +
    '.fc-bg.on{display:flex;}' +
    '.fc-box{width:100%;max-width:520px;background:var(--paper,#faf8f4);border-radius:16px;padding:18px 18px 16px;box-shadow:0 20px 50px rgba(0,0,0,.25);max-height:100%;overflow:auto;}' +
    '.fc-head{display:flex;align-items:center;justify-content:space-between;gap:10px;}' +
    '.fc-head b{font-family:Lora,"Times New Roman",serif;font-size:19px;font-weight:600;}' +
    '.fc-x{font:inherit;font-size:22px;line-height:1;background:none;border:0;color:var(--dim,#666e7a);cursor:pointer;padding:4px 8px;border-radius:8px;}' +
    '.fc-bar{height:6px;background:var(--line,#ddd7c9);border-radius:99px;margin:12px 0 4px;overflow:hidden;}' +
    '.fc-bar i{display:block;height:100%;width:0;background:var(--teal,#1f8f6c);transition:width .3s;}' +
    '.fc-stat{display:flex;justify-content:space-between;font-size:13px;color:var(--dim,#666e7a);}' +
    '.fc-tools{display:flex;flex-wrap:wrap;gap:6px;margin:12px 0 10px;}' +
    '.fc-tools button{font:inherit;font-size:13.5px;font-weight:600;background:var(--card,#fff);color:var(--amber-ink,#6b4410);border:1.5px solid var(--line,#ddd7c9);border-radius:8px;padding:6px 10px;cursor:pointer;}' +
    '.fc-tools button[aria-pressed=true]{border-color:var(--amber,#a8691a);background:var(--amber-soft,#f2e2c4);}' +
    '.fc-scene{perspective:1200px;}' +
    '.fc-card{position:relative;height:250px;cursor:pointer;transform-style:preserve-3d;transition:transform .45s;border-radius:14px;outline:none;}' +
    '.fc-card.flip{transform:rotateY(180deg);}' +
    '.fc-card:focus-visible{box-shadow:0 0 0 3px var(--amber,#a8691a);}' +
    '.fc-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:14px;border:1.5px solid var(--line,#ddd7c9);background:var(--card,#fff);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:20px;}' +
    '.fc-back{transform:rotateY(180deg);background:var(--amber-soft,#f2e2c4);border-color:var(--amber,#a8691a);}' +
    '.fc-word{font-size:clamp(24px,7vw,34px);font-weight:700;line-height:1.25;color:var(--ink,#1e232b);word-break:break-word;}' +
    '.fc-back .fc-word{color:var(--amber-ink,#6b4410);font-size:clamp(21px,6vw,28px);}' +
    '.fc-pos{margin-top:8px;font-size:13px;font-weight:600;color:var(--dim,#666e7a);background:var(--paper,#faf8f4);border:1px solid var(--line,#ddd7c9);border-radius:99px;padding:2px 10px;}' +
    '.fc-hint{position:absolute;bottom:10px;font-size:12px;color:var(--dim,#666e7a);}' +
    '.fc-say{position:absolute;top:10px;right:10px;font-size:20px;background:none;border:0;cursor:pointer;padding:6px;border-radius:8px;}' +
    '.fc-tag{position:absolute;top:12px;left:12px;font-size:12px;font-weight:700;color:var(--teal,#1f8f6c);}' +
    '.fc-nav{display:grid;grid-template-columns:52px 1fr 1fr 52px;gap:8px;margin-top:12px;}' +
    '.fc-nav button{font:inherit;font-weight:700;font-size:15px;border-radius:10px;padding:12px 6px;cursor:pointer;border:1.5px solid var(--line,#ddd7c9);background:var(--card,#fff);color:var(--ink,#1e232b);min-height:48px;}' +
    '.fc-nav .no{border-color:#d9a3a3;color:#9b2c2c;background:#fdf1f1;}' +
    '.fc-nav .yes{border-color:var(--teal,#1f8f6c);color:#fff;background:var(--teal,#1f8f6c);}' +
    '.fc-keys{margin:10px 0 0;font-size:12px;color:var(--dim,#666e7a);text-align:center;}' +
    '.fc-done{text-align:center;padding:26px 8px 8px;}' +
    '.fc-done .big{font-size:44px;}' +
    '.fc-done p{margin:6px 0;}' +
    '.fc-done button{font:inherit;font-weight:700;margin:6px 4px 0;border-radius:10px;padding:10px 14px;cursor:pointer;border:1.5px solid var(--amber,#a8691a);background:var(--card,#fff);color:var(--amber-ink,#6b4410);}' +
    '.fc-done button.main{background:var(--amber,#a8691a);color:#fff;}' +
    '@media (max-width:480px){.fc-card{height:220px}.fc-keys{display:none}}' +
    '@media (prefers-reduced-motion:reduce){.fc-card{transition:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  // ---------- 4. Nút mở ----------
  function openBtn(cls, html) {
    var b = document.createElement('button'); b.type = 'button'; b.className = cls; b.innerHTML = html;
    b.addEventListener('click', function () { open(); }); return b;
  }
  h2.parentNode.insertBefore(openBtn('fc-open', '🃏 Học bằng flashcard <small>(' + cards.length + ' từ)</small>'), h2.nextSibling);
  var sub = document.querySelector('main > .sub + h1 + .sub') || document.querySelector('main > h1');
  if (sub) sub.parentNode.insertBefore(openBtn('fc-jump', '🃏 Flashcard từ vựng'), sub.nextSibling);

  // ---------- 5. Hộp flashcard ----------
  var bg = document.createElement('div');
  bg.className = 'fc-bg';
  bg.innerHTML =
    '<div class="fc-box" role="dialog" aria-modal="true" aria-label="Flashcard từ vựng">' +
    '<div class="fc-head"><b>Flashcard từ vựng</b><button class="fc-x" type="button" aria-label="Đóng">✕</button></div>' +
    '<div class="fc-bar"><i></i></div>' +
    '<div class="fc-stat"><span class="fc-pos-n"></span><span class="fc-known-n"></span></div>' +
    '<div class="fc-tools">' +
    '<button type="button" data-t="dir" aria-pressed="false">Mặt trước: English</button>' +
    '<button type="button" data-t="mix" aria-pressed="false">🔀 Trộn thẻ</button>' +
    '<button type="button" data-t="only" aria-pressed="false">Chỉ từ chưa thuộc</button>' +
    '<button type="button" data-t="reset">↺ Làm lại từ đầu</button>' +
    '</div>' +
    '<div class="fc-main"></div>' +
    '</div>';
  document.body.appendChild(bg);
  var main = bg.querySelector('.fc-main');
  var tDir = bg.querySelector('[data-t=dir]'), tMix = bg.querySelector('[data-t=mix]'), tOnly = bg.querySelector('[data-t=only]');

  var viFirst = false, mixed = false, onlyNew = false;
  var deck = [], i = 0, flipped = false, lastFocus = null;

  function shuffle(a) { for (var k = a.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)); var t = a[k]; a[k] = a[j]; a[j] = t; } return a; }
  function build() {
    deck = cards.filter(function (c) { return !onlyNew || !known[c.en]; });
    if (mixed) shuffle(deck);
    i = 0; flipped = false; render();
  }
  function countKnown() { return cards.filter(function (c) { return known[c.en]; }).length; }
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var canSpeak = 'speechSynthesis' in window;
  function speak(text) {
    if (!canSpeak) return;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(text.replace(/\([^)]*\)/g, '').replace(/\//g, ', ').trim());
      u.lang = 'en-US'; u.rate = 0.9; speechSynthesis.speak(u);
    } catch (e) {}
  }

  function stats() {
    var k = countKnown();
    bg.querySelector('.fc-bar i').style.width = (k / cards.length * 100) + '%';
    bg.querySelector('.fc-known-n').textContent = 'Đã thuộc: ' + k + '/' + cards.length;
    bg.querySelector('.fc-pos-n').textContent = deck.length ? 'Thẻ ' + Math.min(i + 1, deck.length) + '/' + deck.length : '';
  }

  function render() {
    stats();
    if (!deck.length || i >= deck.length) { renderDone(); return; }
    var c = deck[i];
    var enFace = '<div class="fc-word">' + esc(c.en) + '</div>' + (c.pos ? '<span class="fc-pos">' + c.pos + '</span>' : '');
    var viFace = '<div class="fc-word">' + esc(c.vi) + '</div>';
    var front = viFirst ? viFace : enFace, back = viFirst ? enFace : viFace;
    var say = canSpeak ? '<button class="fc-say" type="button" aria-label="Nghe phát âm" title="Nghe phát âm">🔊</button>' : '';
    var tag = known[c.en] ? '<span class="fc-tag">✓ Đã thuộc</span>' : '';
    main.innerHTML =
      '<div class="fc-scene"><div class="fc-card' + (flipped ? ' flip' : '') + '" tabindex="0" role="button" aria-label="Lật thẻ">' +
      '<div class="fc-face">' + tag + (viFirst ? '' : say) + front + '<span class="fc-hint">Chạm để lật thẻ</span></div>' +
      '<div class="fc-face fc-back">' + tag + (viFirst ? say : '') + back + '</div>' +
      '</div></div>' +
      '<div class="fc-nav">' +
      '<button type="button" data-a="prev" aria-label="Thẻ trước">←</button>' +
      '<button type="button" class="no" data-a="no">Chưa thuộc</button>' +
      '<button type="button" class="yes" data-a="yes">Đã thuộc ✓</button>' +
      '<button type="button" data-a="next" aria-label="Thẻ sau">→</button>' +
      '</div>' +
      '<p class="fc-keys">Phím tắt: Space lật thẻ · ← → chuyển thẻ · 1 chưa thuộc · 2 đã thuộc</p>';
    var card = main.querySelector('.fc-card');
    card.addEventListener('click', function (e) { if (e.target.closest('.fc-say')) return; flip(); });
    [].forEach.call(main.querySelectorAll('.fc-say'), function (b) {
      b.addEventListener('click', function (e) { e.stopPropagation(); speak(c.en); });
    });
    swipe(card);
  }

  function renderDone() {
    var k = countKnown(), left = cards.length - k;
    main.innerHTML =
      '<div class="fc-done"><div class="big">' + (left ? '💪' : '🎉') + '</div>' +
      (left
        ? '<p><b>Xong một vòng!</b></p><p>Còn <b>' + left + '</b> từ chưa thuộc. Ôn lại mấy từ đó nhé.</p>' +
          '<button type="button" class="main" data-d="again">Ôn ' + left + ' từ chưa thuộc</button><button type="button" data-d="all">Xem lại tất cả</button>'
        : '<p><b>Giỏi quá, thuộc hết ' + cards.length + ' từ rồi!</b></p><p>Mai mở lại ôn thêm một lần cho nhớ lâu nha.</p>' +
          '<button type="button" class="main" data-d="all">Xem lại tất cả</button><button type="button" data-d="reset">↺ Làm lại từ đầu</button>') +
      '</div>';
  }

  function flip() { flipped = !flipped; var c = main.querySelector('.fc-card'); if (c) c.classList.toggle('flip', flipped); }
  function go(d) { if (!deck.length) return; i = Math.max(0, Math.min(deck.length, i + d)); if (i >= deck.length && d < 0) i = deck.length - 1; flipped = false; render(); }
  function mark(v) {
    if (i >= deck.length) return;
    var c = deck[i]; if (v) known[c.en] = 1; else delete known[c.en]; save();
    i++; flipped = false; render();
  }

  function swipe(el) {
    var x0 = null, y0 = null;
    el.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; y0 = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0, dy = e.changedTouches[0].clientY - y0; x0 = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) { e.preventDefault(); go(dx < 0 ? 1 : -1); }
    });
  }

  main.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var a = b.dataset.a, d = b.dataset.d;
    if (a === 'prev') go(-1); else if (a === 'next') go(1);
    else if (a === 'yes') mark(true); else if (a === 'no') mark(false);
    else if (d === 'again') { onlyNew = true; tOnly.setAttribute('aria-pressed', 'true'); build(); }
    else if (d === 'all') { onlyNew = false; tOnly.setAttribute('aria-pressed', 'false'); build(); }
    else if (d === 'reset') { known = {}; save(); onlyNew = false; tOnly.setAttribute('aria-pressed', 'false'); build(); }
  });
  bg.querySelector('.fc-tools').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var t = b.dataset.t;
    if (t === 'dir') { viFirst = !viFirst; b.textContent = 'Mặt trước: ' + (viFirst ? 'Tiếng Việt' : 'English'); b.setAttribute('aria-pressed', viFirst); flipped = false; render(); }
    else if (t === 'mix') { mixed = !mixed; b.setAttribute('aria-pressed', mixed); build(); }
    else if (t === 'only') { onlyNew = !onlyNew; b.setAttribute('aria-pressed', onlyNew); build(); }
    else if (t === 'reset') { known = {}; save(); build(); }
  });
  bg.querySelector('.fc-x').addEventListener('click', close);
  bg.addEventListener('click', function (e) { if (e.target === bg) close(); });

  document.addEventListener('keydown', function (e) {
    if (!bg.classList.contains('on')) return;
    if (e.key === 'Escape') { close(); return; }
    var inTools = e.target.closest && e.target.closest('.fc-tools, .fc-done, .fc-x');
    if (e.key === ' ' || e.key === 'Enter') { if (inTools || (e.target.tagName === 'BUTTON' && !e.target.classList.contains('fc-card'))) return; e.preventDefault(); flip(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    else if (e.key === '1') mark(false);
    else if (e.key === '2') mark(true);
  });

  function open() {
    lastFocus = document.activeElement;
    bg.classList.add('on'); document.documentElement.style.overflow = 'hidden';
    build();
    var c = main.querySelector('.fc-card'); if (c) c.focus();
  }
  function close() {
    bg.classList.remove('on'); document.documentElement.style.overflow = '';
    if (canSpeak) try { speechSynthesis.cancel(); } catch (e) {}
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
})();
