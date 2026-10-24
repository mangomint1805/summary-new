# TOEIC Pre · Tóm tắt kiến thức (giáo trình mới)

Tóm tắt kiến thức từng bài của khóa TOEIC Pre ver 3.0 (Reading, Listening và Weekly Revision), viết bằng tiếng Việt cho học viên mới bắt đầu, kèm bảng từ vựng của mỗi bài.

## Link nhanh

| Dùng để | Link |
|---|---|
| 🏠 Trang chủ (mở tất cả bài) | [mangomint1805.github.io/summary-new](https://mangomint1805.github.io/summary-new/) |
| 👩‍🏫 Chế độ giáo viên (lịch từng lớp, link gửi lớp) | [mangomint1805.github.io/summary-new/?gv](https://mangomint1805.github.io/summary-new/?gv) |

## Mã lớp và lịch mở bài

Học sinh vào trang chủ phải **nhập mã lớp** (hoặc mở link có sẵn mã, VD `…/summary-new/?lop=TOPRE115276`). Bài nào sẽ tự mở từ 0h ngày lớp học tới bài đó theo lịch 24 buổi; bài chưa tới hiện "🔒 Mở ngày …", mở thẳng link bài cũng bị chặn.

Thêm lớp mới / sửa lịch: mở file `docs/classes.js`, sửa danh sách `SN_CLASSES`:

```js
{ ma: 'TOPRE115276', ten: 'TOPRE115276 (2-4-6, 19h45 - 21h15)', khaiGiang: '2026-09-25', thu: [2, 4, 6], nghi: [] }
```

- `thu`: các thứ học (2 = Thứ 2 … 7 = Thứ 7, 8 = Chủ nhật).
- `nghi`: ngày lớp nghỉ (`'2026-11-20'`…), các buổi sau tự lùi lại.
- `moc`: (tuỳ chọn) `['2026-10-14', 7]` = tới ngày 14/10 lớp đã học xong buổi 7; các buổi sau tính tiếp từ mốc này. Dùng khi lớp chậm/nhanh hơn lịch.
- `hocToi`: (tuỳ chọn) ép mở tới buổi số mấy dù chưa tới ngày.

Khi học sinh vào lại web, nếu lớp có bài mới mở kể từ lần vào trước thì hiện thông báo ở cuối màn hình (máy học sinh tự nhớ, lần đầu vào không báo).

**Bắt đăng nhập:** mọi trang (trừ `thong-ke-gv.html` và chế độ `?gv`) đều yêu cầu đăng nhập Google trước khi xem (code ở cuối `docs/classes.js`, dùng `assets/acc.js`). Chỉ là khoá trên trình duyệt, không phải bảo mật thật.

Mở link `?gv` một lần trên máy của thầy để xem được mọi bài và xem lịch từng lớp. Đây chỉ là khoá đơn giản trên trình duyệt, không phải bảo mật thật.

## Flashcard từ vựng

Mỗi bài có nút **🃏 Flashcard từ vựng** (ở đầu bài và ngay trên bảng từ vựng). Thẻ được tạo tự động từ bảng từ vựng của bài, nên sửa bảng là thẻ đổi theo.

- Chạm vào thẻ để lật (English ↔ Tiếng Việt), có thể đổi mặt trước sang tiếng Việt.
- 🔊 nghe phát âm: phát từ file mp3 có sẵn (thư mục `docs/audio/`, 3 giọng Mỹ nữ / Mỹ nam / Anh nữ) nên điện thoại nào, mở trong Zalo/Messenger cũng nghe được. Có chọn **tốc độ** và **Tự đọc từ**; ai thích có thể chọn giọng có sẵn trên máy. Thêm từ mới thì chạy `python tools/make_audio.py <thư mục model>` để tạo file phát âm.
- 🔀 trộn thẻ, vuốt trái/phải trên điện thoại để chuyển thẻ; thẻ có hiệu ứng lật, trượt, đóng dấu ✅ / 🔁 và pháo giấy khi thuộc hết.
- Đánh dấu **Đã thuộc / Chưa thuộc**; hết một vòng có thể ôn riêng các từ chưa thuộc. Tiến độ được lưu trên máy của học sinh.
- Phím tắt trên máy tính: Space lật thẻ, ← → chuyển thẻ, 1 chưa thuộc, 2 đã thuộc.

## Reading

| Bài | Chủ điểm | Nội dung |
|---|---|---|
| Unit 1 | [Nouns & Pronouns](https://mangomint1805.github.io/summary-new/reading/unit-01-nouns-pronouns.html) | Danh từ & Đại từ |
| Unit 2 | [Adjectives, Adverbs & Comparison](https://mangomint1805.github.io/summary-new/reading/unit-02-adjectives-adverbs-comparison.html) | Tính từ, Trạng từ & So sánh |
| Unit 3 | [Verb Tenses](https://mangomint1805.github.io/summary-new/reading/unit-03-verb-tenses.html) | Các thì của động từ |
| Unit 4 | [Active & Passive Voice](https://mangomint1805.github.io/summary-new/reading/unit-04-active-passive-voice.html) | Câu chủ động & bị động |
| Unit 5 | [Participles](https://mangomint1805.github.io/summary-new/reading/unit-05-participles.html) | Phân từ |
| Unit 6 | [Conjunctions & Prepositions](https://mangomint1805.github.io/summary-new/reading/unit-06-conjunctions-prepositions.html) | Liên từ & Giới từ |
| Unit 7 | [Comparison](https://mangomint1805.github.io/summary-new/reading/unit-07-comparison.html) | So sánh hơn & so sánh nhất |

## Listening

| Bài | Chủ điểm | Nội dung |
|---|---|---|
| Unit 1 | [Part 1 – Photos of People](https://mangomint1805.github.io/summary-new/listening/unit-01-photos-of-people.html) | Tranh tả người |
| Unit 2 | [Part 1 – Photos of Objects & Scenes](https://mangomint1805.github.io/summary-new/listening/unit-02-photos-of-objects-scenes.html) | Tranh tả vật và cảnh |
| Unit 3 | [Part 2 – Information Questions](https://mangomint1805.github.io/summary-new/listening/unit-03-information-questions.html) | Câu hỏi Who / What / When / Where / Why / How |
| Unit 4 | [Part 2 – Yes/No Questions](https://mangomint1805.github.io/summary-new/listening/unit-04-yes-no-questions.html) | Câu hỏi Yes/No |
| Unit 5 | [Part 2 – Other Types of Questions](https://mangomint1805.github.io/summary-new/listening/unit-05-other-types-of-questions.html) | Các dạng câu hỏi khác |
| Unit 6 | [Part 3 – At the Office](https://mangomint1805.github.io/summary-new/listening/unit-06-at-the-office.html) | Hội thoại ở văn phòng |
| Unit 7 | [Part 3 – Daily Life](https://mangomint1805.github.io/summary-new/listening/unit-07-daily-life.html) | Hội thoại đời sống hằng ngày |
| Unit 8 | [Part 4 – Telephone Messages & Advertisements](https://mangomint1805.github.io/summary-new/listening/unit-08-telephone-messages-advertisements.html) | Tin nhắn thoại & quảng cáo |

## Weekly Revision

| Bài | Nội dung |
|---|---|
| [Weekly Revision 1](https://mangomint1805.github.io/summary-new/weekly/revision-1.html) | Ôn tập Listening Unit 1–2, Reading Unit 1–2 |
| [Weekly Revision 2](https://mangomint1805.github.io/summary-new/weekly/revision-2.html) | Ôn tập các thì của động từ |
| [Weekly Revision 3](https://mangomint1805.github.io/summary-new/weekly/revision-3.html) | Ôn tập Liên từ, Giới từ, Phân từ |
| [Weekly Revision 4](https://mangomint1805.github.io/summary-new/weekly/revision-4.html) | Ôn tập Sự hoà hợp (Agreement) |

## Ôn tập

| Bài | Nội dung |
|---|---|
| [Ôn tập sau Progress Test 1](https://mangomint1805.github.io/summary-new/review/progress-test-1.html) | Câu dễ sai trong Progress Test 1 và từ vựng (mở sau buổi 11) |
| [Ôn tập trước Progress Test 2](https://mangomint1805.github.io/summary-new/review/progress-test-2.html) | Checklist cả khoá, 22 câu luyện, từ vựng (mở sau buổi 22) |

## Chuyên đề

Bài tổng hợp theo chủ điểm ngữ pháp, dùng để ôn xuyên suốt khoá.

| # | Chuyên đề |
|---|---|
| 1 | [Phân biệt loại từ: Tính – Danh – Động – Trạng](https://mangomint1805.github.io/summary-new/chuyen-de/phan-biet-loai-tu.html) |
| 2 | [Đại từ trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/dai-tu.html) |
| 3 | [Các thì của động từ trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/thi-dong-tu.html) |
| 4 | [Câu bị động trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/cau-bi-dong.html) |
| 5 | [Giới từ thường gặp trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/gioi-tu.html) |
| 6 | [Liên từ trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/lien-tu.html) |
| 7 | [Đại từ quan hệ trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/dai-tu-quan-he.html) |
| 8 | [To V và V-ing trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/to-v-v-ing.html) |
| 9 | [So sánh trong TOEIC](https://mangomint1805.github.io/summary-new/chuyen-de/so-sanh.html) |
| 10 | [Sự hòa hợp chủ ngữ – động từ](https://mangomint1805.github.io/summary-new/chuyen-de/hoa-hop-chu-vi.html) |
| 11 | [Bẫy thường gặp ở Part 1](https://mangomint1805.github.io/summary-new/chuyen-de/bay-part-1.html) |
| 12 | [Câu trả lời gián tiếp ở Part 2](https://mangomint1805.github.io/summary-new/chuyen-de/tra-loi-gian-tiep-part-2.html) |
| 13 | [Nhận ra cách nói lại (paraphrase) ở Part 3–4](https://mangomint1805.github.io/summary-new/chuyen-de/paraphrase-part-3-4.html) |

## Cấu trúc thư mục

```
docs/
  index.html     trang chủ (nhập mã lớp; chế độ ?gv cho giáo viên)
  classes.js     danh sách lớp + lịch mở bài
  audio/         file phát âm từ vựng (tạo bằng tools/make_audio.py)
  style.css      giao diện chung
  extras.js      đánh dấu "đã ôn tập" + tìm kiếm trong các bài
  cap-nhat.html  trang "Có gì mới" (nội dung trong cap-nhat.js)
  thong-ke-gv.html  thống kê học viên cho giáo viên
  flashcards.js  flashcard từ vựng (tự đọc bảng từ vựng của mỗi bài)
  reading/       trang web từng bài Reading
  listening/     trang web từng bài Listening
  weekly/        trang web từng bài Weekly Revision
  review/        trang Ôn tập Progress Test 1, 2
  chuyen-de/     trang web từng chuyên đề ngữ pháp
```

GitHub Pages: Settings → Pages → Branch `main`, folder `/docs`.
