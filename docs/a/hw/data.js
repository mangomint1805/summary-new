/* Bài tập về nhà TOEIC A (lớp TOA117110) – dữ liệu câu hỏi và đáp án.
   Mỗi bài: id, buoi (bài mở sau giờ học của buổi này), tieuDe, phan: [...]
   Loại câu:  mcq  – trắc nghiệm có chữ: { q, o: [...], a: 'A' }
              pic  – nghe tranh: { img, a, s: [lời thoại 4 phương án] }
              resp – nghe hỏi đáp chỉ có (A)(B)(C): { a, s: [câu hỏi, (A), (B), (C)] }
              gap  – điền từ khi nghe: { t: 'câu có [đáp án|đáp án khác]' }
   Phần (phan): { ten, huongDan, audio?, doan? (đoạn văn), cau: [...] , noi? (luyện nói, không chấm) } */
var HW_CLASS = 'TOA117110';
var HW_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx_VHnMwGwVRyDKMUe561FjNTQCC7TcsnhiX1pr9DF_g8B8J7SeRK4p-tu7OvDdy9y-/exec'; // link web app Google Apps Script (gửi kết quả về Google Sheet); để trống = chỉ tự chấm

var HW_LIST = [
{
  id: 'u1l1', buoi: 1, tieuDe: 'Unit 1 · Lesson 1 · Reading Part 5, 6, 7',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'The hotel manager reviewed all customer ______ before making changes to the reservation policy.', o: ['complain', 'complains', 'complaints', 'complained'], a: 'C' },
      { k: 'mcq', q: 'Mr. Wilson forgot his room key, so the receptionist gave ______ a temporary card.', o: ['he', 'his', 'him', 'himself'], a: 'C' },
      { k: 'mcq', q: 'Several ______ requested extra pillows during their stay at the hotel.', o: ['guest', 'guests', 'guesting', "guest's"], a: 'B' },
      { k: 'mcq', q: "The restaurant is known for its ______ cuisine, which includes dishes from tropical countries.", o: ['patron', 'flavor', 'exotic', 'revenue'], a: 'C' },
      { k: 'mcq', q: "The chef uses fresh ______ to prepare the restaurant's signature dishes.", o: ['ingredients', 'reservations', 'revenues', 'diners'], a: 'A' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Read the following text and choose the correct answer.', so: 6,
      doan: '<p><b>To:</b> Restaurant Staff<br><b>From:</b> Emily Carter, Restaurant Manager<br><b>Date:</b> September 5<br><b>Subject:</b> New Vegetarian Menu</p><p>Dear Team,</p><p>Beginning next week, we will introduce a new vegetarian menu to attract more customers. The menu includes several dishes made with fresh vegetables and high-quality <b>(6) ______</b>.</p><p>Please explain the new menu items to customers and answer any questions they may have. If customers have special dietary requests, assist <b>(7) ______</b> politely and professionally.</p><p>We expect the new menu to increase customer satisfaction and generate additional <b>(8) ______</b> for the restaurant.</p><p><b>(9) ______</b> Thank you for your cooperation.</p><p>Best regards,<br>Emily Carter</p>',
      cau: [
      { k: 'mcq', o: ['ingredients', 'reservations', 'attendants', 'receptions'], a: 'A' },
      { k: 'mcq', o: ['they', 'them', 'their', 'theirs'], a: 'B' },
      { k: 'mcq', o: ['revenue', 'equipment', 'reservation', 'receptionist'], a: 'A' },
      { k: 'mcq', o: ['A training session will be held on Friday to explain the new menu items.', 'Customers can make reservations through our website at any time.', 'The restaurant will remain open during the upcoming holiday weekend.', 'The new menu has already received positive feedback from several customers.'], a: 'A' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Read the following text and choose the correct answer.', so: 10,
      doan: '<p style="text-align:center"><b>Notice</b><br>Ocean View Hotel</p><p>Starting October 1, guests can order breakfast through our mobile application. Orders placed before 10:00 P.M. will be delivered to guest rooms between 6:30 A.M. and 8:00 A.M. the following morning.</p><p>Guests may choose from several breakfast options, including vegetarian meals and fresh fruit. This service is available at no additional charge for guests staying in premium rooms.</p><p>Thank you for choosing Ocean View Hotel.</p>',
      cau: [
      { k: 'mcq', q: 'According to the notice, what can guests use the mobile application for?', o: ['Scheduling airport transportation', 'Ordering breakfast to their rooms', 'Updating room reservations', 'Contacting hotel management'], a: 'B' },
      { k: 'mcq', q: 'Who can use the breakfast delivery service without paying extra?', o: ['All visitors', 'Restaurant employees', 'Premium room guests', 'Travel agents'], a: 'C' }
    ]}
  ]
},
{
  id: 'u1l2', buoi: 2, tieuDe: 'Unit 1 · Lesson 2 · Listening Part 1',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen and choose the best description for each photo. (Track 5)', audio: 'audio/u1l2-track5.mp3', cau: [
      { k: 'pic', img: 'img/u1l2-1.jpg', a: 'C', s: ['The woman is carrying some food.', 'The woman is wiping off a table.', 'The man is talking to a server.', 'The man is picking up some silverware.'] },
      { k: 'pic', img: 'img/u1l2-2.jpg', a: 'A', s: ['A beverage is being poured into a glass.', 'Some flowers are being arranged in a vase.', 'A woman is folding a napkin.', 'A woman is wiping off a table.'] },
      { k: 'pic', img: 'img/u1l2-3.jpg', a: 'B', s: ['They are having coffee inside a café.', 'They are looking at the screen of a mobile device.', 'One of the men is reaching for something on the table.', 'One of the men is adjusting some sliding windows.'] },
      { k: 'pic', img: 'img/u1l2-4.jpg', a: 'B', s: ['One of the women is wearing a scarf.', 'The women are talking to each other.', 'The man is pouring coffee into a cup.', 'The people are closing their menus.'] },
      { k: 'pic', img: 'img/u1l2-5.jpg', a: 'A', s: ['A cashier is leaning over a cash register.', 'A cashier is placing money on a countertop.', 'A customer is carrying a tray with beverages.', 'A customer is reaching for a bowl.'] },
      { k: 'pic', img: 'img/u1l2-6.jpg', a: 'B', s: ['A display is being stocked with sandwiches.', 'Prepared food is being weighed on a scale.', 'Some people are clearing trays from a work area.', 'Baking tools have been stored in cabinets.'] }
    ]},
    { ten: 'Exercise 2 · Luyện nói (không chấm điểm)', huongDan: 'Answer the questions aloud. Record your speaking with your phone and send it to your teacher if he asks.',
      noi: ['How often do you eat in restaurants?', 'Are restaurants popular in Vietnam?'], cau: [] }
  ]
},
{
  id: 'u1l3', buoi: 3, tieuDe: 'Unit 1 · Lesson 3 · Thực chiến đề thi (1)',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen and choose the best description for each photo. (Track 03)', audio: 'audio/u1l3-track03.mp3', cau: [
      { k: 'pic', img: 'img/u1l3-1.jpg', a: 'D', s: ['A chair is being pushed in.', 'One of the women is picking up a plate.', 'A man is carrying luggage into the room.', 'One of the men is pointing at the menu.'] },
      { k: 'pic', img: 'img/u1l3-2.jpg', a: 'A', s: ['Some artwork is mounted on a wall.', 'A dresser drawer has been left open.', 'Some chairs are stacked in a corner.', 'Magazines are scattered on the floor.'] },
      { k: 'pic', img: 'img/u1l3-3.jpg', a: 'C', s: ["She's getting on a bus.", "She's grasping a door handle.", "She's pulling some wheeled luggage.", "She's walking through an outdoor park entrance."] },
      { k: 'pic', img: 'img/u1l3-4.jpg', a: 'C', s: ['A woman is cleaning the floor.', 'Bottles are being placed on shelves.', 'A woman is holding a bowl.', 'A customer is reading a menu.'] },
      { k: 'pic', img: 'img/u1l3-5.jpg', a: 'B', s: ['A tablecloth is folded on a chair.', 'A dining area is prepared for a meal.', 'Some chairs are being moved to a different room.', 'Cups and plates are being filled.'] },
      { k: 'pic', img: 'img/u1l3-6.jpg', a: 'D', s: ['A suitcase is placed next to the bed.', 'The curtains are being opened.', 'A lamp is turned on beside the bed.', 'Towels are folded on the bed.'] }
    ]},
    { ten: 'Exercise 2', huongDan: 'Choose the best answer.', cau: [
      { k: 'mcq', q: 'The hotel offers a wide ______ of services for all guests.', o: ['variety', 'hand over', 'budget', 'widely'], a: 'A' },
      { k: 'mcq', q: 'You should make a ______ in advance to secure a table.', o: ['reservation', 'suitcase', 'take', 'making'], a: 'A' },
      { k: 'mcq', q: 'The chef is ______ acclaimed for his outstanding dishes.', o: ['internationally', 'international', 'demonstration', 'local'], a: 'A' },
      { k: 'mcq', q: 'The menu includes several meat ______ for customers who do not eat meat.', o: ['participating', 'available', 'substitutes', 'judge'], a: 'C' },
      { k: 'mcq', q: "Tourists come here to try the restaurant's ______.", o: ['exotically dishes', 'exotic dishes', 'dishes exotic', 'exotic dish'], a: 'B' },
      { k: 'mcq', q: 'A well-known ______ recently reviewed the hotel.', o: ['food critic', 'food criticize', 'critic food', 'critic foods'], a: 'A' },
      { k: 'mcq', q: 'The hotel provides special meals for ______ guests.', o: ['vegetable', 'vegetarian', 'vegetate', 'vegetarians'], a: 'B' },
      { k: 'mcq', q: 'The hotel provides free Wi-Fi and other ______ for all guests.', o: ['entrees', 'ingredients', 'amenities', 'patrons'], a: 'C' },
      { k: 'mcq', q: 'Guests can enjoy a variety of ______ dishes from around the world.', o: ['permanent', 'broken', 'frozen', 'exotic'], a: 'D' },
      { k: 'mcq', q: 'Each room has a small kitchen equipped with all necessary ______ for cooking.', o: ['revenue', 'utensils', 'appetizers', 'beverages'], a: 'B' },
      { k: 'mcq', q: 'The chef prepares ______ using only fresh, local vegetables.', o: ['vegetarian options', 'reservations', 'banquet halls', 'patrons'], a: 'A' },
      { k: 'mcq', q: 'Before the main course, customers are offered a complimentary ______.', o: ['appetizer', 'entrée', 'cuisine', 'ingredient'], a: 'A' },
      { k: 'mcq', q: 'For the main course, diners can choose between beef, chicken, or fish as the ______.', o: ['entrée', 'patron', 'ingredient', 'revenue'], a: 'A' },
      { k: 'mcq', q: 'Many people prefer to ______ rather than cook at home.', o: ['reserve', 'accommodate', 'garnish', 'dine out'], a: 'D' },
      { k: 'mcq', q: 'The restaurant aims to ______ guests with a pleasant and comfortable environment.', o: ['accommodate', 'extract', 'serve', 'dine'], a: 'A' },
      { k: 'mcq', q: 'All dishes are made with fresh, high-quality ______ sourced from local farms.', o: ['appetizers', 'ingredients', 'entrees', 'patrons'], a: 'B' },
      { k: 'mcq', q: 'The hotel manager thanked all the ______ for choosing their restaurant for the evening.', o: ['patrons', 'cuisines', 'utensils', 'revenues'], a: 'A' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Read the following e-mail and choose the correct answer.',
      doan: "<p><b>To:</b> Janet LaPorta<br><b>From:</b> Cathy Park<br><b>Subject:</b> End-of-year party<br><b>Date:</b> 11/01</p><p>Hi Janet, I just came across this website and thought they might be able to <b>(1) ______</b> catering services for our annual end-of-year party. Their customers seem to be quite satisfied <b>(2) ______</b> the services and food the company offers. Since there isn't much time left for planning the party, we'd better get started soon. Can you first do a survey on the date and venue for the party? A number of people may be busy with their families on Saturdays and Sundays, so Friday or Thursday night might be a better choice. Can you also call La Paloma to schedule a consultation to choose the menu for fifty people at our designated location? <b>(3) ______</b>. By the way, I'm curious if they do buffet style dinners with on-site chefs. I think buffet style might be better for us since some of our employees are <b>(4) ______</b>.</p><p>Cathy Park<br>Human Resources Department<br>Dalta Tech Inc.</p>",
      cau: [
      { k: 'mcq', o: ['provide', 'providing', 'provided', 'provides'], a: 'A' },
      { k: 'mcq', o: ['on', 'with', 'in', 'at'], a: 'B' },
      { k: 'mcq', o: ['I have already canceled the event.', 'I am not interested in organizing the party.', 'The office will be closed tomorrow.', 'Get a quote for a party of this size'], a: 'D' },
      { k: 'mcq', o: ['beverages', 'venue', 'vegetarians', 'accommodations'], a: 'C' }
    ]}
  ]
},
{
  id: 'u2l1', buoi: 4, tieuDe: 'Unit 2 · Lesson 1 · Reading Part 5, 6, 7',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'The project manager gave a very ______ explanation of the new proposal.', o: ['clearly', 'clarity', 'clear', 'clearing'], a: 'C' },
      { k: 'mcq', q: 'All attendees listened ______ while the chairman presented the quarterly report.', o: ['attentive', 'attention', 'attentively', 'attend'], a: 'C' },
      { k: 'mcq', q: 'The conference room was surprisingly ______ despite the large number of participants.', o: ['quiet', 'quietly', 'quietness', 'quieted'], a: 'A' },
      { k: 'mcq', q: 'All department heads are required to attend the budget ______ next Tuesday.', o: ['distribution', 'meeting', 'attendee', 'proposal'], a: 'B' },
      { k: 'mcq', q: 'Please review the ______ before the meeting so that all topics can be discussed efficiently.', o: ['conference', 'attendance', 'agenda', 'client'], a: 'C' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Read the following text and choose the correct answer.', so: 6,
      doan: '<p style="text-align:center"><b>Office Announcement</b></p><p>The quarterly planning meeting will take place on Thursday, November 12, in the main conference room. During the meeting, department managers will review recent performance and discuss goals for the upcoming quarter. To ensure that the discussion runs smoothly, employees are asked to arrive <b>(6) ______</b> and bring any documents that may be needed. A copy of the meeting agenda has already been distributed to all staff members. The meeting will focus on customer feedback and sales performance. <b>(7) ______</b>, department managers will discuss plans for expanding services next year. <b>(8) ______</b> At the end of the meeting, all attendees will be asked to complete a short feedback form before leaving the conference room. The feedback will be reviewed by the management <b>(9) ______</b> next week.</p>',
      cau: [
      { k: 'mcq', o: ['punctual', 'punctually', 'punctuality', 'punctuate'], a: 'B' },
      { k: 'mcq', o: ['However', 'In addition', 'Instead', 'Otherwise'], a: 'B' },
      { k: 'mcq', o: ['Employees will have time to ask questions during the meeting.', 'The final sales report will be released next month.', 'Refreshments will be available after the meeting ends.', 'Several conference rooms are being renovated this week.'], a: 'A' },
      { k: 'mcq', o: ['conference', 'attendee', 'proposal', 'team'], a: 'D' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Read the following e-mail and choose the correct answer.', so: 10,
      doan: '<p><b>To:</b> All Employees<br><b>From:</b> Human Resources Department<br><b>Date:</b> November 3<br><b>Subject:</b> Training Workshop</p><p>Dear Employees,</p><p>The Human Resources Department will hold a training workshop on Friday, November 14, from 9:00 A.M. to 12:00 P.M. in the main conference room.</p><p>The workshop will focus on communication skills and effective teamwork. Employees will participate in several group activities and discussions led by professional trainers.</p><p>Because seating is limited, employees who wish to attend must register by November 10. Refreshments will be provided during the break.</p><p>For additional information, please contact the Human Resources Department.</p>',
      cau: [
      { k: 'mcq', q: 'What is the purpose of the e-mail?', o: ['To announce a training workshop', 'To introduce a new employee', 'To report quarterly sales results', 'To request additional office equipment'], a: 'A' },
      { k: 'mcq', q: 'What is indicated about the workshop?', o: ['It will last the entire day.', 'It will include group activities.', 'It is open only to managers.', 'It will be conducted online.'], a: 'B' },
      { k: 'mcq', q: 'What must employees do if they want to attend?', o: ['Pay a registration fee', 'Contact a professional trainer', 'Register before November 10', 'Submit a written report'], a: 'C' }
    ]}
  ]
},
{
  id: 'u2l2', buoi: 5, tieuDe: 'Unit 2 · Lesson 2 · Listening Part 2',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen and choose the best response to each question. (Track 4)', audio: 'audio/u2l2-track4.mp3', cau: [
      { k: 'resp', a: 'A', s: ['What time does the bank open?', 'At nine o’clock.', 'On Wednesday.', 'Yes, it’s close to the ATM.'] },
      { k: 'resp', a: 'B', s: ['Who chose the hotel for the New York conference?', 'Maybe next month.', 'Ms. Choi from Human Resources.', 'For five days.'] },
      { k: 'resp', a: 'A', s: ['Which restaurant did you book for tonight?', 'Ruth Dining downtown.', 'Yes, the food was great.', 'It’s seven o’clock.'] },
      { k: 'resp', a: 'A', s: ['Who should I talk to about the office equipment?', 'Mr. Simpson on the management team.', 'Yes, that’s a new copy machine.', 'It’s on level four.'] },
      { k: 'resp', a: 'A', s: ['Which advertisement do you like better, the green one or the red one?', 'The green one seems better.', 'Yes, the red one.', 'That’s a good choice.'] },
      { k: 'resp', a: 'B', s: ['What is the fastest way to get to Central Station?', 'It will take 20 minutes.', 'Take the number 6 bus.', 'Usually at least once a month.'] },
      { k: 'resp', a: 'B', s: ['When is the next meeting at the district office?', 'Just down the street.', 'On the last Thursday of the month.', 'To discuss the parking lot issue.'] },
      { k: 'resp', a: 'A', s: ['Where should I meet you at the hotel?', 'In the lobby.', 'All the rooms were booked.', 'It starts at seven o’clock.'] },
      { k: 'resp', a: 'B', s: ['How many rooms did you reserve?', 'Yes, it had a lot of rooms.', 'Five of them.', 'For the company workshop.'] },
      { k: 'resp', a: 'C', s: ['How long will it take to repaint the office?', 'Eric can do it.', 'Once a year.', 'About three days.'] },
      { k: 'resp', a: 'A', s: ['How often do you go to the art gallery?', 'Once in a while.', 'The paintings were extraordinary.', 'Sorry, I will be away on business.'] },
      { k: 'resp', a: 'B', s: ['Are you still reading the book I lent you?', 'The rent is reasonable.', 'I finished it a few days ago.', 'From the public library.'] },
      { k: 'resp', a: 'A', s: ['Do you have time to review this draft?', 'Sure, when is good for you?', 'Sorry, but I didn’t finish the draft.', 'I don’t have the time.'] },
      { k: 'resp', a: 'B', s: ['Will you need anything while I am out?', 'Mr. Brown just stepped out.', 'I will call you if I need anything.', 'I didn’t say anything.'] },
      { k: 'resp', a: 'B', s: ['Does this bus go to the subway station?', 'The subway station is a long way to walk.', 'No, take the other one.', 'The subway is not running now.'] },
      { k: 'resp', a: 'A', s: ['Would you like to sit indoors or outdoors?', 'I like some fresh air.', 'It’s not necessary.', 'I would like to reserve a table.'] },
      { k: 'resp', a: 'B', s: ['We might have to cancel the employee picnic.', 'Which holiday resort?', 'Isn’t it too late to cancel?', 'Yes, everyone was there.'] },
      { k: 'resp', a: 'B', s: ['I will introduce you to our new staff member.', 'Don’t you like him?', 'I think I’ve met him.', 'In meeting room five.'] }
    ]},
    { ten: 'Exercise 2', huongDan: 'Listen again and fill in the blanks to complete the sentences. (Track 4) Gõ từ còn thiếu vào ô trống.', audio: 'audio/u2l2-track4.mp3', cau: [
      { k: 'gap', t: '[What time] does the [bank] open?<br>(A) At [nine o’clock|9 o’clock|9:00|nine].<br>(B) On [Wednesday].<br>(C) Yes, it’s close to the ATM.' },
      { k: 'gap', t: '[Who] chose the hotel for the New York [conference]?<br>(A) Maybe next month.<br>(B) Ms. Choi from [Human Resources|HR].<br>(C) For five days.' },
      { k: 'gap', t: '[Which restaurant] did you book for tonight?<br>(A) Ruth Dining [downtown].<br>(B) Yes, the [food] was great.<br>(C) It’s [seven o’clock|7 o’clock|7:00|seven].' },
      { k: 'gap', t: '[Who] should I talk to about the [office equipment]?<br>(A) [Mr. Simpson|Mr Simpson|Simpson] on the management team.<br>(B) Yes, that’s a new [copy machine].<br>(C) It’s on level four.' },
      { k: 'gap', t: '[Which] advertisement do you like better, the green one or [the red one|red one]?<br>(A) [The green one|green one] seems better.<br>(B) Yes, the red one.<br>(C) That’s a [good choice].' },
      { k: 'gap', t: 'What is the [fastest way] to get to Central Station?<br>(A) It will take [20 minutes|twenty minutes].<br>(B) [Take] the number 6 bus.<br>(C) Usually at least [once a month].' },
      { k: 'gap', t: '[When] is the next [meeting] at the district office?<br>(A) Just [down the street].<br>(B) On the last [Thursday] of the month.<br>(C) To [discuss] the parking lot issue.' },
      { k: 'gap', t: '[Where] should I meet you at the hotel?<br>(A) In the [lobby].<br>(B) All the [rooms] were booked.<br>(C) It [starts] at seven o’clock.' },
      { k: 'gap', t: '[How many] rooms did you reserve?<br>(A) Yes, it had a lot of [rooms].<br>(B) [Five|5] of them.<br>(C) For the company workshop.' },
      { k: 'gap', t: '[How long] will it take to repaint the office?<br>(A) Eric can do it.<br>(B) [Once a year].<br>(C) About [three days|3 days].' },
      { k: 'gap', t: '[How often] do you go to the art gallery?<br>(A) [Once] in a while.<br>(B) The [paintings] were extraordinary.<br>(C) Sorry, I will be away on [business].' },
      { k: 'gap', t: 'Are you still [reading the book] I lent you?<br>(A) The rent is [reasonable].<br>(B) I [finished] it a few days ago.<br>(C) From the public [library].' },
      { k: 'gap', t: 'Do you have time to [review this draft]?<br>(A) [Sure], when is good for you?<br>(B) Sorry, but I didn’t [finish] the draft.<br>(C) I don’t have [the time|time].' },
      { k: 'gap', t: '[Will] you need anything while I am out?<br>(A) Mr. Brown just [stepped out].<br>(B) I will [call] you if I need anything.<br>(C) I didn’t [say] anything.' },
      { k: 'gap', t: 'Does this bus go to the [subway station]?<br>(A) The [subway] station is a long way to walk.<br>(B) No, take [the other one].<br>(C) The subway is not running now.' },
      { k: 'gap', t: 'Would you like to sit [indoors] or [outdoors]?<br>(A) I like some [fresh air].<br>(B) It’s not necessary.<br>(C) I would like to [reserve a table].' },
      { k: 'gap', t: 'We might have to [cancel] the employee picnic.<br>(A) [Which] holiday resort?<br>(B) Isn’t it [too late] to cancel?<br>(C) Yes, everyone was there.' },
      { k: 'gap', t: 'I will [introduce] you to our new staff [member].<br>(A) Don’t you like him?<br>(B) I think [I’ve met him|I have met him].<br>(C) In [meeting room] five.' }
    ]}
  ]
},
{
  id: 'u2l3', buoi: 6, tieuDe: 'Unit 2 · Lesson 3 · Thực chiến đề thi (2)',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen to the questions and choose the best answer. (Track 04)', audio: 'audio/u2l3-track04.mp3', cau: [
      { k: 'resp', a: 'C', s: ['Did you hire someone to replace Jeffrey?', 'Sometime next week.', 'No, we have to order new parts.', 'Yes, she will start next Monday.'] },
      { k: 'resp', a: 'A', s: ['Why are we getting new keys for the conference room?', 'They are changing the locks.', 'The new secretary starts next week.', 'Next to the locksmith’s.'] },
      { k: 'resp', a: 'A', s: ['Our deadline has been extended to next Wednesday.', 'That’s good news.', 'Extension 135, I think.', 'Yes, we need more money.'] },
      { k: 'resp', a: 'C', s: ['Has the mail for our department arrived yet?', 'We haven’t received any phone calls.', 'Yes, we should put extra postage.', 'I’ll go check right away.'] },
      { k: 'resp', a: 'B', s: ['Where should I send the updated sales report?', 'By seven o’clock.', 'To the Milwaukee office.', 'The sales are up to 10 percent.'] },
      { k: 'resp', a: 'B', s: ['Which building will the new employees work at tomorrow?', 'No, he’s not that new.', 'At the Emerson Building.', 'We don’t work on the weekend.'] },
      { k: 'resp', a: 'B', s: ['What did Mr. Peterson say about my proposal?', 'The office was moved last week.', 'He said it was quite reasonable.', 'I don’t think he will be here soon.'] },
      { k: 'resp', a: 'C', s: ['Haven’t you signed the contract with Fair Trading?', 'The contact number has been changed.', 'Yes, it was excellent design.', 'No, I need to review it first.'] },
      { k: 'resp', a: 'A', s: ['We would like you to work with us in the product development team.', 'That sounds interesting.', 'The due date has been postponed.', 'Yes, I’ll have one more please.'] },
      { k: 'resp', a: 'A', s: ['Does Mr. Kenneth know the accounting meeting date has been changed?', 'Yes, I informed him yesterday.', 'No, the reservation was cancelled.', 'Nobody knows what’s going on.'] }
    ]},
    { ten: 'Exercise 2', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'The administrative assistant will distribute the revised agenda ______ before the morning meeting begins.', o: ['prompt', 'promptly', 'promptness', 'more prompt'], a: 'B' },
      { k: 'mcq', q: 'The board members requested a ______ proposal regarding the expansion of the branch office.', o: ['detail', 'detailed', 'details', 'detailing'], a: 'B' },
      { k: 'mcq', q: 'Conference attendees are required to wear ______ name badges at all times inside the main hall.', o: ['they', 'them', 'their', 'theirs'], a: 'C' },
      { k: 'mcq', q: 'Thorough ______ is necessary before giving a presentation to the executive board.', o: ['prepare', 'prepared', 'preparation', 'preparative'], a: 'C' },
      { k: 'mcq', q: 'Before wrapping up the meeting, Ms. Carter ______ reviewed each team member’s annual performance.', o: ['thorough', 'thoroughly', 'thoroughness', 'most thorough'], a: 'B' },
      { k: 'mcq', q: 'The marketing team organized several ______ promotional events to launch the new product line.', o: ['succeed', 'success', 'successful', 'successfully'], a: 'C' },
      { k: 'mcq', q: 'An extended ______ about the new budget proposal will take place in Conference Room A.', o: ['discuss', 'discussion', 'discussing', 'discussant'], a: 'B' },
      { k: 'mcq', q: 'Mr. Vance ______ ordered the required office supplies before sending out the inventory report.', o: ['he', 'his', 'him', 'himself'], a: 'D' },
      { k: 'mcq', q: 'The manager in charge of the regional branch office is ______ for overseeing daily operations.', o: ['responsible', 'responsibly', 'responsibility', 'responsibilities'], a: 'A' },
      { k: 'mcq', q: 'Attendance at yesterday’s emergency meeting was ______ high despite the bad weather.', o: ['exception', 'exceptional', 'exceptionally', 'exceptions'], a: 'C' },
      { k: 'mcq', q: 'The principal ______ of the project proposal explained the key financial points very clearly.', o: ['present', 'presenter', 'presentation', 'presently'], a: 'B' },
      { k: 'mcq', q: 'To wrap up the discussion on schedule, the chairperson maintained an ______ agenda.', o: ['efficient', 'efficiently', 'efficiency', 'efficiencies'], a: 'A' },
      { k: 'mcq', q: 'The organizers sent out invitations to ______ who registered to attend the international conference.', o: ['someone', 'everyone', 'something', 'anything'], a: 'B' },
      { k: 'mcq', q: 'Performance review documents must be distributed ______ to protect employee privacy.', o: ['confidential', 'confidentially', 'confidentiality', 'more confidential'], a: 'B' },
      { k: 'mcq', q: 'All extra office supplies should be kept in an ______ storage cabinet near the entrance.', o: ['access', 'accessible', 'accessibly', 'accessibility'], a: 'B' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Questions 1-4 refer to the following memorandum.',
      doan: '<p><b>To:</b> All Regional Managers<br><b>From:</b> Sarah Jenkins, Executive Director<br><b>Date:</b> November 15<br><b>Subject:</b> Annual Strategy Meeting &amp; Performance Review</p><p>Please be advised that our annual regional meeting will take place on December 5 in Conference Room 3B. The primary objective of this meeting is to review our branch office performance and discuss strategy for the upcoming year.</p><p>To ensure that the meeting proceeds <b>(1) ______</b>, all attendees are requested to review the attached agenda beforehand. Mr. Robert Vance will give a <b>(2) ______</b> presentation on the upcoming product launch before we begin our open discussion. <b>(3) ______</b>.</p><p>After we wrap up the main presentation, team leaders will distribute the revised project proposals and examine each plan <b>(4) ______</b> before making final decisions.</p><p>Thank you for your cooperation and prompt attention to this matter.</p>',
      cau: [
      { k: 'mcq', o: ['efficient', 'efficiently', 'efficiency', 'efficiencies'], a: 'B' },
      { k: 'mcq', o: ['clear', 'clearly', 'clearness', 'clarify'], a: 'A' },
      { k: 'mcq', o: ['Please arrive at least ten minutes before the scheduled start time.', 'The branch office will be closed for national holidays next week.', 'Office supplies must be ordered through the online portal.', 'Lunch will be served at a nearby local restaurant after the conference.'], a: 'A' },
      { k: 'mcq', o: ['thorough', 'thoroughly', 'thoroughness', 'most thorough'], a: 'B' }
    ]}
  ]
},
{
  id: 'u3l1', buoi: 7, tieuDe: 'Unit 3 · Lesson 1 · Reading Part 5, 6, 7',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'All travel arrangements for the business trip will ______ by the administrative department.', o: ['approve', 'be approved', 'approving', 'approved'], a: 'B' },
      { k: 'mcq', q: 'The manager confirmed that the team ______ to Singapore next Monday.', o: ['travels', 'traveled', 'will travel', 'has traveled'], a: 'C' },
      { k: 'mcq', q: 'If the flight ______ due to weather conditions, employees will be informed immediately.', o: ['delay', 'delays', 'was delayed', 'is delayed'], a: 'D' },
      { k: 'mcq', q: 'Employees are required to submit their travel reports ______ returning from the trip.', o: ['before', 'during', 'while', 'after'], a: 'D' },
      { k: 'mcq', q: 'Employees traveling abroad are advised to ______ local customs to avoid misunderstandings during meetings.', o: ['observe', 'attend', 'manage', 'operate'], a: 'A' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Read the following text and choose the correct answer.', so: 6,
      doan: '<p style="text-align:center"><b>Overseas Business Trip Notice</b></p><p>Several employees will be traveling to Singapore next month for an overseas business trip. The trip is intended to strengthen partnerships with international clients and attend a series of professional meetings.</p><p>Before departure, all travel arrangements <b>(6) ______</b> by the administrative department, including flight tickets and hotel reservations. Employees are advised to review the itinerary carefully once it is finalized. <b>(7) ______</b> If there are any changes to the travel schedule, staff members will be notified immediately. <b>(8) ______</b>, travelers should arrive at the airport at least three hours before their scheduled departure time.</p><p>After returning from the trip, a brief report <b>(9) ______</b> to the department supervisor within three business days, summarizing key outcomes and recommendations.</p>',
      cau: [
      { k: 'mcq', o: ['arrange', 'arranged', 'will arrange', 'will be arranged'], a: 'D' },
      { k: 'mcq', o: ['Employees should also check that their passports remain valid for at least six months before departure.', 'The company has recently expanded its office space to accommodate new employees.', 'Staff members are encouraged to participate in the annual sports festival next month.', 'The marketing department has launched a new advertising campaign for international customers.'], a: 'A' },
      { k: 'mcq', o: ['However', 'For example', 'In addition', 'Otherwise'], a: 'C' },
      { k: 'mcq', o: ['must submit', 'submitted', 'will submits', 'will be submitted'], a: 'D' }
    ]},
    { ten: 'Exercise 3 · Part 7', huongDan: 'Read the following e-mail and choose the correct answer.', so: 10,
      doan: '<p><b>To:</b> All Sales Staff<br><b>From:</b> Travel Coordinator<br><b>Subject:</b> Upcoming Business Trip to Singapore</p><p>This email is to confirm details regarding the upcoming business trip to Singapore scheduled for early December. During the trip, employees will attend meetings with regional partners and participate in training sessions.</p><p>Flight and hotel arrangements will be finalized next week. Travelers are reminded to check their passports and submit any required documents by Friday. After returning, employees are expected to submit a brief trip report to their supervisors.</p>',
      cau: [
      { k: 'mcq', q: 'What is the main purpose of the business trip?', o: ['To recruit new employees', 'To attend meetings and training sessions', 'To inspect company offices', 'To relocate staff'], a: 'B' },
      { k: 'mcq', q: 'What are employees asked to do before the trip?', o: ['Pay for their own accommodation', 'Confirm training schedules', 'Submit required documents', 'Prepare trip reports'], a: 'C' },
      { k: 'mcq', q: 'What will employees do after returning from the trip?', o: ['Attend additional meetings', 'Submit a report to supervisors', 'Meet regional clients', 'Review travel policies'], a: 'B' }
    ]}
  ]
},
{
  id: 'u3l2', buoi: 8, tieuDe: 'Unit 3 · Lesson 2 · Listening Part 3',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Complete the sentences with the words from the box: boarding pass · reservation · conference · client · itinerary · suitcase · taxi · expense report · branch office · business cards. Gõ từ còn thiếu vào ô trống.', cau: [
      { k: 'gap', t: 'Before entering the departure gate, passengers must show their [boarding pass] to airport staff.' },
      { k: 'gap', t: 'The company sent two employees to an international [conference] on digital marketing.' },
      { k: 'gap', t: 'Lisa packed her [suitcase] the night before her flight to avoid forgetting anything.' },
      { k: 'gap', t: 'The hotel could not find Mr. Brown’s [reservation], so he showed the confirmation email.' },
      { k: 'gap', t: 'During the meeting, the sales representative introduced a new [client] to the company’s services.' },
      { k: 'gap', t: 'Since it was raining heavily outside, they decided to take a [taxi] to the airport.' },
      { k: 'gap', t: 'The regional manager visited the [branch office] to meet employees and review operations.' },
      { k: 'gap', t: 'Employees must submit an [expense report] after a business trip to receive reimbursement.' },
      { k: 'gap', t: 'The travel coordinator emailed the complete [itinerary], including flight and meeting information.' },
      { k: 'gap', t: 'At the networking event, participants exchanged [business cards] before discussing potential partnerships.' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Listen and choose the correct answer to each question. (4 đoạn hội thoại, 12 câu)', audio: 'audio/u3l2-hw.mp3', cau: [
      { k: 'mcq', q: 'Why does the man call?', o: ['To request airport transportation', 'To verify a hotel booking', 'To change his travel dates', 'To reserve a meeting room'], a: 'B' },
      { k: 'mcq', q: 'What problem is mentioned?', o: ['A room type is unavailable', 'The reservation cannot be found', 'The hotel is fully booked', 'The arrival date is incorrect'], a: 'A' },
      { k: 'mcq', q: 'What has the hotel done?', o: ['Added an extra night to the stay', 'Reduced the room rate', 'Assigned a higher-category room', 'Moved the guest to another hotel'], a: 'C' },
      { k: 'mcq', q: 'What are the speakers mainly discussing?', o: ['A recently completed professional event', 'A company relocation plan', 'A customer complaint', 'A hiring process'], a: 'A' },
      { k: 'mcq', q: 'What did the man do at the conference?', o: ['Met with new suppliers', 'Participated in training sessions', 'Presented research findings', 'Organized a company event'], a: 'B' },
      { k: 'mcq', q: 'What does the woman ask the man to do?', o: ['Contact conference organizers', 'Prepare a travel budget', 'Share information with coworkers', 'Arrange another workshop'], a: 'C' },
      { k: 'mcq', q: 'Why is the woman calling?', o: ['To discuss transportation arrangements', 'To remind the man about a conference', 'To provide information related to an upcoming stay', 'To confirm a flight reservation'], a: 'C' },
      { k: 'mcq', q: 'What does the woman mention about the hotel?', o: ['Some facilities are being renovated.', 'It expects a large number of visitors.', 'It recently changed its parking policy.', 'Additional rooms have become available.'], a: 'B' },
      { k: 'mcq', q: 'What will the woman most likely do next?', o: ['Send details about local travel services', 'Reserve a parking space', 'Contact the airport shuttle company', 'Modify the man’s reservation'], a: 'A' },
      { k: 'mcq', q: 'Why did the woman travel?', o: ['To attend a trade exhibition', 'To visit another company location', 'To negotiate with a supplier', 'To conduct employee interviews'], a: 'B' },
      { k: 'mcq', q: 'What was discussed during the visit?', o: ['Ways to improve cooperation', 'Plans for a new product launch', 'Budget reductions', 'Customer service complaints'], a: 'A' },
      { k: 'mcq', q: 'What will the woman most likely do next?', o: ['Meet with local managers again', 'Review a reporting system', 'Prepare a written overview', 'Schedule another business trip'], a: 'C' }
    ]}
  ]
},
{
  id: 'u3l3', buoi: 9, tieuDe: 'Unit 3 · Lesson 3 · Thực chiến đề thi (3)',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen and choose the best description for each photo. (Track 03)', audio: 'audio/u3l3-track03.mp3', cau: [
      { k: 'pic', img: 'img/u3l3-1.jpg', a: 'A', s: ['All of the men are looking at a blueprint.', 'A man is demonstrating a machine.', 'A man is pointing at a hat.', 'One of the men is turning on a machine.'] },
      { k: 'pic', img: 'img/u3l3-2.jpg', a: 'D', s: ['Some people are entering a station.', 'A man is reading a schedule.', 'A woman is fixing a clock.', 'Some people are waiting in line.'] },
      { k: 'pic', img: 'img/u3l3-3.jpg', a: 'C', s: ['The auditorium is filled with people.', 'There is a podium at the front of the auditorium.', 'There are people scattered throughout the auditorium.', 'Some people are raising their hands.'] },
      { k: 'pic', img: 'img/u3l3-4.jpg', a: 'C', s: ['They are writing on a piece of paper.', 'They are looking at each other.', 'One of the women is holding a pen.', 'One of the women is typing on a laptop.'] },
      { k: 'pic', img: 'img/u3l3-5.jpg', a: 'B', s: ['The man is laying down cement.', 'The man is writing some notes.', 'The man is waving to some people.', 'The man is shoveling some dirt.'] },
      { k: 'pic', img: 'img/u3l3-6.jpg', a: 'C', s: ['People are entering a train car.', 'Some people are sitting on a bench.', 'The doors of the train are closed.', 'A sign has been displayed.'] }
    ]},
    { ten: 'Exercise 2', huongDan: 'Listen to the questions and choose the best answer. (Track 04)', audio: 'audio/u3l3-track04.mp3', cau: [
      { k: 'resp', a: 'A', s: ['Where is Jennifer going now?', 'To a budget meeting.', 'At the train station.', 'I thought it was yesterday.'] },
      { k: 'resp', a: 'B', s: ['How many people came to the open house?', 'I thought I closed it.', 'About twenty.', 'We had no offers.'] },
      { k: 'resp', a: 'B', s: ['When is the trade show this year?', 'The show starts at 8 o’clock.', 'Sometime next month.', 'In London.'] },
      { k: 'resp', a: 'A', s: ['Who did you talk to at the real estate agency?', 'I believe her name was Monica.', 'To secure the lease.', 'Just this morning.'] },
      { k: 'resp', a: 'C', s: ['When will the new employee begin working?', 'She seems nice.', 'The finance department.', 'This Monday.'] },
      { k: 'resp', a: 'B', s: ['Is Mr. Jackson coming back this week?', 'Yes, it’s all in the back.', 'No, not that I know of.', 'No, it’s not my comb.'] },
      { k: 'resp', a: 'A', s: ['Have you seen the budget report for this quarter yet?', 'No, I’ve been out of town.', 'Actually, report time is at 3 o’clock.', 'Yes, I have a quarter.'] },
      { k: 'resp', a: 'C', s: ['Is there going to be a meeting on Monday?', 'No, you can go sooner.', 'Thanks, I’d appreciate that.', 'Yes, at 9 a.m. sharp.'] },
      { k: 'resp', a: 'C', s: ['What’s wrong with this laptop?', 'That one is on sale this week.', 'I set it down over there for now.', 'The battery needs to be charged.'] },
      { k: 'resp', a: 'C', s: ['When is the best time to call you?', 'Unfortunately not.', 'To my office phone.', 'Before 4 PM.'] }
    ]},
    { ten: 'Exercise 3', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'Next week, several senior executives ______ to Tokyo to attend an international business conference.', o: ['will travel', 'traveled', 'have traveled', 'were traveling'], a: 'A' },
      { k: 'mcq', q: 'Mr. Harrison prefers to book an ______ seat so that he can walk around easily during long-haul flights.', o: ['aisle', 'window', 'office', 'formal'], a: 'A' },
      { k: 'mcq', q: 'All official travel receipts ______ to the finance department by Friday afternoon.', o: ['must submit', 'must be submitted', 'submitted', 'submitting'], a: 'B' },
      { k: 'mcq', q: 'If the weather conditions get worse, the flight to Chicago ______ delayed.', o: ['would be', 'will be', 'was', 'had been'], a: 'B' },
      { k: 'mcq', q: 'The marketing team ______ a cab to the airport two hours ago.', o: ['calls', 'called', 'is calling', 'will call'], a: 'B' },
      { k: 'mcq', q: 'If the company ______ all travel expenses, more employees would volunteer for overseas business trips.', o: ['reimburses', 'reimbursed', 'had reimbursed', 'will reimburse'], a: 'B' },
      { k: 'mcq', q: 'Employees must submit a detailed report to the finance department to get ______ for their meals.', o: ['reserved', 'reimbursed', 'delayed', 'registered'], a: 'B' },
      { k: 'mcq', q: 'A confirmation email ______ to all passengers after they board the plane.', o: ['sends', 'was sent', 'will be sent', 'sending'], a: 'C' },
      { k: 'mcq', q: 'Mr. Miller ______ his stay in London if an urgent emergency had not occurred at the office.', o: ['wouldn’t have shortened', 'won’t shorten', 'doesn’t shorten', 'isn’t shortening'], a: 'A' },
      { k: 'mcq', q: 'While Ms. Davis was talking on her office phone, her manager ______ the final travel itinerary.', o: ['approves', 'approved', 'is approving', 'will approve'], a: 'B' },
      { k: 'mcq', q: 'Formal events during the summit ______ by representatives from major corporate partners.', o: ['attend', 'were attended', 'will attend', 'attending'], a: 'B' },
      { k: 'mcq', q: 'If you want to get a refund for your hotel, you ______ save all original receipts.', o: ['should', 'would', 'had', 'could'], a: 'A' },
      { k: 'mcq', q: 'Please make sure to pack your ______ properly with all necessary documents before leaving for the airport.', o: ['receipt', 'cab', 'suitcase', 'banquet'], a: 'C' },
      { k: 'mcq', q: 'Since it was raining heavily outside the hotel, the secretary decided to call a ______ for the clients.', o: ['plane', 'flight', 'cab', 'seat'], a: 'C' },
      { k: 'mcq', q: 'All meals and transportation costs incurred during the business trip are considered legitimate travel ______.', o: ['expenses', 'dinners', 'phones', 'events'], a: 'A' }
    ]},
    { ten: 'Exercise 4', huongDan: 'Questions 1-4 refer to the following email.',
      doan: '<p><b>To:</b> All Sales Staff<br><b>From:</b> Human Resources Department<br><b>Date:</b> August 15<br><b>Subject:</b> Upcoming Corporate Trip to Singapore</p><p>Starting next month, our company will host a regional summit in Singapore. Several senior <b>(1) ______</b> are required to attend this event to represent our firm.</p><p>Please note that all flight tickets and hotel bookings <b>(2) ______</b> by the administration team by the end of this week. Once you receive your itinerary, check it carefully. If you need to make any changes due to scheduling conflicts, you <b>(3) ______</b> the HR department immediately.</p><p>Finally, remember to keep all original receipts during the trip. If you do not keep your receipts, the company <b>(4) ______</b> your travel expenses upon your return.</p><p>Thank you for your cooperation.</p>',
      cau: [
      { k: 'mcq', o: ['executives', 'execution', 'execute', 'executively'], a: 'A' },
      { k: 'mcq', o: ['will arrange', 'will be arranged', 'arranged', 'arrange'], a: 'B' },
      { k: 'mcq', o: ['must notify', 'notified', 'had notified', 'notification'], a: 'A' },
      { k: 'mcq', o: ['wouldn’t reimburse', 'didn’t reimburse', 'will not reimburse', 'had not reimbursed'], a: 'C' }
    ]}
  ]
},
{
  id: 'u4l1', buoi: 13, tieuDe: 'Unit 4 · Lesson 1 · Reading Part 5, 6, 7',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'Residents are encouraged to separate plastic bottles and paper for ______.', o: ['registration', 'raffle', 'recycling', 'cooperation'], a: 'C' },
      { k: 'mcq', q: 'Everyone who joins the community clean-up event must complete the online ______ before Friday.', o: ['receptacle', 'registration', 'volunteer', 'sanitation'], a: 'B' },
      { k: 'mcq', q: '______ the weather is rainy, the neighborhood clean-up will be postponed until next Saturday.', o: ['Because of', 'Although', 'If', 'During'], a: 'C' },
      { k: 'mcq', q: 'The city installed more recycling bins ______ encourage residents to reduce waste.', o: ['because', 'despite', 'to', 'during'], a: 'C' },
      { k: 'mcq', q: '______ the heavy rain, the volunteer event continued as planned.', o: ['Although', 'Despite', 'Because', 'If'], a: 'B' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Read the following notice and choose the correct answer.', so: 6,
      doan: '<p style="text-align:center"><b>Changes to Office Waste Collection</b></p><p>Beginning next Monday, the building management team will introduce a new waste collection schedule. Employees are asked to place general waste and recyclable materials in separate containers. <b>(6) ______</b> The blue receptacles are intended for paper, plastic bottles, and metal cans. Please do not place food waste in them, <b>(7) ______</b> it may contaminate the recyclable materials. General waste will be collected every afternoon, while recyclable items will be removed twice a week.</p><p>Employees are encouraged to cooperate with the cleaning staff and <b>(8) ______</b> the new disposal rules. The program may be adjusted later <b>(9) ______</b> the management team receives feedback from office workers.</p>',
      cau: [
      { k: 'mcq', o: ['New labels will be attached to all waste containers.', 'The company cafeteria will offer a new menu.', 'Several meeting rooms are being renovated.', 'Employees may request additional parking spaces.'], a: 'A' },
      { k: 'mcq', o: ['although', 'because', 'unless', 'despite'], a: 'B' },
      { k: 'mcq', o: ['observe', 'collect', 'recycle', 'encourage'], a: 'A' },
      { k: 'mcq', o: ['during', 'because of', 'if', 'despite'], a: 'C' }
    ]},
    { ten: 'Exercise 3 · Part 7', huongDan: 'Read the following text and choose the correct answer.', so: 10,
      doan: '<p style="text-align:center"><b>Community Volunteer Event</b></p><p>The Green City Organization is looking for volunteers to join its annual neighborhood clean-up campaign this Saturday morning. Volunteers will help collect trash, sort recyclable materials, and place them in the correct receptacles. Sanitation workers will also participate and explain proper waste disposal methods.</p><p>Anyone who wishes to participate must complete the registration form by Thursday. Participants should wear comfortable clothing and arrive at the community center by 8:00 a.m. Everyone who completes the event will receive a participation certificate. In addition, one raffle ticket will be given to each participant.</p>',
      cau: [
      { k: 'mcq', q: 'What is the main purpose of the event?', o: ['To clean public areas', 'To sell recycled products', 'To improve city transportation', 'To recruit new employees'], a: 'A' },
      { k: 'mcq', q: 'Who will explain proper waste disposal methods?', o: ['Volunteers', 'Local teachers', 'Community leaders', 'Sanitation workers'], a: 'D' },
      { k: 'mcq', q: 'What should participants do before the event?', o: ['Arrive before noon', 'Complete registration', 'Sort recyclable waste', 'Collect raffle tickets'], a: 'B' },
      { k: 'mcq', q: 'What will participants receive after completing the event?', o: ['A gift package', 'A shopping voucher', 'A participation certificate', 'A reusable bag'], a: 'C' }
    ]}
  ]
},
{
  id: 'u4l2', buoi: 14, tieuDe: 'Unit 4 · Lesson 2 · Listening Part 3',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen and choose the correct answer. (Track 4)', audio: 'audio/u4l2-track4.mp3', cau: [
      { k: 'mcq', q: 'What event are the speakers discussing?', o: ['A dentist appointment.', 'A community cleanup day.', 'A cooking class opening.', 'A garden construction project.'], a: 'B' },
      { k: 'mcq', q: 'According to the man, when does the event begin?', o: ['At 9:00 AM.', 'At 12:00 PM.', 'At 2:00 PM.', 'At 5:00 PM.'], a: 'A' },
      { k: 'mcq', q: 'What will volunteers receive after the event?', o: ['Free gardening tools.', 'Movie tickets.', 'Free lunch and drinks.', 'Cash rewards.'], a: 'C' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Listen and choose the correct answer. (Track 5)', audio: 'audio/u4l2-track5.mp3', cau: [
      { k: 'mcq', q: 'Where is the conversation most likely taking place?', o: ['At a local school.', 'At a computer store.', 'At a public library.', 'At a construction site.'], a: 'C' },
      { k: 'mcq', q: 'What new feature was added to the building?', o: ['A coffee shop.', 'A digital computer lab.', 'A rooftop garden.', 'A fitness center.'], a: 'B' },
      { k: 'mcq', q: 'How can listeners get a free library card on Tuesday?', o: ['By donating old books.', 'By paying a small fee.', 'By showing a student ID.', 'By filling out an online form.'], a: 'A' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Listen and choose the correct answer. (Track 6)', audio: 'audio/u4l2-track6.mp3', cau: [
      { k: 'mcq', q: 'What is the main purpose of the conversation?', o: ['To buy groceries at a store.', 'To donate food to a charity drive.', 'To apply for a job at a community center.', 'To complain about a late delivery.'], a: 'B' },
      { k: 'mcq', q: 'What items are the speakers primarily collecting?', o: ['Used clothes and shoes.', 'Old toys and games.', 'Canned food and rice.', 'School textbooks and pens.'], a: 'C' },
      { k: 'mcq', q: 'What does the woman instruct the man to do?', o: ['Place the boxes on a wooden table.', 'Sign a registration form.', 'Take the items back to his car.', 'Call the manager tomorrow.'], a: 'A' }
    ]},
    { ten: 'Exercise 4', huongDan: 'Listen and choose the correct answer. (Track 7)', audio: 'audio/u4l2-track7.mp3', cau: [
      { k: 'mcq', q: 'Who most likely is the man?', o: ['A senior citizen.', 'An art instructor.', 'A medical doctor.', 'A store cashier.'], a: 'B' },
      { k: 'mcq', q: 'How many open seats are left in the Thursday class?', o: ['One.', 'Two.', 'Three.', 'Four.'], a: 'C' },
      { k: 'mcq', q: 'What does the man suggest the woman do next?', o: ['Pay the tuition fee in cash.', 'Buy some painting tools.', 'Fill out a registration form.', 'Bring her grandmother to meet him now.'], a: 'C' }
    ]}
  ]
},
{
  id: 'u4l3', buoi: 15, tieuDe: 'Unit 4 · Lesson 3 · Thực chiến đề thi (4)',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Choose the correct word from the box and fill in the blanks: announcement · fundraiser · volunteers · donation · nonprofit organization · gather feedback · voice concerns · raise awareness · allocate · under maintenance. Gõ từ còn thiếu vào ô trống.', cau: [
      { k: 'gap', t: 'The local [nonprofit organization] provides free educational programs for children and senior citizens.' },
      { k: 'gap', t: 'The mayor made an important [announcement] regarding the city’s new environmental policy.' },
      { k: 'gap', t: 'The campaign was created to [raise awareness] about the benefits of recycling and reducing waste.' },
      { k: 'gap', t: 'The charity event needs more [volunteers] to help with registration and crowd management.' },
      { k: 'gap', t: 'The organization hopes to receive a large [donation] from local businesses this year.' },
      { k: 'gap', t: 'A community [fundraiser] will be held next Saturday to collect money for the new public library.' },
      { k: 'gap', t: 'After the workshop, organizers will [gather feedback] from participants to improve future events.' },
      { k: 'gap', t: 'Residents are encouraged to [voice concerns] during the public meeting if they have suggestions or concerns.' },
      { k: 'gap', t: 'The city council plans to [allocate] additional funds to improve neighborhood parks and playgrounds.' },
      { k: 'gap', t: 'Several facilities at the community center are currently [under maintenance] while repairs are being completed.' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Choose the correct answer.', cau: [
      { k: 'mcq', q: 'If additional funds ______ by the city council, the community center will expand its after-school programs next year.', o: ['approve', 'approved', 'are approved', 'will approve'], a: 'C' },
      { k: 'mcq', q: 'Since the outreach campaign began in March, organizers ______ awareness of environmental issues among local residents.', o: ['raised', 'have raised', 'raise', 'had raised'], a: 'B' },
      { k: 'mcq', q: 'By the time the annual fundraiser starts, more than 300 volunteers ______ for the event.', o: ['register', 'have registered', 'will register', 'will have registered'], a: 'D' },
      { k: 'mcq', q: 'Community members are more likely to participate if their concerns ______ during public meetings.', o: ['address', 'addressed', 'are addressed', 'will address'], a: 'C' },
      { k: 'mcq', q: 'The proposal ______ by the review committee before it was presented to local stakeholders.', o: ['evaluates', 'had been evaluated', 'evaluated', 'was evaluating'], a: 'B' },
      { k: 'mcq', q: 'Unless additional resources ______, the nonprofit organization may have to postpone several community projects.', o: ['provide', 'are provided', 'provided', 'will provide'], a: 'B' },
      { k: 'mcq', q: 'The city has decided to ______ more funding to programs that support senior citizens and low-income families.', o: ['allocate', 'recruit', 'distribute', 'sponsor'], a: 'A' },
      { k: 'mcq', q: 'Several public facilities will remain closed until the renovation work ______.', o: ['completes', 'is completed', 'completed', 'has completing'], a: 'B' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Listen and choose the correct answer. (Track 3 · 2 đoạn hội thoại)', audio: 'audio/u4l3-track3.mp3', cau: [
      { k: 'mcq', q: 'What is the woman telling the man about?', o: ['A new workplace safety rule', 'An announcement on a bulletin board', 'A change in a festival date', 'A new online registration tool'], a: 'B' },
      { k: 'mcq', q: 'What is the goal of the upcoming festival?', o: ['To raise money for a charity', 'To clean up the neighborhood', 'To promote cultural exchange', 'To recruit full-time managers'], a: 'C' },
      { k: 'mcq', q: 'What will the man probably do next?', o: ['Scan a poster on the board', 'Fill out a paper application', 'Call the community center', 'Post a notice online'], a: 'A' },
      { k: 'mcq', q: 'Why did the woman walk to work today?', o: ['Her car is under maintenance', 'The main road is blocked', 'She missed the morning train', 'She wanted to buy a new apartment'], a: 'B' },
      { k: 'mcq', q: 'What caused the traffic delay?', o: ['Bad weather conditions', 'A broken-down truck', 'A road renovation project', 'A community sports event'], a: 'B' },
      { k: 'mcq', q: 'What is true about the woman’s apartment?', o: ['It is located near a park', 'It is close to a bus station', 'It is within walking distance of the office', 'It is currently being repaired'], a: 'C' }
    ]},
    { ten: 'Exercise 4', huongDan: 'Questions 1-4 refer to the following notice.',
      doan: '<p style="text-align:center"><b>Green Valley Community Notice</b></p><p>The Green Valley Community Center is proud to launch a new environmental campaign next month. To protect our local parks and green spaces, we need to recruit volunteers <b>(1) ______</b> with a large-scale clean-up event. <b>(2) ______</b> If you <b>(3) ______</b> more free time on weekends, we would highly recommend that you join our team. This project cannot succeed without the active participation of local residents. Please visit the main office or check the bulletin board in the lobby if you want to sign up for this meaningful <b>(4) ______</b>. Thank you for your continued support!</p>',
      cau: [
      { k: 'mcq', o: ['to assist', 'assisted', 'assists', 'assisting'], a: 'A' },
      { k: 'mcq', o: ['Heavy construction vehicles will completely block the main intersection.', 'Helpers will be responsible for sorting garbage and distributing recycling bins.', 'The public library will close for maintenance next week.', 'Commuters are advised to use the temporary crosswalk instead.'], a: 'B' },
      { k: 'mcq', o: ['have', 'had', 'will have', 'having'], a: 'A' },
      { k: 'mcq', o: ['campaign', 'commuter', 'intersection', 'sidewalk'], a: 'A' }
    ]},
    { ten: 'Exercise 5', huongDan: 'Questions 5-7 refer to the following article and text messages.', so: 5,
      doan: '<p><b>The Oakville Daily</b></p><p>OAKVILLE (June 18) — The Oakville Environmental Society yesterday declared that its upcoming riverside clean-up event needs more support from the local community. The organization currently plans to launch this large-scale campaign next Saturday to clear litter from the waterfront and restore the natural habitat.</p><p>According to the project coordinator, the group has a critical need to recruit volunteers before Wednesday evening. Helpers will be responsible for sorting garbage into recycling bins and distributing information sheets to visitors. Interested residents are advised to view the updated event schedule posted on the public bulletin board at the town hall.</p><hr><p><b>Mark Green (10:15 A.M.):</b> Hi Sarah, did you read the article in <i>The Oakville Daily</i> this morning? They are trying to recruit volunteers for the riverside campaign next weekend.</p><p><b>Sarah Jenkins (10:17 A.M.):</b> Yes, I saw it! I am really interested in joining. I want to help sort garbage and clean up the waterfront. Are you going to sign up too?</p><p><b>Mark Green (10:19 A.M.):</b> I’d love to, but I have a shift at the community facility until noon next Saturday. Do you know if we can join the event later in the afternoon?</p><p><b>Sarah Jenkins (10:21 A.M.):</b> I’m not sure about the exact hours. The article says the full schedule is available on the bulletin board at the town hall. I walk past that building on my daily commute, so I will check the details and let you know tonight.</p>',
      cau: [
      { k: 'mcq', q: 'What is the main purpose of the article?', o: ['To advertise a job opening at a newspaper', 'To report on a need for campaign volunteers', 'To announce the closure of a town hall', 'To complain about the cost of recycling bins'], a: 'B' },
      { k: 'mcq', q: 'What task will volunteers perform during the event?', o: ['Writing articles for The Oakville Daily', 'Building a new community facility', 'Sorting waste into different containers', 'Repairing the public bulletin board'], a: 'C' },
      { k: 'mcq', q: 'What does Sarah Jenkins promise to do for Mark Green?', o: ['Sign him up for the morning shift', 'Buy a copy of the daily newspaper', 'Review an event schedule at the town hall', 'Help him commute to the riverside'], a: 'C' }
    ]}
  ]
},
{
  id: 'u5l1', buoi: 16, tieuDe: 'Unit 5 · Lesson 1 · Reading Part 5, 6, 7',
  phan: [
    { ten: 'Part 5', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'The financial ______ recommended adding bonds to reduce investment risk.', o: ['portfolio', 'analyst', 'bankrupt', 'market'], a: 'B' },
      { k: 'mcq', q: 'Our investment ______ will contact you next week to discuss retirement planning.', o: ['advisor', 'server', 'stock', 'portfolio'], a: 'A' },
      { k: 'mcq', q: 'The company, ______ recently expanded into Southeast Asia, attracted many investors.', o: ['who', 'which', 'whose', 'where'], a: 'B' },
      { k: 'mcq', q: 'The report ______ by the financial analyst will be presented tomorrow.', o: ['preparing', 'prepared', 'prepares', 'prepare'], a: 'B' },
      { k: 'mcq', q: 'Clients ______ wish to review their portfolios should arrange a meeting in advance.', o: ['who', 'whom', 'whose', 'which'], a: 'A' }
    ]},
    { ten: 'Part 6', huongDan: 'Read the following notice and choose the correct answer.', so: 6,
      doan: '<p style="text-align:center"><b>Investment Consultation Notice</b></p><p>Our investment department is inviting clients to schedule a portfolio review this month. Financial advisors will explain recent changes in the stock market and recommend suitable investment plans. <b>(6) ______</b> Clients are encouraged to <b>(7) ______</b> a meeting in advance so that enough consultation time can be provided.</p><p>The report <b>(8) ______</b> by our financial portfolio analyst includes updated market information and investment recommendations.</p><p>Please contact our office <b>(9) ______</b> your investment goals change before your appointment.</p>',
      cau: [
      { k: 'mcq', o: ['Each consultation will last approximately one hour.', 'Several restaurants have recently opened nearby.', 'Employees must wear safety helmets.', 'Parking tickets are sold at the train station.'], a: 'A' },
      { k: 'mcq', o: ['collaborate', 'arrange', 'bankrupt', 'portfolio'], a: 'B' },
      { k: 'mcq', o: ['preparing', 'prepared', 'prepares', 'prepare'], a: 'B' },
      { k: 'mcq', o: ['although', 'because', 'if', 'despite'], a: 'C' }
    ]},
    { ten: 'Part 7', huongDan: 'Read the following e-mail and choose the correct answer.', so: 10,
      doan: '<p><b>To:</b> Clients of BrightStone Investments<br><b>From:</b> Olivia Grant, Senior Financial Advisor<br><b>Subject:</b> Mid-Year Portfolio Review</p><p>Dear Client,</p><p>The stock market has changed significantly during the past six months. As a result, we recommend reviewing your current financial portfolio to ensure it still matches your long-term investment goals. —[1]—</p><p>Clients who would like a personal consultation should arrange a meeting before 25 September. During the meeting, one of our financial portfolio analysts will explain current market trends and discuss possible investment strategies. —[2]—</p><p>Please note that one company previously included in several recommended portfolios has recently declared bankruptcy. —[3]—</p><p>We appreciate your continued trust and look forward to working with you. —[4]—</p><p>Best regards,<br>Olivia Grant</p>',
      cau: [
      { k: 'mcq', q: 'Why was this e-mail sent?', o: ['To encourage clients to review their investment portfolios', 'To announce a new office location', 'To recruit additional financial analysts', 'To promote a new banking service'], a: 'A' },
      { k: 'mcq', q: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? “Our advisors have already prepared alternative investment options for affected clients.”', o: ['[1]', '[2]', '[3]', '[4]'], a: 'C' },
      { k: 'mcq', q: 'The word “declared” in paragraph 3 is closest in meaning to', o: ['postponed', 'announced', 'borrowed', 'prevented'], a: 'B' },
      { k: 'mcq', q: 'What is suggested about BrightStone Investments?', o: ['It is helping clients respond to recent investment changes.', 'It no longer offers portfolio review services.', 'It plans to stop recommending long-term investments.', 'It has recently experienced financial difficulties.'], a: 'A' }
    ]}
  ]
},
{
  id: 'u5l2', buoi: 17, tieuDe: 'Unit 5 · Lesson 2 · Listening Part 4',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen and choose the correct answer. (Track 4)', audio: 'audio/u5l2-track4.mp3', cau: [
      { k: 'mcq', q: 'What is the main topic of the report?', o: ['A decline in international trade.', 'A positive trend in the stock market.', 'A new product launch by a tech firm.', 'A change in banking regulations.'], a: 'B' },
      { k: 'mcq', q: 'According to the speaker, how much did corporate profits increase?', o: ['By 4%', 'By 12%', 'By 15%', 'By 40%'], a: 'B' },
      { k: 'mcq', q: 'When will the stock market close today?', o: ['At 9:00 AM', 'At 12:00 PM', 'At 4:00 PM', 'At 6:00 PM'], a: 'C' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Listen and choose the correct answer. (Track 5)', audio: 'audio/u5l2-track5.mp3', cau: [
      { k: 'mcq', q: 'What type of investment is the speaker recommending?', o: ['Government bonds.', 'Technology stocks.', 'Real estate.', 'Gold and silver.'], a: 'C' },
      { k: 'mcq', q: 'What is mentioned as a requirement for buying a house?', o: ['A recommendation letter from a bank.', 'A large amount of initial capital.', 'A university degree in finance.', 'A history of renting apartments.'], a: 'B' },
      { k: 'mcq', q: 'What does the speaker provide to the listeners?', o: ['A contract to sign.', 'A map of the metro system.', 'A property brochure.', 'A free financial calculator.'], a: 'C' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Listen and choose the correct answer. (Track 6)', audio: 'audio/u5l2-track6.mp3', cau: [
      { k: 'mcq', q: 'What is the main purpose of the talk?', o: ['To find investors for a new device.', 'To announce a factory closure.', 'To complain about solar energy prices.', 'To recruit new factory workers.'], a: 'A' },
      { k: 'mcq', q: 'Who most likely is the speaker?', o: ['A real estate agent.', 'A company entrepreneur.', 'A government inspector.', 'A high school student.'], a: 'B' },
      { k: 'mcq', q: 'According to the speaker, how will the funding be used?', o: ['To buy marketing software.', 'To pay for employees’ health insurance.', 'To construct a production factory.', 'To pay off existing bank debts.'], a: 'C' }
    ]},
    { ten: 'Exercise 4', huongDan: 'Listen and choose the correct answer. (Track 7)', audio: 'audio/u5l2-track7.mp3', cau: [
      { k: 'mcq', q: 'What is the talk mainly about?', o: ['How to apply for a credit card.', 'Strategies for retirement investment.', 'Changes in local tax laws.', 'How to open a traditional bank account.'], a: 'B' },
      { k: 'mcq', q: 'What investment option does the speaker mention as a safer strategy?', o: ['Tech company stocks.', 'Government bonds.', 'International real estate.', 'Foreign currencies.'], a: 'B' },
      { k: 'mcq', q: 'What advice does the speaker give to the listeners?', o: ['To change their retirement age.', 'To borrow money from their family.', 'To set up automatic monthly transfers.', 'To visit a government financial office.'], a: 'C' }
    ]},
    { ten: 'Exercise 5', huongDan: 'Listen and choose the correct answer. (Track 8)', audio: 'audio/u5l2-track8.mp3', cau: [
      { k: 'mcq', q: 'What is being advertised?', o: ['A new mobile banking application.', 'A mutual fund investment service.', 'A training course for fund managers.', 'A loan program for small businesses.'], a: 'B' },
      { k: 'mcq', q: 'Where most likely would you hear this announcement?', o: ['In a sports stadium.', 'On a radio commercial.', 'At a university graduation.', 'In a medical clinic.'], a: 'B' },
      { k: 'mcq', q: 'What is the minimum initial deposit required to start?', o: ['$50', '$100', '$500', '$1,000'], a: 'B' }
    ]},
    { ten: 'Exercise 6', huongDan: 'Listen and choose the correct answer. (Track 9)', audio: 'audio/u5l2-track9.mp3', cau: [
      { k: 'mcq', q: 'What specific asset type is the speaker discussing today?', o: ['Commercial real estate.', 'Government bonds.', 'Precious metals like gold.', 'Digital cryptocurrency.'], a: 'C' },
      { k: 'mcq', q: 'Why are financial institutions currently buying gold?', o: ['Because gold prices are at an all-time low.', 'To protect their capital during economic uncertainty.', 'To sell it to high school jewelry students.', 'Because government regulations require it.'], a: 'B' },
      { k: 'mcq', q: 'What percentage of total wealth does the speaker suggest investing in this asset?', o: ['Less than 1%', 'Between 5% and 10%', 'Exactly 25%', 'More than 50%'], a: 'B' }
    ]}
  ]
},
{
  id: 'u5l3', buoi: 18, tieuDe: 'Unit 5 · Lesson 3 · Thực chiến đề thi (5)',
  phan: [
    { ten: 'Part 4 · Listening', huongDan: 'Listen and choose the correct answer. (Track 3 · 3 bài nói, 9 câu)', audio: 'audio/u5l3-track3.mp3', cau: [
      { k: 'mcq', q: 'Who most likely is the speaker?', o: ['A financial advisor', 'A restaurant manager', 'A technical engineer', 'A travel agent'], a: 'A' },
      { k: 'mcq', q: 'What will happen at 10:30?', o: ['A report will be distributed.', 'A client will give a presentation.', 'An analyst will discuss the stock market.', 'Participants will arrange individual meetings.'], a: 'C' },
      { k: 'mcq', q: 'What are listeners asked to do?', o: ['Complete a registration form', 'Review their financial portfolios', 'Contact a technology company', 'Bring their identification cards'], a: 'A' },
      { k: 'mcq', q: 'Why is the speaker calling?', o: ['To confirm a meeting', 'To cancel an investment account', 'To recommend a new employee', 'To report a technical issue'], a: 'A' },
      { k: 'mcq', q: 'What has the analyst prepared?', o: ['A list of new clients', 'A financial report', 'A meeting schedule', 'A company advertisement'], a: 'B' },
      { k: 'mcq', q: 'What does the speaker ask the listener to do?', o: ['Visit the stock market', 'Send a bank statement', 'Choose another meeting time', 'Collaborate with an advisor'], a: 'C' },
      { k: 'mcq', q: 'What is the purpose of the talk?', o: ['To describe a company’s financial situation', 'To announce a new office location', 'To introduce a training program', 'To welcome new employees'], a: 'A' },
      { k: 'mcq', q: 'What happened to Milton Foods?', o: ['It entered the international market.', 'It hired a financial analyst.', 'It became bankrupt.', 'It created a new portfolio.'], a: 'C' },
      { k: 'mcq', q: 'What will the company’s advisors do?', o: ['Meet with affected clients', 'Purchase more company shares', 'Collaborate with Milton Foods', 'Cancel all future consultations'], a: 'A' }
    ]},
    { ten: 'Part 5', huongDan: 'Choose the word that best completes the sentence.', so: 10, cau: [
      { k: 'mcq', q: 'The financial ______ will examine the company’s recent performance before recommending its shares.', o: ['analyst', 'client', 'portfolio', 'market'], a: 'A' },
      { k: 'mcq', q: 'Investors should regularly review their financial ______ to make sure that it matches their long-term goals.', o: ['advisor', 'portfolio', 'client', 'meeting'], a: 'B' },
      { k: 'mcq', q: 'The clients ______ attended yesterday’s seminar received a report on current stock market trends.', o: ['who', 'which', 'whose', 'whom'], a: 'A' },
      { k: 'mcq', q: 'The investment plan ______ by our senior advisor includes both stocks and government bonds.', o: ['recommending', 'recommended', 'recommends', 'recommendation'], a: 'B' },
      { k: 'mcq', q: 'Companies ______ experience serious financial difficulties may eventually become bankrupt.', o: ['which', 'whose', 'whom', 'where'], a: 'A' }
    ]},
    { ten: 'Part 6', huongDan: 'Read the following text and choose the correct answer.', so: 15,
      doan: '<p style="text-align:center"><b>New Investment Research Team</b></p><p>Harper Financial Services has recently created a research team to examine new investment opportunities. The team consists of analysts specializing in different areas of the stock market. <b>(15) ______</b> The analysts will <b>(16) ______</b> with financial advisors to prepare reports for clients. Information <b>(17) ______</b> from company records and market reports will be carefully reviewed before any recommendations are made.</p><p>Clients <b>(18) ______</b> want to receive the team’s latest reports may register through the company website.</p>',
      cau: [
      { k: 'mcq', o: ['Its first report will focus on technology companies.', 'The office cafeteria closes at six o’clock.', 'Employees must renew their parking permits.', 'The company picnic was canceled last year.'], a: 'A' },
      { k: 'mcq', o: ['arrange', 'collaborate', 'bankrupt', 'advise'], a: 'B' },
      { k: 'mcq', o: ['collecting', 'collected', 'collects', 'collection'], a: 'B' },
      { k: 'mcq', o: ['who', 'whose', 'whom', 'where'], a: 'A' }
    ]},
    { ten: 'Part 7', huongDan: 'Read the following e-mail and choose the correct answer.', so: 19,
      doan: '<p><b>To:</b> Marina Cole<br><b>From:</b> Ethan Parker, Financial Advisor<br><b>Subject:</b> Meeting Regarding Your Investment Account</p><p>Dear Ms. Cole,</p><p>Thank you for contacting Northgate Financial about your investment account. I have reviewed the financial portfolio that you opened with us three years ago. Several of the companies included in the portfolio have performed well in the stock market this year.</p><p>However, one company that produces electronic equipment has recently announced serious financial difficulties. Although it has not become bankrupt, our analysts believe that keeping a large investment in the company may involve additional risk.</p><p>I would therefore like to arrange a meeting with you to discuss possible changes to your portfolio. I am available on Tuesday afternoon or Thursday morning next week. Please reply to this e-mail and indicate which time is more convenient for you.</p><p>Before the meeting, I will collaborate with one of our technology market analysts to prepare a detailed report. You will receive a copy of the report during the consultation.</p><p>Sincerely,<br>Ethan Parker<br>Financial Advisor</p>',
      cau: [
      { k: 'mcq', q: 'Why did Mr. Parker write the e-mail?', o: ['To recommend closing an investment account', 'To schedule a portfolio discussion', 'To announce a new financial service', 'To introduce a company analyst'], a: 'B' },
      { k: 'mcq', q: 'What is mentioned about the electronics company?', o: ['It has entered a new market.', 'It has hired more analysts.', 'It is experiencing financial problems.', 'It has already become bankrupt.'], a: 'C' },
      { k: 'mcq', q: 'When is Mr. Parker available?', o: ['Monday morning', 'Tuesday afternoon', 'Wednesday evening', 'Thursday afternoon'], a: 'B' },
      { k: 'mcq', q: 'What will Mr. Parker probably do before the meeting?', o: ['Sell all of Ms. Cole’s stocks', 'Contact an industry specialist', 'Open another investment account', 'Visit the electronics company'], a: 'B' }
    ]}
  ]
},
{
  id: 'u6l1', buoi: 19, tieuDe: 'Unit 6 · Lesson 1 · Reading Part 5, 6, 7',
  phan: [
    { ten: 'Part 5', huongDan: 'Choose the word that best completes the sentence.', cau: [
      { k: 'mcq', q: 'Several employees had to work ______ last weekend to finish the project before the client meeting.', o: ['workload', 'overtime', 'dispute', 'productivity'], a: 'B' },
      { k: 'mcq', q: 'The manager is trying to improve team ______ by introducing new project management software.', o: ['productivity', 'deadline', 'employee', 'issue'], a: 'A' },
      { k: 'mcq', q: 'Our supervisor encouraged everyone ______ the new software before the next project.', o: ['learn', 'learning', 'to learn', 'learned'], a: 'C' },
      { k: 'mcq', q: 'The IT team finished ______ the technical issue before the meeting started.', o: ['solve', 'solved', 'solving', 'to solve'], a: 'C' },
      { k: 'mcq', q: 'We decided ______ the deadline after discussing the project schedule.', o: ['extend', 'extending', 'to extend', 'extended'], a: 'C' }
    ]},
    { ten: 'Part 6', huongDan: 'Read the following notice and choose the correct answer.', so: 6,
      doan: '<p style="text-align:center"><b>Staff Training Reminder</b></p><p>All employees are required to attend a software training session this Friday. <b>(6) ______</b> The workshop will help staff solve common technical issues and improve daily productivity.</p><p>Employees should avoid <b>(7) ______</b> personal phone calls during the session so that everyone can concentrate on the training. The instructor also plans <b>(8) ______</b> several real workplace situations and answer participants’ questions.</p><p>If you are unable to attend, please inform your supervisor before the registration <b>(9) ______</b>.</p>',
      cau: [
      { k: 'mcq', o: ['The session will begin at 9:00 a.m. in Meeting Room B.', 'The parking lot will be closed next month.', 'Several restaurants have opened nearby.', 'The company picnic was held last weekend.'], a: 'A' },
      { k: 'mcq', o: ['make', 'making', 'to make', 'made'], a: 'B' },
      { k: 'mcq', o: ['demonstrate', 'demonstrating', 'to demonstrate', 'demonstrated'], a: 'C' },
      { k: 'mcq', o: ['workload', 'deadline', 'employee', 'overtime'], a: 'B' }
    ]},
    { ten: 'Part 7', huongDan: 'Read the following e-mail and choose the correct answer.', so: 10,
      doan: '<p><b>To:</b> All Department Managers<br><b>From:</b> Daniel Brooks, Human Resources Manager<br><b>Subject:</b> Overtime Approval Procedure</p><p>Dear Managers,</p><p>Over the past few weeks, several departments have reported increased workloads because of multiple projects with similar deadlines. —[1]— While we appreciate our employees’ efforts, working overtime should be approved only when it is truly necessary.</p><p>—[2]— This procedure will help the Human Resources Department monitor staffing needs more effectively and reduce unnecessary overtime expenses. —[3]—</p><p>If your team is experiencing technical issues that affect productivity, please contact the IT Department before requesting additional work hours. —[4]— In many cases, technical support can resolve the problem more quickly than assigning overtime.</p><p>Thank you for your cooperation.<br>Daniel Brooks</p>',
      cau: [
      { k: 'mcq', q: 'What is the purpose of the e-mail?', o: ['To explain a new overtime procedure', 'To announce a company holiday', 'To recruit new employees', 'To introduce new office equipment'], a: 'A' },
      { k: 'mcq', q: 'Why have some departments required overtime?', o: ['Employees requested longer work hours.', 'Several projects share similar deadlines.', 'The company reduced the number of managers.', 'A new training program has begun.'], a: 'B' },
      { k: 'mcq', q: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? “Beginning next Monday, managers must submit an overtime request form before asking employees to stay after regular working hours.”', o: ['[1]', '[2]', '[3]', '[4]'], a: 'B' },
      { k: 'mcq', q: 'According to the e-mail, what should managers do first if technical issues reduce productivity?', o: ['Increase employees’ workload.', 'Ask employees to work overtime.', 'Contact the IT Department.', 'Delay the project indefinitely.'], a: 'C' }
    ]}
  ]
},
{
  id: 'u6l2', buoi: 20, tieuDe: 'Unit 6 · Lesson 2 · Listening Part 4',
  phan: [
    { ten: 'Exercise 1', huongDan: 'Listen and choose the correct answer. (Track 4)', audio: 'audio/u6l2-track04.mp3', cau: [
      { k: 'mcq', q: 'What problem does the speaker discuss?', o: ['A reduction in staff salary.', 'A system failure in customer service.', 'A cancellation of a client contract.', 'A change in office location.'], a: 'B' },
      { k: 'mcq', q: 'According to the speaker, what has caused a backlog of messages?', o: ['A technical glitch in the database.', 'A sudden power outage in the office.', 'A training session for new employees.', 'A holiday schedule change.'], a: 'A' },
      { k: 'mcq', q: 'What does the speaker request listeners to do?', o: ['Leave the office early today.', 'Send an email to the tech team.', 'Focus on handling phone calls.', 'Repair the offline computer system.'], a: 'C' }
    ]},
    { ten: 'Exercise 2', huongDan: 'Listen and choose the correct answer. (Track 5)', audio: 'audio/u6l2-track05.mp3', cau: [
      { k: 'mcq', q: 'What is the main purpose of the message?', o: ['To confirm a new product price.', 'To announce a worker’s promotion.', 'To report a delivery mistake.', 'To schedule a meeting with a client.'], a: 'C' },
      { k: 'mcq', q: 'Who most likely is the speaker?', o: ['A store customer.', 'A logistics manager.', 'A high school teacher.', 'A software developer.'], a: 'B' },
      { k: 'mcq', q: 'According to the speaker, when must the correct items be shipped?', o: ['By 9:00 AM.', 'By 12:00 PM.', 'By 2:00 PM.', 'By 5:00 PM.'], a: 'C' }
    ]},
    { ten: 'Exercise 3', huongDan: 'Listen and choose the correct answer. (Track 6)', audio: 'audio/u6l2-track06.mp3', cau: [
      { k: 'mcq', q: 'What is the talk mainly about?', o: ['A new safety rule in the factory.', 'A scheduling conflict on the calendar.', 'A celebration party for a manager.', 'A reduction in company budget.'], a: 'B' },
      { k: 'mcq', q: 'What event will be postponed?', o: ['The safety training session.', 'The afternoon tea party.', 'The quarterly budget review.', 'The job interview with a client.'], a: 'C' },
      { k: 'mcq', q: 'What does the speaker instruct listeners to do?', o: ['Cancel their Tuesday holiday.', 'Book a new conference room.', 'Tell their staff to attend the safety training.', 'Submit their financial reports to HR.'], a: 'C' }
    ]},
    { ten: 'Exercise 4', huongDan: 'Listen and choose the correct answer. (Track 7)', audio: 'audio/u6l2-track07.mp3', cau: [
      { k: 'mcq', q: 'What is the speaker mostly discussing?', o: ['A low customer satisfaction rate.', 'A heavy workload before a product launch.', 'A plan to change the advertisement budget.', 'A new software program for marketing.'], a: 'B' },
      { k: 'mcq', q: 'Where most likely does this talk take place?', o: ['At an office meeting.', 'At a television station.', 'At a grocery store.', 'At a local hospital.'], a: 'A' },
      { k: 'mcq', q: 'What solution does the speaker offer to help the team?', o: ['Postponing the product launch date.', 'Canceling the television advertisement.', 'Hiring temporary assistants to help.', 'Reducing the daily working hours.'], a: 'C' }
    ]},
    { ten: 'Exercise 5', huongDan: 'Listen and choose the correct answer. (Track 8)', audio: 'audio/u6l2-track08.mp3', cau: [
      { k: 'mcq', q: 'What problem does Sarah mention?', o: ['A client refused to sign a contract.', 'A meeting was canceled by a manager.', 'A legal document has been lost.', 'A project budget was too high.'], a: 'C' },
      { k: 'mcq', q: 'What is a result of the problem?', o: ['The company will lose a client.', 'The project start date is delayed.', 'Peter will be fired from his job.', 'The legal office will be closed.'], a: 'B' },
      { k: 'mcq', q: 'What does Sarah ask Peter to do?', o: ['Ask the client to sign a new file immediately.', 'Check his desk and briefcase for the document.', 'Cancel his afternoon appointments.', 'Help her clean the legal department office.'], a: 'C' }
    ]},
    { ten: 'Exercise 6', huongDan: 'Listen and choose the correct answer. (Track 9)', audio: 'audio/u6l2-track09.mp3', cau: [
      { k: 'mcq', q: 'What is the main topic of the talk?', o: ['A new menu for a local restaurant.', 'A kitchen equipment failure before an event.', 'A job opening for a new head chef.', 'A celebration dinner for kitchen employees.'], a: 'A' },
      { k: 'mcq', q: 'Who is the intended audience for this talk?', o: ['Corporate dinner guests.', 'Kitchen and catering staff.', 'Equipment repair technicians.', 'Hotel management members.'], a: 'A' },
      { k: 'mcq', q: 'According to the speaker, what change will be made?', o: ['The dinner event will be canceled.', 'The repair service will be changed.', 'Cold appetizers will be served first.', 'More kitchen staff will be hired.'], a: 'C' }
    ]}
  ]
},
{
  id: 'u6l3', buoi: 21, tieuDe: 'Unit 6 · Lesson 3 · Thực chiến đề thi (6)',
  phan: [
    { ten: 'Part 4 · Listening', huongDan: 'Listen and choose the correct answer. (Track 3 · 3 bài nói, 9 câu)', audio: 'audio/u6l3-track3.mp3', cau: [
      { k: 'mcq', q: 'What problem does the speaker mention?', o: ['Several employees arrived late.', 'A project has fallen behind schedule.', 'The office equipment was replaced.', 'A training session was canceled.'], a: 'B' },
      { k: 'mcq', q: 'What are employees asked to do?', o: ['Update their work progress', 'Submit an overtime request', 'Attend a safety meeting', 'Contact a new client'], a: 'A' },
      { k: 'mcq', q: 'What will the manager do tomorrow?', o: ['Extend the project deadline', 'Review the team’s workload', 'Install new office software', 'Interview additional employees'], a: 'B' },
      { k: 'mcq', q: 'Why is the speaker calling?', o: ['To report a technical issue', 'To confirm a job interview', 'To discuss an employee dispute', 'To request additional office space'], a: 'A' },
      { k: 'mcq', q: 'What happened this morning?', o: ['A report was completed.', 'A computer system stopped working.', 'An employee missed a deadline.', 'A customer canceled an order.'], a: 'B' },
      { k: 'mcq', q: 'What does the speaker ask the listener to do?', o: ['Send the report by e-mail', 'Restart the office computers', 'Call the technical support team', 'Approve an overtime request'], a: 'C' },
      { k: 'mcq', q: 'What is the purpose of the talk?', o: ['To explain a new work policy', 'To introduce a new employee', 'To announce a company event', 'To describe a sales product'], a: 'A' },
      { k: 'mcq', q: 'Why was the policy introduced?', o: ['Employees were taking long breaks.', 'Departments had uneven workloads.', 'Clients requested faster service.', 'Managers wanted to reduce salaries.'], a: 'B' },
      { k: 'mcq', q: 'What will employees be allowed to do?', o: ['Choose their own deadlines', 'Work from another office', 'Request help from other teams', 'Leave work earlier every Friday'], a: 'C' }
    ]},
    { ten: 'Part 5', huongDan: 'Choose the word that best completes the sentence.', so: 10, cau: [
      { k: 'mcq', q: 'The manager divided the project tasks equally to reduce each employee’s ______.', o: ['productivity', 'workload', 'dispute', 'deadline'], a: 'B' },
      { k: 'mcq', q: 'A temporary technical ______ prevented the staff from accessing the company database.', o: ['employee', 'issue', 'overtime', 'productivity'], a: 'B' },
      { k: 'mcq', q: 'The department plans ______ two additional employees before the busy season begins.', o: ['hire', 'hiring', 'to hire', 'hired'], a: 'C' },
      { k: 'mcq', q: 'All team members should avoid ______ personal messages during important meetings.', o: ['check', 'checking', 'to check', 'checked'], a: 'B' },
      { k: 'mcq', q: 'The supervisor reminded the employees ______ their weekly reports before Friday afternoon.', o: ['submit', 'submitting', 'to submit', 'submitted'], a: 'C' }
    ]},
    { ten: 'Part 6', huongDan: 'Read the following text and choose the correct answer.', so: 15,
      doan: '<p style="text-align:center"><b>Workplace Communication Workshop</b></p><p>The Human Resources Department will hold a workplace communication workshop next Wednesday. <b>(15) ______</b> The workshop is intended to help employees prevent misunderstandings and resolve minor disputes professionally.</p><p>Participants will practice <b>(16) ______</b> common workplace problems in small groups. They will also learn how to avoid <b>(17) ______</b> disagreements more serious by responding calmly and clearly.</p><p>Employees who wish to attend should register before the application <b>(18) ______</b>.</p>',
      cau: [
      { k: 'mcq', o: ['The session will take place in Conference Room 3.', 'The company parking area was recently expanded.', 'Several new products will be released this year.', 'The cafeteria menu changes every Monday.'], a: 'A' },
      { k: 'mcq', o: ['discuss', 'discussed', 'discussing', 'to discuss'], a: 'C' },
      { k: 'mcq', o: ['make', 'making', 'to make', 'made'], a: 'B' },
      { k: 'mcq', o: ['workload', 'employee', 'deadline', 'overtime'], a: 'C' }
    ]},
    { ten: 'Part 7', huongDan: 'Read the following e-mail and choose the correct answer.', so: 19,
      doan: '<p><b>To:</b> Customer Service Team<br><b>From:</b> Natalie Reed, Department Manager<br><b>Subject:</b> Workload and Schedule Changes</p><p>Dear Team,</p><p>Over the past two weeks, our department has received a much higher number of customer requests than usual. As a result, several employees have reported heavy workloads, and some have needed to work overtime to meet response deadlines.</p><p>To improve productivity, we will make a few temporary changes beginning this Monday. First, routine customer questions will be assigned to the new support team. This will allow experienced employees to concentrate on more complicated cases. Second, the deadline for completing weekly performance reports will be moved from Friday afternoon to Monday morning.</p><p>Please avoid working overtime without receiving approval from your supervisor. Employees who are unable to complete their assigned tasks should speak with their team leader instead of continuing to work late.</p><p>We are also aware of a technical issue affecting the customer database. The IT Department expects to repair the system by Monday morning. Until then, please record urgent customer information in the temporary spreadsheet attached to this e-mail.</p><p>Thank you for your patience and cooperation.</p><p>Natalie Reed<br>Department Manager</p>',
      cau: [
      { k: 'mcq', q: 'Why did Ms. Reed write the e-mail?', o: ['To describe changes to work procedures', 'To announce a new customer service product', 'To introduce the members of a support team', 'To invite employees to a training workshop'], a: 'A' },
      { k: 'mcq', q: 'Why have some employees worked overtime?', o: ['They are preparing for a company event.', 'They have received more customer requests.', 'They are training new team leaders.', 'They have experienced salary disputes.'], a: 'B' },
      { k: 'mcq', q: 'What change will take effect on Monday?', o: ['Weekly reports will have a new deadline.', 'All employees will work shorter hours.', 'The customer database will be replaced.', 'Supervisors will join the support team.'], a: 'A' },
      { k: 'mcq', q: 'What should employees do if they cannot finish their tasks?', o: ['Continue working after office hours', 'Ask a colleague to complete the work', 'Speak with their team leader', 'Submit an overtime request to IT'], a: 'C' },
      { k: 'mcq', q: 'What is attached to the e-mail?', o: ['A customer information spreadsheet', 'A technical repair schedule', 'An employee performance report', 'A list of customer complaints'], a: 'A' }
    ]}
  ]
}
];
