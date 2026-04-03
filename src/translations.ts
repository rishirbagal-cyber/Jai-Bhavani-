export interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    menu: string;
    about: string;
    gallery: string;
    contact: string;
  };
  hero: {
    title: string;
    tagline: string;
    cta_menu: string;
    cta_directions: string;
    cta_call: string;
  };
  highlights: {
    taste: string;
    hygiene: string;
    affordable: string;
  };
  menu: {
    title: string;
    veg_title: string;
    nonveg_thali_title: string;
    nonveg_title: string;
    starters_title: string;
    rice_title: string;
    breads_title: string;
    todays_special: string;
    categories: {
      veg: MenuItem[];
      nonveg_thali: MenuItem[];
      nonveg: MenuItem[];
      starters: MenuItem[];
      rice: MenuItem[];
      breads: MenuItem[];
    };
  };
  about: {
    title: string;
    story: string;
    quote: string;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    timing: string;
    get_directions: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
  sticky: {
    call: string;
    directions: string;
    whatsapp: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {

  mr: {
    nav: {
      home: "मुख्य पान",
      menu: "मेनू",
      about: "आमच्याबद्दल",
      gallery: "गॅलरी",
      contact: "संपर्क"
    },
    hero: {
      title: "जय भवानी ढाबा",
      tagline: "खऱ्या मराठी चवीची ताकद!",
      cta_menu: "मेनू पहा",
      cta_directions: "रस्ता पहा",
      cta_call: "कॉल करा"
    },
    highlights: {
      taste: "उत्कृष्ट चव",
      hygiene: "स्वच्छता",
      affordable: "परवडणारे दर"
    },
    menu: {
      title: "आमचा मेनू",
      veg_title: "शाकाहारी (Veg)",
      nonveg_thali_title: "मांसाहारी थाळी (Non-Veg Thali)",
      nonveg_title: "मांसाहारी (Non-Veg)",
      starters_title: "स्टार्टर्स (Starters)",
      rice_title: "भात (Rice)",
      breads_title: "भाकरी आणि चपाती (Breads)",
      todays_special: "स्पेशल थाळी",
      categories: {
        veg: [
          { name: "मटर पनीर", desc: "ताजे पनीर आणि मटारची रस्सा भाजी", price: "१८०" },
          { name: "पनीर मसाला", desc: "मसालेदार पनीर ग्रेव्ही", price: "१७०" },
          { name: "मिक्स व्हेज", desc: "विविध भाज्यांचे मिश्रण", price: "१७०" },
          { name: "काजू मसाला", desc: "काजूची श्रीमंती असलेली ग्रेव्ही", price: "१८०" },
          { name: "शेव भाजी", desc: "खास खानदेशी चवीची शेव भाजी", price: "१४०" },
          { name: "दाल तडका", desc: "जिऱ्याची फोडणी दिलेली दाळ", price: "११०" },
          { name: "पिठलं", desc: "पारंपारिक महाराष्ट्रीयन बेसन पिठलं", price: "७०" },
          { name: "आख्खा मसूर", desc: "कोल्हापुरी पद्धतीचा आख्खा मसूर", price: "१२०" }
        ],
        nonveg_thali: [
          { name: "स्पेशल मटण थाळी (Unlimited)", desc: "मटण फ्राय, तांबडा-पांढरा रस्सा, अंडा मसाला, आलणी, जीरा राईस, सोलकढी, चपाती/भाकरी", price: "२८०" },
          { name: "स्पेशल चिकन थाळी (Unlimited)", desc: "चिकन फ्राय, तांबडा-पांढरा रस्सा, अंडा मसाला, आलणी, जीरा राईस, चपाती/भाकरी", price: "२२०" }
        ],
        nonveg: [
          { name: "चिकन मसाला", desc: "चिकनची मसालेदार रस्सा भाजी", price: "११०" },
          { name: "अंडा भुर्जी", desc: "कांदा-टोमॅटो घालून केलेली अंडा भुर्जी", price: "७०" },
          { name: "अंडा ऑम्लेट", desc: "गरमागरम मसालेदार ऑम्लेट", price: "५०" }
        ],
        starters: [
          { name: "मसाला पापड", desc: "कांदा, टोमॅटो आणि मसाल्याने सजवलेला पापड", price: "२५" },
          { name: "फ्राय पापड", desc: "तळलेला सुबक पापड", price: "१५" },
          { name: "रोस्टेड पापड", desc: "भाजलेला कुरकुरीत पापड", price: "१५" },
          { name: "बॉईल्ड एग", desc: "उकडलेले अंडे (२ नग)", price: "३०" },
          { name: "चिकन सुक्का", desc: "कोरड्या मसाल्यातील चिकन", price: "७०" }
        ],
        rice: [
          { name: "प्लेन राईस", desc: "साधा पांढरा भात", price: "६० (Half) / ११० (Full)" },
          { name: "जीरा राईस", desc: "जिऱ्याची फोडणी दिलेला भात", price: "७० (Half) / १२० (Full)" }
        ],
        breads: [
          { name: "भाकरी", desc: "बाजरी/ज्वारीची गरम भाकरी", price: "२०" },
          { name: "चपाती", desc: "मऊ आणि लुसलुशीत चपाती", price: "१५" }
        ]
      }
    },
    about: {
      title: "आमची परंपरा",
      story: "हॉटेल जय भवानी - सातारा-पंढरपूर रोड, पिंगळी बुद्रुक येथील अस्सल गावरान चवीचे एकमेव ठिकाण! गेल्या अनेक वर्षांपासून आम्ही ग्राहकांना घरगुती चवीचे आणि स्वच्छतेचे आश्वासन देत आहोत.",
      quote: "अस्सल चव, घरगुती सेवा!"
    },
    contact: {
      title: "संपर्क",
      address: "हॉटेल जय भवानी, सातारा-पंढरपूर रोड, पिंगळी बुद्रुक चौक, सातारा",
      phone: "7219638983 / 7709153507",
      timing: "वेळ: सकाळी ११ ते रात्री ११",
      get_directions: "रस्ता पहा"
    },
    footer: {
      rights: "सर्व हक्क राखीव",
      tagline: "एकदा या, कायमचे आपले व्हा!"
    },
    sticky: {
      call: "कॉल",
      directions: "रस्ता",
      whatsapp: "व्हॉट्सॲप"
    }
  },
  hi: {
    nav: {
      home: "होम",
      menu: "मेनू",
      about: "हमारे बारे में",
      gallery: "गैलरी",
      contact: "संपर्क"
    },
    hero: {
      title: "जय भवानी ढाबा",
      tagline: "असली स्वाद की ताकत!",
      cta_menu: "मेनू देखें",
      cta_directions: "रास्ता देखें",
      cta_call: "कॉल करें"
    },
    highlights: {
      taste: "बेहतरीन स्वाद",
      hygiene: "स्वच्छता",
      affordable: "किफायती"
    },
    menu: {
      title: "हमारा मेनू",
      veg_title: "शाकाहारी (Veg)",
      nonveg_thali_title: "मांसाहारी थाली (Non-Veg Thali)",
      nonveg_title: "मांसाहारी (Non-Veg)",
      starters_title: "स्टार्टर्स (Starters)",
      rice_title: "चावल (Rice)",
      breads_title: "रोटी (Breads)",
      todays_special: "स्पेशल थाली",
      categories: {
        veg: [
          { name: "मटर पनीर", desc: "ताजा पनीर और मटर की करी", price: "180" },
          { name: "पनीर मसाला", desc: "मसालेदार पनीर ग्रेवी", price: "170" },
          { name: "मिक्स वेज", desc: "सब्जियों का मिश्रण", price: "170" },
          { name: "काजू मसाला", desc: "काजू के साथ शाही ग्रेवी", price: "180" },
          { name: "शेव भाजी", desc: "मसालेदार शेव भाजी", price: "140" },
          { name: "दाल तड़का", desc: "तड़के वाली दाल", price: "110" },
          { name: "पिठला", desc: "पारंपरिक बेसन पिठला", price: "70" },
          { name: "आख्खा मसूर", desc: "मसालेदार आख्खा मसूर", price: "120" }
        ],
        nonveg_thali: [
          { name: "स्पेशल मटन थाली (Unlimited)", desc: "मटन फ्राई, तांबडा-पांढरा रस्सा, अंडा मसाला, आलणी, जीरा राईस, सोलकढ़ी, चपाती/भाकरी", price: "280" },
          { name: "स्पेशल चिकन थाली (Unlimited)", desc: "चिकन फ्राई, तांबडा-पांढरा रस्सा, अंडा मसाला, आलणी, जीरा राईस, चपाती/भाकरी", price: "220" }
        ],
        nonveg: [
          { name: "चिकन मसाला", desc: "मसालेदार चिकन करी", price: "110" },
          { name: "अंडा भुर्जी", desc: "मसालेदार अंडा भुर्जी", price: "70" },
          { name: "अंडा आमलेट", desc: "गरमागरम आमलेट", price: "50" }
        ],
        starters: [
          { name: "मसाला पापड़", desc: "प्याज और टमाटर के साथ मसालेदार पापड़", price: "25" },
          { name: "फ्राई पापड़", desc: "तला हुआ पापड़", price: "15" },
          { name: "रोस्टेड पापड़", desc: "भुना हुआ पापड़", price: "15" },
          { name: "उबले अंडे", desc: "उबले हुए अंडे (2 नग)", price: "30" },
          { name: "चिकन सुक्का", desc: "सूखा चिकन", price: "70" }
        ],
        rice: [
          { name: "प्लेन राईस", desc: "सादा सफेद चावल", price: "60 (Half) / 110 (Full)" },
          { name: "जीरा राईस", desc: "जीरा वाले चावल", price: "70 (Half) / 120 (Full)" }
        ],
        breads: [
          { name: "भाकरी", desc: "गरमागरम बाजरा/ज्वार की भाकरी", price: "20" },
          { name: "चपाती", desc: "मुलायम चपाती", price: "15" }
        ]
      }
    },
    about: {
      title: "हमारी परंपरा",
      story: "हॉटेल जय भवानी - सातारा-पंढरपुर रोड, पिंगली बुद्रुक का असली स्वाद! कई सालों से हम ग्राहकों को घर जैसा स्वाद और स्वच्छता का वादा कर रहे हैं।",
      quote: "असली स्वाद, घर जैसी सेवा!"
    },
    contact: {
      title: "संपर्क",
      address: "हॉटेल जय भवानी, सातारा-पंढरपुर रोड, पिंगली बुद्रुक चौक, सातारा",
      phone: "7219638983 / 7709153507",
      timing: "समय: सुबह 11 से रात 11",
      get_directions: "रास्ता देखें"
    },
    footer: {
      rights: "सर्वाधिकार सुरक्षित",
      tagline: "घर जैसा स्वाद, दिल से सेवा!"
    },
    sticky: {
      call: "कॉल",
      directions: "रास्ता",
      whatsapp: "व्हाट्सएप"
    }
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      about: "About",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      title: "Jai Bhavani Dhaba",
      tagline: "The Power of Authentic Taste!",
      cta_menu: "View Menu",
      cta_directions: "Get Directions",
      cta_call: "Call Now"
    },
    highlights: {
      taste: "Excellent Taste",
      hygiene: "Hygiene",
      affordable: "Affordable"
    },
    menu: {
      title: "Our Menu",
      veg_title: "Vegetarian (Veg)",
      nonveg_thali_title: "Non-Veg Thali",
      nonveg_title: "Non-Veg",
      starters_title: "Starters",
      rice_title: "Rice",
      breads_title: "Breads",
      todays_special: "Today's Special",
      categories: {
        veg: [
          { name: "Matar Paneer", desc: "Fresh cottage cheese and peas in gravy", price: "180" },
          { name: "Paneer Masala", desc: "Spiced paneer gravy", price: "170" },
          { name: "Mix Veg", desc: "Traditional mixed vegetable medley", price: "170" },
          { name: "Kaju Masala", desc: "Rich cashew nut gravy", price: "180" },
          { name: "Shev Bhaji", desc: "Spicy Shev in savory gravy", price: "140" },
          { name: "Dal Tadka", desc: "Yellow dal tempered with spices", price: "110" },
          { name: "Pithla", desc: "Traditional gram flour delicacy", price: "70" },
          { name: "Akkha Masoor", desc: "Whole red lentils in Kolhapuri style", price: "120" }
        ],
        nonveg_thali: [
          { name: "Special Mutton Thali (Unlimited)", desc: "Mutton Fry, Tambada-Pandhara Rassa, Egg Masala, Aalani, Jeera Rice, Solkadhi, Chapati/Bhakri", price: "280" },
          { name: "Special Chicken Thali (Unlimited)", desc: "Chicken Fry, Tambada-Pandhara Rassa, Egg Masala, Aalani, Jeera Rice, Chapati/Bhakri", price: "220" }
        ],
        nonveg: [
          { name: "Chicken Masala", desc: "Spicy chicken curry", price: "110" },
          { name: "Egg Bhurji", desc: "Spiced scrambled eggs", price: "70" },
          { name: "Egg Omelet", desc: "Hot and spicy spiced omelet", price: "50" }
        ],
        starters: [
          { name: "Masala Papad", desc: "Papad topped with onion, tomato and spices", price: "25" },
          { name: "Fry Papad", desc: "Crispy deep-fried papad", price: "15" },
          { name: "Roasted Papad", desc: "Crispy fire-roasted papad", price: "15" },
          { name: "Boiled Eggs", desc: "Perfectly boiled eggs (2 pcs)", price: "30" },
          { name: "Chicken Sukka", desc: "Chicken in dry roasted spices", price: "70" }
        ],
        rice: [
          { name: "Plain Rice", desc: "Steam cooked premium rice", price: "60 (Half) / 110 (Full)" },
          { name: "Jeera Rice", desc: "Rice tempered with cumin seeds", price: "70 (Half) / 120 (Full)" }
        ],
        breads: [
          { name: "Bhakri", desc: "Traditional hot millet bread", price: "20" },
          { name: "Chapati", desc: "Soft and fresh wheat flatbread", price: "15" }
        ]
      }
    },
    about: {
      title: "Our Tradition",
      story: "Hotel Jai Bhavani - The ultimate destination for authentic taste at Satara-Pandharpur Road, Pingali Budruk! For years, we have been providing homemade quality and hygiene.",
      quote: "Authentic taste, homely service!"
    },
    contact: {
      title: "Contact",
      address: "Hotel Jai Bhavani, Satara-Pandharpur Road, Pingali Budruk Chowk, Satara",
      phone: "7219638983 / 7709153507",
      timing: "Timing: 11 AM to 11 PM",
      get_directions: "Get Directions"
    },
    footer: {
      rights: "All rights reserved",
      tagline: "Once you try, you’ll keep coming back!"
    },
    sticky: {
      call: "Call",
      directions: "Directions",
      whatsapp: "WhatsApp"
    }
  }
};

export type Language = "mr" | "hi" | "en";
