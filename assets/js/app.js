var app = angular.module('suppliers', ['ngCookies']);/*
  .run(function ($httpBackend, $window) {

    // IF PRODUCTION, DO NOTHING
    if ($window.location.host === "play.dhis2.org") {
      return;
    }

    $httpBackend.whenGET('https://play.dhis2.org/demo/api/users').respond(
      {
  "pager": {
    "page": 1,
    "pageCount": 1,
    "total": 22
  },
  "users": [
    {
      "lastUpdated": "2015-12-08T17:29:39.716+0000",
      "created": "2015-10-19T12:46:51.527+0000",
      "name": "admin admin",
      "id": "wj0nnd9Lo0M",
      "href": "https://play.dhis2.org/demo/api/users/wj0nnd9Lo0M"
    },
    {
      "lastUpdated": "2015-12-08T06:49:42.518+0000",
      "created": "2015-03-31T13:31:09.324+0000",
      "name": "John Barnes",
      "id": "DXyJmlo9rge",
      "href": "https://play.dhis2.org/demo/api/users/DXyJmlo9rge"
    },
    {
      "lastUpdated": "2015-08-03T12:08:25.162+0000",
      "created": "2013-03-11T17:43:05.695+0000",
      "name": "Kevin Boateng",
      "id": "OYLGMiazHtW",
      "href": "https://play.dhis2.org/demo/api/users/OYLGMiazHtW"
    },
    {
      "lastUpdated": "2015-12-08T03:43:26.437+0000",
      "created": "2015-12-08T03:40:26.867+0000",
      "name": "julie bowen",
      "id": "be2C1SRiUYk",
      "href": "https://play.dhis2.org/demo/api/users/be2C1SRiUYk"
    },
    {
      "lastUpdated": "2015-12-08T17:16:00.628+0000",
      "created": "2015-12-08T17:16:00.628+0000",
      "name": "Mathias Ciarlo",
      "id": "JtpTPkjVcal",
      "href": "https://play.dhis2.org/demo/api/users/JtpTPkjVcal"
    },
    {
      "lastUpdated": "2013-03-21T16:45:07.421+0000",
      "created": "2013-03-11T17:52:44.911+0000",
      "name": "Suleimane Diawara",
      "id": "awtnYWiVEd5",
      "href": "https://play.dhis2.org/demo/api/users/awtnYWiVEd5"
    },
    {
      "lastUpdated": "2013-11-13T11:58:59.849+0000",
      "created": "2013-11-06T14:42:14.579+0000",
      "name": "Bombali District",
      "id": "NOOF56dveaZ",
      "href": "https://play.dhis2.org/demo/api/users/NOOF56dveaZ"
    },
    {
      "lastUpdated": "2013-03-22T11:46:46.706+0000",
      "created": "2012-11-13T15:38:48.822+0000",
      "name": "John Kamara",
      "id": "N3PZBUlN8vq",
      "href": "https://play.dhis2.org/demo/api/users/N3PZBUlN8vq"
    },
    {
      "lastUpdated": "2015-03-25T18:35:54.155+0000",
      "created": "2013-03-11T17:45:16.834+0000",
      "name": "Seydou Keita",
      "id": "Onf73mPD6sL",
      "href": "https://play.dhis2.org/demo/api/users/Onf73mPD6sL"
    },
    {
      "lastUpdated": "2015-03-12T10:27:16.363+0000",
      "created": "2013-03-11T17:44:11.762+0000",
      "name": "Didier Konan",
      "id": "I9fMsY4pRKk",
      "href": "https://play.dhis2.org/demo/api/users/I9fMsY4pRKk"
    },
    {
      "lastUpdated": "2015-12-08T08:46:39.188+0000",
      "created": "2015-12-08T08:28:22.974+0000",
      "name": "Darshan Kumar",
      "id": "TBu2keALScC",
      "href": "https://play.dhis2.org/demo/api/users/TBu2keALScC"
    },
    {
      "lastUpdated": "2013-03-20T22:38:45.053+0000",
      "created": "2013-03-11T17:57:16.501+0000",
      "name": "Roger Milla",
      "id": "ObaborECU7w",
      "href": "https://play.dhis2.org/demo/api/users/ObaborECU7w"
    },
    {
      "lastUpdated": "2013-05-29T16:54:33.308+0000",
      "created": "2012-11-13T16:08:22.136+0000",
      "name": "User Mobile",
      "id": "PhzytPW3g2J",
      "href": "https://play.dhis2.org/demo/api/users/PhzytPW3g2J"
    },
    {
      "lastUpdated": "2015-03-12T10:33:50.471+0000",
      "created": "2013-03-11T17:55:23.166+0000",
      "name": "Thomas Nkono",
      "id": "QqvaU7JjkUV",
      "href": "https://play.dhis2.org/demo/api/users/QqvaU7JjkUV"
    },
    {
      "lastUpdated": "2013-03-20T21:39:20.449+0000",
      "created": "2013-03-11T17:56:37.945+0000",
      "name": "Kanu Nwankwo",
      "id": "UgDpalMTGDr",
      "href": "https://play.dhis2.org/demo/api/users/UgDpalMTGDr"
    },
    {
      "lastUpdated": "2013-03-20T21:39:30.345+0000",
      "created": "2013-03-11T17:45:51.324+0000",
      "name": "Yaya Toure",
      "id": "yI9qQfuM7Xd",
      "href": "https://play.dhis2.org/demo/api/users/yI9qQfuM7Xd"
    },
    {
      "lastUpdated": "2014-10-07T22:17:04.940+0000",
      "created": "2013-03-11T17:51:41.232+0000",
      "name": "Alain Traore",
      "id": "oXD88WWSQpR",
      "href": "https://play.dhis2.org/demo/api/users/oXD88WWSQpR"
    },
    {
      "lastUpdated": "2014-04-08T21:07:47.287+0000",
      "created": "2014-04-08T21:07:35.514+0000",
      "name": "Donor User",
      "id": "cddnwKV2gm9",
      "href": "https://play.dhis2.org/demo/api/users/cddnwKV2gm9"
    },
    {
      "lastUpdated": "2014-10-07T22:17:43.562+0000",
      "created": "2014-10-07T22:17:43.562+0000",
      "name": "Guest User",
      "id": "rWLrZL8rP3K",
      "href": "https://play.dhis2.org/demo/api/users/rWLrZL8rP3K"
    },
    {
      "lastUpdated": "2015-10-22T17:01:11.881+0000",
      "created": "2013-10-16T14:23:56.148+0000",
      "name": "Portal User",
      "id": "qDNQJROsrzY",
      "href": "https://play.dhis2.org/demo/api/users/qDNQJROsrzY"
    },
    {
      "lastUpdated": "2013-03-06T12:12:00.197+0000",
      "created": "2012-11-20T22:02:37.342+0000",
      "name": "Tracker demo User",
      "id": "AIK2aQOJIbj",
      "href": "https://play.dhis2.org/demo/api/users/AIK2aQOJIbj"
    },
    {
      "lastUpdated": "2015-10-19T10:27:27.567+0000",
      "created": "2012-11-21T12:02:04.303+0000",
      "name": "Tom Wakiki",
      "id": "GOLswS44mh8",
      "href": "https://play.dhis2.org/demo/api/users/GOLswS44mh8"
    }
  ]
}
    );

    $httpBackend.whenGET('/api/category').respond([
      {id:1, name:"Applicators"}, {id:2, name:"Bandages"},
      {id:3, name:"Biohazard Bags"}, {id:4, name:"Blades"}, {id:5, name:"Capes"}, {id:6, name:"Cleaning Brushes"},
      {id:7, name:"Electrode Prep"}, {id:8, name:"Fistula Needles"}, {id:9, name:"Gauze"}, {id:10, name:"Gloves"},
      {id:11, name:"Lubricating Gel"}, {id:12, name:"Scalpels and Handles"}, {id:13, name:"Syringes"},
      {id:14, name:"Urine Specimen Cups"}]);

    $httpBackend.whenGET('/api/item').respond([
      {id:1, item_code:"25-800-A-50", name:"Miniature Tip Calcium Alginate Applicator", product_info:"Miniature Tip Calcium Alginate Applicator, Sterile. 5.5 Aluminum Shaft with Nasopharyngeal End.Quantity: 500", category_id:1},
      {id:2, item_code:"25-3306-U-TT-FDNA", name:"DNA Free Flock Tip Swab with Transport Tube", product_info:"DNA Free Flock Tip Swab with Transport Tube, Sterile. 6 in Polystyrene Shaft w/ Breakpoint at 80 mm. Quantity: 500", category_id:1},
      {id:3, item_code:"25-808-1PR", name:"Oversized Rayon Tip Applicator", product_info:"Oversized Rayon Tip Applicator, Sterile. 8 in Polypropylene Shaft. Size: 1.125 x 0.5 in LxW Tip. Quantity: 100", category_id:1},
      {id:4, item_code:"5100TN-030", name:"Cohesive Compression Bandage, Tan", product_info:"Cohesive Compression Bandage, Tan. Size: 1 in x 5 yds. Quantity: 30", category_id:2},
      {id:5, item_code:"5100TN-050", name:"Cohesive Compression Bandage, Tan", product_info:"Cohesive Compression Bandage, Tan. Size: 1 in x 5 yds. Quantity: 50", category_id:2},
      {id:6, item_code:"4581C", name:"Sterile Cohesive Bandage, Blue", product_info:"Sterile Cohesive Bandage, Blue. Size: 1 in x 5 yds. Quantity: 50", category_id:2},
      {id:7, item_code:"3200CP-036", name:"Cohesive Compression Bandage", product_info:"Cohesive Compression Bandage, Color Pack: 6 Each of Blue, Light Blue, Red, Neon Pink, Purple, Neon Green. Size: 2 in x 5 yds. Quantity: 40", category_id:2},
      {id:8, item_code:"5200CM-040", name:"Cohesive Compression Bandage, Camouflage", product_info:"Cohesive Compression Bandage, Camouflage, Size: 3 in x 5 yds, Quantity: 40", category_id:2},
      {id:9, item_code:"LBOR3036RE", name:"Biohazard Bags, 20-30 gal", product_info:"Biohazard Bags, 20-30 gal, roll of 30. Size: 30 x 36 in. Quantity: 10", category_id:3},
      {id:10, item_code:"2110096", name:"45 Gal Biohazard Bags, 30 x 37 in", product_info:"45 Gal Biohazard Bags, 30 x 37 in, case of 250. Made in USA. Quantity: 50", category_id:3},
      {id:11, item_code:"72-0001", name:"Flexible Shave Biopsy Blade", product_info:"Flexible Shave Biopsy Blade. Latex Free, Made In Usa, Sterile Quantity: 10", category_id:4},
      {id:12, item_code:"72-0200", name:"Double Edge Pathology Blades", product_info:"Double Edge Pathology Blades, Made in USA. Quantity: 100", category_id:4},
      {id:13, item_code:"M216", name:"Medical Exam Cape", product_info:"The Graham Medical 216 Exam Cape is made from a durable, scrim reinforced tissue material for a soft, comfortable feel. The enhanced strength of scrim-reinforced tissue offers superior strength, absorbency and durability. The Exam Cape is blue in color. A large 30 x 21 inch size allows the cape to fit most patients. Graham Capes are sold by the case of 75 capes and are ideal for multiphasic exams, lab procedures, and outpatient surgery.", category_id:5},
      {id:14, item_code:"910540", name:"Plus Sized Exam Poncho, 3XL", product_info:"The TIDI Disposable Plus Sized Poncho Exam Capes is made with a leak proof tissue poly tissue construction. The Poncho is open on both sides for quick examinations. The Medical Exam Poncho is available in two sizes 3XL and 5XL. The Disposable Cape is a blue color and is sold in cases of 25. TIDI Ponchos are proudly made in the USA.", category_id:5},
      {id:15, item_code:"M218", name:"Disposable Exam Vest", product_info:"Graham Medical 218 Exam Vest Vest provides modesty for patients during routine exams. The 31 x 24 inch size will fit most patients. A snap closure is included on the front of the disposable vest for an added sense of security. The Medical Exam Vest is made of a recyclable, non-woven polypropylene material. The Latex free Vest front has a blue color and the back has a white color, see IMAGES tab. Graham Medical Vests are sold by the case of 75 vests. The soft, warm, comfortable vests are ideal for mammograms, orthopedic/upper body exams and stress tests.", category_id:5},
      {id:16, item_code:"RB300105", name:"Instrument Cleaning Reamer Brush", product_info:"Instrument Cleaning Reamer Brush, made in USA. Diameter: 50mm. Quantity: 50", category_id:6},
      {id:17, item_code:"86-0516-1212", name:"Shaver Instrument Cleaning Brush", product_info:"Healthmark Shaver Instrument Cleaning Brushes are ideal for removing the surgical soil and debris from surgical shaver tools prior to sterilization. The Shaver Brushes are constructed of nylon bristles, embedded in a twisted stainless steel wire handle. Shaver Cleaning Brushes are available in a variety of sizes and shapes to effectively clean all kinds of shavers. The Instrument Cleaning Brushes can be cleaned and sterilized manually, in a washer, or with steam.", category_id:6},
      {id:18, item_code:"24-1-007", name:"Instrument Cleaning Brush", product_info:"Healthmark White Nylon Instrument Cleaning Brushes are ideal for removing surgical soil and debris from cannulated instruments and lumen. Constructed of white nylon bristles embedded in stainless steel wire handles, the Instrument Brushes clean thoroughly and clearly show evidence of soil when present. Healthmark Cleaning Brushes are available in a variety of sizes, packaged in boxes of 6.", category_id:6},
      {id:19, item_code:"22-60", name:"Conductive Adhesive", product_info:"Parker Labs Tensive Conductive Adhesive Gel is designed for attaching electrodes and conducting electricity for TENS, EMG, EEG, and other electromedical procedures. The Electrode Gel is not recommended for defibrillation. When using Tensive Electrode Gel, the need for tape is eliminated as is the irritation that it often causes. Tensive Gel is immediately conductive upon application and requires no wait time.", category_id:7},
      {id:20, item_code:"18-28", name:"Conductive Spray", product_info:"Parker Labs Signaspray Electrode Solution is a non-gritty skin prep spray that is ideal for use with muscle stimulation equipment, but is not recommended for defibrillation. Singaspray Electrode Spray is easy to apply, easy to clean, and has no residue build-up. The highly conductive Signaspray formula is bacteriostatic, hypoallergenic, and non-staining for clothes and equipment. Signaspray Conductive Solution is available in three sizes of clear dispenser: 8.5 fl. oz, 1 gallon, or SIGNASPRAYPAC. Parker Electrode Spray can be ordered by either by the box or the case. Parker Signaspray is proudly made in the USA.", category_id:7},
      {id:21, item_code:"12-08", name:"Conductive Gel", product_info:"Spectra 360 is an innovate electrode gel from Parker Labs that is both salt and chloride free, eliminating sodium ion transfer. Unlike many conductive media, Spectra 360 Gel works by wetting the skin to reduce skin resistance. The Conductive Gel is commonly used for ECG, TENS, monitoring, and pediatric electromedical procedures, for conductive rubber and carbon electrodes, and is ideal for long-term procedures, although it is not recommended for defibrillation.", category_id:7},
      {id:22, item_code:"FS+173230BC", name:"Safety Fistula Needle", product_info:"Nipro SafeTouch™ II Safety Fistula Needle Sets provide optimal comfort for dialysis patients and safety for technicians and nurses administering treatments. The SafeTouch™ II needles have a built-in safety mechanism that allows used needles to be fully sheathed for safe disposal, eliminating the risk of accidental needle sticks that may potentially transfer bloodborne diseases. Nipro Fistula Needles include 12 inches of tubing to easily connect to blood lines for dialysis.", category_id:8},
      {id:23, item_code:"FT+172530BD", name:"Safety Fistula Needle, Fixed Wing", product_info:"ipro SafeTouch Tulip™ Safety Fistula Needle Sets offer maximum patient comfort and user safety, featuring an innovative tulip safety mechanism to eliminate the risk of accidental needle sticks that may transfer bloodborne diseases. Nipro's Arteriovenous (AV) Fistula Needles feature a low profile design for superior patient comfort. Nipro Fistula Needles include 12 inches of tubing to easily connect to blood lines for dialysis.", category_id:8},
      {id:24, item_code:"2671", name:"Gauze Bolt", product_info:"Kendall Kerlix Gauze Bolts feature a three-ply construction, with prewashed, fluff dried gauze, making it ideal for use as a burn dressing or specialty dressing. The Guaze Bolt's woven gauze has bulk cushions to help protect wounded areas. Proudly made in the USA, Kendall Kerlix Gauze Bolts measure 9 x 100 yds and are sold by the case, with 4 bolts per case.", category_id:9},
      {id:25, item_code:"3023", name:"Non-Adhesive Waterproof Foam", product_info:"Dynarex FoamFlex™ Non-Adhesive Waterproof Foam Wound Dressings maintain a moist wound environment and conform to hard-to-dress areas. The Sterile Wound Dressings have a semi-permeable film that allows the wound to breathe. The Flexible Foam Dressing is waterproof, protecting the wound from external contamination. FoamFlex™ Foam Dressings are very absorbent, absorbing 4 times more than hydrocolloid dressings of the same size. The Latex-Free Wound Dressing is ideal for Stage II, III, and IV pressure ulcers. A handy ruler is printed on each package for quick measurements. FoamFlex™ Foam Dressings are available in 3 different sizes and are sold by the case.", category_id:9},
      {id:26, item_code:"2949", name:"Round Radiopaque Sponge", product_info:"Covidien Kerlix Round Radiopaque Sponges are designed for use as a skin prep sponge prior to surgery or deep stick sponging in hard-to-reach body cavities. Kerlix Radiopaque Sponges feature a radiopaque element for easy location in case that the sponge is lost during medical procedures. Constructed from soft, absorbent lint free fabric, Kendall Kendall Kerlix Radiopaque Sponges offer maximum absorption without shedding fibers. Kerlix Radiopaque Sponges are offered in sterile packaging or non-sterile and bulk.", category_id:9},
      {id:27, item_code:"DSK-1", name:"Decontamination Gloves", product_info:"Healthmark Latex Chemotherapy Gloves are constructed of thick, 15 mil powder-free latex, making them ideal for use in chemotherapy or sterile processing rooms. Healthmark's Latex Gloves are compatible for use with a wide variety of chemicals - see MORE INFO Tab. The fingers of the Decontamination Gloves are textured for superior gripping ability. The Chemotherapy Gloves are available in small, medium, large, x-large, and xx-large sizes to fit nearly any hand. There are 50 Healthmark DSK Gloves per box.", category_id:10},
      {id:28, item_code:"9665", name:"White Cotton Gloves", product_info:"Worn over a lotion or hand repair cream, Grafco Cotton Gloves offer protection and comforting care for the sensitive skin on your hands. Leave them on overnight or throughout the day for lasting coverage and deep healing of irritated or dry skin.", category_id:10},
      {id:29, item_code:"JB-2636", name:"Heat Resistant Autoclavable Gloves", product_info:"Healthmark JB-2636 Seamless Autoclave Gloves allow wearers to handle hot racks, trays, and surfaces, up to 450° F. The simple, ambidextrous design makes donning the gloves quick and easy, since either Autoclave Glove will fit either hand. Gauntlet-style cuffs on the Heat-Resistant Gloves protect the wrists as well as hands. The High Heat Gloves are constructed of high-density looped cotton to provide a thick layer of protection from high temperatures. Each box of Seamless Heat Gloves includes 1 pair. The Healthmark Cotton Heat Gauntlets are sized to fit most users.", category_id:10},
      {id:30, item_code:"1250", name:"Lubricating Jelly", product_info:"Dynarex Sterile Lubricating Jelly comes in 2.7 gram, 5.0 gram, 2 oz, or 4 oz packets or tubes of lubricant jelly. Sterile Lubricating Jelly is designed for medical purposes to lubricate body orifices, assisting in the insertion of devices for diagnostic and therapeutic purposes. Dynarex Lubricating Jelly also provides lubrication for hinged instruments, while enhancing and protecting the internal parts of the handpiece. Sterile Lubricating Jelly by Dynarex is non-staining and available for purchase in single-use packets, tubes, or by the case.", category_id:11},
      {id:31, item_code:"201", name:"Sterile Lubricating Jelly, 4 oz", product_info:"HR Lubricating Jelly is a sterile, water soluble, and greaseless lubricant used by doctors and nurses. H-R Jelly is ideal for a variety of medical procedures and surgeries including OBGYN procedures, plastic surgery, and laser hair removal. The HR Medical Lubricant doubles as an ultrasound gel. HR Pharmaceuticals Jelly offers great viscosity for better resolution. The Lubricating Gel is non-toxic and hypoallergenic as well as PEG, chlorhexidine, latex, alcohol free, and Kosher certified. Unlike most lubricants that hold only one or two FDA registrations, HR Lubricating Jelly holds six FDA medical device class registrations making it the universal lubricant of choice for medical professionals.", category_id:11},
      {id:32, item_code:"211-576", name:"Extra Thick Lubricating Jelly", product_info:"HR Extra Thick Sterile Lubricating Jelly features the same water soluble and greaseless formula trusted by doctors and nurses, but with a higher viscosity that some clinicians prefer. This extra-thick gel is ideal for better adherence to endoscopes, and the 1.25 oz size is the perfect measurement for endoscopy procedures, reducing product waste.", category_id:11},
      {id:33, item_code:"2990", name:"Scalpel Blade Remover", product_info:"The Feather Disposable Scalpel Blade Removers are designed for safe and easy blade removal. The Feather Blade Removers are made out of polypropylene to be disposable when full. The Scalpel Removers can fit any size scalpel, making them ideal for operating rooms and surgical facilities. The Scalpel Blade Remover can hold between 150 and 300 blades, depending on the size of the blade. Feather Scalpel Removers are made in Japan.", category_id:12},
      {id:34, item_code:"2976", name:"Surgical Blades", product_info:"Feather 2976 Sterile Stainless Steel Scalpel Blades are characterized by superior cutting quality, strength and corrosion resistance. Feather 2976 Surgical Blades are individually wrapped and sealed to maintain sterility (gamma irradiation) and to ensure long shelf-life. Feather Sterile Surgical Blades are available in several sizes, packed 100/box.", category_id:12},
      {id:35, item_code:"06-2925", name:"Large Lab Type Scalpel Handle", product_info:"The stainless steel construction and OR quality make the Sklar Large Lab Type Scalpel Handle ideal for hospitals and specialty clinics. The Large Lab Type Scalpel Handle will last and remain dependable for medical personnel, thanks to the durable surgical steel construction. Look to QuickMedical for all of your medical instrument needs, including our full line of Scalpel Handles.", category_id:12},
      {id:36, item_code:"06-2903", name:"Scalpel Handle #3", product_info:"The stainless steel construction and OR quality make the Sklar Scalpel Handle ideal for hospitals and specialty clinics. The Scalpel Handle #3 will last and remain dependable for medical personnel, thanks to the durable surgical steel construction. Look to QuickMedical for all of your medical instrument needs including our full line of Scalpel Handles.", category_id:12},
      {id:37, item_code:"2980", name:"SafetyShield Scalpels", product_info:"Feather Safeshield Disposable Scalpels are designed with safety and precision firmly in mind. The stainless steel blade of the Safety Scalpels can be covered with a locking, retractable, plastic shield that reduces the risk of injury and contamination. The Safeshield Scalpel SUREgrip handles are made of ergonomically rounded plastic to provide control for delicate operations.", category_id:12},
      {id:38, item_code:"2979", name:"Micro Scalpels", product_info:"Feather Sterile Microscalpels have a lightweight aluminum handle and a sharp stainless steel blade, making them durable tools ideal for hospital operating rooms and surgical facilities. The small blade size allows this Microscalpel to be perfectly used for ophthalmic surgeries. The non-slip finger grip ensures that the Micro Feather Scalpel remains firmly in the user's grasp. All Micro Scalpels are sterilized with gamma radiation and hermetically sealed in aluminum foil to comply with hospitals' sanitary standards.", category_id:12},
      {id:39, item_code:"2978", name:"Mini Scalpels", product_info:"The slender handle design for the Feather Mini Disposable Scalpels makes them ideal for surgery in limited areas such as the brain, ear, nose, mouth, blood vessels, or nerves, as well as in plastic or neonatal surgery. This line of Feather Disposable Scalpels is sterilized by gamma irradiation, making it ideal for hospital operating rooms, clinics, and surgery centers. The Mini Scalpels are manufactured with heat-treated stainless steel blades and chemically-resistant acrylonitrile styrene handles.", category_id:12},
      {id:40, item_code:"2975", name:"Disposable Scalpels", product_info:"Feather Disposable Scalpels are sterilized by gamma radiation and feature a disposable, heat-treated stainless steel blade, making them ideal for hospital operating rooms. Feather Surgical Blades have rigid, chemically resistant acrylonitrile styrene plastic handles. These Surgical Scalpels are individually wrapped with hermetically sealed aluminum foil. The blades of the Disposable Scalpels are protected by a snap-off cover for safety.", category_id:12},
      {id:41, item_code:"831041", name:"EasyTouch Pen Needle", product_info:"MHC EasyTouch Insulin Pen Needles are designed to be compatible with the most popular brands of Insulin Pen Devices, and are available in three gauge sizes. Pen Needles feature steel construction with thin-wall cannulas and tri-bevel cut tips for maximum patient comfort. Disposable Pen Needles are film coated for a smoother injection and are electro-polished to remove microscopic burrs.", category_id:13},
      {id:42, item_code:"862955", name:"EasyTouch Safety Insulin Syringe", product_info:"MHC EasyTouch Safety Insulin Syringes with Needles offer the same benefits of U-100 Insulin Syringes but with added safety features to prevent unwanted needle pricks. Insulin Syringes are available with 50 or 100 unit syringe barrels with permanently attached needles in choice of size.", category_id:13},
      {id:43, item_code:"100015", name:"Pediatric Bulb Syringe - Blue", product_info:"Pedia Pals Elly Elephant Ear Syringes are the perfect way to make pediatric patients more at ease with irrigation of the ear or nose. The Pedia Pals Bulb Syringe features a playful elephant design that is less threatening than a traditional syringe. Irrigation Syringes are made out of a soft, rotocast PVC and have no sharp edges, improving patient comfort. The molded, one-piece construction makes the Elly Elephant Syringes durable and easy to clean.", category_id:13},
      {id:44, item_code:"AH+2538", name:"Gauge Hypodermic Needle", product_info:"Nipro FLOMAX Hypodermic Needles combine advanced manufacturing techniques and user-friendly design to ensure a quick, safe patient experience. A propriety grinding process ensures each stainless steel needle features an ultra-sharp, tri-beveled, anti-coring tip for an easy puncture with minimal trauma. For the clinician, the hypodermic needles feature color-coded hubs allows for quick identification inside or outside of the package, and a translucent hub helps confirm the flashback.", category_id:13},
      {id:45, item_code:"4283", name:"Sterile Urine Specimen Container", product_info:"Dynarex 4283 Sterile Pediatric Urine Specimen Collectors are designed for infants and pediatric use. An adhesive, leak-proof opening, with an enlarged foam area makes the collector both easy to apply and comfortable for the infant or child. The Sterile Specimen Collector features a 200 mL capacity with graduated markings for quick and easy readings. Dynarex 4283 containers The Latex Free Pediatric Urine Collection Containers are sold by the case of 50 individually packaged collectors.", category_id:14},
      {id:46, item_code:"55525", name:"Midstream Urine Specimen Collection System", product_info:"The Germaine EasyAim™ 55525 Midstream Urine Specimen Collection System is a specially designed specimen cup which makes the midstream urine collection process simple and hassle free. This Collection Cup features an extra long disposable handle which helps to prevent mess while keeping hands dry. The EasyAim™ Specimen Container has a 90 milliliter capacity. Each Urine Specimen Cup has a sterile security seal and is labeled to accommodate pertinent patient information.", category_id:14},
      {id:47, item_code:"4254", name:"Urine Specimen Cup", product_info:"The Sterile Specimen Cups are tamper evident tab type. The Urine Cups feature labels with space for doctor and patient information, are designed with molded graduations in ounces and milliliters and have a 4 oz capacity (100 ml).", category_id:14},
      {id:48, item_code:"4256", name:"Non-Sterile Specimen Container", product_info:"Dynarex 4253 Sterile Specimen Containers are sold by the case of 100 individually bagged cups. Dynarex 4254 Sterile Specimen Containers are sold by the bulk case of 100 cups. Dynarex 4256 Non-Sterile Specimen Containers are sold by the bulk case of 500 cups.", category_id:14}

    ]);
  });
*/
