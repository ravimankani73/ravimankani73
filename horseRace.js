import { LightningElement,track} from 'lwc';
import selectedIcon from "@salesforce/resourceUrl/RaceHorseSelected";
import unselectedIcon from "@salesforce/resourceUrl/RaceHorseUnselected";
export default class HorseRace extends LightningElement {
    horseUnselected = unselectedIcon;
    horseSelected = selectedIcon;
    horseIcon = unselectedIcon;

  selectedH1;
  selectedH2;
  selectedH3;
  selectedH4;
  @track dataList1 = [];
  @track dataList2 = [];
  @track dataList3 = [];
  @track dataList4 = [];
  horseList = [
    {
      Id: "1",
      Name: "Pog",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Kamarinskaya",
      Damsire: "Storm Cat",
      Trainer: "John M. Oxx",
      Owner: "My Meadowview Farm LLC",
      Breeder: "My Meadowview LLC"
    },
    {
      Id: "2",
      Name: "A. Rod Again",
      Sex: "C",
      Sire: "Awesome Again",
      Dam: "C J's Leelee",
      Damsire: "Mizzen Mast",
      Trainer: "Michael J. Maker",
      Owner: "J. Armando Rodriguez Racing Stable, Inc.",
      Breeder: "Sarah Lyn Stables"
    },
    {
      Id: "3",
      Name: "Abdaar",
      Sex: "C",
      Sire: "Hard Spun",
      Dam: "Marraasi",
      Damsire: "Rahy",
      Trainer: "Chad C. Brown",
      Owner: "Shadwell Stable",
      Breeder: "Shadwell Farm, LLC"
    },
    {
      Id: "4",
      Name: "Abounding Legacy",
      Sex: "C",
      Sire: "Flashstorm",
      Dam: "Abounding Truth",
      Damsire: "Proudest Romeo",
      Trainer: "Ralph E. Nicks",
      Owner: "Run Hard Stables",
      Breeder: "Northwest Stud"
    },
    {
      Id: "5",
      Name: "Acceptance",
      Sex: "C",
      Sire: "Vronsky",
      Dam: "Allswellthatnswell",
      Damsire: "Perfect Mandate",
      Trainer: "Donald Warren",
      Owner: "Johnston, E. W. and Judy and Riggio, Robert",
      Breeder: "Old English Rancho"
    },
    {
      Id: "6",
      Name: "Action Hero",
      Sex: "C",
      Sire: "Street Cry (IRE)",
      Dam: "Starrer",
      Damsire: "Dynaformer",
      Trainer: "Thomas F. Proctor",
      Owner: "George Krikorian",
      Breeder: "George Krikorian"
    },
    {
      Id: "7",
      Name: "Al Risala",
      Sex: "C",
      Sire: "Pioneerof the Nile",
      Dam: "Argenta",
      Damsire: "Mineshaft",
      Trainer: "Bob Baffert",
      Owner: "Zayat Stables, LLC",
      Breeder: "Kristin Mulhall & Vicky Dimitri"
    },
    {
      Id: "8",
      Name: "Alazano",
      Sex: "C",
      Sire: "More Than Ready",
      Dam: "Authenicat",
      Damsire: "D'Wildcat",
      Trainer: "Dallas Stewart",
      Owner: "On Our Own Stable LLC",
      Breeder: "Grapestock LLC"
    },
    {
      Id: "9",
      Name: "Aldrin",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Tap Your Heels",
      Damsire: "Unbridled",
      Trainer: "Chad C. Brown",
      Owner:
        "Mt. Brilliant Farm LLC, Gainesway Stable (Antony Beck) and LaPenta, R.",
      Breeder: "Barouche Stud (Ireland) Ltd."
    },
    {
      Id: "10",
      Name: "Alexa's Spirit",
      Sex: "C",
      Sire: "Congrats",
      Dam: "Far and Away",
      Damsire: "Strong Hope",
      Trainer: "Peter D. Pugh",
      Owner: "James G. Doyle",
      Breeder: "James Doyle"
    },
    {
      Id: "11",
      Name: "Aloft (IRE)",
      Sex: "C",
      Sire: "Galileo (IRE)",
      Dam: "Dietrich",
      Damsire: "Storm Cat",
      Trainer: "Aidan P. O'Brien",
      Owner: "Magnier, Mrs. John, Tabor, Michael and Smith, Derrick",
      Breeder: "Southern Bloodstock"
    },
    {
      Id: "12",
      Name: "American Pharoah",
      Sex: "R",
      Sire: "Pioneerof the Nile",
      Dam: "Littleprincessemma",
      Damsire: "Yankee Gentleman",
      Trainer: "Bob Baffert",
      Owner: "Zayat Stables, LLC",
      Breeder: "Zayat Stables"
    },
    {
      Id: "13",
      Name: "Ami's Flatter",
      Sex: "C",
      Sire: "Flatter",
      Dam: "Galloping Ami",
      Damsire: "Victory Gallop",
      Trainer: "Josie Carroll",
      Owner: "Ivan Dalos",
      Breeder: "Tall Oaks Farm"
    },
    {
      Id: "14",
      Name: "Another Lemon Drop",
      Sex: "C",
      Sire: "Lemon Drop Kid",
      Dam: "Shytoe Lafeet",
      Damsire: "King of Kings (IRE)",
      Trainer: "Philip A. Bauer",
      Owner: "Rigney Racing",
      Breeder: "Avalon Farms, Inc."
    },
    {
      Id: "15",
      Name: "Apollo Eleven",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Moonlightandbeauty",
      Damsire: "Capote",
      Trainer: "Rudy R. Rodriguez",
      Owner: "The Elkstone Group LLC",
      Breeder: "Albert Fried Jr."
    },
    {
      Id: "16",
      Name: "Araqeel",
      Sex: "C",
      Sire: "Tapit",
      Dam: "August Storm",
      Damsire: "Storm Creek",
      Trainer: "Chad C. Brown",
      Owner: "Shadwell Stable",
      Breeder: "Caldara Farm and Larry Byer"
    },
    {
      Id: "17",
      Name: "Armored Car",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Gold Mover",
      Damsire: "Gold Fever",
      Trainer: "Richard E. Mandella",
      Owner: "Diamond A Racing Corporation",
      Breeder: "Diamond A Racing Corp."
    },
    {
      Id: "18",
      Name: "Avanti Bello",
      Sex: "C",
      Sire: "Include",
      Dam: "Masterful Lass",
      Damsire: "Mizzen Mast",
      Trainer: "Doug F. O'Neill",
      Owner:
        "Suarez Racing, Inc., Wonderland Racing Stables, Keh, Richardson and Roberts",
      Breeder: "Lou Neve"
    },
    {
      Id: "19",
      Name: "Bad Read Sanchez",
      Sex: "C",
      Sire: "Warrior's Reward",
      Dam: "Past Twilight",
      Damsire: "Pulpit",
      Trainer: "Doug F. O'Neill",
      Owner: "Reddam Racing LLC",
      Breeder:
        "Joe Mulholland Sr., Joe Mulholland Jr.,John Mulholland & Karen Mulholland"
    },
    {
      Id: "20",
      Name: "Balfe's Corner",
      Sex: "C",
      Sire: "Desert Party",
      Dam: "Seductiva",
      Damsire: "Lure",
      Trainer: "Gary C. Contessa",
      Owner:
        "McConnell Racing Stable, Green, VIP Stable, CJP Thoroughbreds et al.",
      Breeder: "Wayne Morris & Juanita Morris"
    },
    {
      Id: "21",
      Name: "Baloney Mike",
      Sex: "C",
      Sire: "Forestry",
      Dam: "It'schemistrybaby",
      Damsire: "Meadowlake",
      Trainer: "Joel H. Marr",
      Owner: "Lobo Stables LLC",
      Breeder: "Trackside Farm & Tenlane Farm"
    },
    {
      Id: "22",
      Name: "Barbados",
      Sex: "C",
      Sire: "Speightstown",
      Dam: "Northern Station",
      Damsire: "Street Cry (IRE)",
      Trainer: "Michael A. Tomlinson",
      Owner: "Suzanne Stables",
      Breeder: "Tommy Town Thoroughbreds, LLC"
    },
    {
      Id: "23",
      Name: "Batting Cage",
      Sex: "C",
      Sire: "Harlan's Holiday",
      Dam: "Ride Em Cowgirl",
      Damsire: "Mazel Trick",
      Trainer: "Everton Alex Harris",
      Owner: "Rontos Racing Stable Corp.",
      Breeder: "Clarkland Farm"
    },
    {
      Id: "24",
      Name: "Battle of Evermore",
      Sex: "C",
      Sire: "Scat Daddy",
      Dam: "Maddalena",
      Damsire: "Good and Tough",
      Trainer: "John W. Sadler",
      Owner: "Doubledown Stables, Inc.",
      Breeder: "Ned Williams"
    },
    {
      Id: "25",
      Name: "Battle of Marathon",
      Sex: "C",
      Sire: "War Front",
      Dam: "Sayedah (IRE)",
      Damsire: "Darshaan (GB)",
      Trainer: "Aidan P. O'Brien",
      Owner: "Magnier, Mrs. John, Tabor, Michael and Smith, Derrick",
      Breeder: "Galleria Bloodstock & RhinestoneBloodstock"
    },
    {
      Id: "26",
      Name: "Bayerd",
      Sex: "C",
      Sire: "Speightstown",
      Dam: "Cherokee Jewel",
      Damsire: "Cherokee Run",
      Trainer: "Steven M. Asmussen",
      Owner: "Clark O. Brewster",
      Breeder: "Alpha Delta Stables, LLC"
    },
    {
      Id: "27",
      Name: "Bear At Last",
      Sex: "C",
      Sire: "Marchfield",
      Dam: "Clayton's Lass",
      Damsire: "Forest Camp",
      Trainer: "Reade Baker",
      Owner: "Bear Stables, Ltd.",
      Breeder: "Michael C. Byrne"
    },
    {
      Id: "28",
      Name: "Bears Personality",
      Sex: "C",
      Sire: "Awesome Again",
      Dam: "Yearly Attitude",
      Damsire: "Event of the Year",
      Trainer: "Reade Baker",
      Owner: "Bear Stables, Ltd.",
      Breeder: "Adena Springs"
    },
    {
      Id: "29",
      Name: "Because I'm Happy",
      Sex: "C",
      Sire: "Street Sense",
      Dam: "Palace Pier",
      Damsire: "Out of Place",
      Trainer: "Michael Mareina",
      Owner: "Baccari Racing Stable LLC",
      Breeder: "Seclusive Farm & Prince Farm"
    },
    {
      Id: "30",
      Name: "Bench Warrant",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "Ola Docura",
      Damsire: "Meadowlake",
      Trainer: "John W. Sadler",
      Owner: "Doubledown Stables, Inc.",
      Breeder: "Lee Searing & Susan Searing"
    },
    {
      Id: "31",
      Name: "Big Ben",
      Sex: "C",
      Sire: "Arch",
      Dam: "Frio Town",
      Damsire: "Kerosene",
      Trainer: "Dale L. Romans",
      Owner: "Zayat Stables, LLC",
      Breeder: "Bryant H. Prentice III"
    },
    {
      Id: "32",
      Name: "Big Big Easy",
      Sex: "C",
      Sire: "Midshipman",
      Dam: "Heaven's Gate",
      Damsire: "Septieme Ciel",
      Trainer: "Steven M. Asmussen",
      Owner: "Dilworth, Scott and Evan",
      Breeder: "Linda K. O'Nan & Darley"
    },
    {
      Id: "33",
      Name: "Big Family",
      Sex: "C",
      Sire: "Any Given Saturday",
      Dam: "She'll Be Right",
      Damsire: "Sky Mesa",
      Trainer: "Gustavo Delgado",
      Owner: "Grupo 7C Racing Stable",
      Breeder: "Woods Edge Farm LLC"
    },
    {
      Id: "34",
      Name: "Billy's Star",
      Sex: "C",
      Sire: "Perfect Soul (IRE)",
      Dam: "Tapatina",
      Damsire: "Seeking the Gold",
      Trainer: "Roger L. Attfield",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "35",
      Name: "Bird Prince",
      Sex: "C",
      Sire: "Birdstone",
      Dam: "Tale of the Queen",
      Damsire: "Tale of the Cat",
      Trainer: "Ian R. Wilkes",
      Owner: "Marylou Whitney Stables LLC",
      Breeder: "Marylou Whitney Stables LLC"
    },
    {
      Id: "36",
      Name: "Black Lab",
      Sex: "C",
      Sire: "Fairbanks",
      Dam: "Three Queens",
      Damsire: "Allen's Prospect",
      Trainer: "George R. Arnold, II",
      Owner: "Calumet Farm",
      Breeder: "A. John Price"
    },
    {
      Id: "37",
      Name: "Blacklands",
      Sex: "C",
      Sire: "Harlan's Holiday",
      Dam: "Somerset West",
      Damsire: "Gone West",
      Trainer: "Michael J. Maker",
      Owner: "Calumet Farm",
      Breeder: "Dr. John A. Chandler"
    },
    {
      Id: "38",
      Name: "Blame Jim",
      Sex: "G",
      Sire: "Sharp Humor",
      Dam: "Tamboorensnshampan",
      Damsire: "Deerhound",
      Trainer: "Todd A. Pletcher",
      Owner: "Repole Stable",
      Breeder: "Repole Stable, Inc."
    },
    {
      Id: "39",
      Name: "Blaze Spirit Blaze",
      Sex: "G",
      Sire: "Fairbanks",
      Dam: "Ravionetta",
      Damsire: "Touch Gold",
      Trainer: "Ronald Moss",
      Owner: "Clark, Terry and Clark, Renee",
      Breeder: "Terry Clark & Renee Clark"
    },
    {
      Id: "40",
      Name: "Blaze'n Prospector",
      Sex: "C",
      Sire: "Discreetly Mine",
      Dam: "Brilliant Blaze",
      Damsire: "Seeking the Gold",
      Trainer: "Albert M. Stall, Jr.",
      Owner: "P.R. Racing",
      Breeder: "Dreamfields Inc, Don Brady & PorterThompson"
    },
    {
      Id: "41",
      Name: "Blofeld",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Storm Minstrel",
      Damsire: "Storm Cat",
      Trainer: "Todd A. Pletcher",
      Owner: "Glencrest Farm LLC (Lessee) and JSM Equine, LLC",
      Breeder: "Keats Grove Farm"
    },
    {
      Id: "42",
      Name: "Bluegrass Singer",
      Sex: "G",
      Sire: "Bluegrass Cat",
      Dam: "Aguilera",
      Damsire: "Unbridled's Song",
      Trainer: "Marcus J. Vitali",
      Owner: "Crossed Sabres Farm",
      Breeder: "Gaines-Gentry Thoroughbreds &Hardy Thoroughbreds LLC"
    },
    {
      Id: "43",
      Name: "Bluesman",
      Sex: "C",
      Sire: "Kitalpha",
      Dam: "Cupid's Comet",
      Damsire: "End Sweep",
      Trainer: "Wayne M. Catalano",
      Owner:
        "Nixon, Geoffrey Bryant, Arapaho Royal LLC and Van Etten, III, John",
      Breeder: "John James Revocable Trust"
    },
    {
      Id: "44",
      Name: "Bodhisattva",
      Sex: "C",
      Sire: "Student Council",
      Dam: "Dr. Cheryl P.",
      Damsire: "Talk Is Money",
      Trainer: "Jose Corrales",
      Owner: "Jose Corrales",
      Breeder: "Andy Stronach"
    },
    {
      Id: "45",
      Name: "Bold Conquest",
      Sex: "C",
      Sire: "Curlin",
      Dam: "One for Jim",
      Damsire: "Distorted Humor",
      Trainer: "Steven M. Asmussen",
      Owner: "Ackerley Brothers Farm",
      Breeder: "Glory Days Breeding, Inc."
    },
    {
      Id: "46",
      Name: "Bold Papa",
      Sex: "C",
      Sire: "Papa Clem",
      Dam: "Bold Roberta",
      Damsire: "Bold Badgett",
      Trainer: "George Papaprodromou",
      Owner: "KM Racing Enterprise, Inc.",
      Breeder: "Thomas Weyand Bachman"
    },
    {
      Id: "47",
      Name: "Bollente",
      Sex: "C",
      Sire: "More Than Ready",
      Dam: "Coya",
      Damsire: "Deputy Minister",
      Trainer: "Mark E. Casse",
      Owner: "John C. Oxley",
      Breeder: "Highfield Farm"
    },
    {
      Id: "48",
      Name: "Bolo",
      Sex: "C",
      Sire: "Temple City",
      Dam: "Aspen Mountain",
      Damsire: "Chief Seattle",
      Trainer: "Carla Gaines",
      Owner: "Golden Pegasus Racing, Inc.",
      Breeder: "Spendthrift Farm, LLC"
    },
    {
      Id: "49",
      Name: "Bombo Genesis",
      Sex: "F",
      Sire: "Afleet Alex",
      Dam: "Fancy Deed",
      Damsire: "Alydeed",
      Trainer: "Wesley A. Ward",
      Owner: "Wesley A. Ward",
      Breeder: "Wayne Lyster, Gray Lyster & Bryan Lyster"
    },
    {
      Id: "50",
      Name: "Bourbon Commander",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Broad Smile",
      Damsire: "Broad Brush",
      Trainer: "Nicholas P. Zito",
      Owner: "Calumet Farm",
      Breeder: "Stonestreet Holdings LLC, Jerry Frankel& Roy Gottlieb"
    },
    {
      Id: "51",
      Name: "Bravo Charlie",
      Sex: "C",
      Sire: "Exchange Rate",
      Dam: "Broad Hopes",
      Damsire: "Broad Brush",
      Trainer: "Dale L. Romans",
      Owner: "Calumet Farm",
      Breeder: "S. Bruce Smart"
    },
    {
      Id: "52",
      Name: "Breaking Lucky",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Shooting Party",
      Damsire: "Sky Classic",
      Trainer: "Reade Baker",
      Owner: "Gunpowder Farms LLC",
      Breeder: "Christine Hayden"
    },
    {
      Id: "53",
      Name: "Brolic",
      Sex: "C",
      Sire: "Tale of the Cat",
      Dam: "Indianista",
      Damsire: "Indian Charlie",
      Trainer: "Chad C. Brown",
      Owner: "Paul P. Pompa, Jr.",
      Breeder: "Paul S. Chacon"
    },
    {
      Id: "54",
      Name: "Brother O'Connell",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Shared Dreams (GB)",
      Damsire: "Seeking the Gold",
      Trainer: "Christophe Clement",
      Owner: "Donegal Racing",
      Breeder: "Sarah J. Leigh"
    },
    {
      Id: "55",
      Name: "Bucchero",
      Sex: "C",
      Sire: "Kantharos",
      Dam: "Meetmeontime",
      Damsire: "General Meeting",
      Trainer: "Michael J. Trombetta",
      Owner: "Ironhorse Racing LLC (Malter)",
      Breeder: "Southern Chase Farm, Inc. & Karen Dodd"
    },
    {
      Id: "56",
      Name: "Cajun Spirit",
      Sex: "G",
      Sire: "Bernstein",
      Dam: "Diamondinthestream",
      Damsire: "Smart Strike",
      Trainer: "Dallas Stewart",
      Owner: "West Point Thoroughbreds",
      Breeder: "Stacey Moak"
    },
    {
      Id: "57",
      Name: "Calafate",
      Sex: "C",
      Sire: "Elusive Quality",
      Dam: "Andes",
      Damsire: "Forestry",
      Trainer: "Steven M. Asmussen",
      Owner: "Calumet Farm",
      Breeder: "Dixiana Farm LLC"
    },
    {
      Id: "58",
      Name: "Calculator",
      Sex: "C",
      Sire: "In Summation",
      Dam: "Back to Basics",
      Damsire: "Alphabet Soup",
      Trainer: "Peter Miller",
      Owner: "Richard C. Pell",
      Breeder: "Ocala Stud"
    },
    {
      Id: "59",
      Name: "California Coast",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "McVictory",
      Damsire: "Victory Gallop",
      Trainer: "Wayne M. Catalano",
      Owner: "West, Gary and Mary",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "60",
      Name: "Canadian Star",
      Sex: "C",
      Sire: "Speightstown",
      Dam: "Theycallmeladyluck",
      Damsire: "Dixie Union",
      Trainer: "D. Wayne Lukas",
      Owner: "Baker, Robert C. and Mack, William L.",
      Breeder:
        "Seclusive Farm, LLC, Prince Farm, LLC &Dr. Carolin von Rosenberg"
    },
    {
      Id: "61",
      Name: "Captain Tim",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "Kaydara",
      Damsire: "Kris S.",
      Trainer: "John A. Shirreffs",
      Owner: "Moss, Mr. and Mrs. Jerome S.",
      Breeder: "Mr. & Mrs. J. S. Moss"
    },
    {
      Id: "62",
      Name: "Carajillo",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Prospective Saint",
      Damsire: "Saint Ballado",
      Trainer: "Todd A. Pletcher",
      Owner: "Siena Farm LLC",
      Breeder: "Siena Farms LLC"
    },
    {
      Id: "63",
      Name: "Carpe Diem",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Rebridled Dreams",
      Damsire: "Unbridled's Song",
      Trainer: "Todd A. Pletcher",
      Owner: "WinStar Farm LLC and Stonestreet Stables LLC",
      Breeder: "Coffee Pot Stable"
    },
    {
      Id: "64",
      Name: "Cat Fiftyfive",
      Sex: "C",
      Sire: "Tale of the Cat",
      Dam: "Chemise",
      Damsire: "Secret Hello",
      Trainer: "James L. Lawrence, II",
      Owner: "Matthew Schera",
      Breeder: "Corner Farm & John T. Behrendt"
    },
    {
      Id: "65",
      Name: "Centauro Star",
      Sex: "C",
      Sire: "Indian Charlie",
      Dam: "Batallosa (ARG)",
      Damsire: "Southern Halo",
      Trainer: "Gustavo Delgado",
      Owner: "GDS Racing Stable and El Capi Racing Stable LLC",
      Breeder: "Stonestreet Thoroughbred Holdings LLC"
    },
    {
      Id: "66",
      Name: "Changing Direction",
      Sex: "C",
      Sire: "Arch",
      Dam: "Spa Break",
      Damsire: "Giant's Causeway",
      Trainer: "Gustavo Delgado",
      Owner: "Top Racing LLC",
      Breeder: "Cliveden Stud LTD"
    },
    {
      Id: "67",
      Name: "Chief of Staff",
      Sex: "C",
      Sire: "Majestic Warrior",
      Dam: "Morning Jewel",
      Damsire: "Awesome Again",
      Trainer: "Jerry Hollendorfer",
      Owner: "Mark DeDomenico LLC",
      Breeder: "Lou Neve"
    },
    {
      Id: "68",
      Name: "Cinco Charlie",
      Sex: "C",
      Sire: "Indian Charlie",
      Dam: "Ten Halos",
      Damsire: "Marquetry",
      Trainer: "Steven M. Asmussen",
      Owner: "Heiligbrodt, L. William and Corinne",
      Breeder: "Candyland Farm"
    },
    {
      Id: "69",
      Name: "Circle Star",
      Sex: "C",
      Sire: "Notional",
      Dam: "Thanks to Frank",
      Damsire: "Smoke Glacken",
      Trainer: "Dane Kobiskie",
      Owner: "PTK, LLC",
      Breeder: "Margaux Farm LLC, Stephen E. Johnson &Michele Holbrook"
    },
    {
      Id: "70",
      Name: "Classy Class",
      Sex: "C",
      Sire: "Discreetly Mine",
      Dam: "Collegiate",
      Damsire: "Saarland",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Cheyenne Stables LLC",
      Breeder: "E Paul Robsham Stable LLC"
    },
    {
      Id: "71",
      Name: "Cleveland Sound",
      Sex: "C",
      Sire: "More Than Ready",
      Dam: "Twilight Service",
      Damsire: "Horse Chestnut (SAF)",
      Trainer: "H. Graham Motion",
      Owner: "West Point Thoroughbreds",
      Breeder: "Vegso Racing Stable"
    },
    {
      Id: "72",
      Name: "Cold Spice",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "False Impression",
      Damsire: "A.P. Indy",
      Trainer: "Michael J. Maker",
      Owner: "Calumet Farm",
      Breeder: "Katierich Farms"
    },
    {
      Id: "73",
      Name: "Colonel Fish",
      Sex: "C",
      Sire: "Henny Hughes",
      Dam: "Efficiently",
      Damsire: "Seattle Slew",
      Trainer: "Byron G. Hughes",
      Owner: "Wildwood Racing",
      Breeder: "Dr. Joseph G. Yocum DVM"
    },
    {
      Id: "74",
      Name: "Combat Diver",
      Sex: "C",
      Sire: "Line of David",
      Dam: "Safe Journey",
      Damsire: "Flatter",
      Trainer: "Gary C. Contessa",
      Owner: "Wounded Warrior Stables",
      Breeder: "Dark Hollow Farm"
    },
    {
      Id: "75",
      Name: "Competitive Edge",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Magdalena's Chase",
      Damsire: "Cape Town",
      Trainer: "Todd A. Pletcher",
      Owner: "Favreau, Nancy, Psoinos, Kathy and Tabor, Michael B.",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "76",
      Name: "Condo Commando",
      Sex: "F",
      Sire: "Tiz Wonderful",
      Dam: "Yearly Report",
      Damsire: "General Meeting",
      Trainer: "Rudy R. Rodriguez",
      Owner: "Dubb, Michael, Bethlehem Stables LLC and The Elkstone Group LLC",
      Breeder: "Spendthrift Farm, LLC"
    },
    {
      Id: "77",
      Name: "Conquest Bigluck E",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Hi Lili",
      Damsire: "Silver Deputy",
      Trainer: "Mark E. Casse",
      Owner: "Conquest Stables, LLC",
      Breeder: "Extern Developments"
    },
    {
      Id: "78",
      Name: "Conquest Harlanday",
      Sex: "C",
      Sire: "Harlan's Holiday",
      Dam: "Big Sink Star",
      Damsire: "A.P. Indy",
      Trainer: "Mark E. Casse",
      Owner: "Conquest Stables, LLC",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "79",
      Name: "Conquest Hiosilver",
      Sex: "C",
      Sire: "Majesticperfection",
      Dam: "Silver Comic",
      Damsire: "Silver Hawk",
      Trainer: "Mark E. Casse",
      Owner: "Conquest Stables, LLC",
      Breeder: "Brereton C. Jones"
    },
    {
      Id: "80",
      Name: "Conquest Typhoon",
      Sex: "C",
      Sire: "Stormy Atlantic",
      Dam: "Swanky Bubbles",
      Damsire: "Ascot Knight",
      Trainer: "Mark E. Casse",
      Owner: "Conquest Stables, LLC",
      Breeder: "Josham Farms Limited"
    },
    {
      Id: "81",
      Name: "Conquest War Cry",
      Sex: "C",
      Sire: "Warrior's Reward",
      Dam: "New Dimension",
      Damsire: "Golden Missile",
      Trainer: "Mark E. Casse",
      Owner: "Conquest Stables, LLC",
      Breeder: "Alfonso Mazzetti"
    },
    {
      Id: "82",
      Name: "Coomer",
      Sex: "C",
      Sire: "Midshipman",
      Dam: "Dixie Satin",
      Damsire: "Dynaformer",
      Trainer: "Michael J. Maker",
      Owner: "Ramsey, Kenneth L. and Sarah K.",
      Breeder: "Dividing Ridge Farm"
    },
    {
      Id: "83",
      Name: "Cozmic One",
      Sex: "C",
      Sire: "Bernardini",
      Dam: "Zenyatta",
      Damsire: "Street Cry (IRE)",
      Trainer: "John A. Shirreffs",
      Owner: "Moss, Mr. and Mrs. Jerome S.",
      Breeder: "Mr. and Mrs. J. S. Moss"
    },
    {
      Id: "84",
      Name: "Crafted",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Win Crafty Lady",
      Damsire: "Crafty Prospector",
      Trainer: "H. James Bond",
      Owner: "William L. Clifton, Jr.",
      Breeder: "Woodford Thoroughbreds"
    },
    {
      Id: "85",
      Name: "Crittenden",
      Sex: "G",
      Sire: "Distorted Humor",
      Dam: "Calla Lily",
      Damsire: "Pulpit",
      Trainer: "Eoin G. Harty",
      Owner: "Godolphin Racing LLC",
      Breeder: "Darley"
    },
    {
      Id: "86",
      Name: "Cross the Line",
      Sex: "C",
      Sire: "Line of David",
      Dam: "Beer Baroness",
      Damsire: "Mr. Greeley",
      Trainer: "Jerry Hollendorfer",
      Owner:
        "Hollendorfer, Todaro, Live Your Dream Racing Stable, Sigband et al.",
      Breeder: "Lynn B. Schiff"
    },
    {
      Id: "87",
      Name: "Cupertino",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "She's a Winner",
      Damsire: "A.P. Indy",
      Trainer: "Jose Fernandez",
      Owner: "Calumet Farm",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "88",
      Name: "Cyrus Alexander",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Supercharger",
      Damsire: "A.P. Indy",
      Trainer: "Jerry Hollendorfer",
      Owner: "Spendthrift Farm LLC and Stonestreet Stables LLC",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "89",
      Name: "Daddy D T",
      Sex: "R",
      Sire: "Scat Daddy",
      Dam: "Issues",
      Damsire: "Awesome Again",
      Trainer: "John W. Sadler",
      Owner: "Hronis Racing LLC",
      Breeder: "Mike Abraham"
    },
    {
      Id: "90",
      Name: "Dadtaughtmewell",
      Sex: "C",
      Sire: "Eddington",
      Dam: "Burrito",
      Damsire: "Tabasco Cat",
      Trainer: "James P. DiVito",
      Owner: "Divito, James P. and Punches, Dennis G.",
      Breeder: "Lavin Bloodstock"
    },
    {
      Id: "91",
      Name: "Danish Dynaformer",
      Sex: "C",
      Sire: "Dynaformer",
      Dam: "Danish Wildcat",
      Damsire: "Danehill",
      Trainer: "Roger L. Attfield",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "92",
      Name: "Dannie's Deceiver",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Deceive",
      Damsire: "Tiznow",
      Trainer: "David A. Cannizzo",
      Owner: "Z R J Stables",
      Breeder: "Lakland LLC"
    },
    {
      Id: "93",
      Name: "Danny Boy",
      Sex: "C",
      Sire: "Harlan's Holiday",
      Dam: "Unbridled Beauty",
      Damsire: "Unbridled's Song",
      Trainer: "Dale L. Romans",
      Owner: "Donegal Racing",
      Breeder: "Ashview Farm LLC &Colts Neck Stables LLC"
    },
    {
      Id: "94",
      Name: "Danzig Moon",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Leaveminthedust",
      Damsire: "Danzig",
      Trainer: "Mark E. Casse",
      Owner: "John C. Oxley",
      Breeder: "William D Graham"
    },
    {
      Id: "95",
      Name: "Daredevil",
      Sex: "C",
      Sire: "More Than Ready",
      Dam: "Chasethewildwind",
      Damsire: "Forty Niner",
      Trainer: "Todd A. Pletcher",
      Owner: "Let's Go Stable and WinStar Farm LLC",
      Breeder: "Marianne I. Chase & Brandon L. Chase"
    },
    {
      Id: "96",
      Name: "Data Driven",
      Sex: "C",
      Sire: "Northern Afleet",
      Dam: "Selective",
      Damsire: "Tapit",
      Trainer: "Chad C. Brown",
      Owner: "Klaravich Stables, Inc.",
      Breeder: "Winchell Thoroughbreds, LLC"
    },
    {
      Id: "97",
      Name: "Dave Hoeght",
      Sex: "C",
      Sire: "Langfuhr",
      Dam: "Magibel",
      Damsire: "Tale of the Cat",
      Trainer: "Dale L. Romans",
      Owner: "Mike Tarp",
      Breeder: "Mike Tarp"
    },
    {
      Id: "98",
      Name: "Deacon Blue",
      Sex: "C",
      Sire: "Corinthian",
      Dam: "Delight U. S. A.",
      Damsire: "Quiet American",
      Trainer: "D. Wayne Lukas",
      Owner: "Briland Farm",
      Breeder: "Briland Farm, Robert Mitchell &Stacy Mitchell"
    },
    {
      Id: "99",
      Name: "Decision Day",
      Sex: "C",
      Sire: "Macho Uno",
      Dam: "Cry of the Wild",
      Damsire: "Unbridled's Song",
      Trainer: "Josie Carroll",
      Owner: "Donver Stable",
      Breeder: "Donver Stable"
    },
    {
      Id: "100",
      Name: "Defined",
      Sex: "C",
      Sire: "Desert Party",
      Dam: "Satinet",
      Damsire: "Olympio",
      Trainer: "Chad C. Brown",
      Owner: "Paul P. Pompa, Jr.",
      Breeder: "Chris Cahill & Kirt Cahill"
    },
    {
      Id: "101",
      Name: "Defondo",
      Sex: "G",
      Sire: "El Corredor",
      Dam: "Blue Hills",
      Damsire: "Cure the Blues",
      Trainer: "Dallas Stewart",
      Owner: "West Point Thoroughbreds",
      Breeder: "Mr. & Mrs. Bertram R. Firestone"
    },
    {
      Id: "102",
      Name: "Dekabrist",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "Shutterbug",
      Damsire: "Deputy Minister",
      Trainer: "Gennadi Dorochenko",
      Owner: "Raut LLC",
      Breeder: "Mineola Farm II LLC"
    },
    {
      Id: "103",
      Name: "Dekalb County",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Rolling Sea",
      Damsire: "Sefapiano",
      Trainer: "Todd A. Pletcher",
      Owner: "Spendthrift Farm LLC",
      Breeder: "Spendthrift Farm LLC"
    },
    {
      Id: "104",
      Name: "Delta Outlaw",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Mistical Plan",
      Damsire: "Game Plan",
      Trainer: "George Weaver",
      Owner: "R. A. Hill Stable",
      Breeder: "Blue Heaven Farm"
    },
    {
      Id: "105",
      Name: "Desert Dynamo",
      Sex: "C",
      Sire: "Desert Party",
      Dam: "Competition",
      Damsire: "Dixie Union",
      Trainer: "Jeff Bonde",
      Owner: "Mark DeDomenico LLC, Durant, Jerry and House, Michael",
      Breeder: "Robert B. Tillyer & Martin J. Keogh"
    },
    {
      Id: "106",
      Name: "Dirt Monster",
      Sex: "C",
      Sire: "Line of David",
      Dam: "Coqui",
      Damsire: "Fusaichi Pegasus",
      Trainer: "Justin R. Evans",
      Owner: "Tony Pennington",
      Breeder: "Gaines Gentry Thoroughbreds &Hardy Thoroughbreds"
    },
    {
      Id: "107",
      Name: "Distant Kingdom",
      Sex: "C",
      Sire: "Majesticperfection",
      Dam: "Distant Charm",
      Damsire: "Distant View",
      Trainer: "Wesley E. Hawley",
      Owner: "Orth, Robert E. and Hawley, Wesley",
      Breeder: "Brandywine Farm"
    },
    {
      Id: "108",
      Name: "Dom the Bomb",
      Sex: "C",
      Sire: "Bring the Heat",
      Dam: "Richiesgirlgotgame",
      Damsire: "Five Star Day",
      Trainer: "Larry Rivelli",
      Owner: "V-Leaf Stables LLC, Ravin, Richard and Suzanne Stables",
      Breeder: "Richard Ravin & Larry Rivelli"
    },
    {
      Id: "109",
      Name: "Don Camillo",
      Sex: "C",
      Sire: "Ghostzapper",
      Dam: "Potra Clasica (ARG)",
      Damsire: "Potrillon (ARG)",
      Trainer: "Dermot K. Weld",
      Owner: "Stronach Stables",
      Breeder: "Adena Springs"
    },
    {
      Id: "110",
      Name: "Dontbetwithbruno",
      Sex: "C",
      Sire: "Tiz Wonderful",
      Dam: "Stomping",
      Damsire: "Dixieland Band",
      Trainer: "Todd A. Pletcher",
      Owner: "Repole Stable",
      Breeder: "Sun Valley Farm"
    },
    {
      Id: "111",
      Name: "Dortmund",
      Sex: "C",
      Sire: "Big Brown",
      Dam: "Our Josephina",
      Damsire: "Tale of the Cat",
      Trainer: "Bob Baffert",
      Owner: "Kaleem Shah, Inc.",
      Breeder: "Emilie Gerlinde Fojan"
    },
    {
      Id: "112",
      Name: "Dukin' With Dale",
      Sex: "C",
      Sire: "Indian Charlie",
      Dam: "Arboresque",
      Damsire: "Cure the Blues",
      Trainer: "John C. Servis",
      Owner: "Charlton, David and Main Line Racing Stable",
      Breeder:
        "Chester Prince, Anne Prince, ChrisBaccari & Carolin von Rosenberg DVM"
    },
    {
      Id: "113",
      Name: "Dunbrody",
      Sex: "C",
      Sire: "Awesome Again",
      Dam: "Zaraffa",
      Damsire: "Mizzen Mast",
      Trainer: "Wayne M. Catalano",
      Owner: "Donegal Racing",
      Breeder: "Carlos Enrique Bruno"
    },
    {
      Id: "114",
      Name: "Dunne Hall",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "Random Chance",
      Damsire: "Red Ransom",
      Trainer: "Dane Kobiskie",
      Owner: "PTK, LLC",
      Breeder: "Kim Nardelli, Rodney Nardelli,T. Lander, A. Ainspan"
    },
    {
      Id: "115",
      Name: "Eagle",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "Sea Gull",
      Damsire: "Mineshaft",
      Trainer: "Neil J. Howard",
      Owner: "W.S. Farish",
      Breeder: "W. S. Farish"
    },
    {
      Id: "116",
      Name: "East Rock",
      Sex: "C",
      Sire: "Temple City",
      Dam: "Juneau",
      Damsire: "Mr. Greeley",
      Trainer: "Gustavo Delgado",
      Owner: "Off The Hook Racing and Hellerman, Brett",
      Breeder: "Off The Hook Partners LLC"
    },
    {
      Id: "117",
      Name: "Easy to Say",
      Sex: "C",
      Sire: "Eskendereya",
      Dam: "Wild Snitch",
      Damsire: "Forest Wildcat",
      Trainer: "Benjamin W. Perkins, Jr.",
      Owner: "New Farm",
      Breeder: "New Farm"
    },
    {
      Id: "118",
      Name: "Eckersley",
      Sex: "C",
      Sire: "Congrats",
      Dam: "Aristocratic Lady",
      Damsire: "Kris S.",
      Trainer: "Scott Hansen",
      Owner: "Gary Broad",
      Breeder: "Grapestock LLC"
    },
    {
      Id: "119",
      Name: "Eh Cumpari",
      Sex: "C",
      Sire: "Elusive Quality",
      Dam: "Bells Are Ringing",
      Damsire: "Sadler's Wells",
      Trainer: "Michael Dilger",
      Owner: "Anstu Stables, Inc.",
      Breeder: "Turner Breeders, LLC"
    },
    {
      Id: "120",
      Name: "El Guaire River",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Glory of Love",
      Damsire: "Not for Love",
      Trainer: "Everton Alex Harris",
      Owner: "Rontos Racing Stable Corp.",
      Breeder: "Dixiana Farms LLC"
    },
    {
      Id: "121",
      Name: "El Kabeir",
      Sex: "C",
      Sire: "Scat Daddy",
      Dam: "Great Venue",
      Damsire: "Unbridled's Song",
      Trainer: "John P. Terranova, II",
      Owner: "Zayat Stables, LLC",
      Breeder: "Rustlewood Farm, Inc."
    },
    {
      Id: "122",
      Name: "Element",
      Sex: "C",
      Sire: "Unbridled's Song",
      Dam: "Floresta",
      Damsire: "Forecamp Camp",
      Trainer: "Todd A. Pletcher",
      Owner: "Glencrest Farm LLC (Lessee) and JSM Equine, LLC",
      Breeder: "Glencrest Farm"
    },
    {
      Id: "123",
      Name: "English Approval",
      Sex: "G",
      Sire: "Bellamy Road",
      Dam: "Taste of Approval",
      Damsire: "With Approval",
      Trainer: "Oscar Modica",
      Owner: "Virginia Lazenby",
      Breeder: "Cloyce C. Clark Jr."
    },
    {
      Id: "124",
      Name: "Equilibrium",
      Sex: "C",
      Sire: "Rock Hard Ten",
      Dam: "Run Withthe Spirit",
      Damsire: "Lemon Drop Kid",
      Trainer: "Gustavo Delgado",
      Owner: "Saiden, Amin and Agusti, Wilfredo",
      Breeder: "Mr. & Mrs. Broussard Hundley"
    },
    {
      Id: "125",
      Name: "Escalate",
      Sex: "C",
      Sire: "Eskendereya",
      Dam: "Holy Princess",
      Damsire: "Holy Bull",
      Trainer: "Steven M. Asmussen",
      Owner: "Winchell Thoroughbreds LLC",
      Breeder: "Nancy L. Terhune & Ernest Frohboese"
    },
    {
      Id: "126",
      Name: "Face of Winner",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "Se Bella",
      Damsire: "Forestry",
      Trainer: "Gustavo Delgado",
      Owner: "P D Horse Stable",
      Breeder: "Fred W. Hertrich III & John D. Fielding"
    },
    {
      Id: "127",
      Name: "Fantasy Pain",
      Sex: "C",
      Sire: "Midnight Lute",
      Dam: "Miss Wineshine",
      Damsire: "Wolf Power (SAF)",
      Trainer: "Chad C. Brown",
      Owner: "Doheny Racing Stable, Off The Hook LLC and Coleman, Thomas",
      Breeder: "Lantern Hill Farm LLC"
    },
    {
      Id: "128",
      Name: "Far From Over",
      Sex: "R",
      Sire: "Blame",
      Dam: "Alchemist",
      Damsire: "A.P. Indy",
      Trainer: "Todd A. Pletcher",
      Owner: "Black Rock Thoroughbreds, LLP",
      Breeder: "Alexander Groves Matz, LLC"
    },
    {
      Id: "129",
      Name: "Far Right",
      Sex: "C",
      Sire: "Notional",
      Dam: "Zindi",
      Damsire: "Vindication",
      Trainer: "Ron Moquett",
      Owner: "LaPenta, Robert V. and Rosenblum, Harry T.",
      Breeder: "Nossab LLC & Patrick J Crowley"
    },
    {
      Id: "130",
      Name: "Film Freak",
      Sex: "C",
      Sire: "Fusaichi Pegasus",
      Dam: "Film Critic",
      Damsire: "Dynaformer",
      Trainer: "Thomas F. Proctor",
      Owner: "George Krikorian",
      Breeder: "George Krikorian"
    },
    {
      Id: "131",
      Name: "Firespike",
      Sex: "C",
      Sire: "Flower Alley",
      Dam: "Fairy Valley",
      Damsire: "Dixieland Band",
      Trainer: "Michael J. Maker",
      Owner:
        "Skychai Racing LLC, Warner, Charles Kevin, and Sand Dollar Stable LLC",
      Breeder: "Carlos Rafael, Michael Bossio &Cherie Abner"
    },
    {
      Id: "132",
      Name: "Firing Line",
      Sex: "C",
      Sire: "Line of David",
      Dam: "Sister Girl Blues",
      Damsire: "Hold for Gold",
      Trainer: "Simon Callaghan",
      Owner: "Arnold Zetcher LLC",
      Breeder: "Clearsky Farms"
    },
    {
      Id: "133",
      Name: "First Down",
      Sex: "C",
      Sire: "Street Sense",
      Dam: "Storm Lily",
      Damsire: "Storm Cat",
      Trainer: "Thomas Albertrani",
      Owner: "Godolphin Racing LLC",
      Breeder: "Darley"
    },
    {
      Id: "134",
      Name: "First Place Flirt",
      Sex: "C",
      Sire: "Warrior's Reward",
      Dam: "Velvet Snow",
      Damsire: "Subordination",
      Trainer: "J. R. Caldwell",
      Owner: "Red Tail Ridge Racing Stables LLC",
      Breeder: "Spendthrift Farm, LLC"
    },
    {
      Id: "135",
      Name: "First Splash",
      Sex: "C",
      Sire: "Speightstown",
      Dam: "Banga Ridge",
      Damsire: "Snow Ridge",
      Trainer: "Randy L. Morse",
      Owner: "Tom R. Durant",
      Breeder: "Christine Hayden"
    },
    {
      Id: "136",
      Name: "Flashaway",
      Sex: "C",
      Sire: "Eskendereya",
      Dam: "Call Me Fleet",
      Damsire: "Afleet",
      Trainer: "Mark E. Casse",
      Owner: "John C. Oxley",
      Breeder: "Dell Ridge Farm, LLC"
    },
    {
      Id: "137",
      Name: "Flashy Jewel",
      Sex: "C",
      Sire: "Flashy Bull",
      Dam: "Indian Jewel",
      Damsire: "Distorted Humor",
      Trainer: "Ian R. Wilkes",
      Owner: "Lothenbach Stables, Inc.",
      Breeder: "Brereton C. Jones"
    },
    {
      Id: "138",
      Name: "Forever Unbridled",
      Sex: "F",
      Sire: "Unbridled's Song",
      Dam: "Lemons Forever",
      Damsire: "Lemon Drop Kid",
      Trainer: "Dallas Stewart",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "139",
      Name: "Fracula",
      Sex: "C",
      Sire: "Rockport Harbor",
      Dam: "Light and Liberty",
      Damsire: "Arch",
      Trainer: "Kenneth G. McPeek",
      Owner: "Magic City Thoroughbred Partners",
      Breeder: "Upson Downs Farm"
    },
    {
      Id: "140",
      Name: "Frammento",
      Sex: "C",
      Sire: "Midshipman",
      Dam: "Ginger Bay",
      Damsire: "Golden Missile",
      Trainer: "Nicholas P. Zito",
      Owner: "Mossarosa",
      Breeder: "Mr. & Mrs. Oliver S. Tait"
    },
    {
      Id: "141",
      Name: "Frat Boy",
      Sex: "C",
      Sire: "Roman Ruler",
      Dam: "Brooklynsangel",
      Damsire: "Aggressive Chief",
      Trainer: "Michael J. Maker",
      Owner: "Ramsey, Kenneth L. and Sarah K.",
      Breeder: "Hill 'n' Dale Equine Holdings, Inc."
    },
    {
      Id: "142",
      Name: "Frenchman Bay",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Karla's Number",
      Damsire: "Polish Numbers",
      Trainer: "James A. Jerkens",
      Owner: "Shortleaf Stable, Inc.",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "143",
      Name: "Frosted",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Fast Cookie",
      Damsire: "Deputy Minister",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Godolphin Racing LLC",
      Breeder: "Darley"
    },
    {
      Id: "144",
      Name: "Fusaichi Flame",
      Sex: "C",
      Sire: "Fusaichi Pegasus",
      Dam: "Merry Mary",
      Damsire: "Leestown",
      Trainer: "Scott Gelner",
      Owner: "Norman Stables, LLC",
      Breeder: "Inside Lane Partnership"
    },
    {
      Id: "145",
      Name: "G Five",
      Sex: "C",
      Sire: "Flashy Bull",
      Dam: "Fly Don't Drive",
      Damsire: "Harlan's Holiday",
      Trainer: "Todd A. Pletcher",
      Owner: "Eclipse Thoroughbred Partners",
      Breeder: "Brereton C. Jones"
    },
    {
      Id: "146",
      Name: "Gandono",
      Sex: "C",
      Sire: "Lemon Drop Kid",
      Dam: "Aurelia",
      Damsire: "Danzig",
      Trainer: "David M. Carroll",
      Owner: "Courtlandt Farms",
      Breeder: "Alexander - Groves - Matz"
    },
    {
      Id: "147",
      Name: "Gangster",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "Miss Isella",
      Damsire: "Silver Charm",
      Trainer: "Todd A. Pletcher",
      Owner: "Black Rock Thoroughbreds, LLP",
      Breeder: "Adena Springs"
    },
    {
      Id: "148",
      Name: "General Bellamy",
      Sex: "C",
      Sire: "Bellamy Road",
      Dam: "Sweet Again",
      Damsire: "Awesome Again",
      Trainer: "William I. Mott",
      Owner: "Bach Stables LLC",
      Breeder: "Kinsman Farm"
    },
    {
      Id: "149",
      Name: "Ghost Bay",
      Sex: "C",
      Sire: "Ghostzapper",
      Dam: "Hope Bay",
      Damsire: "Smart Strike",
      Trainer: "Lawrence E. Murray",
      Owner: "Howard M. Bender",
      Breeder: "Howard M. Bender"
    },
    {
      Id: "150",
      Name: "Giant Story",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Montauk Daisy",
      Damsire: "Regal Classic",
      Trainer: "Patrick J. Quick",
      Owner: "Grimaldi, Dana P. and British Betty Racing Stables LLC",
      Breeder: "Dana Grimaldi &British Betty Racing Stables, LLC"
    },
    {
      Id: "151",
      Name: "Gimme Da Lute",
      Sex: "C",
      Sire: "Midnight Lute",
      Dam: "Casino Gold",
      Damsire: "Proud Citizen",
      Trainer: "Bob Baffert",
      Owner: "Watson, Karl, Pegram, Michael E. and Weitman, Paul",
      Breeder: "Michael E. Pegram, Karl Watson & PaulWeitman"
    },
    {
      Id: "152",
      Name: "Glenville Gardens",
      Sex: "C",
      Sire: "Street Cry (IRE)",
      Dam: "Navy Gardens",
      Damsire: "Storm Cat",
      Trainer: "Josie Carroll",
      Owner: "Melnyk Racing Stables, Inc.",
      Breeder: "Eugene Melnyk"
    },
    {
      Id: "153",
      Name: "Godrevy",
      Sex: "C",
      Sire: "Bernardini",
      Dam: "Devon's Delight",
      Damsire: "Deputy Minister",
      Trainer: "Thomas Albertrani",
      Owner: "Godolphin Racing LLC",
      Breeder: "Darley"
    },
    {
      Id: "154",
      Name: "Gold Shield",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Dream Supreme",
      Damsire: "Seeking the Gold",
      Trainer: "Claude R. McGaughey III",
      Owner: "Lane's End Racing and Kinsman Stable",
      Breeder: "Kinsman Farm"
    },
    {
      Id: "155",
      Name: "Golden Years",
      Sex: "C",
      Sire: "Not For Love",
      Dam: "Sweet Annuity",
      Damsire: "Oh Say",
      Trainer: "Rodney Jenkins",
      Owner: "Hillwood Stable LLC",
      Breeder: "O'Sullivan Farms LLC"
    },
    {
      Id: "156",
      Name: "Good Luck Gus",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Tacticmove",
      Damsire: "Deputy Minister",
      Trainer: "Rudy R. Rodriguez",
      Owner: "Dubb, Michael, Bethlehem Stables LLC and The Elkstone Group LLC",
      Breeder: "Fred W. Hertrich III"
    },
    {
      Id: "157",
      Name: "Good Pick Nick",
      Sex: "R",
      Sire: "Tapit",
      Dam: "Mayan Milagra",
      Damsire: "Menifee",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Stonestreet Stables LLC",
      Breeder: "Woodford Thoroughbreds"
    },
    {
      Id: "158",
      Name: "Gorgeous Bird",
      Sex: "C",
      Sire: "Unbridled's Song",
      Dam: "Elusive Bird",
      Damsire: "Elusive Quality",
      Trainer: "Ian R. Wilkes",
      Owner: "Marylou Whitney Stables LLC",
      Breeder: "Marylou Whitney Stables LLC"
    },
    {
      Id: "159",
      Name: "Great Dancer (IRE)",
      Sex: "C",
      Sire: "Lord Shanakill",
      Dam: "Enchanted Empress (IRE)",
      Damsire: "Holy Roman Emperor (IRE)",
      Trainer: "James L. Lawrence, II",
      Owner: "Matthew Schera",
      Breeder: "Maurice Regan"
    },
    {
      Id: "160",
      Name: "Great Stuff",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Sumptuous",
      Damsire: "Hennessy",
      Trainer: "Ian R. Wilkes",
      Owner: "A. Stevens Miles, Jr.",
      Breeder: "Stonestreet Thoroughbred Holdings LLC"
    },
    {
      Id: "161",
      Name: "Ground Rules",
      Sex: "C",
      Sire: "Smart Strike",
      Dam: "Noble Idea",
      Damsire: "Deputy Minister",
      Trainer: "Clifford W. Sise, Jr.",
      Owner: "Wygod, Pam and Martin",
      Breeder: "Pam & Martin Wygod"
    },
    {
      Id: "162",
      Name: "Guapo Man",
      Sex: "C",
      Sire: "Street Cry (IRE)",
      Dam: "Indescribable",
      Damsire: "Pleasant Tap",
      Trainer: "David M. Carroll",
      Owner: "Courtlandt Farms",
      Breeder: "Courtlandt Farm"
    },
    {
      Id: "163",
      Name: "Harmonic",
      Sex: "C",
      Sire: "Congrats",
      Dam: "Cat Fight",
      Damsire: "Storm Cat",
      Trainer: "Jerry Hollendorfer",
      Owner:
        "Awtrey, R., Hammond, R., Phillips Racing Partnership, Schummer, C. et al.",
      Breeder: "Mike Abraham"
    },
    {
      Id: "164",
      Name: "Hashtag Bourbon",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Waltzing With Deb",
      Damsire: "Robyn Dancer",
      Trainer: "Kellyn Gorder",
      Owner: "Bourbon Lane Stable",
      Breeder: "Farfellow Farms LTD."
    },
    {
      Id: "165",
      Name: "Hawkshaw",
      Sex: "C",
      Sire: "Discreetly Mine",
      Dam: "Count to Six",
      Damsire: "Saratoga Six",
      Trainer: "Kenneth G. McPeek",
      Owner: "Stone Farm",
      Breeder: "Stone Farm"
    },
    {
      Id: "166",
      Name: "Help From Heaven",
      Sex: "C",
      Sire: "Divine Park",
      Dam: "Harlan Helper",
      Damsire: "Friends Lake",
      Trainer: "Oscar Modica",
      Owner: "Lazenby, Virginia B. and Farm D'Allie Racing Stables",
      Breeder: "Brereton C. Jones & Jimmy Blanton"
    },
    {
      Id: "167",
      Name: "Henry Jones",
      Sex: "C",
      Sire: "Temple City",
      Dam: "Gold Bowl",
      Damsire: "Seeking the Gold",
      Trainer: "D. Wayne Lukas",
      Owner: "Holy Cow Stable, LLC",
      Breeder: "Zeke Kobak"
    },
    {
      Id: "168",
      Name: "Hero of Humor",
      Sex: "C",
      Sire: "Sharp Humor",
      Dam: "Showmetothevilla",
      Damsire: "Pancho Villa",
      Trainer: "Gennadi Dorochenko",
      Owner: "Raut LLC",
      Breeder: "Liberation Farm & Brandywine Farm"
    },
    {
      Id: "169",
      Name: "Hero Ten All",
      Sex: "C",
      Sire: "Rock Hard Ten",
      Dam: "Silky Smooth",
      Damsire: "Mr. Greeley",
      Trainer: "Jeff Mullins",
      Owner: "Edward K. Gaylord, II",
      Breeder: "Gaillardia, LLC"
    },
    {
      Id: "170",
      Name: "High Noon Rider",
      Sex: "C",
      Sire: "Distorted Humor",
      Dam: "Modesty Blaise",
      Damsire: "A.P. Indy",
      Trainer: "George Weaver",
      Owner: "R. A. Hill Stable",
      Breeder: "Flaxman Holdings Limited"
    },
    {
      Id: "171",
      Name: "Hillbilly Style",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Stylish",
      Damsire: "Thunder Gulch",
      Trainer: "D. Wayne Lukas",
      Owner: "Willis D. Horton",
      Breeder: "Malibu Farm, LLC"
    },
    {
      Id: "172",
      Name: "Hold My Purse",
      Sex: "C",
      Sire: "Hold Me Back",
      Dam: "Absolutely Cindy",
      Damsire: "Arch",
      Trainer: "Ronald Keith Kinmon",
      Owner: "Stonewater Stud LLC, McClanahan, Rex and Kinmon, Keith",
      Breeder: "Keith Kinmon"
    },
    {
      Id: "173",
      Name: "Holiday Man",
      Sex: "C",
      Sire: "Harlan's Holiday",
      Dam: "Triple Cream",
      Damsire: "Tapit",
      Trainer: "Steven M. Asmussen",
      Owner: "Michael Langford",
      Breeder: "Royal Pegasus, LLC"
    },
    {
      Id: "174",
      Name: "Hollywood Critic",
      Sex: "C",
      Sire: "Blame",
      Dam: "Kalosca (FR)",
      Damsire: "Kaldoun (FR)",
      Trainer: "Thomas Drury, Jr.",
      Owner: "Bruce Lunsford",
      Breeder: "W. Bruce Lunsford"
    },
    {
      Id: "175",
      Name: "Honor Earned",
      Sex: "R",
      Sire: "Graeme Hall",
      Dam: "Lady Secretary",
      Damsire: "Secretariat",
      Trainer: "Ralph E. Nicks",
      Owner: "Paul Adams",
      Breeder: "Sunshine Thoroughbred Corp."
    },
    {
      Id: "176",
      Name: "Honor Society",
      Sex: "C",
      Sire: "Bernardini",
      Dam: "Our Rite of Spring",
      Damsire: "Stravinsky",
      Trainer: "Jerry Hollendorfer",
      Owner: "Mark DeDomenico LLC and Hollendorfer, Jerry",
      Breeder: "Kilroy Thoroughbred Partnership"
    },
    {
      Id: "177",
      Name: "Hoosier Spirit",
      Sex: "C",
      Sire: "Old Fashioned",
      Dam: "Devilish Amour",
      Damsire: "Devil His Due",
      Trainer: "Dallas Stewart",
      Owner: "Dream Team One Racing Stable",
      Breeder: "Swifty Farms Inc."
    },
    {
      Id: "178",
      Name: "Hottap",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Silver Reunion",
      Damsire: "Harlan's Holiday",
      Trainer: "Steven M. Asmussen",
      Owner: "Winchell Thoroughbreds LLC",
      Breeder: "Brereton C. Jones"
    },
    {
      Id: "179",
      Name: "How You",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Etoufee",
      Damsire: "Tabasco Cat",
      Trainer: "Ignacio Correas, IV",
      Owner: "Sagamore Farm",
      Breeder: "Marablue Farm LLC"
    },
    {
      Id: "180",
      Name: "Iancol",
      Sex: "C",
      Sire: "Badge of Silver",
      Dam: "Luhoo",
      Damsire: "Luhuk",
      Trainer: "Jerry Hollendorfer",
      Owner: "William E. Myers, Jr.",
      Breeder: "Barbara Corey"
    },
    {
      Id: "181",
      Name: "Ideal",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Relent",
      Damsire: "Tiznow",
      Trainer: "Jerry Hollendorfer",
      Owner: "Fox Hill Farms, Inc.",
      Breeder: "JKG Thoroughbreds"
    },
    {
      Id: "182",
      Name: "Imperia",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Cocoa Beach (CHI)",
      Damsire: "Doneraile Court",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Godolphin Racing LLC",
      Breeder: "Darley"
    },
    {
      Id: "183",
      Name: "In the Pocket",
      Sex: "C",
      Sire: "Gilded Crusader",
      Dam: "Pedro's Choice",
      Damsire: "Caldiero",
      Trainer: "Angelina Gallien",
      Owner: "David Albert",
      Breeder: "David Albert"
    },
    {
      Id: "184",
      Name: "Indianaughty",
      Sex: "C",
      Sire: "Indian Charlie",
      Dam: "Be Fair",
      Damsire: "Exchange Rate",
      Trainer: "Dale L. Romans",
      Owner: "Team Valor International",
      Breeder: "Dell Ridge Farm, LLC"
    },
    {
      Id: "185",
      Name: "Infinite Midnight",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Midnight Kiss (NZ)",
      Damsire: "Groom Dancer",
      Trainer: "Chad C. Brown",
      Owner: "Arnold Zetcher LLC",
      Breeder: "Arnold Zetcher LLC"
    },
    {
      Id: "186",
      Name: "International Star",
      Sex: "C",
      Sire: "Fusaichi Pegasus",
      Dam: "Parlez",
      Damsire: "French Deputy",
      Trainer: "Michael J. Maker",
      Owner: "Ramsey, Kenneth L. and Sarah K.",
      Breeder: "Katharine M. Voss & Robert T. Manfuso"
    },
    {
      Id: "187",
      Name: "Iphone Addiction",
      Sex: "G",
      Sire: "Big Brown",
      Dam: "Successful Sarah",
      Damsire: "Successful Appeal",
      Trainer: "Everton Alex Harris",
      Owner: "Rontos Racing Stable Corp.",
      Breeder: "Off The Hook Partners LLC &Farm III Enterprises"
    },
    {
      Id: "188",
      Name: "Irish Cat",
      Sex: "C",
      Sire: "Street Cry (IRE)",
      Dam: "Carolyn's Cat",
      Damsire: "Forestry",
      Trainer: "Chad C. Brown",
      Owner: "William K. Warren, Jr.",
      Breeder: "Mr. & Mrs. W. K. Warren Jr."
    },
    {
      Id: "189",
      Name: "Island Town",
      Sex: "G",
      Sire: "Hard Spun",
      Dam: "Humorous Gal",
      Damsire: "Distorted Humor",
      Trainer: "Ian R. Wilkes",
      Owner:
        "Six Column Stables, LLC, Bloch, Randall L., Seiler, John and Hall, David",
      Breeder: "Randy Bloch et al"
    },
    {
      Id: "190",
      Name: "Itsaknockout",
      Sex: "C",
      Sire: "Lemon Drop Kid",
      Dam: "Stormy B",
      Damsire: "Cherokee Run",
      Trainer: "Todd A. Pletcher",
      Owner: "Starlight Racing",
      Breeder: "Brookfield Stud"
    },
    {
      Id: "191",
      Name: "J S Bach",
      Sex: "C",
      Sire: "Tale of the Cat",
      Dam: "Ten Carat Lady",
      Damsire: "Pulpit",
      Trainer: "Todd A. Pletcher",
      Owner: "Double Diamond Farm (Dizney)",
      Breeder: "Donald R. Dizney"
    },
    {
      Id: "192",
      Name: "Jacaranda",
      Sex: "F",
      Sire: "Congrats",
      Dam: "Baffled",
      Damsire: "Distorted Humor",
      Trainer: "Michael E. Hushion",
      Owner: "Barry K. Schwartz",
      Breeder: "Vinery, LLC"
    },
    {
      Id: "193",
      Name: "Jack Tripp",
      Sex: "G",
      Sire: "Flatter",
      Dam: "Vindicated Angel",
      Damsire: "Vindication",
      Trainer: "Dale L. Romans",
      Owner: "Robert J. Baron",
      Breeder: "Hargus Sexton, Sandra Sexton &Silver Fern Farm"
    },
    {
      Id: "194",
      Name: "Jackson P",
      Sex: "C",
      Sire: "Two Punch",
      Dam: "Potomac Bend",
      Damsire: "Polish Numbers",
      Trainer: "Cathal A. Lynch",
      Owner: "Stony Brook Stables",
      Breeder:
        "Dr. & Mrs. Thomas Bowman, DutrowThoroughbred Ent, Inc. & Rebecca Davis"
    },
    {
      Id: "195",
      Name: "Jacques Cartier",
      Sex: "C",
      Sire: "Midshipman",
      Dam: "Blue Stream",
      Damsire: "King of Kings (IRE)",
      Trainer: "Randy L. Klopp",
      Owner: "E. McCarroll Holdings and Norris, S.J.",
      Breeder: "University of Kentucky"
    },
    {
      Id: "196",
      Name: "Jambles",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Chalonnaise",
      Damsire: "French Deputy",
      Trainer: "Todd A. Pletcher",
      Owner: "Bortolazzo Stable LLC and Candy Stable (Moelis)",
      Breeder: "Classic Thoroughbred XII"
    },
    {
      Id: "197",
      Name: "Japan",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Maya",
      Damsire: "Capote",
      Trainer: "Michael E. Hushion",
      Owner: "Barry K. Schwartz",
      Breeder: "Emory A. Hamilton"
    },
    {
      Id: "198",
      Name: "Java's Bourbon",
      Sex: "C",
      Sire: "Not Bourbon",
      Dam: "Java (GB)",
      Damsire: "Rainbow Quest",
      Trainer: "Roger L. Attfield",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "199",
      Name: "Jess's Dream",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Rachel Alexandra",
      Damsire: "Medaglia d'Oro",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Stonestreet Stables LLC",
      Breeder:
        "Stonestreet Thoroughbred Holdings LLC &The Estate of Harold T McCormick"
    },
    {
      Id: "200",
      Name: "Jiravit",
      Sex: "C",
      Sire: "Tiz Wonderful",
      Dam: "Michelleinhearts",
      Damsire: "Lion Heart",
      Trainer: "Thomas A. Clark",
      Owner: "Carlson Family Limited Partnership",
      Breeder: "Kona Stables, LLC"
    },
    {
      Id: "201",
      Name: "Juan and Bina",
      Sex: "C",
      Sire: "Indian Charlie",
      Dam: "Caressing",
      Damsire: "Honour and Glory",
      Trainer: "Gustavo Delgado",
      Owner: "Grupo 7C Racing Stable",
      Breeder: "Carl F. Pollard"
    },
    {
      Id: "202",
      Name: "Jumpin Frac Flash",
      Sex: "C",
      Sire: "Any Given Saturday",
      Dam: "Manukai",
      Damsire: "Unbridled Jet",
      Trainer: "Kenneth G. McPeek",
      Owner: "Magic City Thoroughbred Partners",
      Breeder: "Darley & Robert S. West Jr."
    },
    {
      Id: "203",
      Name: "Just Kidding",
      Sex: "C",
      Sire: "Kiss the Kid",
      Dam: "Catomaria",
      Damsire: "Tale of the Cat",
      Trainer: "Peter Eurton",
      Owner:
        "Alesia, Sharon, Bran Jam Stables, Ciaglia Racing, LLC and Dyrdek, Rob",
      Breeder: "Steve Tucker"
    },
    {
      Id: "204",
      Name: "Juvee",
      Sex: "G",
      Sire: "Temple City",
      Dam: "Sweet Candy Ride",
      Damsire: "Candy Ride (ARG)",
      Trainer: "Catherine Dodd",
      Owner: "Catherine Dodd",
      Breeder: "Vincent Colbert"
    },
    {
      Id: "205",
      Name: "Kabang",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Aventina",
      Damsire: "Dynaformer",
      Trainer: "Thomas Albertrani",
      Owner: "Live Oak Plantation",
      Breeder: "Mt. Brilliant Farm & Ranch, LLC"
    },
    {
      Id: "206",
      Name: "Keen Ice",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Medomak",
      Damsire: "Awesome Again",
      Trainer: "Dale L. Romans",
      Owner: "Donegal Racing",
      Breeder: "Glencrest Farm"
    },
    {
      Id: "207",
      Name: "Kensington Court",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Backseat Rhythm",
      Damsire: "El Corredor",
      Trainer: "Todd A. Pletcher",
      Owner: "Paul P. Pompa, Jr.",
      Breeder: "Paul Pompa Jr."
    },
    {
      Id: "208",
      Name: "Khozan",
      Sex: "C",
      Sire: "Distorted Humor",
      Dam: "Delta Princess",
      Damsire: "A.P. Indy",
      Trainer: "Todd A. Pletcher",
      Owner: "Al Shaqab Racing",
      Breeder: "Adena Springs"
    },
    {
      Id: "209",
      Name: "Kid Zip",
      Sex: "C",
      Sire: "Unbridled's Song",
      Dam: "Baby Zip",
      Damsire: "Relaunch",
      Trainer: "Philip A. Bauer",
      Owner: "Rigney Racing",
      Breeder: "Adena Springs"
    },
    {
      Id: "210",
      Name: "Killargue",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "El Coyote",
      Damsire: "A.P. Indy",
      Trainer: "Douglas J. Seyler",
      Owner: "Rootem In Racing LLC",
      Breeder: "Kilroy Thoroughbred Partnership"
    },
    {
      Id: "211",
      Name: "Killingit",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "Takesmybreathaway",
      Damsire: "Gone West",
      Trainer: "Laura Wohlers",
      Owner: "James McIngvale",
      Breeder: "Manganaro, LLC"
    },
    {
      Id: "212",
      Name: "King of New York",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "Princess Consort",
      Damsire: "Dixieland Band",
      Trainer: "Kenneth G. McPeek",
      Owner: "Harold Lerner LLC",
      Breeder: "Mike Abraham"
    },
    {
      Id: "213",
      Name: "King of Spades",
      Sex: "C",
      Sire: "Street Cry (IRE)",
      Dam: "Dynamite Lass",
      Damsire: "Dynaformer",
      Trainer: "Chad C. Brown",
      Owner: "Robert V. LaPenta",
      Breeder: "Adena Springs & Mark & Inez Corrado"
    },
    {
      Id: "214",
      Name: "Kings Knight",
      Sex: "C",
      Sire: "Lemon Drop Kid",
      Dam: "The Problema",
      Damsire: "Giant's Causeway",
      Trainer: "George R. Arnold, II",
      Owner: "Calumet Farm",
      Breeder: "Fred W. Hertrich III"
    },
    {
      Id: "215",
      Name: "Kiss the Road",
      Sex: "C",
      Sire: "Bellamy Road",
      Dam: "Kiss the Diva",
      Damsire: "Pulpit",
      Trainer: "Nicholas P. Zito",
      Owner: "Calumet Farm",
      Breeder: "Barak Farm"
    },
    {
      Id: "216",
      Name: "Lady Tapit",
      Sex: "F",
      Sire: "Tapit",
      Dam: "Temperence Gift",
      Damsire: "Kingmambo",
      Trainer: "John W. Sadler",
      Owner: "C R K Stable",
      Breeder: "Dattt Farm LLC"
    },
    {
      Id: "217",
      Name: "Leave the Light On",
      Sex: "C",
      Sire: "Horse Greeley",
      Dam: "Lantern Glow",
      Damsire: "Mineshaft",
      Trainer: "Chad C. Brown",
      Owner: "Klaravich Stables, Inc. and Lawrence, William H.",
      Breeder: "All Gold Racing LLC"
    },
    {
      Id: "218",
      Name: "Leitrim",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Sky Haven",
      Damsire: "Sky Mesa",
      Trainer: "Steven M. Asmussen",
      Owner: "Duignan, William and Duignan, Gabriel",
      Breeder:
        "Gabriel Duignan, William Duignan &Rock River Enterprises Limited"
    },
    {
      Id: "219",
      Name: "Lemon Drop Title",
      Sex: "C",
      Sire: "Lemon Drop Kid",
      Dam: "Title Seeker",
      Damsire: "Monarchos",
      Trainer: "Dallas Stewart",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "220",
      Name: "Letuspray",
      Sex: "C",
      Sire: "Pulpit",
      Dam: "Winter Garden",
      Damsire: "Roy",
      Trainer: "Todd A. Pletcher",
      Owner: "Town and Country Farms, Corp.",
      Breeder: "Town & Country Farm, Corp."
    },
    {
      Id: "221",
      Name: "Lieutenant Colonel",
      Sex: "C",
      Sire: "Colonel John",
      Dam: "Lovely View",
      Damsire: "Carson City",
      Trainer: "Chad C. Brown",
      Owner: "Clarke, Harvey A. and Braverman, Paul",
      Breeder: "Phil Owens"
    },
    {
      Id: "222",
      Name: "Lord Nelson",
      Sex: "C",
      Sire: "Pulpit",
      Dam: "African Jade",
      Damsire: "Seeking the Gold",
      Trainer: "Bob Baffert",
      Owner: "Peachtree Stable",
      Breeder: "Clearsky Farms"
    },
    {
      Id: "223",
      Name: "Lucky Player",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Janetstickettocats",
      Damsire: "Storm Cat",
      Trainer: "Steven M. Asmussen",
      Owner: "Jerry Durant",
      Breeder: "Destiny Oaks of Ocala"
    },
    {
      Id: "224",
      Name: "M J's Warrior",
      Sex: "C",
      Sire: "Majestic Warrior",
      Dam: "Lucinda",
      Damsire: "Olympio",
      Trainer: "James L. Lawrence, II",
      Owner: "Matthew Schera",
      Breeder: "Gabriel Duignan & William Arvin Jr."
    },
    {
      Id: "225",
      Name: "Madefromlucky",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Home From Oz",
      Damsire: "Pulpit",
      Trainer: "Todd A. Pletcher",
      Owner: "Cheyenne Stables LLC and Nichol, Mac",
      Breeder: "RMF Thoroughbreds"
    },
    {
      Id: "226",
      Name: "Maftool",
      Sex: "C",
      Sire: "Hard Spun",
      Dam: "With Intention",
      Damsire: "Mr. Greeley",
      Trainer: "Saeed bin Suroor",
      Owner: "Godolphin Racing LLC",
      Breeder: "C. Kidder & J.K. & Linda Griggs"
    },
    {
      Id: "227",
      Name: "Magic of Believing",
      Sex: "C",
      Sire: "Badge of Silver",
      Dam: "Crystal Illusion",
      Damsire: "Silver Ghost",
      Trainer: "Kenneth G. McPeek",
      Owner: "Turf Stable LLC and Magdalena Racing (Kenneth G. McPeek et al.)",
      Breeder: "Jo Ann Luedtke"
    },
    {
      Id: "228",
      Name: "Magic Taste",
      Sex: "C",
      Sire: "Taste of Paradise",
      Dam: "Desert Gal",
      Damsire: "Desert Wine",
      Trainer: "Marcelo Polanco",
      Owner: "Dream Racing Stable",
      Breeder: "David Bloom"
    },
    {
      Id: "229",
      Name: "Majestic Affair",
      Sex: "G",
      Sire: "Majesticperfection",
      Dam: "Blumin Beauty",
      Damsire: "Blumin Affair",
      Trainer: "Chad C. Brown",
      Owner: "Covello, James, Coleman, Thomas and Doheny Racing Stable",
      Breeder: "Doug Oliver"
    },
    {
      Id: "230",
      Name: "Majestico",
      Sex: "C",
      Sire: "Majesticperfection",
      Dam: "Senorita Dehere",
      Damsire: "Dehere",
      Trainer: "D. Wayne Lukas",
      Owner: "Calumet Farm",
      Breeder: "Glennwood Farm"
    },
    {
      Id: "231",
      Name: "Malibu Wood",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Rubywood",
      Damsire: "Woodman",
      Trainer: "Neil D. Drysdale",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "232",
      Name: "Mamilio",
      Sex: "C",
      Sire: "Hard Spun",
      Dam: "Sue's Last Dance",
      Damsire: "Forty Niner",
      Trainer: "John C. Servis",
      Owner: "Pozo de Luna, Inc.",
      Breeder: "Pozo De Luna Inc."
    },
    {
      Id: "233",
      Name: "March",
      Sex: "C",
      Sire: "Blame",
      Dam: "Lifeinthefastlane",
      Damsire: "Unbridled's Song",
      Trainer: "Chad C. Brown",
      Owner: "Robert V. LaPenta",
      Breeder: "Lakland Farm"
    },
    {
      Id: "234",
      Name: "Marine Landing",
      Sex: "C",
      Sire: "Smart Strike",
      Dam: "Keep the Peace",
      Damsire: "Touch Gold",
      Trainer: "Wayne M. Catalano",
      Owner: "West, Gary and Mary",
      Breeder: "Gary & Mary West Stables, Inc."
    },
    {
      Id: "235",
      Name: "Market Conduct",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Charleston Springs",
      Damsire: "Capote",
      Trainer: "Chad C. Brown",
      Owner: "Klaravich Stables, Inc. and Lawrence, William H.",
      Breeder: "Robert Hahn"
    },
    {
      Id: "236",
      Name: "Market Guessing",
      Sex: "C",
      Sire: "Blame",
      Dam: "Run Sarah Run",
      Damsire: "Smart Strike",
      Trainer: "Dale L. Romans",
      Owner: "Donald R. Dizney",
      Breeder: "Donald R. Dizney"
    },
    {
      Id: "237",
      Name: "Materiality",
      Sex: "C",
      Sire: "Afleet Alex",
      Dam: "Wildwood Flower",
      Damsire: "Langfuhr",
      Trainer: "Todd A. Pletcher",
      Owner: "Alto Racing, LLC",
      Breeder: "John D. Gunther"
    },
    {
      Id: "238",
      Name: "Mawthooq",
      Sex: "C",
      Sire: "Distorted Humor",
      Dam: "Ready's Gal",
      Damsire: "More Than Ready",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Shadwell Stable",
      Breeder: "Courtlandt Farm"
    },
    {
      Id: "239",
      Name: "Measured",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Added Time",
      Damsire: "Gilded Time",
      Trainer: "Michael W. Salvaggio, Jr.",
      Owner: "Stoneway Farm",
      Breeder: "Stoneway Farm"
    },
    {
      Id: "240",
      Name: "Medicine Butte",
      Sex: "F",
      Sire: "Old Fashioned",
      Dam: "Flat Screen",
      Damsire: "Pulpit",
      Trainer: "Robertino Diodoro",
      Owner: "William J. Sims",
      Breeder: "Jack Sims"
    },
    {
      Id: "241",
      Name: "Metaboss",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "Spinning Yarns",
      Damsire: "Free House",
      Trainer: "Jeff Bonde",
      Owner:
        "Arndt, M. J., McFetridge, S. M., Preiss, D., Metanovic, M. and Azcarate, C.",
      Breeder: "Mr. & Mrs. John A. Toffan"
    },
    {
      Id: "242",
      Name: "Micks Miracle",
      Sex: "C",
      Sire: "Wildcat Heir",
      Dam: "Bubbley Blonde",
      Damsire: "Cuvee",
      Trainer: "Philip D'Amato",
      Owner: "John M. Liviakis",
      Breeder: "John Liviakis"
    },
    {
      Id: "243",
      Name: "Mid Ocean",
      Sex: "C",
      Sire: "Mineshaft",
      Dam: "Wending",
      Damsire: "Langfuhr",
      Trainer: "George Weaver",
      Owner: "Bermuda Limestone Thoroughbreds",
      Breeder: "Dr. Wilfred Robinson, LimestoneThoroughbreds LTD."
    },
    {
      Id: "244",
      Name: "Midhmaar",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Take D' Tour",
      Damsire: "Tour d'Or",
      Trainer: "Chad C. Brown",
      Owner: "Shadwell Stable",
      Breeder: "Alpha Delta Stables"
    },
    {
      Id: "245",
      Name: "Midnight Trace",
      Sex: "G",
      Sire: "Scat Daddy",
      Dam: "Dream Date Diva",
      Damsire: "Gulch",
      Trainer: "H. Graham Motion",
      Owner: "West Point Thoroughbreds",
      Breeder:
        "James Everatt, Janeane Everatt, ArikaEveratt-Meeuse & Tim Meeuse"
    },
    {
      Id: "246",
      Name: "Mighty Mousse",
      Sex: "C",
      Sire: "The Pamplemousse",
      Dam: "Tizakitty",
      Damsire: "Distinctive Cat",
      Trainer: "Bob Baffert",
      Owner: "Arnold Zetcher LLC and Strauss, Jeff",
      Breeder: "Skyline Stables & Alex Solis II"
    },
    {
      Id: "247",
      Name: "Milhaud",
      Sex: "G",
      Sire: "Great Notion",
      Dam: "Call Home Eileen",
      Damsire: "Phone Trick",
      Trainer: "Richard E. Mandella",
      Owner: "Burt Bacharach",
      Breeder: "Burt Bacharach"
    },
    {
      Id: "248",
      Name: "Mischief Clem",
      Sex: "C",
      Sire: "Papa Clem",
      Dam: "Glitteringmischief",
      Damsire: "Bold Badgett",
      Trainer: "Robert B. Hess, Jr.",
      Owner: "Griffin Thoroughbred Stables",
      Breeder: "SLU, Inc."
    },
    {
      Id: "249",
      Name: "Moe Candy",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "Spooky Minister",
      Damsire: "Deputy Minister",
      Trainer: "John W. Sadler",
      Owner: "Hronis Racing LLC",
      Breeder: "Craig Stables"
    },
    {
      Id: "250",
      Name: "Money Changer",
      Sex: "G",
      Sire: "Exchange Rate",
      Dam: "Hey Little Sister",
      Damsire: "Jump Start",
      Trainer: "Todd A. Pletcher",
      Owner: "Dogwood Stable",
      Breeder: "Laura McKinney"
    },
    {
      Id: "251",
      Name: "Money Multiplier",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Intensify",
      Damsire: "Unbridled's Song",
      Trainer: "Chad C. Brown",
      Owner: "Klaravich Stables, Inc. and Lawrence, William H.",
      Breeder: "Machmer Hall & Haymarket Farm"
    },
    {
      Id: "252",
      Name: "Moon Closer",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Wow Me Free",
      Damsire: "Menifee",
      Trainer: "D. Wayne Lukas",
      Owner: "Baker, Robert C. and Mack, William L.",
      Breeder: "Edward A. Seltzer and Castleton Lyons"
    },
    {
      Id: "253",
      Name: "Moon River",
      Sex: "C",
      Sire: "Bluegrass Cat",
      Dam: "Hepburn",
      Damsire: "Capote",
      Trainer: "Jonathan E. Sheppard",
      Owner: "William M. Backer Revocable Trust",
      Breeder: "William M. Backer Revocable Trust"
    },
    {
      Id: "254",
      Name: "More Than Shirl",
      Sex: "C",
      Sire: "More Than Ready",
      Dam: "Shirl's Soul",
      Damsire: "Perfect Soul (IRE)",
      Trainer: "Roger L. Attfield",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "255",
      Name: "Mountain Cry",
      Sex: "C",
      Sire: "Street Cry (IRE)",
      Dam: "Mountain Bird",
      Damsire: "Mt. Livermore",
      Trainer: "Nicholas P. Zito",
      Owner: "Marylou Whitney Stables LLC",
      Breeder: "Marylou Whitney Stables LLC"
    },
    {
      Id: "256",
      Name: "Mr. Canada",
      Sex: "C",
      Sire: "Bellamy Road",
      Dam: "Miss Canada",
      Damsire: "Distorted Humor",
      Trainer: "Nicholas P. Zito",
      Owner: "Preston Madden",
      Breeder: "Preston Madden"
    },
    {
      Id: "257",
      Name: "Mr. Pucci",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Wild Hoots",
      Damsire: "Unbridled's Song",
      Trainer: "Jerry Hollendorfer",
      Owner: "Steve Beneto",
      Breeder: "Dell Ridge Farm, LLC"
    },
    {
      Id: "258",
      Name: "Mr. Z",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Stormy Bear",
      Damsire: "Storm Cat",
      Trainer: "D. Wayne Lukas",
      Owner: "Zayat Stables, LLC",
      Breeder: "Richard D. Maynard"
    },
    {
      Id: "259",
      Name: "Mubtaahij (IRE)",
      Sex: "C",
      Sire: "Dubawi (IRE)",
      Dam: "Pennegale (IRE)",
      Damsire: "Pennekamp",
      Trainer: "Michael F. de Kock",
      Owner: "Mohammed bin Khalifa Al Maktoum",
      Breeder: "Dunmore Stud Ltd"
    },
    {
      Id: "260",
      Name: "My High Roller",
      Sex: "C",
      Sire: "Bernardini",
      Dam: "Heat Lightning",
      Damsire: "Summer Squall",
      Trainer: "Eddie Kenneally",
      Owner: "Whisper Hill Farm LLC",
      Breeder: "AR Enterprises, LLC."
    },
    {
      Id: "261",
      Name: "My Johnny Be Good",
      Sex: "C",
      Sire: "Colonel John",
      Dam: "Im So Fine",
      Damsire: "Elusive Quality",
      Trainer: "Eoin G. Harty",
      Owner: "Casner Racing, LP",
      Breeder: "Casner Racing, LP"
    },
    {
      Id: "262",
      Name: "My Point Exactly",
      Sex: "G",
      Sire: "Concord Point",
      Dam: "My Golden Quest",
      Damsire: "Coronado's Quest",
      Trainer: "William A. Kaplan",
      Owner:
        "Pinnacle Racing Stable, LLC, Norman, R., Justice, R. and Hendricks, H.",
      Breeder: "Quarter Pole Enterprises LLC"
    },
    {
      Id: "263",
      Name: "Nasa",
      Sex: "C",
      Sire: "Smarty Jones",
      Dam: "Shootforthestars",
      Damsire: "Seattle Slew",
      Trainer: "John C. Servis",
      Owner: "Someday Farm",
      Breeder: "Patricia L. Chapman"
    },
    {
      Id: "264",
      Name: "Nileator",
      Sex: "C",
      Sire: "Pioneerof the Nile",
      Dam: "Souma",
      Damsire: "Mr. Greeley",
      Trainer: "Dale L. Romans",
      Owner: "Zayat Stables, LLC",
      Breeder: "Zayat Stables, LLC"
    },
    {
      Id: "265",
      Name: "No Problem",
      Sex: "R",
      Sire: "Munnings",
      Dam: "Brief Tears",
      Damsire: "Orientate",
      Trainer: "Michael W. McCarthy",
      Owner: "P and G Stables LLC",
      Breeder: "Mr. & Mrs. Marc C. Ferrell"
    },
    {
      Id: "266",
      Name: "Nob Hill",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Silent Eskimo",
      Damsire: "Eskimo",
      Trainer: "Bob Baffert",
      Owner: "Fog City Stable",
      Breeder: "Ted Hoover"
    },
    {
      Id: "267",
      Name: "Obsidian Splendor",
      Sex: "C",
      Sire: "Temple City",
      Dam: "French Lady",
      Damsire: "French Deputy",
      Trainer: "James F. Fugate",
      Owner: "Kiplings Farm LLC",
      Breeder: "John O'Meara"
    },
    {
      Id: "268",
      Name: "Ocean Knight",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Ocean Goddess",
      Damsire: "Stormy Atlantic",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Stonestreet Stables LLC",
      Breeder: "Thor-Bred Stables, LLC"
    },
    {
      Id: "269",
      Name: "Ocho Ocho Ocho",
      Sex: "C",
      Sire: "Street Sense",
      Dam: "Winner",
      Damsire: "Horse Chestnut (SAF)",
      Trainer: "James M. Cassidy",
      Owner: "DP Racing, LLC",
      Breeder: "Siena Farms LLC"
    },
    {
      Id: "270",
      Name: "Old Mountain Lane",
      Sex: "C",
      Sire: "War Front",
      Dam: "Judy's Magic",
      Damsire: "Wavering Monarch",
      Trainer: "Todd A. Pletcher",
      Owner: "Lane, E. H. Beau and Bortolazzo Stable LLC",
      Breeder: "E. H. Beau Lane III"
    },
    {
      Id: "271",
      Name: "Ole Mo Miller",
      Sex: "G",
      Sire: "Corinthian",
      Dam: "Mother",
      Damsire: "Lion Hearted",
      Trainer: "William B. Van Meter",
      Owner: "Thomas F. VanMeter II",
      Breeder: "T. F. VanMeter"
    },
    {
      Id: "272",
      Name: "On Tap",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Fantastic Shirl",
      Damsire: "Fantastic Light",
      Trainer: "Linda Rice",
      Owner: "Broman, Sr., Chester and Mary",
      Breeder: "Dell Ridge Farm, LLC"
    },
    {
      Id: "273",
      Name: "One Lucky Dane",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Echo Harbor",
      Damsire: "Boston Harbor",
      Trainer: "Bob Baffert",
      Owner: "Michael Lund Petersen",
      Breeder: "Woodford Thoroughbreds"
    },
    {
      Id: "274",
      Name: "Onlytheshadowknows",
      Sex: "C",
      Sire: "Ghostzapper",
      Dam: "Lightning Lydia",
      Damsire: "Broad Brush",
      Trainer: "H. James Bond",
      Owner: "William L. Clifton, Jr.",
      Breeder: "Sun Valley Farm & Carrie Ann Walker"
    },
    {
      Id: "275",
      Name: "Or So",
      Sex: "G",
      Sire: "Rock Slide",
      Dam: "Miss Santa Anita",
      Damsire: "Ide",
      Trainer: "Steve Epley, Jr.",
      Owner: "Chemphar, Inc.",
      Breeder: "Daniel T O'Ryan & Kara O'Ryan"
    },
    {
      Id: "276",
      Name: "Ostrolenka",
      Sex: "C",
      Sire: "Musket Man",
      Dam: "Pumpkin's Pride",
      Damsire: "Louis Quatorze",
      Trainer: "Todd A. Pletcher",
      Owner: "WinStar Farm LLC",
      Breeder: "Eric Fein"
    },
    {
      Id: "277",
      Name: "Our Commodore",
      Sex: "C",
      Sire: "Quiet American",
      Dam: "Indy's Paloma",
      Damsire: "A.P. Indy",
      Trainer: "Todd A. Pletcher",
      Owner: "Harrell Ventures, LLC",
      Breeder: "Aaron Sones & Beverly Sommer"
    },
    {
      Id: "278",
      Name: "Outlash",
      Sex: "C",
      Sire: "Unbridled's Song",
      Dam: "Lady's Touch",
      Damsire: "Touch Gold",
      Trainer: "Todd A. Pletcher",
      Owner: "Repole Stable",
      Breeder: "Peter E. Blum Thoroughbreds, LLC &Unbridled's Song Syndicate"
    },
    {
      Id: "279",
      Name: "Overcontrol",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Ready for Fortune",
      Damsire: "More Than Ready",
      Trainer: "Todd A. Pletcher",
      Owner: "Repole Stable",
      Breeder: "Hargus Sexton, Sandra Sexton &Silver Fern Farm, LLC"
    },
    {
      Id: "280",
      Name: "Pain and Misery",
      Sex: "G",
      Sire: "Bob and John",
      Dam: "Singing Doe",
      Damsire: "Running Stag",
      Trainer: "Richard E. Mandella",
      Owner: "Black Gold Racing",
      Breeder: "Castlepark Farm, LLC"
    },
    {
      Id: "281",
      Name: "Pappou",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Mykindasaint",
      Damsire: "Saint Ballado",
      Trainer: "John W. Sadler",
      Owner: "Hronis Racing LLC",
      Breeder: "Jim Wells & Candy Meadows LLC"
    },
    {
      Id: "282",
      Name: "Peace Militant",
      Sex: "C",
      Sire: "Pioneerof the Nile",
      Dam: "Ravine",
      Damsire: "Gulch",
      Trainer: "Lisa Guerrero",
      Owner: "Rontos Racing Stable Corp.",
      Breeder: "West Meadow Farm LLC & Pioneerof theNile Syndicate"
    },
    {
      Id: "283",
      Name: "Pentheus",
      Sex: "C",
      Sire: "Congrats",
      Dam: "Media Nox (GB)",
      Damsire: "Lycius",
      Trainer: "Bob Baffert",
      Owner: "Juddmonte Farms, Inc.",
      Breeder: "Juddmonte Farms Inc"
    },
    {
      Id: "284",
      Name: "Performance Bonus",
      Sex: "C",
      Sire: "Discreetly Mine",
      Dam: "Unlimited Pleasure",
      Damsire: "Valid Appeal",
      Trainer: "Chad C. Brown",
      Owner: "Klaravich Stables, Inc. and Lawrence, William H.",
      Breeder: "Ocala Stud"
    },
    {
      Id: "285",
      Name: "Perpetual Optimism",
      Sex: "G",
      Sire: "First Defence",
      Dam: "Splendid Honor",
      Damsire: "Double Honor",
      Trainer: "Ignacio Correas, IV",
      Owner: "Sagamore Farm",
      Breeder: "Machmer Hall, Carrie Brogden &Craig Brogden"
    },
    {
      Id: "286",
      Name: "Power Jam",
      Sex: "C",
      Sire: "Concord Point",
      Dam: "Musical Rhythm",
      Damsire: "Smart Strike",
      Trainer: "Bob Baffert",
      Owner: "Kaleem Shah, Inc.",
      Breeder: "Kaleem Shah Inc."
    },
    {
      Id: "287",
      Name: "Private Prospect",
      Sex: "C",
      Sire: "Discreet Cat",
      Dam: "Private Deputy",
      Damsire: "Private Terms",
      Trainer: "Michael B. Campbell",
      Owner: "Mellon Patch, Inc.",
      Breeder: "Randal Family Trust, R David & Marylyn ARandal Trustees"
    },
    {
      Id: "288",
      Name: "Prodigal",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Lady Solvig",
      Damsire: "Giant's Causeway",
      Trainer: "Nicholas P. Zito",
      Owner: "Calumet Farm",
      Breeder: "Lakland Farm"
    },
    {
      Id: "289",
      Name: "Professor Berns",
      Sex: "C",
      Sire: "Bernstein",
      Dam: "So Glitzy",
      Damsire: "Gilded Time",
      Trainer: "Patrick Gallagher",
      Owner: "Praz Racing Stable, Delahoussaye, Eddie and Dye, Michael",
      Breeder: "Leverett Miller & Linda Miller"
    },
    {
      Id: "290",
      Name: "Prospect Park",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Quiet Romance",
      Damsire: "Bertrando",
      Trainer: "Clifford W. Sise, Jr.",
      Owner: "Wygod, Pam and Martin",
      Breeder: "Pam & Martin Wygod"
    },
    {
      Id: "291",
      Name: "Puca",
      Sex: "F",
      Sire: "Big Brown",
      Dam: "Boat's Ghost",
      Damsire: "Silver Ghost",
      Trainer: "William I. Mott",
      Owner: "Donegal Racing",
      Breeder: "Jerry Crawford & Paul Pompa Jr."
    },
    {
      Id: "292",
      Name: "Punctuate",
      Sex: "C",
      Sire: "Distorted Humor",
      Dam: "Peppers Pride",
      Damsire: "Desert God",
      Trainer: "Bob Baffert",
      Owner: "Arnold Zetcher LLC",
      Breeder: "Joe Allen & Michael C. Stinson"
    },
    {
      Id: "293",
      Name: "Pure Excitement",
      Sex: "C",
      Sire: "Tapit",
      Dam: "Fusaichi Lady",
      Damsire: "Fusaichi Pegasus",
      Trainer: "James A. Jerkens",
      Owner: "Centennial Farms",
      Breeder: "Peter E. Blum Thoroughbreds, LLC"
    },
    {
      Id: "294",
      Name: "Quality Bird",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Caged Glory",
      Damsire: "Honour and Glory",
      Trainer: "Ian R. Wilkes",
      Owner: "Marylou Whitney Stables LLC",
      Breeder: "Marylou Whitney Stables LLC"
    },
    {
      Id: "295",
      Name: "Ready Get Set",
      Sex: "C",
      Sire: "More Than Ready",
      Dam: "All About Anna",
      Damsire: "Maria's Mon",
      Trainer: "Eddie Kenneally",
      Owner: "Dewitt, Robert and Bernstein, Sanford",
      Breeder: "Robert DeWitt, Stan Burnstein &Irene Burnstein"
    },
    {
      Id: "296",
      Name: "Reed's Bridge",
      Sex: "C",
      Sire: "Eskendereya",
      Dam: "Watchfull",
      Damsire: "Notebook",
      Trainer: "D. Wayne Lukas",
      Owner: "Shortleaf Stable, Inc.",
      Breeder: "Stonestreet Thoroughbred Holdings LLC"
    },
    {
      Id: "297",
      Name: "Refer",
      Sex: "C",
      Sire: "Divine Park",
      Dam: "Allude",
      Damsire: "Orientate",
      Trainer: "John P. Terranova, II",
      Owner: "Zayat Stables, LLC",
      Breeder: "Barlar, LLC"
    },
    {
      Id: "298",
      Name: "Requite",
      Sex: "C",
      Sire: "Warrior's Reward",
      Dam: "New Hope Seven",
      Damsire: "Carson City",
      Trainer: "George Weaver",
      Owner: "Bermuda Limestone Thoroughbreds",
      Breeder: "Dr. Wilfred Robinson, LimestoneThoroughbreds"
    },
    {
      Id: "299",
      Name: "Richard the Great",
      Sex: "C",
      Sire: "Distorted Humor",
      Dam: "Horah for Bailey",
      Damsire: "Doneraile Court",
      Trainer: "Ralph E. Nicks",
      Owner: "Arindel Farm",
      Breeder: "Arindel Farm"
    },
    {
      Id: "300",
      Name: "Richie's Rich",
      Sex: "C",
      Sire: "Forestry",
      Dam: "Celestial Star",
      Damsire: "Kissin Kris",
      Trainer: "Linda Rice",
      Owner: "Rice, Linda and Sacandaga Stable",
      Breeder: "David J. Lanzman Racing, Inc. &Vista Racing Stable"
    },
    {
      Id: "301",
      Name: "River Date",
      Sex: "C",
      Sire: "Pioneerof the Nile",
      Dam: "How Bout Tonight",
      Damsire: "Proud Citizen",
      Trainer: "Robert N. Falcone, Jr.",
      Owner: "Z R J Stables",
      Breeder: "Henry L. Carroll"
    },
    {
      Id: "302",
      Name: "Rock Shandy",
      Sex: "R",
      Sire: "Lemon Drop Kid",
      Dam: "Panthera",
      Damsire: "Storm Cat",
      Trainer: "Peter Miller",
      Owner: "Donegal Racing",
      Breeder: "Mrs. Emory Hamilton"
    },
    {
      Id: "303",
      Name: "Rock Star Status",
      Sex: "C",
      Sire: "Street Cry (IRE)",
      Dam: "Trickski",
      Damsire: "Peteski",
      Trainer: "Wayne M. Catalano",
      Owner: "West, Gary and Mary",
      Breeder: "Mike Abraham & Darley"
    },
    {
      Id: "304",
      Name: "Rockinatten",
      Sex: "G",
      Sire: "High Cotton",
      Dam: "Suite Ten",
      Damsire: "Rock Hard Ten",
      Trainer: "Doug F. O'Neill",
      Owner:
        "Bada Beng Racing LLC, Besecker, Joseph E., Keh, Steven and Pasqual, Gerardo",
      Breeder: "John B. Penn"
    },
    {
      Id: "305",
      Name: "Rosary Man",
      Sex: "G",
      Sire: "Songandaprayer",
      Dam: "Doubtless",
      Damsire: "Grand Slam",
      Trainer: "Jerry Hollendorfer",
      Owner: "Mark DeDomenico LLC",
      Breeder: "Roy Zuppardo"
    },
    {
      Id: "306",
      Name: "Rosicky",
      Sex: "C",
      Sire: "Flatter",
      Dam: "Onida (IRE)",
      Damsire: "Noverre",
      Trainer: "Carla Gaines",
      Owner: "Keith Brackpool",
      Breeder: "Brackpool Racing LLC"
    },
    {
      Id: "307",
      Name: "Royal Indy Road",
      Sex: "C",
      Sire: "Bellamy Road",
      Dam: "Royal Indy",
      Damsire: "A.P. Indy",
      Trainer: "Jerry Hollendorfer",
      Owner: "Bad Boy Racing LLC and Whizway Farms",
      Breeder: "Manuel Rosales & Ronald Tagliaferro"
    },
    {
      Id: "308",
      Name: "Royal Navy Ship",
      Sex: "C",
      Sire: "War Front",
      Dam: "Indy Punch",
      Damsire: "Pulling Punches",
      Trainer: "Aidan P. O'Brien",
      Owner: "Magnier, Mrs. John, Tabor, Michael and Smith, Derrick",
      Breeder: "Rosemont Farm LLC"
    },
    {
      Id: "309",
      Name: "Royal Saint",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "Royal Parade",
      Damsire: "Saint Ballado",
      Trainer: "Steven M. Asmussen",
      Owner: "Jerry Durant",
      Breeder: "Dr. & Mrs. Walter Zent, Tony Holmes &G. Watts Humphrey Jr."
    },
    {
      Id: "310",
      Name: "Royal Son",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Mama Nadine",
      Damsire: "A.P. Indy",
      Trainer: "Todd A. Pletcher",
      Owner: "WinStar Farm LLC",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "311",
      Name: "Royal Squeeze",
      Sex: "C",
      Sire: "Wildcat Heir",
      Dam: "Mop Squeezer",
      Damsire: "Roanoke",
      Trainer: "Chad C. Brown",
      Owner: "Covello, James, Coleman, Thomas and Doheny Racing Stable",
      Breeder: "Gary Aiken"
    },
    {
      Id: "312",
      Name: "Ruby's Love",
      Sex: "C",
      Sire: "Not For Love",
      Dam: "Ruby Rubles",
      Damsire: "Scarlet Ibis",
      Trainer: "James L. Lawrence, II",
      Owner: "Matthew Schera",
      Breeder: "The Elkstone Group LLC"
    },
    {
      Id: "313",
      Name: "Rue de Grande",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Banner",
      Damsire: "A.P. Indy",
      Trainer: "D. Wayne Lukas",
      Owner: "Calumet Farm",
      Breeder: "Tony Holmes & Dr. & Mrs. Walter Zent"
    },
    {
      Id: "314",
      Name: "Runaway Bling",
      Sex: "C",
      Sire: "Too Much Bling",
      Dam: "Runaway Cater",
      Damsire: "Runaway Groom",
      Trainer: "Danele Durham",
      Owner: "Hall's Family Trust",
      Breeder: "Hall's Family Trust"
    },
    {
      Id: "315",
      Name: "Runhappy",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Bella Jolie",
      Damsire: "Broken Vow",
      Trainer: "Laura Wohlers",
      Owner: "James McIngvale",
      Breeder: "Wayne Lyster, Gray Lyster & Bryan Lyster"
    },
    {
      Id: "316",
      Name: "Sacred Crown",
      Sex: "C",
      Sire: "Silent Picture",
      Dam: "Elk Cheeky",
      Damsire: "Elk Basin",
      Trainer: "Jack C. Van Berg",
      Owner: "Catalano, Sandra and Lurix, Cynthia",
      Breeder: "Carlos Moore"
    },
    {
      Id: "317",
      Name: "Saham",
      Sex: "C",
      Sire: "Lemon Drop Kid",
      Dam: "Texas Kitty",
      Damsire: "Forest Wildcat",
      Trainer: "Brendan P. Walsh",
      Owner: "Sultan Bin Mishal",
      Breeder: "Everest Stables Inc."
    },
    {
      Id: "318",
      Name: "Sakima",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Queen of Kills",
      Damsire: "Unbridled's Song",
      Trainer: "Ron Moquett",
      Owner: "Harry T. Rosenblum",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "319",
      Name: "Salem Loop",
      Sex: "C",
      Sire: "Congrats",
      Dam: "Yogi'ssplashofgold",
      Damsire: "Touch Gold",
      Trainer: "Anthony W. Dutrow",
      Owner: "Shortleaf Stable, Inc.",
      Breeder: "Dr. Charles S. Giles"
    },
    {
      Id: "320",
      Name: "Samuel Dechamplain",
      Sex: "G",
      Sire: "Henrythenavigator",
      Dam: "Forestry's Magic",
      Damsire: "Forestry",
      Trainer: "Michael J. Doyle",
      Owner: "Eaton Hall Farm",
      Breeder: "Eaton Hall Farm"
    },
    {
      Id: "321",
      Name: "Savoy Stomp",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Crystal Current",
      Damsire: "A.P. Indy",
      Trainer: "Todd A. Pletcher",
      Owner: "Team Valor International and Southern Equine Stable LLC",
      Breeder: "Southern Equine Stables, LLC"
    },
    {
      Id: "322",
      Name: "Scamp",
      Sex: "C",
      Sire: "Afleet Alex",
      Dam: "Unaffordable",
      Damsire: "Unbridled",
      Trainer: "Greg Geier",
      Owner: "Jim Tafel LLC",
      Breeder: "James Tafel"
    },
    {
      Id: "323",
      Name: "Scorpious",
      Sex: "C",
      Sire: "Tale of the Cat",
      Dam: "Garden Secrets",
      Damsire: "Time for a Change",
      Trainer: "James M. Cassidy",
      Owner: "DP Racing, LLC",
      Breeder: "William Patterson"
    },
    {
      Id: "324",
      Name: "Seattle Serenade",
      Sex: "C",
      Sire: "Smart Strike",
      Dam: "Serenading",
      Damsire: "A.P. Indy",
      Trainer: "Jerry Hollendorfer",
      Owner:
        "Hill 'n' Dale Equine Holdings, Inc. (J. G. Sikura), Hollendorfer et al.",
      Breeder: "Hill 'N' Dale Equine Holdings, Inc. &N.E.T.P."
    },
    {
      Id: "325",
      Name: "Secreto Primero",
      Sex: "G",
      Sire: "First Samurai",
      Dam: "My Special Secret",
      Damsire: "Mineshaft",
      Trainer: "Michael Machowsky",
      Owner: "Marchosky, Ernest, Shaw, Ken, Slam Dunk Racing and Lo Hi Racing",
      Breeder: "Los Samanes Polo & Racing Farm LLC"
    },
    {
      Id: "326",
      Name: "Securitiz",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "In Secure",
      Damsire: "A.P. Indy",
      Trainer: "James A. Jerkens",
      Owner: "Centennial Farms",
      Breeder: "Tom Evans, Tenlane Farm & Oratis"
    },
    {
      Id: "327",
      Name: "Security Risk",
      Sex: "C",
      Sire: "War Front",
      Dam: "Smuggler",
      Damsire: "Unbridled",
      Trainer: "Claude R. McGaughey III",
      Owner: "Phipps Stable",
      Breeder: "Phipps Stable"
    },
    {
      Id: "328",
      Name: "Seeking Alpha",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Royale Michele",
      Damsire: "Elusive Quality",
      Trainer: "Chad C. Brown",
      Owner: "Robert V. LaPenta",
      Breeder: "Stonestreet Thoroughbred Holdings LLC"
    },
    {
      Id: "329",
      Name: "Semblance of Order",
      Sex: "C",
      Sire: "Arch",
      Dam: "Star Dixie",
      Damsire: "Dixie Union",
      Trainer: "Jena M. Antonucci",
      Owner: "Gallo Stables",
      Breeder: "E Paul Robsham Stable LLC"
    },
    {
      Id: "330",
      Name: "Serbian Syclone",
      Sex: "C",
      Sire: "Wildcat Heir",
      Dam: "Exquisite Beauty",
      Damsire: "Bertrando",
      Trainer: "Peter Miller",
      Owner: "Rockingham Ranch",
      Breeder: "Ron McCauley"
    },
    {
      Id: "331",
      Name: "Shadow Rider",
      Sex: "C",
      Sire: "Eskendereya",
      Dam: "Perfectly Quiet",
      Damsire: "Quiet American",
      Trainer: "George Weaver",
      Owner: "R. A. Hill Stable",
      Breeder: "J. S. McDonald"
    },
    {
      Id: "332",
      Name: "Shaken Not Stirred",
      Sex: "C",
      Sire: "Eskendereya",
      Dam: "Ms North Carolina",
      Damsire: "Honour and Glory",
      Trainer: "Chad C. Brown",
      Owner: "Peachtree Stable",
      Breeder: "Stonestreet Thoroughbred Holdings LLC"
    },
    {
      Id: "333",
      Name: "Sharm",
      Sex: "C",
      Sire: "Majestic Warrior",
      Dam: "Mystic Mirage",
      Damsire: "Chester House",
      Trainer: "D. Wayne Lukas",
      Owner: "Zayat Stables, LLC",
      Breeder: "Whisper Hill Farm"
    },
    {
      Id: "334",
      Name: "Ship Disturber",
      Sex: "C",
      Sire: "Sky Mesa",
      Dam: "Madel",
      Damsire: "More Than Ready",
      Trainer: "Richard A. Violette, Jr.",
      Owner: "The Elkstone Group LLC",
      Breeder: "Budget Stable"
    },
    {
      Id: "335",
      Name: "Shook Up",
      Sex: "F",
      Sire: "Tapit",
      Dam: "Sugar Shake",
      Damsire: "Awesome Again",
      Trainer: "Steven M. Asmussen",
      Owner: "Regis Racing",
      Breeder: "SF Bloodstock LLC"
    },
    {
      Id: "336",
      Name: "Sight Hound",
      Sex: "C",
      Sire: "English Channel",
      Dam: "Fiji (GB)",
      Damsire: "Rainbow Quest",
      Trainer: "Dermot K. Weld",
      Owner: "Calumet Farm",
      Breeder: "Bluegrass Hall, LLC"
    },
    {
      Id: "337",
      Name: "Sir Alfred",
      Sex: "C",
      Sire: "Munnings",
      Dam: "Meili",
      Damsire: "Forestry",
      Trainer: "Todd A. Pletcher",
      Owner: "Ballis, Jake and Lewis, Rashard",
      Breeder: "Pegasus Stud LLC"
    },
    {
      Id: "338",
      Name: "Sir Rockport",
      Sex: "C",
      Sire: "Rockport Harbor",
      Dam: "Wonderous Woman",
      Damsire: "Partner's Hero",
      Trainer: "Flint W. Stites",
      Owner: "Amenta Racing Stables, LLC",
      Breeder: "Legacy Farm & R. Larry Johnson"
    },
    {
      Id: "339",
      Name: "Sir Samson",
      Sex: "C",
      Sire: "Smart Strike",
      Dam: "Sweet August Moon",
      Damsire: "Malibu Moon",
      Trainer: "Brian J. Koriner",
      Owner: "Legacy Ranch and MacPherson, Shirley",
      Breeder: "Legacy Ranch & Team MacPherson"
    },
    {
      Id: "340",
      Name: "Sixth Man",
      Sex: "C",
      Sire: "Smart Strike",
      Dam: "Philly's Philly",
      Damsire: "A.P. Indy",
      Trainer: "Chad C. Brown",
      Owner: "Doheny Racing Stable, Off The Hook LLC and Coleman, Thomas",
      Breeder: "Stirling Farms, LP"
    },
    {
      Id: "341",
      Name: "Sizzling Quatorze",
      Sex: "C",
      Sire: "Concord Point",
      Dam: "Hope's Diamond",
      Damsire: "Louis Quatorze",
      Trainer: "Hector Garcia",
      Owner: "Deese Stables",
      Breeder: "Ernest C. Frohboese"
    },
    {
      Id: "342",
      Name: "Skill Not Luck",
      Sex: "C",
      Sire: "Lookin At Lucky",
      Dam: "Chief Secretary",
      Damsire: "Deputy Minister",
      Trainer: "Chad C. Brown",
      Owner: "Klaravich Stables, Inc.",
      Breeder: "Kinsman Farm"
    },
    {
      Id: "343",
      Name: "Sky Full of Stars",
      Sex: "C",
      Sire: "Unbridled's Song",
      Dam: "Joke",
      Damsire: "Phone Trick",
      Trainer: "J. R. Caldwell",
      Owner: "Rialto Racing Stables",
      Breeder: "Claiborne Farm"
    },
    {
      Id: "344",
      Name: "Smart Transition",
      Sex: "C",
      Sire: "Smart Strike",
      Dam: "Zardana (BRZ)",
      Damsire: "Crimson Tide (IRE)",
      Trainer: "John A. Shirreffs",
      Owner: "Arnold Zetcher LLC",
      Breeder: "Arnold Zetcher LLC"
    },
    {
      Id: "345",
      Name: "Smuggler's Cove (IRE)",
      Sex: "C",
      Sire: "Fastnet Rock (AUS)",
      Dam: "Chenchikova (IRE)",
      Damsire: "Sadler's Wells",
      Trainer: "Aidan P. O'Brien",
      Owner: "Magnier, Mrs. John, Tabor, Michael and Smith, Derrick",
      Breeder: "Chenchikova Syndicate"
    },
    {
      Id: "346",
      Name: "Soul Driver",
      Sex: "C",
      Sire: "Street Boss",
      Dam: "For Passion",
      Damsire: "Not for Love",
      Trainer: "Jeff Mullins",
      Owner: "Bloom Racing Stable LLC (Jeffrey Bloom)",
      Breeder: "John R. Penn"
    },
    {
      Id: "347",
      Name: "Souper Colossal",
      Sex: "C",
      Sire: "War Front",
      Dam: "Soaring Emotions",
      Damsire: "Kimgmambo",
      Trainer: "Edward Plesa, Jr.",
      Owner: "Live Oak Plantation",
      Breeder: "Moyglare Stud"
    },
    {
      Id: "348",
      Name: "Spring Quality",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Spring Star",
      Damsire: "Deputy Minister",
      Trainer: "H. Graham Motion",
      Owner: "Augustin Stable",
      Breeder: "George Strawbridge Jr."
    },
    {
      Id: "349",
      Name: "Squeegee",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Giant Smile",
      Damsire: "Giant's Causeway",
      Trainer: "Dane Kobiskie",
      Owner: "PTK, LLC",
      Breeder: "Jim J. FitzGerald"
    },
    {
      Id: "350",
      Name: "St. Joe Bay",
      Sex: "C",
      Sire: "Saint Anddan",
      Dam: "Dream Ride",
      Damsire: "Honor Glide",
      Trainer: "Peter Miller",
      Owner: "Altamira Racing Stable and Bernsen, David A.",
      Breeder: "Bonnie Heath Farm, LLC"
    },
    {
      Id: "351",
      Name: "Stand and Salute",
      Sex: "C",
      Sire: "Saint Anddan",
      Dam: "Gotham City Girl",
      Damsire: "Freud",
      Trainer: "Jerry Hollendorfer",
      Owner: "Red Oak Stable (Brunetti)",
      Breeder: "Red Oak Stable"
    },
    {
      Id: "352",
      Name: "Stanford",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Rosy Humor",
      Damsire: "Distorted Humor",
      Trainer: "Todd A. Pletcher",
      Owner: "Stonestreet Stables LLC, Magnier, M., Tabor, M. and Smith, D.",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "353",
      Name: "Star's Ride",
      Sex: "C",
      Sire: "Street Sense",
      Dam: "One Wild Ride",
      Damsire: "Southern Halo",
      Trainer: "Nicholas P. Zito",
      Owner: "My Meadowview Farm LLC",
      Breeder: "Edward A. Cox, Jr."
    },
    {
      Id: "354",
      Name: "State Line",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Summerly",
      Damsire: "Summer Squall",
      Trainer: "Jeff Engler",
      Owner: "Bosharon Stable",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "355",
      Name: "Statesman",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "Tranquility Lake",
      Damsire: "Rahy",
      Trainer: "Clifford W. Sise, Jr.",
      Owner: "Wygod, Pam and Martin",
      Breeder: "Pam and Martin Wygod"
    },
    {
      Id: "356",
      Name: "Steel",
      Sex: "G",
      Sire: "Mineshaft",
      Dam: "Picketline",
      Damsire: "Street Cry (IRE)",
      Trainer: "Jerry Hollendorfer",
      Owner:
        "Awtrey, R., Hammond, R., Phillips Racing Partnership, Schummer, C. et al.",
      Breeder: "Fares Farm LLC"
    },
    {
      Id: "357",
      Name: "Stellar Wind",
      Sex: "F",
      Sire: "Curlin",
      Dam: "Evening Star",
      Damsire: "Malibu Moon",
      Trainer: "John W. Sadler",
      Owner: "Hronis Racing LLC",
      Breeder: "Keswick Stables &Stonestreet Thoroughbred Holdings LLC"
    },
    {
      Id: "358",
      Name: "Stevie's Wonder",
      Sex: "C",
      Sire: "Scat Daddy",
      Dam: "Eagle Sound",
      Damsire: "Fusaichi Pegasus",
      Trainer: "George Weaver",
      Owner: "R. A. Hill Stable",
      Breeder: "Gabriel Duignan, Crosshaven Bloodstock& Vision Thoroughbreds"
    },
    {
      Id: "359",
      Name: "Street Fashion",
      Sex: "C",
      Sire: "Street Sense",
      Dam: "Winter Fashion (FR)",
      Damsire: "Kendor (FR)",
      Trainer: "Jonathan E. Sheppard",
      Owner: "Augustin Stable",
      Breeder: "George Strawbridge Jr."
    },
    {
      Id: "360",
      Name: "Struth",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Star Number",
      Damsire: "Polish Numbers",
      Trainer: "Michael J. Trombetta",
      Owner: "Fitzhugh LLC",
      Breeder: "Fitzhugh, LLC"
    },
    {
      Id: "361",
      Name: "Su Mac Lad",
      Sex: "C",
      Sire: "Candy Ride (ARG)",
      Dam: "Striking Tomisue",
      Damsire: "Smart Strike",
      Trainer: "Chad C. Brown",
      Owner: "Robert V. LaPenta",
      Breeder: "Marc Keller"
    },
    {
      Id: "362",
      Name: "Summer Hawk",
      Sex: "C",
      Sire: "Summer Bird",
      Dam: "Excuse Me",
      Damsire: "Distorted Humor",
      Trainer: "John T. Toscano, Jr.",
      Owner: "Bran Jam Stable",
      Breeder: "Bonnie Wooster"
    },
    {
      Id: "363",
      Name: "Sun Magic",
      Sex: "C",
      Sire: "Warrior's Reward",
      Dam: "Gal of Mine",
      Damsire: "Mining",
      Trainer: "Gustavo Delgado",
      Owner: "Passion Stable, Inc.",
      Breeder: "Hidden Brook Farm"
    },
    {
      Id: "364",
      Name: "Sunbeamsfromheaven",
      Sex: "G",
      Sire: "Colonel John",
      Dam: "Ambling",
      Damsire: "Chester House",
      Trainer: "Jerry Hollendorfer",
      Owner: "Bad Boy Racing LLC and Whizway Farms",
      Breeder: "Hunter Valley Farm & Grayson Farm"
    },
    {
      Id: "365",
      Name: "Super Indian (FR)",
      Sex: "C",
      Sire: "Indian Charlie",
      Dam: "Supergirl",
      Damsire: "Woodman",
      Trainer: "Barclay Tagg",
      Owner: "Charles E. Fipke",
      Breeder: "Dream With Me Stables Inc"
    },
    {
      Id: "366",
      Name: "Super Surfer",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Surf Light",
      Damsire: "Malibu Moon",
      Trainer: "Eddie Kenneally",
      Owner: "GoldMark Farm, LLC and Whisper Hill Farm LLC",
      Breeder: "Seclusive Farm LLC, Chester Prince &Anne Prince"
    },
    {
      Id: "367",
      Name: "Super Tuscan",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Tizsweet",
      Damsire: "Cee's Tizzy",
      Trainer: "Jose Fernandez",
      Owner: "Calumet Farm",
      Breeder: "Fares Farm LLC"
    },
    {
      Id: "368",
      Name: "Take Charge Brandi",
      Sex: "F",
      Sire: "Giant's Causeway",
      Dam: "Charming",
      Damsire: "Seeking the Gold",
      Trainer: "D. Wayne Lukas",
      Owner: "Willis D. Horton",
      Breeder: "Charming Syndicate"
    },
    {
      Id: "369",
      Name: "Tale of Beaucette",
      Sex: "C",
      Sire: "Tale of Ekati",
      Dam: "Beaucette",
      Damsire: "Mr. Prospector",
      Trainer: "Dallas Stewart",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "370",
      Name: "Tale of Verve",
      Sex: "C",
      Sire: "Tale of Ekati",
      Dam: "Verve",
      Damsire: "Unbridled",
      Trainer: "Dallas Stewart",
      Owner: "Charles E. Fipke",
      Breeder: "Charles Fipke"
    },
    {
      Id: "371",
      Name: "Tally Jax",
      Sex: "G",
      Sire: "Quiet American",
      Dam: "My Spanx",
      Damsire: "A.P. Delta",
      Trainer: "Dallas Stewart",
      Owner: "Steven J. Belford",
      Breeder: "Allen Poindexter"
    },
    {
      Id: "372",
      Name: "Task Force Glory",
      Sex: "C",
      Sire: "Badge of Silver",
      Dam: "Glory Dancer",
      Damsire: "Honour and Glory",
      Trainer: "Michael J. Maker",
      Owner: "Ramsey, Kenneth L. and Sarah K.",
      Breeder: "Kenneth L. Ramsey & Sarah K. Ramsey"
    },
    {
      Id: "373",
      Name: "Tekton",
      Sex: "C",
      Sire: "Bernardini",
      Dam: "Touch Love",
      Damsire: "Not for Love",
      Trainer: "Anthony W. Dutrow",
      Owner: "Shortleaf Stable, Inc.",
      Breeder: "Gainesway Thoroughbreds Ltd."
    },
    {
      Id: "374",
      Name: "Temple of Doom",
      Sex: "C",
      Sire: "Temple City",
      Dam: "Prime Advantage",
      Damsire: "Tactical Advantage",
      Trainer: "Claudie Marshall Godsey",
      Owner: "Allied Racing Stable, LLC",
      Breeder: "Redmon Farm, LLC"
    },
    {
      Id: "375",
      Name: "Tempus Temporis",
      Sex: "C",
      Sire: "Dynaformer",
      Dam: "Tempus Fugit",
      Damsire: "Alphabet Soup",
      Trainer: "John H. M. Gosden",
      Owner: "Godolphin Racing LLC",
      Breeder: "Briland Farm, Robert Mitchell &Stacy Mitchell"
    },
    {
      Id: "376",
      Name: "Tencendur",
      Sex: "C",
      Sire: "Warrior's Reward",
      Dam: "Still Secret",
      Damsire: "Hennessy",
      Trainer: "George Weaver",
      Owner: "Philip S. Birsh",
      Breeder: "Philip S. Birsh"
    },
    {
      Id: "377",
      Name: "Tennessee",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Dixie Dreamer",
      Damsire: "Mutakddim",
      Trainer: "Todd A. Pletcher",
      Owner: "Magnier, Mrs. John, Tabor, Michael and Smith, Derrick",
      Breeder: "Miklin Stables, Tammar Racing,Lexington Racing & Brett Setzer"
    },
    {
      Id: "378",
      Name: "Texas Red",
      Sex: "C",
      Sire: "Afleet Alex",
      Dam: "Ramatuelle (CHI)",
      Damsire: "Jeune Homme",
      Trainer: "J. Keith Desormeaux",
      Owner:
        "Brehm, Erich, Detmar, Wayne, Michaels, Lee, Desormeaux, J. Keith et al.",
      Breeder: "Stonestreet Thoroughbred Holdings LLC"
    },
    {
      Id: "379",
      Name: "The Big Wind",
      Sex: "C",
      Sire: "Stormy Atlantic",
      Dam: "Scholastic",
      Damsire: "Johar",
      Trainer: "William I. Mott",
      Owner: "Donegal Racing",
      Breeder:
        "Dapple Bloodstock, Gryphon Investments,LLC, Sangreal Investments, LLC et al"
    },
    {
      Id: "380",
      Name: "The Gomper",
      Sex: "C",
      Sire: "Sky Mesa",
      Dam: "Tri Delt Girl",
      Damsire: "Sefapiano",
      Trainer: "Ronald W. Ellis",
      Owner: "Bloom Racing Stable LLC (Jeffrey Bloom)",
      Breeder:
        "Oxley, Three Chimneys Farm Stallions,et al & Dr. Patricia Ziefle"
    },
    {
      Id: "381",
      Name: "The Great War",
      Sex: "C",
      Sire: "War Front",
      Dam: "Guide",
      Damsire: "Pulpit",
      Trainer: "Wesley A. Ward",
      Owner: "Magnier, Mrs. John, Tabor, Michael and Smith, Derrick",
      Breeder: "Claiborne Farm"
    },
    {
      Id: "382",
      Name: "The Man",
      Sex: "C",
      Sire: "Ecclesiastic",
      Dam: "Shorty's Epiphany",
      Damsire: "Northern Afleet",
      Trainer: "Bob Baffert",
      Owner: "Baffert, Natalie J. and Schiappa, Bernard C.",
      Breeder: "Glenn E. Brok LLC"
    },
    {
      Id: "383",
      Name: "The Truth Or Else",
      Sex: "C",
      Sire: "Yes It's True",
      Dam: "Lakenheath",
      Damsire: "Colonial Affair",
      Trainer: "Kenneth G. McPeek",
      Owner: "Harold Lerner LLC",
      Breeder: "Green Lantern Stables, LLC"
    },
    {
      Id: "384",
      Name: "Tiger of Wales",
      Sex: "C",
      Sire: "D'wildcat",
      Dam: "Cuckoo Sue",
      Damsire: "Notebook",
      Trainer: "Michael J. Maker",
      Owner: "J. Armando Rodriguez Racing Stable, Inc.",
      Breeder: "Carol Kemp"
    },
    {
      Id: "385",
      Name: "Time for Quality",
      Sex: "C",
      Sire: "Quality Road",
      Dam: "Summer Colony",
      Damsire: "Summer Squall",
      Trainer: "Benjamin W. Perkins, Jr.",
      Owner: "New Farm",
      Breeder: "Green Lantern Stables"
    },
    {
      Id: "386",
      Name: "Time To Inspire (IRE)",
      Sex: "C",
      Sire: "Galileo (IRE)",
      Dam: "Utterly Heaven (IRE)",
      Damsire: "Danehill",
      Trainer: "Dermot K. Weld",
      Owner: "Moyglare Stud Farm",
      Breeder: "Moyglare Stud Farm Ltd"
    },
    {
      Id: "387",
      Name: "Titanor",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Moon Safari",
      Damsire: "Mr. Prospector",
      Trainer: "Todd A. Pletcher",
      Owner: "GoldMark Farm, LLC and Whisper Hill Farm LLC",
      Breeder: "Eagle Holdings"
    },
    {
      Id: "388",
      Name: "Tizcano",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Westerly Breeze",
      Damsire: "Gone West",
      Trainer: "Peter Miller",
      Owner: "Rockingham Ranch",
      Breeder: "Cooper Thoroughbred Management LLC"
    },
    {
      Id: "389",
      Name: "Tiznow R J",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Ruban Bleu",
      Damsire: "Broken Vow",
      Trainer: "Steven M. Asmussen",
      Owner: "Mike McCarty",
      Breeder: "Haras Santa Maria de Araras S.A."
    },
    {
      Id: "390",
      Name: "Tizquick",
      Sex: "C",
      Sire: "Tiz Wonderful",
      Dam: "All for Fashion",
      Damsire: "Mutakddim",
      Trainer: "John C. Kimmel",
      Owner: "GoldMark Farm, LLC",
      Breeder: "Spendthrift Farm LLC"
    },
    {
      Id: "391",
      Name: "Tizzing",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Meteor Miracle",
      Damsire: "Twining",
      Trainer: "Richard E. Mandella",
      Owner: "Wertheimer and Frere",
      Breeder: "Wertheimer Et Frere"
    },
    {
      Id: "392",
      Name: "To the Victor",
      Sex: "C",
      Sire: "Street Sense",
      Dam: "Arabis",
      Damsire: "Deputy Minister",
      Trainer: "Michael Dilger",
      Owner: "Team Valor International",
      Breeder: "Peter E. Blum Thoroughbreds, LLC"
    },
    {
      Id: "393",
      Name: "Toasting Master",
      Sex: "C",
      Sire: "Congrats",
      Dam: "Broadway Gold",
      Damsire: "Seeking the Gold",
      Trainer: "Dale L. Romans",
      Owner: "West Point Thoroughbreds",
      Breeder: "Ocala Stud" 
    },
    {
      Id: "394",
      Name: "Tombelaine",
      Sex: "C",
      Sire: "First Defence",
      Dam: "Kithira (GB)",
      Damsire: "Danehill",
      Trainer: "Dermot K. Weld",
      Owner: "Juddmonte Farms, Inc.",
      Breeder: "Juddmonte Farms Inc"
    },
    {
      Id: "395",
      Name: "Tommy Macho",
      Sex: "C",
      Sire: "Macho Uno",
      Dam: "Starstream",
      Damsire: "Awesome Again",
      Trainer: "Roderick R. Rodriguez",
      Owner: "All American Horses LLC",
      Breeder: "John Liviakis"
    },
    {
      Id: "396",
      Name: "Top of Mind",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Over the Edge",
      Damsire: "Thunder Gulch",
      Trainer: "Rodney Jenkins",
      Owner: "Hillwood Stable LLC",
      Breeder: "G. Watts Humphrey Jr."
    },
    {
      Id: "397",
      Name: "Tough Customer",
      Sex: "C",
      Sire: "Giant's Causeway",
      Dam: "Acquileia",
      Damsire: "Arch",
      Trainer: "Wayne M. Catalano",
      Owner: "West, Gary and Mary",
      Breeder: "Germania Farm"
    },
    {
      Id: "398",
      Name: "Tradesman",
      Sex: "C",
      Sire: "Street Sense",
      Dam: "Mari's Thunder",
      Damsire: "Thunder Gulch",
      Trainer: "Thomas Albertrani",
      Owner: "Godolphin Racing LLC",
      Breeder: "Darley"
    },
    {
      Id: "399",
      Name: "True to Form",
      Sex: "C",
      Sire: "Dynaformer",
      Dam: "Idols Eye",
      Damsire: "A.P. Indy",
      Trainer: "James A. Jerkens",
      Owner: "Centennial Farms",
      Breeder: "Castleton Lyons & Kilboy Estate"
    },
    {
      Id: "400",
      Name: "Two Six Wins",
      Sex: "C",
      Sire: "Midshipman",
      Dam: "Friona",
      Damsire: "Allen's Prospect",
      Trainer: "Michael Pender",
      Owner:
        "Ciardella, Jim, Fetkin, Bob, Fazio, Frank, Joslin, Kathy and Pender Racing \nLLC",
      Breeder: "Labhras Draper, Randolph Little & Darley"
    },
    {
      Id: "401",
      Name: "Ultra Sharp",
      Sex: "G",
      Sire: "Sharp Humor",
      Dam: "Pecan Bayou",
      Damsire: "Gone West",
      Trainer: "Craig Dollase",
      Owner: "West Point Thoroughbreds",
      Breeder: "Gary Falter & Cindy Falter"
    },
    {
      Id: "402",
      Name: "Unblunted",
      Sex: "C",
      Sire: "Sharp Humor",
      Dam: "Bright Orange",
      Damsire: "Bright Launch",
      Trainer: "Michael W. McCarthy",
      Owner: "Slam Dunk Racing",
      Breeder: "Hurstland Farm"
    },
    {
      Id: "403",
      Name: "Uninfluenced",
      Sex: "C",
      Sire: "Indian Charlie",
      Dam: "Just a Jingle",
      Damsire: "Unbridled's Song",
      Trainer: "Todd A. Pletcher",
      Owner: "Repole Stable",
      Breeder: "Whisper Hill Farm"
    },
    {
      Id: "404",
      Name: "Union River",
      Sex: "C",
      Sire: "Tiznow",
      Dam: "Our Khrysty",
      Damsire: "Newfoundland",
      Trainer: "D. Wayne Lukas",
      Owner: "Shortleaf Stable, Inc.",
      Breeder: "Blue Heaven Farm"
    },
    {
      Id: "405",
      Name: "Unrivaled",
      Sex: "C",
      Sire: "Super Saver",
      Dam: "Safely",
      Damsire: "Unbridled",
      Trainer: "Marya K. Montoya",
      Owner: "Waldorf Racing Stables LLC and Dale, Elizabeth A.",
      Breeder: "WinStar Farm, LLC"
    },
    {
      Id: "406",
      Name: "Upstart",
      Sex: "R",
      Sire: "Flatter",
      Dam: "Party Silks",
      Damsire: "Touch Gold",
      Trainer: "Richard A. Violette, Jr.",
      Owner: "Ralph M. Evans",
      Breeder: "Mrs. Gerald A. Nielsen"
    },
    {
      Id: "407",
      Name: "Vandalize",
      Sex: "C",
      Sire: "Midshipman",
      Dam: "One Stormy Mama",
      Damsire: "Storm Cat",
      Trainer: "Todd A. Pletcher",
      Owner: "Harrell Ventures, LLC",
      Breeder: "Mike Abraham"
    },
    {
      Id: "408",
      Name: "Veneto",
      Sex: "C",
      Sire: "Malibu Moon",
      Dam: "Set Them Free",
      Damsire: "Stop the Music",
      Trainer: "John A. Shirreffs",
      Owner: "Moss, Mr. and Mrs. Jerome S.",
      Breeder: "Mr. & Mrs. Jerome S. Moss"
    },
    {
      Id: "409",
      Name: "Verraco",
      Sex: "C",
      Sire: "Old Fashioned",
      Dam: "N. Y. Friend",
      Damsire: "Friends Lake",
      Trainer: "James M. Cassidy",
      Owner: "DP Racing, LLC",
      Breeder: "Sarawin Stable & Joe Mroz"
    },
    {
      Id: "410",
      Name: "Vici",
      Sex: "C",
      Sire: "War Front",
      Dam: "Viva",
      Damsire: "Pulpit",
      Trainer: "Albert M. Stall, Jr.",
      Owner: "Claiborne Farm and Dilschneider, Adele B.",
      Breeder: "Claiborne Farm & Adele B. Dilschneider"
    },
    {
      Id: "411",
      Name: "Victorious Indian",
      Sex: "C",
      Sire: "Eugene's Third Son",
      Dam: "Victorious Hour",
      Damsire: "Finest Hour",
      Trainer: "Angelina Gallien",
      Owner: "David Albert",
      Breeder: "Jerry Beard"
    },
    {
      Id: "412",
      Name: "Vogner",
      Sex: "C",
      Sire: "Point Given",
      Dam: "Violet Lady",
      Damsire: "Seattle Slew",
      Trainer: "D. Wayne Lukas",
      Owner: "Calumet Farm",
      Breeder: "Bluegrass Hall, LLC"
    },
    {
      Id: "413",
      Name: "W V Jetsetter",
      Sex: "C",
      Sire: "Jet Phone",
      Dam: "Better Than Most",
      Damsire: "Elusive Quality",
      Trainer: "George Weaver",
      Owner: "R. A. Hill Stable and Reeves Thoroughbred Racing",
      Breeder: "Clarence Scharbauer Jr."
    },
    {
      Id: "414",
      Name: "Wabel",
      Sex: "C",
      Sire: "Curlin",
      Dam: "Rockintotherhythm",
      Damsire: "Broad Brush",
      Trainer: "Bob Baffert",
      Owner: "Sheikh Abdullah Almaddah",
      Breeder:
        "Indian Springs Farm, Inc. & StonestreetThoroughbred Holdings, LLC."
    },
    {
      Id: "415",
      Name: "War Dispatch",
      Sex: "C",
      Sire: "War Front",
      Dam: "Photograph",
      Damsire: "Unbridled's Song",
      Trainer: "Jean-Claude Rouget",
      Owner: "Joseph Allen",
      Breeder: "Joseph Allen"
    },
    {
      Id: "416",
      Name: "War Envoy",
      Sex: "C",
      Sire: "War Front",
      Dam: "La Conseillante",
      Damsire: "Elusive Quality",
      Trainer: "Aidan P. O'Brien",
      Owner:
        "Tabor, Michael, Smith, Derrick, Magnier, Mrs. John and Allen, Joseph",
      Breeder: "Joseph Allen"
    },
    {
      Id: "417",
      Name: "War Story",
      Sex: "G",
      Sire: "Northern Afleet",
      Dam: "Belle Watling",
      Damsire: "Pulpit",
      Trainer: "Thomas M. Amoss",
      Owner: "Dunn, Christopher T. and Loooch Racing Stables, Inc.",
      Breeder: "Jack Swain III"
    },
    {
      Id: "418",
      Name: "Whitcomb Hill",
      Sex: "C",
      Sire: "Saint Anddan",
      Dam: "Harliday",
      Damsire: "Harlan's Holiday",
      Trainer: "Milton W. Wolfson",
      Owner: "N. T. S. Stable, Inc.",
      Breeder: "NTS Stable, Inc."
    },
    {
      Id: "419",
      Name: "Why Two",
      Sex: "C",
      Sire: "Bob and John",
      Dam: "Maria's Legend",
      Damsire: "Maria's Mon",
      Trainer: "Michael Machowsky",
      Owner:
        "Kagele Brothers, Inc., Shaw, Ken, Slam Dunk Racing and Lo Hi Stable",
      Breeder: "John McLane & Irv Wiemer"
    },
    {
      Id: "420",
      Name: "Wildwood Days",
      Sex: "G",
      Sire: "Smart Strike",
      Dam: "Tikkanita",
      Damsire: "Cozzene",
      Trainer: "Jonathan E. Sheppard",
      Owner: "Augustin Stable",
      Breeder: "George Strawbridge Jr."
    },
    {
      Id: "421",
      Name: "Will Did It",
      Sex: "C",
      Sire: "Medaglia d'Oro",
      Dam: "Bonnie Blue Flag",
      Damsire: "Mineshaft",
      Trainer: "D. Wayne Lukas",
      Owner: "Willis D. Horton",
      Breeder: "Aaron Jones & Marie Jones"
    },
    {
      Id: "422",
      Name: "Willing to Travel",
      Sex: "C",
      Sire: "Pleasantly Perfect",
      Dam: "Grassy Nellie",
      Damsire: "Belong to Me",
      Trainer: "Jerry Hollendorfer",
      Owner: "Hans Poetsch",
      Breeder: "Hans Poetsch"
    },
    {
      Id: "423",
      Name: "Win the Space",
      Sex: "C",
      Sire: "Pulpit",
      Dam: "Teamgeist (ARG)",
      Damsire: "Mutakddim",
      Trainer: "George Papaprodromou",
      Owner: "Kretz Racing LLC",
      Breeder: "Spendthrift Farm, LLC"
    },
    {
      Id: "424",
      Name: "Wisecracker",
      Sex: "C",
      Sire: "Distorted Humor",
      Dam: "Abby's Angel",
      Damsire: "Touch Gold",
      Trainer: "Kiaran P. McLaughlin",
      Owner: "Godolphin Racing LLC",
      Breeder: "Darley"
    },
    {
      Id: "425",
      Name: "Wolf Man Rocket",
      Sex: "C",
      Sire: "Mineshaft",
      Dam: "Kelly Pond",
      Damsire: "Deputy Minister",
      Trainer: "Bob Baffert",
      Owner: "Frank Fletcher Racing Operations, Inc.",
      Breeder: "Tony Holmes & Walter Zent"
    },
    {
      Id: "426",
      Name: "Yiannis",
      Sex: "R",
      Sire: "Midshipman",
      Dam: "Eye'll Be Fine",
      Damsire: "Montbrook",
      Trainer: "John W. Sadler",
      Owner: "Hronis Racing LLC",
      Breeder: "Thorobeam Farm"
    },
    {
      Id: "427",
      Name: "Your Thoughts",
      Sex: "C",
      Sire: "Value Plus",
      Dam: "Pondering",
      Damsire: "Storm Cat",
      Trainer: "Dane Kobiskie",
      Owner: "PTK, LLC",
      Breeder: "Family Broodmares III, LLC"
    },
    {
      Id: "428",
      Name: "Z Besha",
      Sex: "C",
      Sire: "Ghostzapper",
      Dam: "Holy Blitz",
      Damsire: "Holy Bull",
      Trainer: "Bob Baffert",
      Owner: "Zayat Stables, LLC",
      Breeder: "Adena Springs"
    },
    {
      Id: "429",
      Name: "Zip N Bayou",
      Sex: "F",
      Sire: "City Zip",
      Dam: "Auntie Mame",
      Damsire: "Theatrical (IRE)",
      Trainer: "Jerry Hollendorfer",
      Owner: "Bad Boy Racing LLC and Whizway Farms",
      Breeder: "Lazy F Ranch"
    }
  ];

  weekend = false;
  date = new Date().getDay();
  currDate = new Date().toLocaleDateString("en-US");

  races = true;
  myLot = false;

  navToLot() {
    this.races = false;
    this.myLot = true;

    // console.log('lots');

    // console.log(JSON.parse(JSON.stringify(this.selectedH1)));
    // console.log(JSON.parse(JSON.stringify(this.selectedH2)));
    // console.log(JSON.parse(JSON.stringify(this.selectedH3)));
    // console.log(JSON.parse(JSON.stringify(this.selectedH4)));
  }

  navToRaces() {
    this.races = true;
    this.myLot = false;
  }

  selectHorse(event) {
    let targetId = event.target.dataset.horseid;
    let targetRace = event.target.dataset.race;
    let target = this.template.querySelector(`[data-id="${targetId}"]`);

    let horse;

    if (targetRace == "1") {
      for (let i = 0; i < this.dataList1.length; i++) {
        // console.log(test3);
        if (
          this.dataList1[i].icon == this.horseSelected &&
          this.dataList1[i].Id != targetId
        ) {
          this.dataList1[i].icon = this.horseUnselected;
          console.log("deleted");
          let newTarget = this.template.querySelector(
            `[data-id="${this.dataList1[i].Id}"]`
          );
          newTarget.setAttribute("src", this.horseUnselected);
          // break;
        }
        if (this.dataList1[i].Id == targetId) {
          horse = this.dataList1[i];
          this.dataList1[i].icon = this.horseSelected;
        }
      }
    } else if (targetRace == "2") {
      for (let i = 0; i < this.dataList2.length; i++) {
        if (
          this.dataList2[i].icon == this.horseSelected &&
          this.dataList2[i].Id != targetId
        ) {
          this.dataList2[i].icon = this.horseUnselected;
          console.log("deleted");
          let newTarget = this.template.querySelector(
            `[data-id="${this.dataList2[i].Id}"]`
          );
          newTarget.setAttribute("src", this.horseUnselected);
          // break;
        }
        if (this.dataList2[i].Id == targetId) {
          horse = this.dataList2[i];
          this.dataList2[i].icon = this.horseSelected;
        }
      }
    } else if (targetRace == "3") {
      for (let i = 0; i < this.dataList3.length; i++) {
        if (
          this.dataList3[i].icon == this.horseSelected &&
          this.dataList3[i].Id != targetId
        ) {
          this.dataList3[i].icon = this.horseUnselected;
          console.log("deleted");
          let newTarget = this.template.querySelector(
            `[data-id="${this.dataList3[i].Id}"]`
          );
          newTarget.setAttribute("src", this.horseUnselected);
          // break;
        }
        if (this.dataList3[i].Id == targetId) {
          horse = this.dataList3[i];
          this.dataList3[i].icon = this.horseSelected;
        }
      }
    } else if (targetRace == "4") {
      for (let i = 0; i < this.dataList4.length; i++) {
        if (
          this.dataList4[i].icon == this.horseSelected &&
          this.dataList4[i].Id != targetId
        ) {
          this.dataList4[i].icon = this.horseUnselected;
          console.log("deleted");
          let newTarget = this.template.querySelector(
            `[data-id="${this.dataList4[i].Id}"]`
          );
          console.log('test3');
          newTarget.setAttribute("src", this.horseUnselected);
          // break;
        }
        if (this.dataList4[i].Id == targetId) {
          horse = this.dataList4[i];
          this.dataList4[i].icon = this.horseSelected;
        }
      }
    }
    console.log('test2', targetRace);
    console.log(JSON.parse(JSON.stringify(horse)));
    target.setAttribute("src", this.horseSelected);
    if(targetRace == "1") this.selectedH1 = horse;
    if(targetRace == "2") this.selectedH2 = horse;
    if(targetRace == "3") this.selectedH3 = horse;
    if(targetRace == "4") this.selectedH4 = horse;

  }

ranDate = new Date();
seed = this.ranDate.getDate() + this.ranDate.getMonth() + this.ranDate.getFullYear(); 
random() {
    var x = Math.sin(this.seed += 1) * 10000;
    return x - Math.floor(x);
}

  connectedCallback() {
    if (this.date == 0 || this.date == 6) {
      this.weekend = true;
    }
    // console.log(this.date);

    if (this.dataList1.length != 0) return;

    let selectedIndex = [];

    // Iteration for the Race List #1
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(this.random() * this.horseList.length);
      let item = this.horseList[index];
      while (selectedIndex.includes(index)) {
        index = Math.floor(this.random() * this.horseList.length);
        item = this.horseList[index];
      }
      item["icon"] = this.horseUnselected;
      selectedIndex.push(index);
      this.dataList1.push(item);
    }

    console.log(this.dataList1);

    // Iteration for the Race List #2
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(this.random() * this.horseList.length);
      let item = this.horseList[index];
      while (selectedIndex.includes(index)) {
        index = Math.floor(this.random() * this.horseList.length);
        item = this.horseList[index];
      }
      item["icon"] = this.horseUnselected;
      selectedIndex.push(index);
      this.dataList2.push(item);
    }

    console.log(this.dataList2);

    // Iteration for the Race List #3
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(this.random() * this.horseList.length);
      let item = this.horseList[index];
      while (selectedIndex.includes(index)) {
        index = Math.floor(this.random() * this.horseList.length);
        item = this.horseList[index];
      }
      item["icon"] = this.horseUnselected;
      selectedIndex.push(index);
      this.dataList3.push(item);
    }

    console.log(this.dataList3);

    // Iteration for the Race List #4
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(this.random() * this.horseList.length);
      let item = this.horseList[index];
      while (selectedIndex.includes(index)) {
        index = Math.floor(this.random() * this.horseList.length);
        item = this.horseList[index];
      }
      item["icon"] = this.horseUnselected;
      selectedIndex.push(index);
      this.dataList4.push(item);
    }

    console.log(this.dataList4);
  }
}


