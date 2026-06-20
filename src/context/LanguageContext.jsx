import { createContext, useContext, useState } from 'react'

export const translations = {
  en: {
    // Gate screen
    gate_youAreInvited: 'You are invited',
    gate_groomName: 'M. Vignesh',
    gate_groomQual: 'B.E (Mech).',
    gate_brideName: 'S. Meena',
    gate_brideQual: 'M.Com.',
    gate_datePlace: '2 July 2026 · Tirupur',
    gate_openBtn: '♪ Open Invitation',

    // Splash / Home hero
    splash_label: 'Wedding Invitation',
    splash_datePlace: '2 July 2026 · Tirupur',
    home_label: 'Wedding Invitation',
    home_quote: '"One moment, Two Hearts, Three Knots — a lifetime of togetherness"',
    home_dateTime: 'Thursday · 2 July 2026 · From 7:00 PM onwards',

    // Countdown
    countdown_label: 'Counting down to our special day',
    countdown_date: 'Thursday, 2 July 2026',
    countdown_venue: 'From 7:00 PM onwards — Sri Andavar Thirumana Mahal A/C, Tirupur',
    countdown_days: 'Days',
    countdown_hours: 'Hours',
    countdown_minutes: 'Minutes',
    countdown_seconds: 'Seconds',

    // Invitation
    invitation_label: 'Invitation',
    invitation_heading: 'Join Us in Celebration',
    invitation_line1: 'With the divine blessings of the Almighty and with immense joy in our hearts,',
    invitation_line2: 'We joyfully announce the auspicious wedding of',
    invitation_quote: '"On the auspicious occasion of our marriage, we invite you to be a part of the celebration of our love..."',
    invitation_venueLabel: 'Venue',
    invitation_venueName: 'Sri Andavar Thirumana Mahal A/C',
    invitation_venueAddr: 'Near MPM Cycle Mart, P.N Road\nKoothampalayam Pirivu\nTirupur – 641 666, Tamil Nadu',
    invitation_dateTime: 'Thursday · 2 July 2026 · 7 PM',

    // Event Details
    event_label: 'Save the Date',
    event_heading: 'Event Details',
    event_tapHint: 'Tap each card to discover more',
    event_card1Title: 'Save the Date',
    event_card1Date: '2 July 2026',
    event_card1Time: 'Thursday · From 7:00 PM',
    event_card1Venue: 'Sri Andavar Thirumana Mahal A/C, Tirupur',
    event_card2Title: 'Wedding Ceremony',
    event_card2Date: '2 July 2026',
    event_card2Time: 'From 07:00 PM onwards',
    event_card2Venue: 'Sri Andavar Thirumana Mahal A/C, Near MPM Cycle Mart, Tirupur',
    event_tapReveal: 'Tap to reveal ›',
    event_tapBack: '‹ Tap to go back',
    event_dressCode: 'Dress Code',
    event_muhurtham: 'Muhurtham',
    event_blessings: 'Blessings',
    event_programme: 'Programme',
    event_note: 'Note',
    event_b1_dress: 'Traditional / Ethnic Wear\nElegant & festive attire',
    event_b1_prog: 'Dinner & Celebrations\nMusic · Joy · Memories',
    event_b1_note: '"Your smile is our decoration,\nyour blessing our greatest gift"',
    event_b2_dress: 'Traditional / Ethnic Wear\nSaree, Dhoti, Kurta welcome',
    event_b2_muh: 'From 7:00 PM onwards\nPlease arrive by 6:30 PM',
    event_b2_bless: '"May your presence fill our hearts\nwith joy and our home with love"',

    // Love Letter
    letter_label: 'A Letter from the Heart',
    letter_heading: 'Our Story, Our Promise',
    letter_openHint: '✉ Tap envelope to open',
    letter_closeHint: '✉ Tap envelope to close',
    letter_skip: 'Skip ›',
    letter_body: `Tirupur, July 2026

Save the Date — for the day two souls become one...

One moment that changes everything.
Two hearts that found their home in each other.
Three sacred knots that bind them for eternity.
A dozen promises whispered under the stars.
And a lifetime of togetherness that begins tonight.

On the auspicious occasion of our marriage, we invite you to be a part of the celebration of our love.

Vignesh — a man of quiet strength and steadfast heart, who turned ordinary evenings into extraordinary memories.

Meena — a woman of grace and gentle warmth, whose smile has been his compass every single day.

They do not ask for grand gestures or grand speeches. They ask only for your presence — your laughter beside theirs, your blessings woven into the beginning of their new chapter.

Please join us in celebrating the beginning of our new life together.

From 7 o'clock in the evening,
Thursday, the 2nd of July, 2026

Sri Andavar Thirumana Mahal A/C,
Near MPM Cycle Mart, P.N Road,
Koothampalayam Pirivu, Tirupur.

With love and joy,
M. Vignesh B.E (Mech). & S. Meena M.Com.`,

    // Relatives Invite
    relatives_worldLabel: 'You Are Our World',
    relatives_heading1: 'A Heartfelt Call to Our Beloved',
    relatives_heading2: 'Family & Friends',
    relatives_eldersLabel: 'With the Blessings of Our Elders',
    relatives_p1: 'Some journeys begin with friendship, some with destiny, and some are lovingly written by the hands of family.',
    relatives_p2: 'Two families met, hearts connected, blessings flowed, and a beautiful bond was born. What started as a thoughtful introduction has now blossomed into a lifelong promise of love, trust, respect, and togetherness.',
    relatives_p3: 'Today, with immense gratitude to our parents, grandparents, relatives, and well-wishers who guided us every step of the way, we are delighted to share the happiest news of our lives.',
    relatives_p4: 'A marriage is not merely the union of a bride and groom; it is the coming together of two families, two traditions, two stories, and countless dreams for the future.',
    relatives_p5a: 'As we prepare to embark on this sacred journey, our hearts are filled with joy, and there is only one thing that can make this celebration truly complete —',
    relatives_p5b: ' your presence.',
    relatives_p6: 'Your blessings have always been our greatest strength, your affection our greatest treasure, and your support our greatest gift. We humbly request you to grace this auspicious occasion and shower the couple with your love and blessings as they begin a new chapter together.',
    relatives_weddingOf: 'The Wedding Of',
    relatives_groomName: 'M. Vignesh',
    relatives_groomQual: 'B.E. (Mech.)',
    relatives_with: 'with',
    relatives_brideName: 'S. Meena',
    relatives_brideQual: 'M.Com.',
    relatives_eventRef: 'Kindly refer to the Event Details section above for the complete schedule, venue, and timings.',
    relatives_p7: 'Let us gather together to celebrate love, family, tradition, and new beginnings. May your presence fill the occasion with happiness, your smiles light up the celebration, and your blessings guide the couple throughout their married life.',
    relatives_p8: 'We eagerly await the honor of welcoming you and celebrating this memorable day together.',
    relatives_signoff: 'With Love, Gratitude & Warm Regards,',
    relatives_names: 'M. Vignesh & S. Meena',
    relatives_families: 'Along with Both Families',

    // Map / Footer
    map_findUs: 'Find Us',
    map_heading: 'Venue Location',
    map_venueName: 'Sri Andavar Thirumana Mahal A/C, Tirupur',
    map_viewBtn: 'View Location',
    map_quote: '"Your presence is our honour"',
    map_names: 'M. Vignesh B.E (Mech). & S. Meena M.Com.',
    map_datePlace: '2 July 2026 · Tirupur',
    map_addr: 'Sri Andavar Thirumana Mahal A/C\nNear MPM Cycle Mart, P.N Road\nKoothampalayam Pirivu, Tirupur – 641 666',

    // Lang toggle
    langBtn: 'தமிழ்',
  },

  ta: {
    // Gate screen
    gate_youAreInvited: 'நீங்கள் அழைக்கப்படுகிறீர்கள்',
    gate_groomName: 'மு. விக்னேஷ்',
    gate_groomQual: 'பி.இ (மெக்.).',
    gate_brideName: 'சு. மீனா',
    gate_brideQual: 'எம்.காம்.',
    gate_datePlace: '2 ஜூலை 2026 · திருப்பூர்',
    gate_openBtn: '♪ அழைப்பிதழை திறக்கவும்',

    // Splash / Home hero
    splash_label: 'திருமண அழைப்பிதழ்',
    splash_datePlace: '2 ஜூலை 2026 · திருப்பூர்',
    home_label: 'திருமண அழைப்பிதழ்',
    home_quote: '"ஒரு தருணம், இரண்டு இதயங்கள், மூன்று முடிச்சுகள் — ஒரு வாழ்நாள் ஒற்றுமை"',
    home_dateTime: 'வியாழன் · 2 ஜூலை 2026 · மாலை 7:00 மணி முதல்',

    // Countdown
    countdown_label: 'நமது சிறப்பு நாளுக்கான எண்ணிக்கை',
    countdown_date: 'வியாழன், 2 ஜூலை 2026',
    countdown_venue: 'மாலை 7:00 மணி முதல் — ஸ்ரீ அண்டவர் திருமண மஹால் A/C, திருப்பூர்',
    countdown_days: 'நாட்கள்',
    countdown_hours: 'மணி',
    countdown_minutes: 'நிமிடம்',
    countdown_seconds: 'விநாடி',

    // Invitation
    invitation_label: 'அழைப்பிதழ்',
    invitation_heading: 'விழாவில் கலந்து கொள்ளுங்கள்',
    invitation_line1: 'இறைவனின் திவ்யமான அருளோடும், நம் மனதில் பெருமகிழ்ச்சியோடும்,',
    invitation_line2: 'நாங்கள் மகிழ்ச்சியுடன் இந்த மங்கல திருமணத்தை அறிவிக்கிறோம்',
    invitation_quote: '"நம் திருமணத்தின் மங்கல தருணத்தில், நம் அன்பின் கொண்டாட்டத்தில் பங்கேற்க உங்களை அழைக்கிறோம்..."',
    invitation_venueLabel: 'இடம்',
    invitation_venueName: 'ஸ்ரீ அண்டவர் திருமண மஹால் A/C',
    invitation_venueAddr: 'MPM சைக்கிள் மார்ட் அருகில், P.N ரோடு\nகூத்தம்பாளையம் பிரிவு\nதிருப்பூர் – 641 666, தமிழ்நாடு',
    invitation_dateTime: 'வியாழன் · 2 ஜூலை 2026 · மாலை 7 மணி',

    // Event Details
    event_label: 'தேதியை குறித்துக்கொள்ளுங்கள்',
    event_heading: 'நிகழ்வு விவரங்கள்',
    event_tapHint: 'மேலும் தெரிந்துகொள்ள அட்டையை தட்டவும்',
    event_card1Title: 'தேதியை குறித்துக்கொள்ளுங்கள்',
    event_card1Date: '2 ஜூலை 2026',
    event_card1Time: 'வியாழன் · மாலை 7:00 முதல்',
    event_card1Venue: 'ஸ்ரீ அண்டவர் திருமண மஹால் A/C, திருப்பூர்',
    event_card2Title: 'திருமண விழா',
    event_card2Date: '2 ஜூலை 2026',
    event_card2Time: 'மாலை 07:00 மணி முதல்',
    event_card2Venue: 'ஸ்ரீ அண்டவர் திருமண மஹால் A/C, MPM சைக்கிள் மார்ட் அருகில், திருப்பூர்',
    event_tapReveal: 'தட்டி காணவும் ›',
    event_tapBack: '‹ திரும்பிட தட்டவும்',
    event_dressCode: 'உடை விதிமுறை',
    event_muhurtham: 'முகூர்த்தம்',
    event_blessings: 'ஆசீர்வாதம்',
    event_programme: 'நிகழ்ச்சி',
    event_note: 'குறிப்பு',
    event_b1_dress: 'பாரம்பரிய / இன ஆடைகள்\nகம்பீரமான மற்றும் திருவிழா ஆடைகள்',
    event_b1_prog: 'இரவு உணவு & கொண்டாட்டம்\nசங்கீதம் · மகிழ்ச்சி · நினைவுகள்',
    event_b1_note: '"உங்கள் புன்னகை நமது அலங்காரம்,\nஉங்கள் ஆசி நமது மிகப்பெரிய பரிசு"',
    event_b2_dress: 'பாரம்பரிய / இன ஆடைகள்\nசேலை, வேட்டி, குர்தா வரவேற்கிறோம்',
    event_b2_muh: 'மாலை 7:00 மணி முதல்\nமாலை 6:30க்கு வந்துவிடுங்கள்',
    event_b2_bless: '"உங்கள் வருகை நம் இதயங்களை\nமகிழ்ச்சியாலும் இல்லத்தை அன்பாலும் நிரப்பட்டும்"',

    // Love Letter
    letter_label: 'இதயத்திலிருந்து ஒரு கடிதம்',
    letter_heading: 'நம் கதை, நம் வாக்குறுதி',
    letter_openHint: '✉ திறக்க கடிதப்பையை தட்டவும்',
    letter_closeHint: '✉ மூட கடிதப்பையை தட்டவும்',
    letter_skip: 'தவிர் ›',
    letter_body: `திருப்பூர், ஜூலை 2026

தேதியை குறித்துக்கொள்ளுங்கள் — இரு ஆத்மாக்கள் ஒன்றாகும் நாளுக்காக...

எல்லாவற்றையும் மாற்றும் ஒரு தருணம்.
ஒருவருக்கொருவர் இல்லமாக கண்டுபிடித்த இரு இதயங்கள்.
என்றும் கட்டி நிறுத்தும் மூன்று புனித முடிச்சுகள்.
விண்மீன்களுக்கு கீழ் சொல்லப்பட்ட ஒரு டஜன் வாக்குறுதிகள்.
இன்றிரவு தொடங்கும் ஒரு வாழ்நாள் ஒற்றுமை.

நம் திருமணத்தின் மங்கல தருணத்தில், நம் அன்பின் கொண்டாட்டத்தில் பங்கேற்க உங்களை அழைக்கிறோம்.

விக்னேஷ் — அமைதியான வலிமையும் உறுதியான இதயமும் கொண்டவர், சாதாரண மாலைகளை அசாதாரண நினைவுகளாக மாற்றியவர்.

மீனா — இனிமையும் அன்பான அரவணைப்பும் கொண்ட பெண்மணி, எல்லா நாளும் அவரது வழிகாட்டியாக விளங்கியவர்.

பெரிய வார்த்தைகளோ செயல்களோ தேவையில்லை. உங்கள் வருகை மட்டுமே வேண்டும் — உங்கள் சிரிப்பும் ஆசீர்வாதமும் இந்தப் புதிய அத்தியாயத்தின் தொடக்கத்தில் நெய்யப்படட்டும்.

புதிய வாழ்க்கையின் தொடக்கத்தை கொண்டாட எங்களுடன் சேருங்கள்.

மாலை 7 மணிக்கு,
வியாழன், ஜூலை 2, 2026

ஸ்ரீ அண்டவர் திருமண மஹால் A/C,
MPM சைக்கிள் மார்ட் அருகில், P.N ரோடு,
கூத்தம்பாளையம் பிரிவு, திருப்பூர்.

அன்புடனும் மகிழ்ச்சியுடனும்,
மு. விக்னேஷ் பி.இ (மெக்.). & சு. மீனா எம்.காம்.`,

    // Relatives Invite
    relatives_worldLabel: 'நீங்களே எங்கள் உலகம்',
    relatives_heading1: 'நம் அன்பான குடும்பத்தினருக்கும்',
    relatives_heading2: 'நண்பர்களுக்கும் இதயப்பூர்வமான அழைப்பு',
    relatives_eldersLabel: 'பெரியோரின் ஆசீர்வாதத்துடன்',
    relatives_p1: 'சில பயணங்கள் நட்பில் தொடங்கும், சில விதியில், சிலவோ குடும்பத்தின் கரங்களால் அன்போடு எழுதப்படும்.',
    relatives_p2: 'இரு குடும்பங்கள் சந்தித்தன, இதயங்கள் இணைந்தன, ஆசிகள் பொழிந்தன, அழகான ஒரு பந்தம் உருவானது. சிந்தனையுடன் நடத்தப்பட்ட அறிமுகம் இப்போது அன்பு, நம்பிக்கை, மரியாதை மற்றும் ஒற்றுமையின் வாழ்நாள் வாக்குறுதியாக மலர்ந்துள்ளது.',
    relatives_p3: 'இன்று, ஒவ்வொரு அடியிலும் நம்மை வழிநடத்திய பெற்றோர், தாத்தா பாட்டி, உறவினர்கள் மற்றும் நல்லுள்ளங்களுக்கு மிகுந்த நன்றியுடன், நம் வாழ்வின் மகிழ்ச்சியான செய்தியை பகிர்ந்துகொள்கிறோம்.',
    relatives_p4: 'திருமணம் என்பது வெறும் மணமகன் மணமகளின் இணைப்பு மட்டுமல்ல; இரு குடும்பங்கள், இரு மரபுகள், இரு கதைகள் மற்றும் எண்ணற்ற கனவுகளின் ஒன்றிணைவு.',
    relatives_p5a: 'இந்த புனித பயணத்தை தொடங்க தயாராகும்போது, நம் இதயம் மகிழ்ச்சியால் நிரம்பியுள்ளது, இந்த கொண்டாட்டத்தை முழுமையாக்க ஒரே ஒரு விஷயம் மட்டுமே தேவை —',
    relatives_p5b: ' உங்கள் வருகை.',
    relatives_p6: 'உங்கள் ஆசீர்வாதம் எப்போதும் நமது மிகப்பெரிய வலிமை, உங்கள் அன்பு நமது மிகப்பெரிய செல்வம், உங்கள் ஆதரவு நமது மிகப்பெரிய பரிசு. இந்த மங்கல தருணத்தை கௌரவிக்கவும், தம்பதியர் புதிய அத்தியாயத்தை தொடங்கும்போது அன்பையும் ஆசீர்வாதத்தையும் வழங்கவும் தாழ்மையுடன் கேட்டுக்கொள்கிறோம்.',
    relatives_weddingOf: 'திருமணம்',
    relatives_groomName: 'மு. விக்னேஷ்',
    relatives_groomQual: 'பி.இ. (மெக்.)',
    relatives_with: 'உடன்',
    relatives_brideName: 'சு. மீனா',
    relatives_brideQual: 'எம்.காம்.',
    relatives_eventRef: 'முழுமையான அட்டவணை, இடம் மற்றும் நேரங்களுக்கு மேலே உள்ள நிகழ்வு விவரங்கள் பிரிவை பார்க்கவும்.',
    relatives_p7: 'அன்பு, குடும்பம், மரபு மற்றும் புதிய தொடக்கங்களை கொண்டாட ஒன்று சேருவோம். உங்கள் வருகை விழாவை மகிழ்ச்சியாலும், உங்கள் புன்னகை கொண்டாட்டத்தை ஒளிர்விக்கவும், உங்கள் ஆசீர்வாதம் தம்பதியரை வாழ்நாள் முழுவதும் வழிநடத்தட்டும்.',
    relatives_p8: 'உங்களை வரவேற்று இந்த அற்புதமான நாளை கொண்டாடும் கவுரவத்திற்காக ஆவலுடன் காத்திருக்கிறோம்.',
    relatives_signoff: 'அன்புடனும் நன்றியுடனும் வாழ்த்துக்களுடனும்,',
    relatives_names: 'மு. விக்னேஷ் & சு. மீனா',
    relatives_families: 'இரு குடும்பத்தினருடன்',

    // Map / Footer
    map_findUs: 'எங்களை கண்டுபிடிக்கவும்',
    map_heading: 'விழா இடம்',
    map_venueName: 'ஸ்ரீ அண்டவர் திருமண மஹால் A/C, திருப்பூர்',
    map_viewBtn: 'இடத்தை காண்க',
    map_quote: '"உங்கள் வருகையே எங்கள் மரியாதை"',
    map_names: 'மு. விக்னேஷ் பி.இ (மெக்.). & சு. மீனா எம்.காம்.',
    map_datePlace: '2 ஜூலை 2026 · திருப்பூர்',
    map_addr: 'ஸ்ரீ அண்டவர் திருமண மஹால் A/C\nMPM சைக்கிள் மார்ட் அருகில், P.N ரோடு\nகூத்தம்பாளையம் பிரிவு, திருப்பூர் – 641 666',

    // Lang toggle
    langBtn: 'English',
  }
}

const LanguageContext = createContext({ lang: 'en', t: translations.en, toggle: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggle = () => setLang(l => l === 'en' ? 'ta' : 'en')
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
