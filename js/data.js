/* =====================================================================
   West Delaware Girls Cross Country — SITE CONTENT
   ---------------------------------------------------------------------
   Almost everything on the website comes from this one file.
   Edit the lists below, save, and push — the pages update themselves.

   Tips
   • Dates are written 'YYYY-MM-DD'  (e.g. '2027-08-26').
   • Keep the commas between items and the quotes around text.
   • Leave a field as '' if you don't have it yet — it just won't show.
   ===================================================================== */

const XC = {

  SEASON: '2027',

  /* ---------- NEWS BAR (scrolls under the menu) ----------
     tag: meet | deadline | results | achievement | news
     show from / until are optional dates.                         */
  NEWS: [
    // {tag:'news', text:'Summer running starts June 7 — 6:30 AM at the high school', from:'2027-05-15', until:'2027-06-10'},
  ],

  /* ---------- MEETS ----------
     course: one of the course keys in COURSES below (gives the
             address, directions, course map and course record)
     start:  first race time, e.g. '4:30 PM' (drives the countdown)
     races:  race-by-race times shown on the meet card
     results: link to results once posted                          */
  MEETS: [
    // {date:'2027-08-26', name:'Mt. Vernon-Lisbon Invitational', course:'mvl', start:'4:30 PM',
    //  races:'JV Girls 4:30 · V Girls 5:15', level:'V/JV', results:''},
  ],

  /* ---------- PRACTICE ----------
     A practice shows on each listed weekday between from and to.
     days: 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
     skip: dates with no practice (meets automatically replace practice) */
  PRACTICE: [
    // {from:'2027-08-09', to:'2027-11-01', days:[1,2,3,4,5], time:'6:30 AM', where:'High School'},
  ],
  PRACTICE_SKIP: [],

  /* ---------- HOME PAGE PHOTOS ----------
     Put photos in the img/ folder (or paste a full web link).       */
  PHOTOS: [
    {src:'https://static.wixstatic.com/media/29c35b_9196a65561934158a987e2f5d5f6f15d~mv2.jpg/v1/fill/w_1800,h_1200,al_c,q_85/wd-invite-2025.jpg', caption:'West Delaware Invite (2025)'},
    {src:'https://static.wixstatic.com/media/29c35b_380360ea2454461b97a69a1065710674~mv2.jpg/v1/fill/w_1800,h_1200,al_c,q_85/homecoming-2025.jpg', caption:'Homecoming (2025)'},
    {src:'https://static.wixstatic.com/media/29c35b_376af0b9bb0b4d3896fa3c88b0bc3665.jpg/v1/fill/w_1800,h_1200,al_c,q_85/indee-invite-2015.jpg', caption:'Indee Invite (2015)'},
  ],

  /* ---------- COACHES ---------- */
  COACHES: [
    {role:'Head Coach', name:'Jason Guyer', school:'(563) 927-3515 ext. 354', cell:'(563) 608-6635', email:'jasonguyer@w-delaware.k12.ia.us'},
    {role:'Assistant Coach', name:'Jake Blumer'},
  ],

  /* ---------- QUICK LINKS (home page buttons) ---------- */
  QUICK: [
    {title:'Heja Team App', sub:'Sign-up instructions for athletes & parents', url:'https://docs.google.com/document/d/e/2PACX-1vR1W2D5Sfei_lA1QI0OIhsL4_-_hRerHfsJj1ZhHyyud1s66ExVGQml9jAwYSupsmFhU7ox5qqqX7cs/pub'},
    {title:'Team Meal Sign-Up', sub:'Pick a pre-meet pasta night', url:'https://docs.google.com/document/d/1f-7YKdo4F9D-S-aX49-j6ZNhgCOQStjM9ryR-HYsdWY/edit?usp=sharing'},
    {title:'Printable Schedule', sub:'Season meet schedule to print', url:'https://docs.google.com/document/d/1gHSHpo0kqOHYB9ZJaGNpAc_GC4vWCH2dX_mrnEFsvNQ/edit?usp=sharing'},
  ],

  /* ---------- COURSES (meet sites) ----------
     record: the 5K course record for our team on that course       */
  COURSES: {
    mvl:      {name:'Mt. Vernon-Lisbon Invitational', venue:'Elliott Athletic Complex', town:'Mount Vernon', address:'511 Ashton Dr NE, Mount Vernon, IA',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_eca16418c29e4655b7e5c4d33268b143.pdf',
               record:{time:'21:15', name:'Brynn Kartman', year:2025}},
    gohawk:   {name:'Waverly-Shell Rock (Dick Pollitt Go-Hawk) Invitational', venue:'Wartburg Max Championship Course', town:'Waverly', address:'Max Championship Cross Country Course, 12th St, Waverly, IA 50677',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_969645f8bf404bedab9b486e6fa893fc.pdf',
               record:{time:'20:11', name:'Norah Peyton', year:2025}},
    vinton:   {name:'Vinton-Shellsburg Invitational', venue:'Vinton Country Club', town:'Vinton', address:'Vinton Country Club, N 9th Ave, Vinton, IA',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_05e242147cc949ceb8f29acb78b267f8.pdf',
               record:{time:'20:36', name:'Brynn Kartman', year:2023}},
    wd:       {name:'West Delaware Invitational', venue:'Hart Ridge Golf Course', town:'Manchester', address:'1647 195th St, Manchester, IA 52057', home:true,
               map:'img/map-west-delaware-invite.jpg',
               record:{time:'19:50', name:'Norah Peyton', year:2025}},
    oelwein:  {name:'Oelwein Invitational', venue:'Hickory Grove Golf Course', town:'Oelwein', address:'1509 Outer Rd, Oelwein, IA 50662',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_fb615c318a4a444da65134b04d56e755.pdf',
               record:{time:'20:48', name:'Brynn Kartman', year:2024}},
    starmont: {name:'Starmont Invitational', venue:'Starmont High School', town:'Arlington', address:'3202 40th St, Arlington, IA 50606',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_f7639120ec4f442d801bc9fe1ba5e853.pdf',
               record:{time:'21:32', name:'Brynn Kartman', year:2023}},
    wburg:    {name:'Williamsburg Invitational', venue:'Williamsburg Recreation Center', town:'Williamsburg', address:'939 S Highland St, Williamsburg, IA 52361',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_a752d3e892e04a7da0b7ae43bbd1e5ad.pdf',
               record:{time:'20:25', name:'Brynn Kartman', year:2024}},
    wamac:    {name:'WaMaC Conference Championship', venue:'Seminole Valley Park', town:'Cedar Rapids', address:'1400 Seminole Valley Rd NE, Cedar Rapids, IA 52411',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_8287e6f3664744a18b7b6c96cb8c0a6e.pdf',
               record:{time:'19:55', name:'Norah Peyton', year:2025}},
    sq:       {name:'State Qualifying Meet', venue:'Hart Ridge Golf Course (2025 host)', town:'Manchester', address:'1647 195th St, Manchester, IA 52057', note:'Site changes year to year',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_bf85b3210aec4815a25e2ddc5feb498b.pdf',
               record:{time:'19:34', name:'Brynn Kartman', year:2025}},
    state:    {name:'State Meet', venue:'Lakeside Golf Course', town:'Fort Dodge', address:'1417 Nelson Ave, Fort Dodge, IA 50501',
               map:'https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_8f9e604fb71f44769e1ce224a737e1d8.pdf',
               record:{time:'19:44', name:'Brynn Kartman', year:2023}},
  },
  HOME_START: '605 N New St, Manchester, IA 52057',   // directions start here

  /* ---------- RECORDS ----------
     Top 5K times all-time and by class. Add rows as {time, name, year}. */
  TOP_TIMES: [
    // {time:'19:34', name:'Brynn Kartman', year:2025},
  ],
  CLASS_RECORDS: {
    Senior: [], Junior: [], Sophomore: [], Freshman: [],
  },

  /* ---------- RUNNERS IN COLLEGE ---------- */
  ALUMNI: [
    {name:'Makayla Gasper', cls:2022, college:'Wentworth Institute of Technology', sport:'Cross Country & Track, 2022–2024'},
    {name:'Jadyn Werner', cls:2021, college:'University of Dubuque', sport:'Cross Country & Track, 2021–2023'},
    {name:'Annika Sutter', cls:2019, college:'Wartburg College', sport:'Cross Country & Track, 2019–2023'},
    {name:'Olivia Szymke', cls:2019, college:'Wartburg College', sport:'Cross Country, 2019'},
    {name:'Abby Loecke', cls:2017, college:'Simpson College', sport:'Cross Country 2018–21 · Track & Field 2019–22'},
    {name:'Jamie Glanz', cls:2016, college:'Simpson College', sport:'Cross Country 2017–21 · Track & Field 2018–22'},
    {name:'Kaitlin Pauls', cls:2015, college:'Briar Cliff University', sport:'Cross Country 2015–16 & 2018–19 · Track & Field 2015–16'},
    {name:'Jackii Roeder', cls:2014, college:'University of Dubuque · Clarke University', sport:'Cross Country & Track 2015–18 (Dubuque) · Cross Country 2014 (Clarke)'},
    {name:'Rhianna MacDonald', cls:2012, college:'Luther College', sport:'Track & Field, 2013–2017'},
  ],

  /* ---------- SEASON ARCHIVE (links to past season pages) ---------- */
  SEASONS: [
    [2025,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2024'],[2024,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2023'],
    [2023,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2022'],[2022,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2021'],
    [2021,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2020'],[2020,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2019'],
    [2019,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2018'],[2018,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2017'],
    [2017,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2016'],[2016,'https://wdgirlsxc.wixsite.com/wdgirlsxc/copy-of-2015'],
    [2015,'https://wdgirlsxc.wixsite.com/wdgirlsxc/2015'],[2014,'https://wdgirlsxc.wixsite.com/wdgirlsxc/2014'],
    [2013,'https://wdgirlsxc.wixsite.com/wdgirlsxc/2013'],[2012,'https://wdgirlsxc.wixsite.com/wdgirlsxc/about2'],
  ],
  OLD_4K: [
    ['4K All-Time Records','https://wdgirlsxc.wixsite.com/wdgirlsxc/all-time-records-2'],
    ['4K Class Records','https://wdgirlsxc.wixsite.com/wdgirlsxc/class-records'],
    ['4K Course Records','https://wdgirlsxc.wixsite.com/wdgirlsxc/4k-course-records'],
  ],

  /* ---------- TEAM & PARENT DOCUMENTS ---------- */
  DOCS: [
    {group:'Parents', items:[
      ['Unofficial Parents\' Handbook','https://docs.google.com/document/d/1JTCJA2MO_WqeLq9AMtTINXm7y7wN7NQN1A9DMJOE1Pw/edit?usp=sharing'],
      ['Team Meal Sign-Up','https://docs.google.com/document/d/1f-7YKdo4F9D-S-aX49-j6ZNhgCOQStjM9ryR-HYsdWY/edit?usp=sharing'],
      ['Heja App Sign-Up Instructions','https://docs.google.com/document/d/e/2PACX-1vR1W2D5Sfei_lA1QI0OIhsL4_-_hRerHfsJj1ZhHyyud1s66ExVGQml9jAwYSupsmFhU7ox5qqqX7cs/pub'],
    ]},
    {group:'Team', items:[
      ['Team Handbook','https://docs.google.com/document/d/1oOW_ip4JBuNjwPsAv_vajGMx8yGyC1Xo6202-IbwbNg/edit?usp=sharing'],
      ['Core Values of WDXC','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_45bb516fb4f3417b94ee3fe722339433.docx?dn=Core%20Values%20of%20WDXC.docx'],
      ['Excuse Sheet','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_93dfd30c899b4a84aca4d6bc07e8f6a0.docx?dn=Excuse%20sheet.docx'],
      ['Pacing Chart','https://docs.google.com/document/d/1R_lBGdW-tV5gUVD2POOBOZZqBHh1HFKMsGLIk0wsNQg/edit?usp=sharing'],
    ]},
    {group:'Captains & Seniors', items:[
      ['Senior / Captain Responsibilities','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_2a84d399809a4a3a9e754651aee69890.docx?dn=Responsibilities%20of%20WD%20Girls%20Cross%20Country%20Captains.docx'],
      ['Top 10 Mistakes Made by Captains','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_80a8891dd4184569a1e9208625ae6388.docx?dn=Top%2010%20Mistakes%20Made%20by%20Team%20Captains.docx'],
      ['Captain\'s Handbook','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_9890a7d786d442bfbbfb20b786f491e3.pdf'],
    ]},
  ],

  /* ---------- TRAINING RESOURCES ---------- */
  TRAINING: [
    {group:'Summer Workouts', icon:'sun', items:[
      ['Summer Expectations','https://drive.google.com/file/d/13JHSRlHLmwfcov8X1C4q0KQeG0aapl5I/view?usp=sharing'],
      ['Summer Miles','https://drive.google.com/file/d/1CwfG_terfgbTMZ36-5G997VXSTgPQF-g/view?usp=sharing'],
      ['Sample Summer Running Plan','https://drive.google.com/file/d/1O2VMTvP-ZeJiooNRdL-BiYgUZkY6zXBF/view?usp=sharing'],
      ['8-Week Base Phase','https://docs.google.com/document/d/1Jr38AHlTQsi56oLdtL9Hv6sxzUILBqU5FA4J2b8B3Es/edit?usp=sharing'],
      ['Kenyan Summer','https://drive.google.com/file/d/1Be8-g1JoabsTaBWz5LvajqF25gqP1wW7/view?usp=sharing'],
      ['25 Tasks','https://drive.google.com/file/d/1j2DTc881UbQzeg6QGCWusLH86_hMGLYm/view?usp=sharing'],
    ]},
    {group:'Winter Workouts', icon:'snow', items:[
      ['Winter Running Overview','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_7f1e29a8226b4622a5039d7335b8cd7d.docx?dn=XC%20Winter%20Training%20Outline.docx'],
      ['Winter Running Schedule','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_fb89a643bfbd4d629c1bd7220fa1e125.docx?dn=Cross%20Country%20Winter%20Workouts.docx'],
      ['Weight Training Routine','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_94676e7efdea43bc9e044b3d6e772bc0.pdf'],
    ]},
    {group:'Spring Base Phase', icon:'leaf', items:[
      ['Level 1','https://docs.google.com/document/d/1bnkbzmosiuvYXltZysc4TI-gpZzZtJTKhYvMnk9Wdp0/edit?usp=sharing'],
      ['Level 2','https://docs.google.com/document/d/1WLwQLZ85K2V3YEdb2Q11I2VtEI5Z-UTtFCFhTEr0PUM/edit?usp=sharing'],
      ['Level 3','https://docs.google.com/document/d/1rv2FIDeQF-9tF9q3OjJp33QJCSiTJYZP9yL_RyyL_js/edit?usp=sharing'],
      ['Resistance Workouts','https://docs.google.com/document/d/1VEZkA5-Q5tIdgkUG4cdp_BRP4vQHUHajpZdygq_6ZJs/edit?usp=sharing'],
    ]},
    {group:'Running Form', icon:'run', items:[
      ['Principles of Natural Running','http://naturalrunningcenter.com/2013/05/06/video-the-principles-natural-running/'],
      ['5 Common Mistakes (video)','https://www.youtube.com/watch?v=9zkapadQwHk'],
      ['Foot Strike & Knee Drive (video)','https://www.youtube.com/watch?v=J_aqCiziTaw'],
    ]},
    {group:'Brain Training', icon:'brain', items:[
      ['Proprioceptive Cues','https://docs.google.com/document/d/1P73A-wgXZZbUTRkDbbzv5b4su5dYerklUEgOip0StWM/edit?usp=sharing'],
      ['Technique Drills','https://docs.google.com/document/d/1Qp2PmWrnsra5qXGgLAKdWtz7jS4wHaFjsC9C8RTZlfE/edit?usp=sharing'],
      ['Target Pace Levels','https://docs.google.com/spreadsheets/d/1lQlgiPU2V5sJuN0qiSB_8gvcnoTVPRG9uedcC4b_UJA/edit?usp=sharing'],
      ['Bring Your Zen Mind on Your Next Run','http://www.active.com/health/articles/bring-your-zen-mind-on-your-next-run?'],
    ]},
    {group:'Strength Routines', icon:'bolt', items:[
      ['Myrtl Routine (video)','https://www.youtube.com/watch?v=2GLrKr54yA0'],
      ['Teak Routine (video)','https://www.youtube.com/watch?v=4oi3ZIDmNAY'],
      ['Foot & Ankle Routine (video)','https://www.youtube.com/watch?v=U8AhXVQBz94'],
      ['Foot Strengthening (video)','https://www.youtube.com/watch?v=JWp07TjYn-E'],
      ['Back Routine (video)','https://www.youtube.com/watch?v=9KRpJg7r7bE'],
    ]},
    {group:'Nutrition', icon:'apple', items:[
      ['21-Day Junk Food Challenge','https://docs.google.com/document/d/1QNtPNOeUi6JLFdqy1lRt4o5tHN_-swU0HpQ9gWN0aSg/edit?usp=sharing'],
      ['Junk Food Challenge Log','https://docs.google.com/spreadsheets/d/1HzQEiaMdTTlxUyC6LkE_0lWIAF4kcMxxq01wFlzKqbM/edit?usp=sharing'],
      ['Sample Shopping List','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_bc5b3e3f0c3040f9a317431dbc624266.docx?dn=Sample%20Shopping%20List.docx'],
      ['Race Day Nutrition','https://5d1ac145-9e4b-4156-ab35-12fbafa7d330.filesusr.com/ugd/29c35b_e91384f5ae7e48c08cbc58e33878b9c6.docx?dn=Race%20Day%20Nutrition.docx'],
    ]},
  ],
  BOOKS: [
    ['Brain Training for Runners','Matt Fitzgerald'],
    ['The Competitive Edge: Mental Preparation for Distance Running','Richard Elliott'],
    ['Born to Run','Christopher McDougall'],
    ['The Slight Edge','Jeff Olson'],
    ['The Energy Bus','Jon Gordon'],
  ],
  CAMPS: 'See Coach Guyer for details on running camps offered throughout the summer.',
};
