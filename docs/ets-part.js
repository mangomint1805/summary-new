/* Lối tắt "Làm thử đề ETS · Part X" cuối mỗi bài tóm tắt.
   Trang đặt <div class="ets-part" data-parts="5,6,7"></div>; mở web luyện ETS: test.html?t=N&m=pX (cần đăng nhập Google bên đó). */
(function () {
  var BASE = 'https://mangomint1805.github.io/toeic/test.html';
  var NAME = { 1: 'Mô tả tranh', 2: 'Hỏi – đáp', 3: 'Hội thoại', 4: 'Bài nói', 5: 'Điền câu', 6: 'Điền đoạn văn', 7: 'Đọc hiểu' };
  var css = '.ets-part{margin:28px 0 8px;padding:16px 18px;border:2px solid var(--teal,#0f766e);border-radius:14px;background:var(--teal-soft,#e6f4f1)}' +
    '.ets-part h2{margin:0 0 6px;font-size:1.15em}.ets-part p{margin:0 0 10px;color:var(--dim,#555);font-size:.95em}' +
    '.ets-part .row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}.ets-part select{font:inherit;padding:8px 10px;border-radius:10px;border:1px solid var(--line,#ccc);background:var(--card,#fff);color:var(--ink,#222)}' +
    '.ets-part a.btn{display:inline-block;padding:9px 14px;border-radius:10px;background:var(--teal,#0f766e);color:#fff;text-decoration:none;font-weight:700}.ets-part a.btn:hover{filter:brightness(1.1)}';
  function init() {
    var box = document.querySelector('.ets-part'); if (!box) return;
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var parts = (box.dataset.parts || '').split(',').map(Number).filter(Boolean);
    var key = 'summaryNew.etsT', t = 1; try { t = +localStorage.getItem(key) || 1; } catch (e) {}
    var opts = ''; for (var i = 1; i <= 20; i++) opts += '<option value="' + i + '"' + (i === t ? ' selected' : '') + '>' + (i <= 10 ? 'ETS 2026 · Test ' + i : 'ETS 2024 · Test ' + (i - 10)) + '</option>';
    box.innerHTML = '<h2>📝 Làm thử đề ETS · Part ' + parts.join(', ') + '</h2>' +
      '<p>Học xong thì làm thử các câu Part ' + parts.join(', ') + ' trong một đề ETS thật, nộp là có điểm và đáp án ngay. Lần đầu mở cần <b>đăng nhập Google</b> trên web luyện ETS.</p>' +
      '<div class="row"><select aria-label="Chọn đề">' + opts + '</select>' +
      parts.map(function (p) { return '<a class="btn" data-p="' + p + '" target="_blank" rel="noopener">Part ' + p + ' · ' + NAME[p] + '</a>'; }).join('') + '</div>';
    var sel = box.querySelector('select');
    function upd() { box.querySelectorAll('a.btn').forEach(function (a) { a.href = BASE + '?t=' + sel.value + '&m=p' + a.dataset.p; }); try { localStorage.setItem(key, sel.value); } catch (e) {} }
    sel.onchange = upd; upd();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
