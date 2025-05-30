export interface ConcertDate {
    date: string;
    songs: string[];
    facts?: string[];
}

export interface ConcertPack {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
    countryCode: string;
    venue: string;
    dates: ConcertDate[];
    id: string;
}
export const concertDates: ConcertPack[] = [
    { latitude: 33.5276, longitude: -112.2626, city: "Glendale", countryCode: 'us', country: "United States", venue: "State Farm Stadium", dates: [
        {
            date: "2023-03-17",
            songs: [
                'Mirrorball', 'Tim McGraw'
            ],
            facts: [
                'This was the very first date of the tour.'
            ]
        },
        {
            date: "2023-03-18",
            songs: [
                'State of Grace',
                'This is Me Trying'
            ]
        }
    ], id: "glendale-2023" },
    { latitude: 36.1024, longitude: -115.1703, city: "Las Vegas", countryCode: 'us', country: "United States", venue: "Allegiant Stadium", dates: [
        {
            date: "2023-03-24", 
            songs: [
                'Our Song',
                'Snow on the Beach'
            ]
        },
        {
            date: "2023-03-25",
            songs: [
                'Cowboy like me (with Marcus Mumford',
                'White Horse'
            ]
        }
    ], id: "las-vegas-2023" },
    { latitude: 32.7483, longitude: -97.0928, city: "Arlington",countryCode: 'us', country: "United States", venue: "AT&T Stadium", dates: [
        {
            date: "2023-03-31", 
            songs: [
                'Sad Beautiful Tragic'
            ]
        }, {
            date: "2023-04-01", 
            songs: [
                'Death By a Thousand Cuts',
                'Clean'
            ],
            facts: [
                'Taylor messed up on the lyrics of dbtc and stated that she would only repeat the songs when she got the lyrics wrong.'
            ]
        },
        {
            date: "2023-04-02",
            songs: [
                'Jump Then Fall',
                'The Lucky One'
            ]
        }
    ], id: "arlington-2023" },
    { latitude: 27.9759, longitude: -82.5033, city: "Tampa",countryCode: 'us', country: "United States", venue: "Raymond James Stadium", dates: [
        {
            date: "2023-04-13", 
            songs: [
                'Speak Now',
                'Treacherous'
            ]
        },
        {
            date: "2023-04-14",
            songs: [
                'The Great War (with Aaron Dessner)',
                "You're On Your Own, Kid"
            ]
        },
         {
            date: "2023-04-15",
            songs: [
                'Mad Woman (with Aaron Dessner',
                'Mean'
            ]
         }
    ], id: "tampa-2023" },
    { latitude: 29.6847, longitude: -95.4107, city: "Houston",countryCode: 'us', country: "United States", venue: "NRG Stadium", dates: [
        {
            date: "2023-04-21", 
            songs: [
                'Wonderland',
                "You're Not Sorry"
            ]
        },
        {
            date: "2023-04-22",
            songs: [
                'A Place In This World',
                'Today Was a Fairytale'
            ]
        },
        {
            date: "2023-04-23",
            songs: [
                'Begin Again',
                'Cold as You'
            ]
        }
    ], id: "houston-2023" },
    { latitude: 33.755, longitude: -84.4009, city: "Atlanta",countryCode: 'us', country: "United States", venue: "Mercedes-Benz Stadium", dates: [
        {
            date: "2023-04-28", 
            songs: [
                'The Other Side of the Door',
                'Coney Island'
            ]
        },
        {
            date: "2023-04-29",
            songs: [
                'High Infidelity',
                'Gorgeous'
            ]
        },
        {
            date:  "2023-04-30",
            songs: [
                'I Bet You Think About Me',
                'How You Get The Girl'
            ]
        },
    ], id: "atlanta-2023" },
    { latitude: 36.1661, longitude: -86.7711, city: "Nashville",countryCode: 'us', country: "United States", venue: "Nissan Stadium", dates: [
        {
            date: "2023-05-05", 
            songs: [
                'Sparks Fly',
                'Teardrops On My Guitar'
            ]
        },
        {
            date: "2023-05-06", 
            songs: [
                'Out if the Woods',
                'Fifteen'
            ]
        },
        {
            date: "2023-05-07",
            songs: [
                "Would've Could've Should've (with Aaron Dessner)"
            ]
        },
    ], id: "nashville-2023" },
    { latitude: 39.9008, longitude: -75.1675, city: "Philadelphia", countryCode: 'us',country: "United States", venue: "Lincoln Financial Field", dates: [
        {
            date: "2023-05-12", 
            songs: [
                'Gold Rush',
                'Come Back...Be Here'
            ]
        },
         {
            date: "2023-05-13",
            songs: [
                'Forever & Always',
                'This Love'
            ]
         },
          {
            date: "2023-05-14",
            songs: [
                'Hey Stephen',
                'The Best Day'
            ]
          }
    ], id: "philadelphia-2023" },
    { latitude: 42.091, longitude: -71.264, city: 'Foxborough', countryCode: 'us', country:'United States', venue: 'Gillette Stadium', dates: [
        {
            date: '2023-05-19',
            songs: [
                "Should've Said No",
                'Better Man'
            ]
        },
        {
            date: "2023-05-20",
            songs: [
                'Question...?',
                'Invisible String'
            ]
        }, {
            date: "2023-05-21",
            songs: [
                'I Think He Knows',
                'Red'
            ]
        }
    ], id: "Foxborough-2023" },
    { latitude: 40.813611, longitude: -74.074444, city: 'East Rutherford', countryCode: 'us', country: 'United States', venue: 'MetLife Stadium', dates: [
        {
            date: '2023-05-26',
            songs: [
                'Getaway Car (with Jack Antonoff)',
                'Maroon'
            ],
            facts: [
                'This was the first time Taylow sang Maroon.'
            ]
        },
        {
            date: '2023-05-27',
            songs: [
                'Holy Ground',
                'False God'
            ]
        }, {
            date: '2023-05-28',
            songs: [
                'Welcome to New York',
                'Clean'
            ]
        }
    ], id: 'eastr-2023' },
    { latitude: 41.8625, longitude: -87.6167, city: "Chicago", countryCode: 'us',country: "United States", venue: "Soldier Field", dates: [
        {
            date: "2023-06-02", 
            songs: [
                'I wish You Would',
                'The Lakes'
            ]
        },
        {
            date: "2023-06-03", 
            songs: ['You All Over Me (With Maren Morris', "I don't Wanna Live Forever"],
            facts: [
                'This was the first time Taylor Sang a song not included in any of her albums. This openned the door to she singing any of the colaborations made before.'
            ]
        },
         {
            date: '2023-06-04',
            songs: [
                'Hits Different',
                'The Moment I Knew'
            ]
         }
    ], id: "chicago-2023" },
     {
        latitude: 42.3409,
        longitude: -83.0456,
        city: "Detroit",
        countryCode: "us",
        country: "United States",
        venue: "Ford Field",
        dates: [
            {
                date: "2023-06-09",
                songs: [
                    "Haunted",
                    "I Almost Do"
                ]
            },
            {
                date: "2023-06-10",
                songs: [
                    "All You Had To Do Was Stay",
                    "Breathe"
                ]
            }
        ],
        id: "detroit-2023"
    },
    {
        latitude: 40.4468,
        longitude: -80.0158,
        city: "Pittsburgh",
        countryCode: "us",
        country: "United States",
        venue: "Acrisure Stadium",
        dates: [
            {
                date: "2023-06-16",
                songs: [
                    "Mr. Perfectly Fine",
                    "The Last Time"
                ]
            },
            {
                date: "2023-06-17",
                songs: [
                    "Seven",
                    "The Story of Us"
                ],
            }
        ],
        id: "pittsburgh-2023"
    },
    {
        latitude: 44.9740,
        longitude: -93.2581,
        city: "Minneapolis",
        countryCode: "us",
        country: "United States",
        venue: "U.S. Bank Stadium",
        dates: [
            {
                date: "2023-06-23",
                songs: [
                    "Paper Rings",
                    "If This Was a Movie"
                ]
            },
            {
                date: "2023-06-24",
                songs: [
                    "Dear John",
                    "Daylight"
                ]
            }
        ],
        id: "minneapolis-2023"
    }, 
     {
        latitude: 39.0954,
        longitude: -84.5160,
        city: "Cincinnati",
        countryCode: "us",
        country: "United States",
        venue: "Paycor Stadium",
        dates: [
            {
                date: "2023-06-30",
                songs: [
                    "I'm Only Me When I'm With You",
                    "Evermore"
                ]
            },
            {
                date: "2023-07-01",
                songs: [
                    "Ivy (with Aaron Desnner)",
                    "I miss you, I'm sorry (with Gracie Abrams)",
                    "Call It What You Want"
                ]
            }
        ],
        id: "cincinnati-2023"
    },
     {
        latitude: 39.0489,
        longitude: -94.4841,
        city: "Kansas City",
        countryCode: "us",
        country: "United States",
        venue: "Arrowhead Stadium",
        dates: [
            {
                date: "2023-07-07",
                songs: [
                    "Never Grow Up",
                    "When Emma Falls in Love"
                ]
            },
            {
                date: "2023-07-08",
                songs: [
                    "Last Kiss",
                    "Dorothea"
                ]
            }
        ],
        id: "kansas-city-2023"
    },
    {
        latitude: 39.7439,
        longitude: -105.0201,
        city: "Denver",
        countryCode: "us",
        country: "United States",
        venue: "Empower Field at Mile High",
        dates: [
            {
                date: "2023-07-14",
                songs: [
                    "Picture to Burn",
                    "Timeless"
                ]
            },
            {
                date: "2023-07-15",
                songs: [
                    "Starlight",
                    "Back to December"
                ]
            }
        ],
        id: "denver-2023"
    },
    {
        latitude: 47.5952,
        longitude: -122.3316,
        city: "Seattle",
        countryCode: "us",
        country: "United States",
        venue: "Lumen Field",
        dates: [
            {
                date: "2023-07-22",
                songs: [
                    "This Is Why We Can’t Have Nice Things",
                    "Everything Has Changed"
                ]
            },
            {
                date: "2023-07-23",
                songs: [
                    "Message in a Bottle",
                    "Tied Together with a Smile"
                ]
            }
        ],
        id: "seattle-2023"
    },
    {
        latitude: 37.4032,
        longitude: -121.9691,
        city: "Santa Clara",
        countryCode: "us",
        country: "United States",
        venue: "Levi's Stadium",
        dates: [
            {
                date: "2023-07-28",
                songs: [
                    "Right Where You Left Me",
                    "Castles Crumbling"
                ]
            },
            {
                date: "2023-07-29",
                songs: [
                    "Stay Stay Stay",
                    "All of the Girls You Loved Before"
                ]
            }
        ],
        id: "santa-clara-2023"
    },
    {
        latitude: 33.9533,
        longitude: -118.3392,
        city: "Los Angeles",
        countryCode: "us",
        country: "United States",
        venue: "SoFi Stadium",
        dates: [
            {
                date: "2023-08-03",
                songs: [
                    "I Can See You",
                    "Maroon"
                ],
                facts: [
                    'This was one of the three shows recorder for "The Eras Tour: The Movie"'
                ]
            },
            {
                date: "2023-08-04",
                songs: [
                    "Our Song",
                    "You Are in Love"
                ],
                facts:  ['This was one of the three shows recorder for "The Eras Tour: The Movie"']
            },
            {
                date: "2023-08-05",
                songs: [
                    "Death by a Thousand Cuts",
                    "You're on Your Own, Kid"
                ],
                facts: ['This was one of the three shows recorder for "The Eras Tour: The Movie"']
            },
            {
                date: "2023-08-07",
                songs: [
                    "Dress",
                    "Exile"
                ]
            },
            {
                date: "2023-08-08",
                songs: [
                    "I Know Places",
                    "King of My Heart"
                ]
            },
            {
                date: "2023-08-09",
                songs: [
                    "New Romantics",
                    "You're Losing Me"
                ],
                facts: ['This was the last show of the first leg of the tour in United States']
            }
        ],
        id: "los-angeles-2023"
    },
    { latitude: 19.4042, longitude: -99.0920, city: "Mexico City",countryCode: 'mx', country: "Mexico", venue: "Foro Sol", dates: [
        {
            date: "2023-08-24", 
            songs: [
                'I Forgot that you existed',
                'Sweet nothing'
            ],
            facts: ['This was the first The Eras Tour show out of United States']
        },
        {
            date: "2023-08-25", 
            songs: [
                'Tell me why',
                'Snow on the Beach'
            ]
        },
        {
            date: "2023-08-26", 
            songs: [
                'Cornelia Street',
                "You're on your own, kid"
            ]
        },
        {
            date: "2023-08-27",
            songs: [
                'Afterglow',
                'Maroon'
            ]
        }
    ], id: "mexico-city-2023" },
    { latitude: -34.5455, longitude: -58.4493, city: "Buenos Aires", countryCode: 'ar', country: "Argentina", venue: "Estadio River Plate", dates: [
        {
            date: "2023-11-09", 
            songs: [
                'The Very First Night',
                'Labyrinth'
            ],
            facts: [
                'In this show, a plane passed over the stadium while Taylor was singing Labyrinth “I thought the plane was going down” line'
            ]
        },
        {
            date: "2023-11-10", 
            songs: [],
            facts: ['this date was postponed due to weather conditions in buenos aires. It was the event of the “wet swifties” as many fans were already lining up to get in when the date change was announced.']
        },
        {
            date: '2023-11-11',
            songs: [
                'Is It Over now?/Out of the woods (mashup)',
                'End Game'
            ],
            facts: [
                'This was the first ever mashup made by Taylor Swift in The Eras Tour.'
            ]
        },
        {
            date: '2023-11-12',
            songs: [
                'Better than Revenge',
                'Slut!'
            ]
        }
    ], id: "buenos-aires-2023" },
    { latitude: -22.9121, longitude: -43.2302, city: "Rio de Janeiro", countryCode: 'br', country: "Brazil", venue: "Estadio Olímpico Nilton Santos", dates: [
        {
            date: "2023-11-17",
            songs: [
                'Stay Beautiful',
                'Suburban Legends'
            ]
        },
        {
            date: '2023-11-19',
            songs: [
                'Dancing With Our Hands Tied',
                'Bigger Than The Whole Sky'
            ]
        },
        {
            date: '2023-11-20',
            songs: [
                'ME!',
                'So It Goes...'
            ]
        }
    ], id: "rio-de-janeiro-2023" },
    { latitude: -23.5475, longitude: -46.6361, city: "São Paulo", countryCode: 'br', country: "Brazil", venue: "Allianz Parque", dates: [
        {
            date: "2023-11-24", 
            songs: [
                "Now That We Don't Talk",
                'Innocent'
            ]
        },
        {
            date: "2023-11-25", 
            songs: [
                'Safe & Sound',
                'Untouchable'
            ]
        },
        {
            date: "2023-11-26",
            songs: [
                "Say Don't Go",
                "It's Time to Go"
            ],
            facts: ['This was the last show of The Eras Tour South American leg']
        }
    ], id: "sao-paulo-2023" },
    { latitude: 35.6839, longitude: 139.7531, city: "Tokyo", countryCode: 'jp', country: "Japan", venue: "Tokyo Dome", dates: [
        {
            date: "2024-02-07", 
            songs: [
                'Dear Reader',
                'Holy   Ground'
            ]
        },
        {
            date: "2024-02-08", 
            songs: [
                'Eyes Open',
                'Electric Touch'
            ]
        },
         {
            date: "2024-02-09",
            songs: [
                'Superman',
                'The Outside'
            ]
         },{
            date: "2024-02-10",
            songs: [
                'Come In With the Rain',
                "You're On Your Own, Kid"
            ]
         },
    ], id: "tokyo-2024" },
    { latitude: -37.8136, longitude: 144.9631, city: "Melbourne", countryCode: 'au', country: "Australia", venue: "Melbourne Cricket Ground", dates: [
        {
            date: "2024-02-16",
            songs: [
                'Red',
                "You're Losing Me"
            ]
        }, {
            date: "2024-02-17",
            songs: [
                'Getaway Car/August/The Other Side of the Door',
                'This is me trying'
            ]
        },
        {
            date: "2024-02-18",
            songs: [
                'Come Back...Be Here/Daylight',
                'Teardrops on my Guitar'
            ]
        }
    ], id: "melbourne-2024" },
    { latitude: -33.8688, longitude: 151.2093, city: "Sydney", countryCode: 'au', country: "Australia", venue: "Accor Stadium", dates: [
        {
            date: "2024-02-23", 
            songs: [
                'How you get the girl',
                'White Horse/Coney Island'
            ]
        },
        {
            date: "2024-02-24",
            songs: [
                "Should've said no/You're not sorry",
                "New Year's Day/Peace"
            ]
        },
        {
            date: "2024-02-25",
            songs: [
                "Is it over now?/I whish you would",
                "Haunted/Exile"
            ]
        },
        {
            date: "2024-02-26",
            songs: [
                "Would've Could've Should've/Ivy",
                "Forever & Always/Maroon"
            ]
        }
    ], id: "sydney-2024" },
    { latitude: 1.3521, longitude: 103.8198, city: "Singapore", countryCode: 'sg', country: "Singapore", venue: "National Stadium", dates: [
        {
            date: "2024-03-02", 
            songs: [
                'Mine/Starlight',
                "I Don't Want to Live Forever/Dress"
            ]
        },
        {
            date: "2024-03-03",
            songs: [
                'Long Story Short/The Story of Us',
                'Clean/Evermore'
            ]
        },
        {
            date: "2024-03-04", 
            songs: [
                'Foolish One/Tell Me Why',
                'This Love/Call It What You Want'
            ]
        },
        {
            date: "2024-03-07", 
            songs: [
                'Death By A Thousand Cuts/Babe',
                "Fifteen/You're On You're On Your Own, Kid"
            ]
        },
        {
            date: "2024-03-08", 
            songs: [
                'Sparks Fly/ Gold Rush',
                'False God/Slut!'
            ]
        }, {
            date: "2024-03-09",
            songs: [
                'Tim McGraw/Cowboy Like Me',
                'Mirrorball/Epiphany'
            ]
        }
    ], id: "singapore-2024" },
    {
        latitude: 48.8966,
        longitude: 2.2385,
        city: "Paris",
        countryCode: "fr",
        country: "France",
        venue: "Paris La Défense Arena",
        dates: [
            {
                date: "2024-05-09",
                songs: [
                    'Paris',
                    'loml'
                ],
                facts: ['This was the first show where Taylow Swift changed the tour setlist, removing many songs and adding TTPD setlist.']
            }, {
                date: '2024-05-10',
                songs: [
                    'Is it over now?/Out Of The Woods',
                    'My Boy Only Breaks His Favorite Toys'
                ],
                facts: ['This was the second time Taylow sang the Is it over now?/Out Of The Woods mashup.']
            },
            {
                date: '2024-05-11',
                songs: [
                    'Hey Stephen',
                    'Maroon'
                ]
            }, {
                date: '2024-05-12',
                songs: [
                    'The Alchemy/Treacherous',
                    'Begin Again/Paris'
                ]
            }
        ],
        id: "paris-2024"
    },    
    {
        latitude: 59.3293,
        longitude: 18.0686,
        city: "Stockholm",
        countryCode: "se",
        country: "Sweden",
        venue: "Friends Arena",
        dates: [
            {
                date: "2024-05-17",
                songs: [
                    'I Think He Knows/Gorgeous',
                    'Peter'
                ] 
            },
            {
                date: '2024-05-18',
                songs: [
                    'Guilty As Sin?',
                    "Say Don't Go/Welcome To New York/Clean"
                ]
            },
            {
                date: '2024-05-19',
                songs: [
                    'Message In A Bottle/How You Get The Girl/New Romantics',
                    'How Did It End?'
                ]
            }
        ],
        id: "stockholm-2024"
    },
    {
        latitude: 38.7369,
        longitude: -9.1427,
        city: "Lisbon",
        countryCode: "pt",
        country: "Portugal",
        venue: "Estádio da Luz",
        dates: [
            {
                date: "2024-05-24",
                songs: [
                    'Come Back Be Here/The Way I Loved You/The Other Side of the Door',
                    'Fresh Out The Slammer/High Infidelity'
                ]
            },
            {
                date: "2024-05-25",
                songs: [
                    "The Tortured Poets Department/Now That We Don't Talk",
                    "You're on Your Own, Kid/Long Live"
                ]
            }
        ],
        id: "lisbon-2024"
    },
    { latitude: 40.4168, longitude: -3.7038, city: "Madrid", countryCode: 'es', country: "Spain", venue: "Estadio Santiago Bernabéu", dates: [
        {
            date: "2024-05-29",
            songs: [
                'Sparks Fly/I Can Fix Him(No Really I Can)'
            ]
        },
        {
            date: '2024-05-30',
            songs: [
                "Our Song/Jump Then Fall"
            ]
        }
    ], id: "madrid-2024" },
 {
        latitude: 45.7600,
        longitude: 4.8357,
        city: "Lyon",
        countryCode: "fr",
        country: "France",
        venue: "Groupama Stadium",
        dates: [
            {
                date: "2024-06-02",
                songs: [
                    'The Prophecy/Long Story Short',
                    "Fifteen/You're On Your Own, Kid"
                ]
            },
            {
                date: "2024-06-03",
                songs: [
                    'Glitch/Everything Has Changed',
                    'Chloe, Sam, Sophia or Marcus'
                ]
            }
        ],
        id: "lyon-2024"
    },  
    {
        latitude: 55.9533,
        longitude: -3.1883,
        city: "Edinburgh",
        countryCode: "gb",
        country: "United Kingdom",
        venue: "BT Murrayfield Stadium",
        dates: [
            {
                date: "2024-06-07",
                songs: [
                    "Would've Could've Should've/I Know Places",
                    "tis the damn Season/Daylight"
                ]
            },
            {
                date: "2024-06-08",
                songs: [
                    'The Bolter/Getaway Car',
                    'All of the girls you loved before/Crazier'
                ],
            },
            {
                date: "2024-06-09",
                songs: [
                    "It's nice to have a Friend/Dorothea",
                    'Haunted/Exile'
                ],
            }
        ],
        id: "edinburgh-2024"
    },
    {
        latitude: 53.4084,
        longitude: -2.9916,
        city: "Liverpool",
        countryCode: "gb",
        country: "United Kingdom",
        venue: "Anfield",
        dates: [
            {
                date: "2024-06-13",
                songs: [
                    'I Can See You/Mine',
                    'Cornelia Street/Maroon'
                ]
            },
            {
                date: "2024-06-14",
                songs: [
                    'This Is What You Came For/Gold Rush',
                    "The Great War/You're Losing Me"
                ]
            },
            {
                date: "2024-06-15",
                songs: [
                    'Carolina/No Body, No Crime',
                    'The manuscript/Red'
                ]
            }
        ],
        id: "liverpool-2024"
    }, {
        latitude: 51.4816,
        longitude: -3.1791,
        city: "Cardiff",
        countryCode: "gb",
        country: "United Kingdom",
        venue: "Principality Stadium",
        dates: [
            {
                date: "2024-06-18",
                songs: [
                    "I Forgot that you existed/This is why we can't have nice things",
                    'I hate it here/The Lakes'
                ]
            }
        ],
        id: "cardiff-2024"
    },
    {
        latitude: 53.3498,
        longitude: -6.2603,
        city: "Dublin",
        countryCode: "ie",
        country: "Ireland",
        venue: "Croke Park",
        dates: [
            {
                date: "2024-06-28",
                songs: [
                    "State of Grace/You're on Your Own, Kid",
                    "Sweet Nothing/Hoax"
                                ] 
            },
            {
                date: "2024-06-29",
                songs: [
                    'The Albatross/Dancing With Our Hands Tied',
                    'This Love/Ours'
                ] 
            },
            {
                date: "2024-06-30",
                songs: [
                    'Clara Bow/The Lucky One',
                    "You're on Your Own, Kid"
                ] 
            }
        ],
        id: "dublin-2024"
    },
    {
        latitude: 52.3779,
        longitude: 4.8971,
        city: "Amsterdam",
        countryCode: "nl",
        country: "Netherlands",
        venue: "Johan Cruijff Arena",
        dates: [
            {
                date: "2024-07-04",
                songs: [
                    'Guilty as Sin?/Untouchable',
                    'The Archer/Question...?'
                ] 
            },
            {
                date: "2024-07-05",
                songs: [
                    "I'm Gonna Get You Back/Dress",
                    'You are in Love/Cowboy Like Me'
                ] 
            },
            {
                date: "2024-07-06",
                songs: [
                    'Sweeter than fiction/ Holy Ground',
                    "Mary's Son (oh My My My)/ So Hogh School/Everything Has Changed"
                ]
            }
        ],
        id: "amsterdam-2024"
    },
    {
        latitude: 47.3769,
        longitude: 8.5417,
        city: "Zurich",
        countryCode: "ch",
        country: "Switzerland",
        venue: "Letzigrund Stadium",
        dates: [
            {
                date: "2024-07-09",
                songs: [
                    'Right where you left me/All You Had to Do was Stay',
                    'Last Kiss/Sad Beautiful Tragic'
                ] 
            },
            {
                date: "2024-07-10",
                songs: [
                    'Closure/A Perfectly Good Heart',
                    'Robin/Never Grow Up'
                ] 
            }
        ],
        id: "zurich-2024"
    },
    {
        latitude: 45.4654,
        longitude: 9.1859,
        city: "Milan",
        countryCode: "it",
        country: "Italy",
        venue: "San Siro Stadium",
        dates: [
            {
                date: "2024-07-13",
                songs: [
                    'The 1/Wonderland',
                    'I Almost Do/The Moment I Know'
                ] 
            },
            {
                date: "2024-07-14",
                songs: [
                    'Mr. Perfectly Fine/Red',
                    'Getaway Car/Out of the woods'
                ]
            }
        ],
        id: "milan-2024"
    },
    {
        latitude: 51.5074,
        longitude: 7.0718,
        city: "Gelsenkirchen",
        countryCode: "de",
        country: "Germany",
        venue: "Veltins-Arena",
        dates: [
            {
                date: "2024-07-17",
                songs: [
                    'Superstar/Invisible String',
                    'Slut!/False God'
                ]
            },
            {
                date: "2024-07-18",
                songs: [
                    'Speak Now/Hey Stephen',
                    'This is me Trying/Labyrinth'
                ]
            },
            {
                date: "2024-07-19",
                songs: [
                    'Paper Rings/Stay Stay Stay',
                    "It's Time to Go/Better Men"
                ]
            }
        ],
        id: "gelsenkirchen-2024"
    },
    {
        latitude: 53.5511,
        longitude: 9.9937,
        city: "Hamburg",
        countryCode: "de",
        country: "Germany",
        venue: "Volksparkstadion",
        dates: [
            {
                date: "2024-07-23",
                songs: [
                    'Teardrops on my Guitar/The Last Time',
                    'We were Happy/Happiness'
                ]
            },
            {
                date: "2024-07-24",
                songs: [
                    'The Last Great American Dynasty/Run',
                    'Nothing New/Dear Reader'
                ]
            },
            {
                date: "2024-07-27",
                songs: [
                    'Fresh out the slammer/You are in love',
                    'Ivy/Call It What You Want'
                ]
            }
        ],
        id: "hamburg-2024"
    },
    {
        latitude: 48.1351,
        longitude: 11.5810,
        city: "Munich",
        countryCode: "de",
        country: "Germany",
        venue: "Allianz Arena",
        dates: [
            {
                date: "2024-07-28",
                songs: [
                    "I don't wanna live forever/I'm gonna get you back",
                    "loml/don't you"
                ]
            }
        ],
        id: "munich-2024"
    },
    {
        latitude: 52.2298,
        longitude: 21.0118,
        city: "Warsaw",
        countryCode: "pl",
        country: "Poland",
        venue: "PGE Narodowy",
        dates: [
            {
                date: "2024-08-01",
                songs: [
                    'Mirrorball/Clara Bow',
                    "Suburban Legends/ New Year's day"
                ]
            },
            {
                date: "2024-08-02",
                songs: [
                    'I can fix him (No really I Can)/I can see you',
                    'Red/Maroon'
                ]
            },
            {
                date: "2024-08-03",
                songs: [
                    'Today was a Fairytale/I think he knows',
                    'The Black Gog/Exile'
                ]
            }
        ],
        id: "warsaw-2024"
    },
    {
        latitude: 48.2082,
        longitude: 16.3738,
        city: "Vienna",
        countryCode: "at",
        country: "Austria",
        venue: "Stadion Wiener Neustadt",
        dates: [
            {
                date: "2024-08-08",
                songs: [],
                facts: ['This show was cancelled due to a planned terrorist attack.']
            },
            {
                date: "2024-08-09",
                songs: [],
                facts: ['This show was cancelled due to a planned terrorist attack.']
            },
            {
                date: "2024-08-10",
                songs: [],
                facts: ['This show was cancelled due to a planned terrorist attack.']
            }
        ],
        id: "vienna-2024"
    },
    { latitude: 51.5074, longitude: -0.1278, city: "London", countryCode: 'gb' ,country: "United Kingdom", venue: "Wembley Stadium", dates: [
        {
            date: "2024-06-21",
            songs: [
                'Hits Different/Deadth by a thousand cuts',
                'The black doc/Come back...be here/Maroon'
            ]
        },
        {
            date: "2024-06-22",
            songs: [
                'Than You Aimee/Mean',
                'Castles Crumbling (with Hayley Williams)'
            ]
        },
        {
            date: "2024-06-23",
            songs: [
                'Us (With Gracie Abrams)',
                'Out Of the Woods/ Is It Over Now?/Clean'
            ]
        },
        {
            date: "2024-08-15",
            songs: [
             'Everything has changed/end game/Thinking out loud (with Ed Sheeran)',
             'King of my heart/The Alchemy' 
            ]
        },
        {
            date: "2024-08-16",
            songs: [
              'London boy',
              'Dear John/Sad Beautiful Tragic'
            ],
            facts: ['This was the only show where Taylor Sang London Boy.']
        },{
            date: "2024-08-17",
            songs: [
              'I Did Something Bad',
              'My Boy Only Breaks His Favorite Toys/Coney Island'
            ]
        },
        {
            date: "2024-08-19",
            songs: [
              'Long Live/Change',
              "The Archer/You're On Your Own, Kid"
            ]
        },
        {
            date: "2024-08-20",
            songs: [
              'Death By A Thousand Cuts/Getaway Car (with Jack Antonoff)',
              "So Long, London"
            ],
            facts: ['This was the last show in Europe/Asian Leg.']
        }
    ], id: "london-2024" },
    {
        latitude: 25.7617,
        longitude: -80.1918,
        city: "Miami",
        countryCode: "us",
        country: "United States",
        venue: "Hard Rock Stadium",
        dates: [
            {
                date: "2024-10-18",
                songs: [
                    'Tim McGraw/Timeless',
                    'This is Me Trying/Daylight',
                ]
            },
            {
                date: "2024-10-19",
                songs: [
                    "Should've said no/I did something bad",
                    'loml/white horse'
                ]
            },
            {
                date: "2024-10-20",
                songs: [
                    'Out of the woods/all you had to do was stay',
                    'Mirrorball/Guilty as Sin?'
                ]
            }
        ],
        id: "miami-2024"
    },
    {
        latitude: 29.9511,
        longitude: -90.0715,
        city: "New Orleans",
        countryCode: "us",
        country: "United States",
        venue: "Caesars Superdome",
        dates: [
            {
                date: "2024-10-25",
                songs: [
                    'Out Song/Call It What You Want',
                    'The Black Dog/Haunted'
                ]
            },
            {
                date: "2024-10-26",
                songs: [
                    'Espresso/is it over now?/Please Please Please (with Sabrina Carpenter)',
                    'The Black Dog/Haunted',
                ]
            },
            {
                date: "2024-10-27",
                songs: [
                    'Afterglow/Dress',
                    'How You Get the Girl/Clean'
                ]
            }
        ],
        id: "new-orleans-2024",
    },
    {
        latitude: 39.7684,
        longitude: -86.1580,
        city: "Indianapolis",
        countryCode: "us",
        country: "United States",
        venue: "Lucas Oil Stadium",
        dates: [
            {
                date: "2024-11-01",
                songs: [
                    'The Albatross/Holy Ground',
                    'Cold as You/Exile'
                ]
            },
            {
                date: "2024-11-02",
                songs: [
                    'The Prophecy/ This Love',
                    'Maroon/Cowboy Like Me'
                ]
            },
            {
                date: "2024-11-03",
                songs: [
                    'Cornelia Street/The Bolter',
                    'Death by a Thousand Cuts/The Great War'
                ]
            }
        ],
        id: "indianapolis-2024"
    },
    {
        latitude: 43.6510,
        longitude: -79.3470,
        city: "Toronto",
        countryCode: "ca",
        country: "Canada",
        venue: "Rogers Centre",
        dates: [
            {
                date: "2024-11-14",
                songs: [
                    "My Boy Only Breaks His Favorite Toys/ This is why we can't have nice things",
                    "False Good/'tis the damn season"
                ]
            },
            {
                date: "2024-11-15",
                songs: [
                    "I don't wanna live forever/Mine",
                    'Evermore/Peter'
                ]
            },
            {
                date: "2024-11-16",
                songs: [
                    "Us (with Gracie Abrams)/Out of the woods",
                    "You're on your own, Kid, Long Story short"
                ]
            },
            {
                date: "2024-11-21",
                songs: [
                    'Mr. Perfectly Fine/Better than revenge',
                    'State of grace/Labyrinth'
                ]
            },
            {
                date: "2024-11-22",
                songs: [
                    'Ours/The Last Great American Dynasty',
                    'Cassandra/Mad Woman/I Did Something Bad'
                ]
            },
            {
                date: "2024-11-23",
                songs: [
                    'Sparks Fly/Message in A Bottle',
                    "You're Losing Me/How did it end?"
                ]
            }
        ],
        id: "toronto-2024"
    },
    {
        latitude: 49.2827,
        longitude: -123.1207,
        city: "Vancouver",
        countryCode: "ca",
        country: "Canada",
        venue: "BC Place",
        dates: [
            {
                date: "2024-12-06",
                songs: [
                    'Haunted/Wonderland',
                    'Never Grow Up/The Best Day'
                ]
            },
            {
                date: "2024-12-07",
                songs: [
                    "I love you, I'm Sorry/Last Kiss (with Gracie Abrams)",
                    'The Tortured Poets Department/Maroon'
                ]
            },
            {
                date: "2024-12-08",
                songs: [
                    'A Place in This World/New Romantics',
                    "Long Live/New Year's Day/The Manuscript"
                ],
                facts: [
                    'This was the last "The Eras Tour" show.'
                ]
            }
        ],
        id: "vancouver-2024"
    }
];


