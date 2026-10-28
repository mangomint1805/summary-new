/* Bài tập về nhà TOEIC A (lớp TOA117110) – dữ liệu câu hỏi và đáp án.
   Mỗi bài: id, buoi (bài mở sau giờ học của buổi này), tieuDe, phan: [...]
   Loại câu:  mcq  – trắc nghiệm có chữ: { q, o: [...], a: 'A' }
              pic  – nghe tranh: { img, a, s: [lời thoại 4 phương án] }
              resp – nghe hỏi đáp chỉ có (A)(B)(C): { a, s: [câu hỏi, (A), (B), (C)] }
              gap  – điền từ khi nghe: { t: 'câu có [đáp án|đáp án khác]' }
   Phần (phan): { ten, huongDan, audio?, doan? (đoạn văn), cau: [...] , noi? (luyện nói, không chấm) } */
var HW_CLASS = 'TOA117110';
var HW_SCRIPT_URL = ''; // link web app Google Apps Script (gửi kết quả về Google Sheet); để trống = chỉ tự chấm

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
}
];
