// نصوص الواجهة والبيانات المعروضة؛ الأرقام والصور ومنطق الحجز تبقى في hotels.js.
const translations = {
  "en": {
    "home": "Home",
    "search": "Search",
    "about": "About",
    "switchLanguage": "Switch to Arabic",
    "hero": {
      "from": "From",
      "currency": "JD",
      "perNight": "/ night",
      "bookNow": "Book Now",
      "previousHotel": "Previous hotel",
      "nextHotel": "Next hotel",
      "hotels": {
        "1": {
          "name": "The Ritz-Carlton, Amman",
          "location": "5th Circle, Al Kindi Street, Amman",
          "description": "A luxury five-star stay in Amman's 5th Circle with elegant rooms and suites, city views, refined dining and spa experiences."
        },
        "2": {
          "name": "Fairmont Amman",
          "location": "6 Beirut Street, 5th Circle, Abdoun, Amman",
          "description": "A contemporary luxury hotel in Abdoun offering spacious rooms, city views, multiple dining venues, Fairmont Spa and premium guest services."
        },
        "3": {
          "name": "Four Seasons Hotel Amman",
          "location": "5th Circle, Al Kindi Street, Amman",
          "description": "An elegant hotel on one of Amman's highest hills with spacious rooms, panoramic city views, upscale dining and wellness facilities."
        },
        "4": {
          "name": "W Amman",
          "location": "Al Abdali, Amman",
          "description": "A modern lifestyle hotel in Abdali with bold design, skyline views, lively dining, a rooftop pool and easy access to central Amman."
        }
      }
    },
    "explore": {
      "title": "Explore Jordan",
      "amman": {
        "name": "Amman",
        "imageAlt": "Amman city",
        "description": "Discover Jordan’s vibrant capital, where ancient history meets modern city life. Explore the Amman Citadel, the impressive Roman Theatre, stroll through Rainbow Street, and enjoy local cafés, traditional markets, and panoramic views across the city’s famous hills."
      },
      "petra": {
        "name": "Petra",
        "imageAlt": "Petra",
        "description": "Step into Jordan’s legendary Rose City, carved directly into the sandstone mountains more than two thousand years ago. Walk through the spectacular Siq to the iconic Treasury, then explore ancient tombs, temples, trails, and the magnificent Monastery hidden among Petra’s dramatic red-rock landscape."
      },
      "aqaba": {
        "name": "Aqaba",
        "imageAlt": "Aqaba city",
        "description": "Escape to Jordan’s gateway to the Red Sea, known for its warm climate, crystal-clear waters, beaches, and colorful coral reefs. Aqaba is perfect for diving, snorkeling, boat trips, water sports, and relaxing by the sea, with lively resorts, restaurants, and the modern Ayla waterfront nearby."
      },
      "deadSea": {
        "name": "Dead Sea",
        "imageAlt": "Dead Sea",
        "description": "Experience one of the world’s most unique natural destinations at the lowest point on Earth. Float effortlessly in the mineral-rich waters, enjoy the famous natural mud and spa treatments, and admire dramatic desert landscapes and unforgettable sunsets along the shoreline."
      }
    },
    "why": {
      "title": "Why Choose Us",
      "pricesTitle": "Best Prices",
      "pricesDescription": "Find great stays at competitive prices.",
      "hotelsTitle": "Verified Hotels",
      "hotelsDescription": "Discover trusted hotels across Jordan.",
      "bookingTitle": "Easy Booking",
      "bookingDescription": "Book your stay quickly and easily."
    },
    "footer": {
      "tagline": "Find your perfect stay, wherever you go.",
      "quickLinks": "Quick Links",
      "contact": "Contact",
      "email": "Email",
      "phone": "Phone",
      "copyright": "All rights reserved."
    },
    "searchPage": {
      "title": "Popular Stays",
      "searchPlaceholder": "Search Hotels...",
      "searchLabel": "Search hotels",
      "sortBy": "Sort By",
      "priceLowHigh": "Price: Low to High",
      "priceHighLow": "Price: High to Low",
      "ratingHighLow": "Rating: High to Low",
      "ratingLowHigh": "Rating: Low to High",
      "drag": "Drag to explore",
      "seeMore": "See More",
      "from": "From",
      "currency": "JD",
      "perNight": "/ night",
      "noResults": "No hotels match your search."
    },
    "hotelDetails": {
      "amenities": "Amenities",
      "rooms": "Rooms",
      "price": "Price",
      "upTo": "Up to",
      "guests": "guests",
      "currency": "JD",
      "bookNow": "Book Now"
    },
    "booking": {
      "close": "Close booking window",
      "checkIn": "Check-in",
      "checkOut": "Check-out",
      "guests": "Guests",
      "noRooms": "No rooms are available for this number of guests.",
      "roomType": "Room Type",
      "selectRoom": "Select a room",
      "perNight": "/ night",
      "upTo": "Up to",
      "guestUnit": "guests",
      "fullName": "Full Name",
      "namePlaceholder": "Enter your full name",
      "email": "Email",
      "emailPlaceholder": "Enter your email",
      "total": "Total",
      "currency": "JD",
      "confirm": "Confirm Booking",
      "cancel": "Cancel"
    },
    "hotels": {
      "1": {
        "name": "The Ritz-Carlton, Amman",
        "city": "Amman",
        "location": "5th Circle, Al Kindi Street, Amman",
        "description": "A luxury five-star stay in Amman's 5th Circle with elegant rooms and suites, city views, refined dining and spa experiences.",
        "searchNames": [
          "The Ritz-Carlton, Amman",
          "الريتز كارلتون، عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Indoor & outdoor pools",
          "Spa",
          "Fitness center",
          "Restaurants & lounges",
          "Valet parking"
        ],
        "rooms": {
          "1": "Deluxe King Room",
          "2": "Premier Deluxe Room",
          "3": "The Ritz-Carlton Suite"
        }
      },
      "2": {
        "name": "Fairmont Amman",
        "city": "Amman",
        "location": "6 Beirut Street, 5th Circle, Abdoun, Amman",
        "description": "A contemporary luxury hotel in Abdoun offering spacious rooms, city views, multiple dining venues, Fairmont Spa and premium guest services.",
        "searchNames": [
          "Fairmont Amman",
          "فيرمونت عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Seasonal outdoor pool",
          "Spa",
          "Fitness center",
          "Valet parking",
          "Restaurants"
        ],
        "rooms": {
          "1": "Fairmont King Room",
          "2": "Fairmont Gold King Room",
          "3": "One Bedroom Suite"
        }
      },
      "3": {
        "name": "Four Seasons Hotel Amman",
        "city": "Amman",
        "location": "5th Circle, Al Kindi Street, Amman",
        "description": "An elegant hotel on one of Amman's highest hills with spacious rooms, panoramic city views, upscale dining and wellness facilities.",
        "searchNames": [
          "Four Seasons Hotel Amman",
          "فندق فورسيزونز عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Indoor & outdoor pools",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Concierge"
        ],
        "rooms": {
          "1": "Premium Room",
          "2": "Deluxe Room",
          "3": "Deluxe Executive Suite"
        }
      },
      "4": {
        "name": "W Amman",
        "city": "Amman",
        "location": "Al Abdali, Amman",
        "description": "A modern lifestyle hotel in Abdali with bold design, skyline views, lively dining, a rooftop pool and easy access to central Amman.",
        "searchNames": [
          "W Amman",
          "فندق دبليو عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Outdoor pool",
          "Spa",
          "Fitness center",
          "Restaurants & bars",
          "Valet parking"
        ],
        "rooms": {
          "1": "Wonderful Room",
          "2": "Spectacular Room",
          "3": "W Suite"
        }
      },
      "5": {
        "name": "The St. Regis Amman",
        "city": "Amman",
        "location": "5th Circle, Shafiq Al Hayek Street, Amman",
        "description": "A refined luxury hotel combining contemporary design with signature St. Regis service, premium dining and spa facilities.",
        "searchNames": [
          "The St. Regis Amman",
          "سانت ريجيس عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Outdoor pool",
          "Spa",
          "Fitness center",
          "Butler service",
          "Restaurants"
        ],
        "rooms": {
          "1": "Deluxe Room",
          "2": "Grand Deluxe Room",
          "3": "The St. Regis Suite"
        }
      },
      "6": {
        "name": "Le Royal Hotel - Amman",
        "city": "Amman",
        "location": "3rd Circle, Zahran Street, Amman",
        "description": "A landmark high-rise hotel in central Amman featuring city views, comfortable rooms, wellness facilities and several dining options.",
        "searchNames": [
          "Le Royal Hotel - Amman",
          "فندق لو رويال عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Indoor pool",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Parking"
        ],
        "rooms": {
          "1": "Deluxe Room",
          "2": "Royal Club Room",
          "3": "Executive Suite"
        }
      },
      "7": {
        "name": "Amman Rotana",
        "city": "Amman",
        "location": "Al Sawosana Al Sawoda Street, Abdali, Amman",
        "description": "A contemporary tower hotel in Abdali with large city-view rooms, modern amenities, dining venues and leisure facilities.",
        "searchNames": [
          "Amman Rotana",
          "عمّان روتانا"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Outdoor pool",
          "Fitness center",
          "Restaurants",
          "24-hour room service",
          "In-room safe"
        ],
        "rooms": {
          "1": "Guest Room City View - King Bed",
          "2": "Large Corner City View Room - King Bed",
          "3": "One Bedroom Suite with Lounge Access & City View"
        }
      },
      "8": {
        "name": "Sheraton Amman Al Nabil Hotel",
        "city": "Amman",
        "location": "5th Circle, Zahran Street, Amman",
        "description": "A long-established five-star hotel in West Amman with spacious rooms, dining venues, wellness facilities and city views.",
        "searchNames": [
          "Sheraton Amman Al Nabil Hotel",
          "فندق شيراتون عمّان النبيل"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Pools",
          "Fitness center",
          "Restaurants",
          "Room service",
          "Business facilities"
        ],
        "rooms": {
          "1": "Deluxe Room",
          "2": "Deluxe Junior Suite - Club Lounge Access",
          "3": "Executive Suite - Club Lounge Access"
        }
      },
      "9": {
        "name": "Grand Hyatt Amman",
        "city": "Amman",
        "location": "3rd Circle, Hussein Bin Ali Street, Amman",
        "description": "A centrally located luxury hotel with modern rooms, extensive dining, wellness facilities and convenient access to downtown Amman.",
        "searchNames": [
          "Grand Hyatt Amman",
          "غراند حياة عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Pool",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Parking"
        ],
        "rooms": {
          "1": "1 King Bed",
          "2": "1 King Bed with Club Access",
          "3": "Grand Suite King"
        }
      },
      "10": {
        "name": "Amman Marriott Hotel",
        "city": "Amman",
        "location": "Issam Ajlouni Street, Amman",
        "description": "A full-service hotel in central Amman offering comfortable rooms, several dining outlets and indoor and outdoor leisure facilities.",
        "searchNames": [
          "Amman Marriott Hotel",
          "فندق ماريوت عمّان"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Indoor & outdoor pools",
          "Fitness center",
          "Restaurants",
          "Spa services",
          "Parking"
        ],
        "rooms": {
          "1": "Deluxe Room",
          "2": "Executive Room",
          "3": "Executive Suite"
        }
      },
      "11": {
        "name": "Kempinski Hotel Aqaba Red Sea",
        "city": "Aqaba",
        "location": "King Hussein Street, Aqaba",
        "description": "A five-star beachfront hotel on the Red Sea with sea-view rooms, a private sandy beach, infinity pool, dining and spa facilities.",
        "searchNames": [
          "Kempinski Hotel Aqaba Red Sea",
          "فندق كمبينسكي العقبة البحر الأحمر"
        ],
        "amenities": [
          "Private beach",
          "Infinity pool",
          "Free Wi-Fi",
          "Spa",
          "Fitness center",
          "Restaurants"
        ],
        "rooms": {
          "1": "Deluxe Room",
          "2": "Panoramic Club Room",
          "3": "Deluxe Family Room"
        }
      },
      "12": {
        "name": "InterContinental Aqaba by IHG",
        "city": "Aqaba",
        "location": "King Hussein Bin Talal Street, Aqaba",
        "description": "A beachfront resort in central Aqaba with Red Sea access, landscaped pools, restaurants and rooms suited to leisure and business travelers.",
        "searchNames": [
          "InterContinental Aqaba by IHG",
          "إنتركونتيننتال العقبة"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pools",
          "Free Wi-Fi",
          "Spa",
          "Fitness center",
          "Restaurants"
        ],
        "rooms": {
          "1": "Classic Room",
          "2": "Premium Room",
          "3": "One Bedroom Suite"
        }
      },
      "13": {
        "name": "Al Manara, a Luxury Collection Hotel, Aqaba",
        "city": "Aqaba",
        "location": "Saraya Aqaba, Aqaba",
        "description": "A luxury waterfront hotel in Saraya Aqaba combining contemporary interiors, lagoon and sea views, refined dining and resort amenities.",
        "searchNames": [
          "Al Manara, a Luxury Collection Hotel, Aqaba",
          "المنارة، أحد فنادق لاكشري كولكشن، العقبة"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pool",
          "Free Wi-Fi",
          "Spa",
          "Fitness center",
          "Restaurants"
        ],
        "rooms": {
          "1": "Classic King Guest Room",
          "2": "Premium King Guest Room",
          "3": "Saraya Suite"
        }
      },
      "14": {
        "name": "Hyatt Regency Aqaba Ayla Resort",
        "city": "Aqaba",
        "location": "Marina Village, Ayla, Aqaba",
        "description": "A modern resort in Ayla with lagoon and marina views, private terraces, pools, spa facilities and multiple dining experiences.",
        "searchNames": [
          "Hyatt Regency Aqaba Ayla Resort",
          "منتجع حياة ريجنسي العقبة أيلة"
        ],
        "amenities": [
          "Outdoor pools",
          "Spa",
          "Fitness center",
          "Free Wi-Fi",
          "Private terrace",
          "Restaurants"
        ],
        "rooms": {
          "1": "King Bed",
          "2": "King Marina",
          "3": "Regency Suite"
        }
      },
      "15": {
        "name": "DoubleTree by Hilton Hotel Aqaba",
        "city": "Aqaba",
        "location": "Al-Hammamat Al-Tunisyya Street, Aqaba",
        "description": "A central Aqaba hotel close to shopping and the waterfront with comfortable rooms, rooftop views and leisure facilities.",
        "searchNames": [
          "DoubleTree by Hilton Hotel Aqaba",
          "فندق دبل تري باي هيلتون العقبة"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Outdoor pool",
          "Fitness center",
          "Restaurant",
          "Rooftop terrace",
          "Parking"
        ],
        "rooms": {
          "1": "King Guest Room",
          "2": "King Deluxe Room with Sea View",
          "3": "One Bedroom Suite"
        }
      },
      "16": {
        "name": "Mövenpick Resort & Residences Aqaba",
        "city": "Aqaba",
        "location": "King Hussein Street, Aqaba",
        "description": "A family-friendly Red Sea resort with a private beach, pools, hotel rooms and residences, landscaped grounds and dining options.",
        "searchNames": [
          "Mövenpick Resort & Residences Aqaba",
          "منتجع وريزيدنس موفنبيك العقبة"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pools",
          "Free Wi-Fi",
          "Fitness center",
          "Restaurants",
          "Family facilities"
        ],
        "rooms": {
          "1": "Superior King",
          "2": "Deluxe King Sea View",
          "3": "Executive Suite Sea View"
        }
      },
      "17": {
        "name": "The Westin Saraya Aqaba Resort & Spa",
        "city": "Aqaba",
        "location": "Saraya Aqaba, Aqaba",
        "description": "A modern resort and spa in Saraya Aqaba with waterfront views, contemporary rooms, pools, wellness facilities and dining.",
        "searchNames": [
          "The Westin Saraya Aqaba Resort & Spa",
          "منتجع وسبا ويستن سرايا العقبة"
        ],
        "amenities": [
          "Outdoor pools",
          "Spa",
          "Free Wi-Fi",
          "Fitness center",
          "Restaurants",
          "Waterfront access"
        ],
        "rooms": {
          "1": "Classic King Guest Room - Mountain View",
          "2": "Deluxe King Guest Room - Garden View",
          "3": "Premium Suite - Mountain View"
        }
      },
      "18": {
        "name": "Grand Tala Bay Resort, Aqaba",
        "city": "Aqaba",
        "location": "Tala Bay, South Beach, Aqaba",
        "description": "A South Beach resort in Tala Bay with direct Red Sea access, pools, landscaped grounds and leisure-focused accommodation.",
        "searchNames": [
          "Grand Tala Bay Resort, Aqaba",
          "منتجع غراند تالا باي العقبة"
        ],
        "amenities": [
          "Beach access",
          "Outdoor pools",
          "Free Wi-Fi",
          "Restaurants",
          "Fitness facilities",
          "Water activities"
        ],
        "rooms": {
          "1": "Standard Room",
          "2": "Deluxe Room",
          "3": "Executive Suite"
        }
      },
      "19": {
        "name": "Mövenpick Resort Petra",
        "city": "Petra",
        "location": "Tourism Street, Wadi Musa",
        "description": "A premium resort located next to the entrance of Petra, combining convenient access to the archaeological site with dining and rooftop views.",
        "searchNames": [
          "Mövenpick Resort Petra",
          "منتجع موفنبيك البتراء"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Outdoor pool",
          "Restaurants",
          "Rooftop terrace",
          "Fitness center",
          "Concierge"
        ],
        "rooms": {
          "1": "Classic King Room",
          "2": "Superior King Room",
          "3": "Junior Suite"
        }
      },
      "20": {
        "name": "Petra Moon Luxury Hotel",
        "city": "Petra",
        "location": "Near Petra Visitor Center, Wadi Musa",
        "description": "A modern hotel close to Petra Visitor Center offering comfortable rooms, convenient access to the site and a relaxed rooftop setting.",
        "searchNames": [
          "Petra Moon Luxury Hotel",
          "فندق بترا مون الفاخر"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Outdoor pool",
          "Restaurant",
          "Parking",
          "Airport transfer",
          "24-hour front desk"
        ],
        "rooms": {
          "1": "Deluxe Room",
          "2": "Luxury Triple Room - Mountain View",
          "3": "Junior Suite with Jacuzzi"
        }
      },
      "21": {
        "name": "Petra Moon Hotel",
        "city": "Petra",
        "location": "Near Petra Visitor Center, Wadi Musa",
        "description": "A popular hotel near Petra's entrance with comfortable accommodation and convenient access for travelers exploring the ancient city.",
        "searchNames": [
          "Petra Moon Hotel",
          "فندق بترا مون"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Restaurant",
          "Parking",
          "24-hour front desk",
          "Tour assistance",
          "Airport transfer"
        ],
        "rooms": {
          "1": "Double Room",
          "2": "Triple Room",
          "3": "Family Room"
        }
      },
      "22": {
        "name": "The Old Village Hotel & Resort",
        "city": "Petra",
        "location": "Wadi Musa, Petra",
        "description": "A characterful stone-built resort in Wadi Musa offering traditional architecture, mountain views and a quiet base for visiting Petra.",
        "searchNames": [
          "The Old Village Hotel & Resort",
          "فندق ومنتجع القرية القديمة"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Indoor pool",
          "Restaurant",
          "Fitness center",
          "Parking",
          "Terrace"
        ],
        "rooms": {
          "1": "Standard Double Room",
          "2": "Standard Triple Room",
          "3": "Junior Suite"
        }
      },
      "23": {
        "name": "Petra Marriott Hotel",
        "city": "Petra",
        "location": "Queen Rania Al Abdallah Street, Wadi Musa",
        "description": "A hillside hotel overlooking the Petra valley with spacious rooms, mountain views, dining and wellness facilities.",
        "searchNames": [
          "Petra Marriott Hotel",
          "فندق ماريوت البتراء"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Outdoor pool",
          "Spa",
          "Restaurants",
          "Fitness center",
          "Parking"
        ],
        "rooms": {
          "1": "Deluxe King Room",
          "2": "Premium Valley View Room",
          "3": "Executive Suite"
        }
      },
      "24": {
        "name": "La Maison Hotel",
        "city": "Petra",
        "location": "Off Tourist Street, Wadi Musa",
        "description": "A practical and well-located hotel near Petra Visitor Center with comfortable rooms and easy access to the archaeological site.",
        "searchNames": [
          "La Maison Hotel",
          "فندق لا ميزون"
        ],
        "amenities": [
          "Free Wi-Fi",
          "Restaurant",
          "Parking",
          "24-hour front desk",
          "Tour desk",
          "Terrace"
        ],
        "rooms": {
          "1": "Standard Double Room",
          "2": "Standard Twin Room",
          "3": "Standard Triple Room"
        }
      },
      "25": {
        "name": "Hilton Dead Sea Resort & Spa",
        "city": "Dead Sea",
        "location": "Hotels Area, Sweimeh",
        "description": "A modern Dead Sea resort with private shoreline access, pools, spa facilities and rooms designed for leisure stays and sunset views.",
        "searchNames": [
          "Hilton Dead Sea Resort & Spa",
          "منتجع وسبا هيلتون البحر الميت"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pools",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Free Wi-Fi"
        ],
        "rooms": {
          "1": "King Guest Room",
          "2": "King Deluxe Room with Sea View",
          "3": "One Bedroom Suite"
        }
      },
      "26": {
        "name": "Kempinski Hotel Ishtar Dead Sea",
        "city": "Dead Sea",
        "location": "Sweimeh Dead Sea Road",
        "description": "A luxury Dead Sea resort with extensive landscaped pools, private shoreline access, spa facilities and premium dining.",
        "searchNames": [
          "Kempinski Hotel Ishtar Dead Sea",
          "فندق كمبينسكي عشتار البحر الميت"
        ],
        "amenities": [
          "Private beach",
          "Multiple pools",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Free Wi-Fi"
        ],
        "rooms": {
          "1": "Superior Room",
          "2": "Ishtar Superior Room",
          "3": "Ishtar Deluxe Room"
        }
      },
      "27": {
        "name": "Dead Sea Marriott Resort & Spa",
        "city": "Dead Sea",
        "location": "Sweimeh",
        "description": "A full-service resort at the Dead Sea with several pools, spa facilities, private beach access and a wide choice of dining.",
        "searchNames": [
          "Dead Sea Marriott Resort & Spa",
          "منتجع وسبا ماريوت البحر الميت"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pools",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Free Wi-Fi"
        ],
        "rooms": {
          "1": "Deluxe Room",
          "2": "Pool Terrace Room",
          "3": "Executive Suite"
        }
      },
      "28": {
        "name": "Mövenpick Resort & Spa Dead Sea",
        "city": "Dead Sea",
        "location": "Sweimeh",
        "description": "A village-style Dead Sea resort with lush gardens, pools, private beach access, spa treatments and multiple restaurants.",
        "searchNames": [
          "Mövenpick Resort & Spa Dead Sea",
          "منتجع وسبا موفنبيك البحر الميت"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pools",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Free Wi-Fi"
        ],
        "rooms": {
          "1": "Classic King",
          "2": "Premium King Sea View",
          "3": "Suite King Sea View"
        }
      },
      "29": {
        "name": "Crowne Plaza Jordan Dead Sea Resort & Spa by IHG",
        "city": "Dead Sea",
        "location": "Sweimeh",
        "description": "A large Dead Sea resort offering multiple pools, private shoreline access, wellness facilities and family-friendly leisure spaces.",
        "searchNames": [
          "Crowne Plaza Jordan Dead Sea Resort & Spa by IHG",
          "منتجع وسبا كراون بلازا الأردن البحر الميت"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pools",
          "Spa",
          "Fitness center",
          "Restaurants",
          "Free Wi-Fi"
        ],
        "rooms": {
          "1": "Standard Room",
          "2": "Premium Room",
          "3": "One Bedroom Suite"
        }
      },
      "30": {
        "name": "Holiday Inn Resort Dead Sea by IHG",
        "city": "Dead Sea",
        "location": "Sweimeh",
        "description": "A relaxed Dead Sea resort with beach access, pools, family-friendly facilities and comfortable rooms for short leisure breaks.",
        "searchNames": [
          "Holiday Inn Resort Dead Sea by IHG",
          "منتجع هوليداي إن البحر الميت"
        ],
        "amenities": [
          "Private beach",
          "Outdoor pools",
          "Free Wi-Fi",
          "Fitness center",
          "Restaurants",
          "Parking"
        ],
        "rooms": {
          "1": "Standard Room",
          "2": "Premium Room",
          "3": "Suite"
        }
      }
      
    },
     "aboutPage": {
      "eyebrow": "DISCOVER OUR STORY",
      "title": "More Than A Place To Stay.",
      "description": "Discover Jordan through stays, stories and unforgettable destinations.",
      "discover": "Discover",
      "returnToFront": "Click to return",
      "cards": {
        "1": {
          "title": "Who We Are",
          "text": "StayGo is a Jordan-focused hotel booking platform created to make discovering and booking stays across the Kingdom simple, clear and enjoyable."
        },
        "2": {
          "title": "Our Mission",
          "text": "Our mission is to connect travelers with memorable stays while showcasing Jordan's extraordinary destinations and hospitality."
        },
        "3": {
          "title": "Explore Jordan",
          "text": "From ancient Petra and the dramatic landscapes of Wadi Rum to the Red Sea and the Dead Sea, Jordan offers remarkable experiences in every direction."
        },
        "4": {
          "title": "Why StayGo",
          "text": "Simple search, clear room options, transparent prices and an easy booking experience — all designed around the traveler."
        },
          "5": {
          "title": "Local Experiences",
          "text": "StayGo goes beyond accommodation by helping travelers discover the culture, landscapes and unique character of Jordan."
        },
        "6": {
          "title": "How It Works",
          "text": "Search for a destination, compare hotels and rooms, choose your dates and complete your booking in just a few simple steps."
        },
        "7": {
          "title": "Our Passion",
          "text": "Our passion is sharing the beauty of Jordan and its warm hospitality. Through StayGo, we aim to inspire travelers to explore new places and create memories that last beyond their stay."
        },
        "8": {
          "title": "Travel With Confidence",
          "text": "Clear choices, transparent details and a simpler way to plan your stay."
        },
        "9": {
          "title": "Jordan Beyond the Stay",
          "text": "A great trip is more than a hotel room. StayGo celebrates the culture, landscapes, heritage, food and local experiences that make every destination in Jordan unique."
        }
      }
    }
  },
  
  "ar": {
    "home": "الرئيسية",
    "search": "البحث",
    "about": "من نحن",
    "switchLanguage": "التبديل إلى الإنجليزية",
    "hero": {
      "from": "ابتداءً من",
      "currency": "د.أ",
      "perNight": "/ الليلة",
      "bookNow": "احجز الآن",
      "previousHotel": "الفندق السابق",
      "nextHotel": "الفندق التالي",
      "hotels": {
        "1": {
          "name": "الريتز كارلتون، عمّان",
          "location": "الدوار الخامس، شارع الكندي، عمّان",
          "description": "إقامة فاخرة من فئة خمس نجوم في الدوار الخامس بعمّان، مع غرف وأجنحة أنيقة، وإطلالات على المدينة، وتجارب طعام راقية وخدمات سبا."
        },
        "2": {
          "name": "فيرمونت عمّان",
          "location": "شارع بيروت 6، الدوار الخامس، عبدون، عمّان",
          "description": "فندق فاخر بتصميم عصري في عبدون، يوفّر غرفًا واسعة وإطلالات على المدينة، وخيارات متنوعة لتناول الطعام، وسبا فيرمونت وخدمات مميزة للضيوف."
        },
        "3": {
          "name": "فندق فورسيزونز عمّان",
          "location": "الدوار الخامس، شارع الكندي، عمّان",
          "description": "فندق أنيق على إحدى أعلى تلال عمّان، يضم غرفًا واسعة وإطلالات بانورامية على المدينة، ومطاعم راقية ومرافق للعناية بالصحة والاسترخاء."
        },
        "4": {
          "name": "فندق دبليو عمّان",
          "location": "العبدلي، عمّان",
          "description": "فندق عصري في العبدلي، يتميّز بتصميم جريء وإطلالات على أفق المدينة، وخيارات مفعمة بالحيوية لتناول الطعام، ومسبح على السطح وموقع يسهل منه الوصول إلى وسط عمّان."
        }
      }
    },
    "explore": {
      "title": "اكتشف الأردن",
      "amman": {
        "name": "عمّان",
        "imageAlt": "مدينة عمّان",
        "description": "اكتشف عاصمة الأردن النابضة بالحياة، حيث يلتقي التاريخ العريق بالحياة العصرية. تجوّل في جبل القلعة والمدرج الروماني وشارع الرينبو، واستمتع بالمقاهي المحلية والأسواق التقليدية والإطلالات الواسعة على تلال المدينة الشهيرة."
      },
      "petra": {
        "name": "البتراء",
        "imageAlt": "مدينة البتراء",
        "description": "ادخل إلى مدينة الأردن الوردية الشهيرة، المنحوتة في جبال الحجر الرملي منذ أكثر من ألفي عام. اعبر السيق المذهل وصولًا إلى الخزنة، ثم اكتشف المقابر والمعابد والمسارات القديمة والدير الرائع وسط جبال البتراء الصخرية الحمراء."
      },
      "aqaba": {
        "name": "العقبة",
        "imageAlt": "مدينة العقبة",
        "description": "استمتع ببوابة الأردن إلى البحر الأحمر، المعروفة بطقسها الدافئ ومياهها الصافية وشواطئها وشعابها المرجانية الملوّنة. تتيح العقبة تجارب الغوص والسباحة بالقناع ورحلات القوارب والرياضات المائية والاسترخاء على الشاطئ، مع منتجعات ومطاعم حيوية وواجهة أيلة البحرية القريبة."
      },
      "deadSea": {
        "name": "البحر الميت",
        "imageAlt": "البحر الميت",
        "description": "عِش تجربة إحدى أكثر الوجهات الطبيعية تفرّدًا في العالم، عند أخفض نقطة على سطح الأرض. استمتع بالطفو في المياه الغنية بالمعادن، والطين الطبيعي الشهير وعلاجات السبا، وتأمّل المناظر الصحراوية وغروب الشمس الذي لا يُنسى على امتداد الشاطئ."
      }
    },
    "why": {
      "title": "لماذا تختار StayGo؟",
      "pricesTitle": "أفضل الأسعار",
      "pricesDescription": "اعثر على إقامة مميزة بأسعار تنافسية.",
      "hotelsTitle": "فنادق موثوقة",
      "hotelsDescription": "اكتشف فنادق موثوقة في مختلف أنحاء الأردن.",
      "bookingTitle": "حجز سهل",
      "bookingDescription": "احجز إقامتك بسرعة وسهولة."
    },
    "footer": {
      "tagline": "اعثر على إقامتك المثالية، أينما كانت وجهتك.",
      "quickLinks": "روابط سريعة",
      "contact": "تواصل معنا",
      "email": "البريد الإلكتروني",
      "phone": "الهاتف",
      "copyright": "جميع الحقوق محفوظة."
    },
    "searchPage": {
      "title": "إقامات رائجة",
      "searchPlaceholder": "ابحث عن فندق...",
      "searchLabel": "البحث عن الفنادق",
      "sortBy": "ترتيب حسب",
      "priceLowHigh": "السعر: من الأقل إلى الأعلى",
      "priceHighLow": "السعر: من الأعلى إلى الأقل",
      "ratingHighLow": "التقييم: من الأعلى إلى الأقل",
      "ratingLowHigh": "التقييم: من الأقل إلى الأعلى",
      "drag": "اسحب لاستكشاف الفنادق",
      "seeMore": "عرض التفاصيل",
      "from": "ابتداءً من",
      "currency": "د.أ",
      "perNight": "/ الليلة",
      "noResults": "لا توجد فنادق تطابق بحثك."
    },
    "hotelDetails": {
      "amenities": "المرافق",
      "rooms": "الغرف",
      "price": "السعر",
      "upTo": "تتسع حتى",
      "guests": "ضيوف",
      "currency": "د.أ",
      "bookNow": "احجز الآن"
    },
    "booking": {
      "close": "إغلاق نافذة الحجز",
      "checkIn": "تاريخ الوصول",
      "checkOut": "تاريخ المغادرة",
      "guests": "عدد الضيوف",
      "noRooms": "لا تتوفر غرف تتسع لهذا العدد من الضيوف.",
      "roomType": "نوع الغرفة",
      "selectRoom": "اختر غرفة",
      "perNight": "/ الليلة",
      "upTo": "تتسع حتى",
      "guestUnit": "ضيوف",
      "fullName": "الاسم الكامل",
      "namePlaceholder": "أدخل اسمك الكامل",
      "email": "البريد الإلكتروني",
      "emailPlaceholder": "أدخل بريدك الإلكتروني",
      "total": "الإجمالي",
      "currency": "د.أ",
      "confirm": "تأكيد الحجز",
      "cancel": "إلغاء"
    },
    "hotels": {
      "1": {
        "name": "الريتز كارلتون، عمّان",
        "location": "الدوار الخامس، شارع الكندي، عمّان",
        "description": "إقامة فاخرة من فئة خمس نجوم في الدوار الخامس بعمّان، مع غرف وأجنحة أنيقة، وإطلالات على المدينة، وتجارب طعام راقية وخدمات سبا.",
        "city": "عمّان",
        "searchNames": [
          "The Ritz-Carlton, Amman",
          "الريتز كارلتون، عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسابح داخلية وخارجية",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم وصالات",
          "خدمة صف السيارات"
        ],
        "rooms": {
          "1": "غرفة ديلوكس بسرير كينغ",
          "2": "غرفة بريميير ديلوكس",
          "3": "جناح الريتز كارلتون"
        }
      },
      "2": {
        "name": "فيرمونت عمّان",
        "location": "شارع بيروت 6، الدوار الخامس، عبدون، عمّان",
        "description": "فندق فاخر بتصميم عصري في عبدون، يوفّر غرفًا واسعة وإطلالات على المدينة، وخيارات متنوعة لتناول الطعام، وسبا فيرمونت وخدمات مميزة للضيوف.",
        "city": "عمّان",
        "searchNames": [
          "Fairmont Amman",
          "فيرمونت عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي موسمي",
          "سبا",
          "مركز لياقة بدنية",
          "خدمة صف السيارات",
          "مطاعم"
        ],
        "rooms": {
          "1": "غرفة فيرمونت بسرير كينغ",
          "2": "غرفة فيرمونت غولد بسرير كينغ",
          "3": "جناح بغرفة نوم واحدة"
        }
      },
      "3": {
        "name": "فندق فورسيزونز عمّان",
        "location": "الدوار الخامس، شارع الكندي، عمّان",
        "description": "فندق أنيق على إحدى أعلى تلال عمّان، يضم غرفًا واسعة وإطلالات بانورامية على المدينة، ومطاعم راقية ومرافق للعناية بالصحة والاسترخاء.",
        "city": "عمّان",
        "searchNames": [
          "Four Seasons Hotel Amman",
          "فندق فورسيزونز عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسابح داخلية وخارجية",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "خدمة الكونسيرج"
        ],
        "rooms": {
          "1": "غرفة بريميوم",
          "2": "غرفة ديلوكس",
          "3": "جناح تنفيذي ديلوكس"
        }
      },
      "4": {
        "name": "فندق دبليو عمّان",
        "location": "العبدلي، عمّان",
        "description": "فندق عصري في العبدلي، يتميّز بتصميم جريء وإطلالات على أفق المدينة، وخيارات مفعمة بالحيوية لتناول الطعام، ومسبح على السطح وموقع يسهل منه الوصول إلى وسط عمّان.",
        "city": "عمّان",
        "searchNames": [
          "W Amman",
          "فندق دبليو عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم وبارات",
          "خدمة صف السيارات"
        ],
        "rooms": {
          "1": "غرفة وندرفول",
          "2": "غرفة سبيكتاكيولار",
          "3": "جناح دبليو"
        }
      },
      "5": {
        "name": "سانت ريجيس عمّان",
        "location": "الدوار الخامس، شارع شفيق الحايك، عمّان",
        "description": "فندق فاخر يجمع التصميم العصري مع خدمة سانت ريجيس المميزة، وخيارات طعام راقية ومرافق سبا.",
        "city": "عمّان",
        "searchNames": [
          "The St. Regis Amman",
          "سانت ريجيس عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي",
          "سبا",
          "مركز لياقة بدنية",
          "خدمة كبير الخدم",
          "مطاعم"
        ],
        "rooms": {
          "1": "غرفة ديلوكس",
          "2": "غرفة غراند ديلوكس",
          "3": "جناح سانت ريجيس"
        }
      },
      "6": {
        "name": "فندق لو رويال عمّان",
        "location": "الدوار الثالث، شارع زهران، عمّان",
        "description": "فندق بارز في مبنى مرتفع بوسط عمّان، يوفّر إطلالات على المدينة وغرفًا مريحة ومرافق للعناية بالصحة وخيارات متنوعة لتناول الطعام.",
        "city": "عمّان",
        "searchNames": [
          "Le Royal Hotel - Amman",
          "فندق لو رويال عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح داخلي",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "موقف سيارات"
        ],
        "rooms": {
          "1": "غرفة ديلوكس",
          "2": "غرفة رويال كلوب",
          "3": "جناح تنفيذي"
        }
      },
      "7": {
        "name": "عمّان روتانا",
        "location": "شارع السوسنة السوداء، العبدلي، عمّان",
        "description": "فندق عصري في برج بمنطقة العبدلي، يضم غرفًا واسعة بإطلالات على المدينة، وتجهيزات حديثة ومطاعم ومرافق ترفيهية.",
        "city": "عمّان",
        "searchNames": [
          "Amman Rotana",
          "عمّان روتانا"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي",
          "مركز لياقة بدنية",
          "مطاعم",
          "خدمة الغرف على مدار الساعة",
          "خزنة داخل الغرفة"
        ],
        "rooms": {
          "1": "غرفة ضيوف بإطلالة على المدينة وسرير كينغ",
          "2": "غرفة زاوية واسعة بإطلالة على المدينة وسرير كينغ",
          "3": "جناح بغرفة نوم واحدة وإطلالة على المدينة مع دخول الصالة"
        }
      },
      "8": {
        "name": "فندق شيراتون عمّان النبيل",
        "location": "الدوار الخامس، شارع زهران، عمّان",
        "description": "فندق عريق من فئة خمس نجوم في غرب عمّان، يوفّر غرفًا واسعة ومطاعم ومرافق للعناية بالصحة وإطلالات على المدينة.",
        "city": "عمّان",
        "searchNames": [
          "Sheraton Amman Al Nabil Hotel",
          "فندق شيراتون عمّان النبيل"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسابح",
          "مركز لياقة بدنية",
          "مطاعم",
          "خدمة الغرف",
          "مرافق للأعمال"
        ],
        "rooms": {
          "1": "غرفة ديلوكس",
          "2": "جناح جونيور ديلوكس مع دخول صالة النادي",
          "3": "جناح تنفيذي مع دخول صالة النادي"
        }
      },
      "9": {
        "name": "غراند حياة عمّان",
        "location": "الدوار الثالث، شارع حسين بن علي، عمّان",
        "description": "فندق فاخر بموقع مركزي، يضم غرفًا عصرية وخيارات طعام متنوعة ومرافق للعناية بالصحة، مع سهولة الوصول إلى وسط عمّان.",
        "city": "عمّان",
        "searchNames": [
          "Grand Hyatt Amman",
          "غراند حياة عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "موقف سيارات"
        ],
        "rooms": {
          "1": "سرير كينغ واحد",
          "2": "سرير كينغ واحد مع دخول النادي",
          "3": "جناح غراند بسرير كينغ"
        }
      },
      "10": {
        "name": "فندق ماريوت عمّان",
        "location": "شارع عصام العجلوني، عمّان",
        "description": "فندق متكامل الخدمات في وسط عمّان، يوفّر غرفًا مريحة ومطاعم متعددة ومرافق ترفيهية داخلية وخارجية.",
        "city": "عمّان",
        "searchNames": [
          "Amman Marriott Hotel",
          "فندق ماريوت عمّان"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسابح داخلية وخارجية",
          "مركز لياقة بدنية",
          "مطاعم",
          "خدمات السبا",
          "موقف سيارات"
        ],
        "rooms": {
          "1": "غرفة ديلوكس",
          "2": "غرفة تنفيذية",
          "3": "جناح تنفيذي"
        }
      },
      "11": {
        "name": "فندق كمبينسكي العقبة البحر الأحمر",
        "location": "شارع الملك حسين، العقبة",
        "description": "فندق من فئة خمس نجوم على شاطئ البحر الأحمر، يضم غرفًا بإطلالة على البحر وشاطئًا رمليًا خاصًا ومسبحًا لا متناهيًا ومطاعم ومرافق سبا.",
        "city": "العقبة",
        "searchNames": [
          "Kempinski Hotel Aqaba Red Sea",
          "فندق كمبينسكي العقبة البحر الأحمر"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسبح لا متناهٍ",
          "واي فاي مجاني",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم"
        ],
        "rooms": {
          "1": "غرفة ديلوكس",
          "2": "غرفة كلوب بإطلالة بانورامية",
          "3": "غرفة عائلية ديلوكس"
        }
      },
      "12": {
        "name": "إنتركونتيننتال العقبة",
        "location": "شارع الملك حسين بن طلال، العقبة",
        "description": "منتجع شاطئي في وسط العقبة يتيح الوصول إلى البحر الأحمر، ويضم مسابح محاطة بالحدائق ومطاعم وغرفًا تناسب المسافرين للترفيه والأعمال.",
        "city": "العقبة",
        "searchNames": [
          "InterContinental Aqaba by IHG",
          "إنتركونتيننتال العقبة"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح خارجية",
          "واي فاي مجاني",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم"
        ],
        "rooms": {
          "1": "غرفة كلاسيكية",
          "2": "غرفة بريميوم",
          "3": "جناح بغرفة نوم واحدة"
        }
      },
      "13": {
        "name": "المنارة، أحد فنادق لاكشري كولكشن، العقبة",
        "location": "سرايا العقبة، العقبة",
        "description": "فندق فاخر على الواجهة البحرية في سرايا العقبة، يجمع التصميم الداخلي العصري مع إطلالات على البحيرة والبحر، ومطاعم راقية ومرافق منتجع.",
        "city": "العقبة",
        "searchNames": [
          "Al Manara, a Luxury Collection Hotel, Aqaba",
          "المنارة، أحد فنادق لاكشري كولكشن، العقبة"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسبح خارجي",
          "واي فاي مجاني",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم"
        ],
        "rooms": {
          "1": "غرفة ضيوف كلاسيكية بسرير كينغ",
          "2": "غرفة ضيوف بريميوم بسرير كينغ",
          "3": "جناح سرايا"
        }
      },
      "14": {
        "name": "منتجع حياة ريجنسي العقبة أيلة",
        "location": "قرية المارينا، أيلة، العقبة",
        "description": "منتجع عصري في أيلة بإطلالات على البحيرة والمارينا، يضم تراسات خاصة ومسابح ومرافق سبا وتجارب متنوعة لتناول الطعام.",
        "city": "العقبة",
        "searchNames": [
          "Hyatt Regency Aqaba Ayla Resort",
          "منتجع حياة ريجنسي العقبة أيلة"
        ],
        "amenities": [
          "مسابح خارجية",
          "سبا",
          "مركز لياقة بدنية",
          "واي فاي مجاني",
          "تراس خاص",
          "مطاعم"
        ],
        "rooms": {
          "1": "سرير كينغ",
          "2": "غرفة كينغ مارينا",
          "3": "جناح ريجنسي"
        }
      },
      "15": {
        "name": "فندق دبل تري باي هيلتون العقبة",
        "location": "شارع الحمامات التونسية، العقبة",
        "description": "فندق في وسط العقبة بالقرب من أماكن التسوق والواجهة البحرية، يضم غرفًا مريحة وإطلالات من السطح ومرافق ترفيهية.",
        "city": "العقبة",
        "searchNames": [
          "DoubleTree by Hilton Hotel Aqaba",
          "فندق دبل تري باي هيلتون العقبة"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي",
          "مركز لياقة بدنية",
          "مطعم",
          "تراس على السطح",
          "موقف سيارات"
        ],
        "rooms": {
          "1": "غرفة ضيوف بسرير كينغ",
          "2": "غرفة ديلوكس بسرير كينغ وإطلالة على البحر",
          "3": "جناح بغرفة نوم واحدة"
        }
      },
      "16": {
        "name": "منتجع وريزيدنس موفنبيك العقبة",
        "location": "شارع الملك حسين، العقبة",
        "description": "منتجع على البحر الأحمر مناسب للعائلات، يضم شاطئًا خاصًا ومسابح وغرفًا فندقية ووحدات إقامة وحدائق منسّقة وخيارات لتناول الطعام.",
        "city": "العقبة",
        "searchNames": [
          "Mövenpick Resort & Residences Aqaba",
          "منتجع وريزيدنس موفنبيك العقبة"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح خارجية",
          "واي فاي مجاني",
          "مركز لياقة بدنية",
          "مطاعم",
          "مرافق للعائلات"
        ],
        "rooms": {
          "1": "غرفة سوبيريور بسرير كينغ",
          "2": "غرفة ديلوكس بسرير كينغ وإطلالة على البحر",
          "3": "جناح تنفيذي بإطلالة على البحر"
        }
      },
      "17": {
        "name": "منتجع وسبا ويستن سرايا العقبة",
        "location": "سرايا العقبة، العقبة",
        "description": "منتجع وسبا عصري في سرايا العقبة، يوفّر إطلالات على الواجهة البحرية وغرفًا حديثة ومسابح ومرافق للعناية بالصحة ومطاعم.",
        "city": "العقبة",
        "searchNames": [
          "The Westin Saraya Aqaba Resort & Spa",
          "منتجع وسبا ويستن سرايا العقبة"
        ],
        "amenities": [
          "مسابح خارجية",
          "سبا",
          "واي فاي مجاني",
          "مركز لياقة بدنية",
          "مطاعم",
          "الوصول إلى الواجهة البحرية"
        ],
        "rooms": {
          "1": "غرفة ضيوف كلاسيكية بسرير كينغ وإطلالة على الجبل",
          "2": "غرفة ضيوف ديلوكس بسرير كينغ وإطلالة على الحديقة",
          "3": "جناح بريميوم بإطلالة على الجبل"
        }
      },
      "18": {
        "name": "منتجع غراند تالا باي العقبة",
        "location": "تالا باي، الشاطئ الجنوبي، العقبة",
        "description": "منتجع في تالا باي على الشاطئ الجنوبي، يتيح الوصول المباشر إلى البحر الأحمر، ويضم مسابح وحدائق منسّقة وإقامة مخصصة للاستجمام.",
        "city": "العقبة",
        "searchNames": [
          "Grand Tala Bay Resort, Aqaba",
          "منتجع غراند تالا باي العقبة"
        ],
        "amenities": [
          "الوصول إلى الشاطئ",
          "مسابح خارجية",
          "واي فاي مجاني",
          "مطاعم",
          "مرافق لياقة بدنية",
          "أنشطة مائية"
        ],
        "rooms": {
          "1": "غرفة قياسية",
          "2": "غرفة ديلوكس",
          "3": "جناح تنفيذي"
        }
      },
      "19": {
        "name": "منتجع موفنبيك البتراء",
        "location": "شارع السياحة، وادي موسى",
        "description": "منتجع راقٍ بجوار مدخل البتراء، يجمع سهولة الوصول إلى الموقع الأثري مع المطاعم والإطلالات من السطح.",
        "city": "البتراء",
        "searchNames": [
          "Mövenpick Resort Petra",
          "منتجع موفنبيك البتراء"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي",
          "مطاعم",
          "تراس على السطح",
          "مركز لياقة بدنية",
          "خدمة الكونسيرج"
        ],
        "rooms": {
          "1": "غرفة كلاسيكية بسرير كينغ",
          "2": "غرفة سوبيريور بسرير كينغ",
          "3": "جناح جونيور"
        }
      },
      "20": {
        "name": "فندق بترا مون الفاخر",
        "location": "قرب مركز زوار البتراء، وادي موسى",
        "description": "فندق عصري بالقرب من مركز زوار البتراء، يوفّر غرفًا مريحة وسهولة الوصول إلى الموقع، وأجواء هادئة على السطح.",
        "city": "البتراء",
        "searchNames": [
          "Petra Moon Luxury Hotel",
          "فندق بترا مون الفاخر"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي",
          "مطعم",
          "موقف سيارات",
          "خدمة النقل من وإلى المطار",
          "مكتب استقبال على مدار الساعة"
        ],
        "rooms": {
          "1": "غرفة ديلوكس",
          "2": "غرفة ثلاثية فاخرة بإطلالة على الجبل",
          "3": "جناح جونيور مع جاكوزي"
        }
      },
      "21": {
        "name": "فندق بترا مون",
        "location": "قرب مركز زوار البتراء، وادي موسى",
        "description": "فندق معروف بالقرب من مدخل البتراء، يوفّر إقامة مريحة وموقعًا مناسبًا للمسافرين الراغبين في استكشاف المدينة الأثرية.",
        "city": "البتراء",
        "searchNames": [
          "Petra Moon Hotel",
          "فندق بترا مون"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مطعم",
          "موقف سيارات",
          "مكتب استقبال على مدار الساعة",
          "المساعدة في تنظيم الجولات",
          "خدمة النقل من وإلى المطار"
        ],
        "rooms": {
          "1": "غرفة مزدوجة",
          "2": "غرفة ثلاثية",
          "3": "غرفة عائلية"
        }
      },
      "22": {
        "name": "فندق ومنتجع القرية القديمة",
        "location": "وادي موسى، البتراء",
        "description": "منتجع حجري بطابع مميز في وادي موسى، يجمع العمارة التقليدية مع الإطلالات الجبلية، ويوفّر مكانًا هادئًا للإقامة عند زيارة البتراء.",
        "city": "البتراء",
        "searchNames": [
          "The Old Village Hotel & Resort",
          "فندق ومنتجع القرية القديمة"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح داخلي",
          "مطعم",
          "مركز لياقة بدنية",
          "موقف سيارات",
          "تراس"
        ],
        "rooms": {
          "1": "غرفة مزدوجة قياسية",
          "2": "غرفة ثلاثية قياسية",
          "3": "جناح جونيور"
        }
      },
      "23": {
        "name": "فندق ماريوت البتراء",
        "location": "شارع الملكة رانيا العبدالله، وادي موسى",
        "description": "فندق على أحد التلال بإطلالة على وادي البتراء، يضم غرفًا واسعة وإطلالات جبلية ومطاعم ومرافق للعناية بالصحة.",
        "city": "البتراء",
        "searchNames": [
          "Petra Marriott Hotel",
          "فندق ماريوت البتراء"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مسبح خارجي",
          "سبا",
          "مطاعم",
          "مركز لياقة بدنية",
          "موقف سيارات"
        ],
        "rooms": {
          "1": "غرفة ديلوكس بسرير كينغ",
          "2": "غرفة بريميوم بإطلالة على الوادي",
          "3": "جناح تنفيذي"
        }
      },
      "24": {
        "name": "فندق لا ميزون",
        "location": "بالقرب من شارع السياحة، وادي موسى",
        "description": "فندق عملي بموقع مناسب بالقرب من مركز زوار البتراء، يوفّر غرفًا مريحة وسهولة الوصول إلى الموقع الأثري.",
        "city": "البتراء",
        "searchNames": [
          "La Maison Hotel",
          "فندق لا ميزون"
        ],
        "amenities": [
          "واي فاي مجاني",
          "مطعم",
          "موقف سيارات",
          "مكتب استقبال على مدار الساعة",
          "مكتب للجولات السياحية",
          "تراس"
        ],
        "rooms": {
          "1": "غرفة مزدوجة قياسية",
          "2": "غرفة قياسية بسريرين منفصلين",
          "3": "غرفة ثلاثية قياسية"
        }
      },
      "25": {
        "name": "منتجع وسبا هيلتون البحر الميت",
        "location": "منطقة الفنادق، سويمة",
        "description": "منتجع عصري على البحر الميت، يتيح الوصول إلى شاطئ خاص، ويضم مسابح ومرافق سبا وغرفًا مناسبة للاستجمام والاستمتاع بإطلالات الغروب.",
        "city": "البحر الميت",
        "searchNames": [
          "Hilton Dead Sea Resort & Spa",
          "منتجع وسبا هيلتون البحر الميت"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح خارجية",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "واي فاي مجاني"
        ],
        "rooms": {
          "1": "غرفة ضيوف بسرير كينغ",
          "2": "غرفة ديلوكس بسرير كينغ وإطلالة على البحر",
          "3": "جناح بغرفة نوم واحدة"
        }
      },
      "26": {
        "name": "فندق كمبينسكي عشتار البحر الميت",
        "location": "طريق سويمة البحر الميت",
        "description": "منتجع فاخر على البحر الميت، يضم مسابح واسعة وسط الحدائق وشاطئًا خاصًا ومرافق سبا وخيارات طعام راقية.",
        "city": "البحر الميت",
        "searchNames": [
          "Kempinski Hotel Ishtar Dead Sea",
          "فندق كمبينسكي عشتار البحر الميت"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح متعددة",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "واي فاي مجاني"
        ],
        "rooms": {
          "1": "غرفة سوبيريور",
          "2": "غرفة عشتار سوبيريور",
          "3": "غرفة عشتار ديلوكس"
        }
      },
      "27": {
        "name": "منتجع وسبا ماريوت البحر الميت",
        "location": "سويمة",
        "description": "منتجع متكامل الخدمات على البحر الميت، يضم مسابح متعددة ومرافق سبا وشاطئًا خاصًا وخيارات واسعة لتناول الطعام.",
        "city": "البحر الميت",
        "searchNames": [
          "Dead Sea Marriott Resort & Spa",
          "منتجع وسبا ماريوت البحر الميت"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح خارجية",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "واي فاي مجاني"
        ],
        "rooms": {
          "1": "غرفة ديلوكس",
          "2": "غرفة بتراس عند المسبح",
          "3": "جناح تنفيذي"
        }
      },
      "28": {
        "name": "منتجع وسبا موفنبيك البحر الميت",
        "location": "سويمة",
        "description": "منتجع على البحر الميت بطابع القرية، يضم حدائق خضراء ومسابح وشاطئًا خاصًا وعلاجات سبا ومطاعم متعددة.",
        "city": "البحر الميت",
        "searchNames": [
          "Mövenpick Resort & Spa Dead Sea",
          "منتجع وسبا موفنبيك البحر الميت"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح خارجية",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "واي فاي مجاني"
        ],
        "rooms": {
          "1": "غرفة كلاسيكية بسرير كينغ",
          "2": "غرفة بريميوم بسرير كينغ وإطلالة على البحر",
          "3": "جناح بسرير كينغ وإطلالة على البحر"
        }
      },
      "29": {
        "name": "منتجع وسبا كراون بلازا الأردن البحر الميت",
        "location": "سويمة",
        "description": "منتجع واسع على البحر الميت، يوفّر مسابح متعددة وشاطئًا خاصًا ومرافق للعناية بالصحة ومساحات ترفيهية مناسبة للعائلات.",
        "city": "البحر الميت",
        "searchNames": [
          "Crowne Plaza Jordan Dead Sea Resort & Spa by IHG",
          "منتجع وسبا كراون بلازا الأردن البحر الميت"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح خارجية",
          "سبا",
          "مركز لياقة بدنية",
          "مطاعم",
          "واي فاي مجاني"
        ],
        "rooms": {
          "1": "غرفة قياسية",
          "2": "غرفة بريميوم",
          "3": "جناح بغرفة نوم واحدة"
        }
      },
      "30": {
        "name": "منتجع هوليداي إن البحر الميت",
        "location": "سويمة",
        "description": "منتجع هادئ على البحر الميت يتيح الوصول إلى الشاطئ، ويضم مسابح ومرافق مناسبة للعائلات وغرفًا مريحة للإقامات القصيرة.",
        "city": "البحر الميت",
        "searchNames": [
          "Holiday Inn Resort Dead Sea by IHG",
          "منتجع هوليداي إن البحر الميت"
        ],
        "amenities": [
          "شاطئ خاص",
          "مسابح خارجية",
          "واي فاي مجاني",
          "مركز لياقة بدنية",
          "مطاعم",
          "موقف سيارات"
        ],
        "rooms": {
          "1": "غرفة قياسية",
          "2": "غرفة بريميوم",
          "3": "جناح"
        }
      }
    },
     "aboutPage": {
      "eyebrow": "تعرّف على قصتنا",
      "title": "أكثر من مجرد مكان للإقامة.",
      "description": "اكتشف الأردن من خلال إقامات مميزة وحكايات ووجهات لا تُنسى.",
      "discover": "اكتشف المزيد",
      "returnToFront": "اضغط للعودة",
      "cards": {
        "1": {
          "title": "من نحن",
          "text": "StayGo منصة لحجز الفنادق في الأردن، أُنشئت لتجعل اكتشاف أماكن الإقامة وحجزها في أنحاء المملكة تجربة بسيطة وواضحة وممتعة."
        },
        "2": {
          "title": "رسالتنا",
          "text": "نسعى إلى مساعدة المسافرين في العثور على إقامات لا تُنسى، وإبراز وجهات الأردن الاستثنائية وكرم ضيافته."
        },
        "3": {
          "title": "اكتشف الأردن",
          "text": "من البتراء العريقة ومناظر وادي رم المذهلة إلى البحر الأحمر والبحر الميت، يقدّم الأردن تجارب مميزة أينما اتجهت."
        },
        "4": {
          "title": "لماذا StayGo؟",
          "text": "بحث بسيط، وخيارات غرف واضحة، وأسعار شفافة، وتجربة حجز سهلة؛ كل ذلك صُمّم لتلبية احتياجات المسافر."
        },
         "5": {
          "title": "تجارب محلية",
          "text": "تتجاوز تجربة StayGo حدود الإقامة، لتساعد المسافرين على اكتشاف ثقافة الأردن ومناظره الطبيعية وطابعه الفريد."
        },
        "6": {
          "title": "كيف تعمل المنصة؟",
          "text": "ابحث عن وجهتك، وقارن الفنادق والغرف، واختر تواريخ إقامتك، ثم أكمل خطوات الحجز بكل سهولة."
        },
        "7": {
          "title": "شغفنا",
          "text":"شغفنا هو مشاركة جمال الأردن وكرم ضيافته. نسعى من خلال StayGo إلى إلهام المسافرين لاكتشاف أماكن جديدة وصنع ذكريات تبقى معهم بعد انتهاء إقامتهم."
        },
        "8": {
          "title": "سافر بثقة",
          "text": "خيارات واضحة، وتفاصيل شفافة، وطريقة أسهل للتخطيط لإقامتك."
        },
        "9": {
          "title": "الأردن أبعد من الإقامة",
          "text": "الرحلة المميزة أكثر من مجرد غرفة فندقية. نحتفي في StayGo بالثقافة والمناظر الطبيعية والتراث والمأكولات والتجارب المحلية التي تمنح كل وجهة في الأردن طابعها الخاص."
        }
      }
    }
  }
  
};


export default translations;

