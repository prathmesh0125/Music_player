// const music = new Audio('audio/1.mp3');
// music.play();

const songs = [
  {
    id: "1",
    favourite: false,
    songName: "on my way",
    Artist: "Alen Walker",
    song: "audio/1.mp3",
    imgsrc: "img/1.jpg",
    listen: "56,565,753",
    duration: "3:36",
  },

  {
    id: "2",
    favourite: false,
    songName: "Alen Walker-Fade",
    Artist: "Alen Walker",
    song: "audio/2.mp3",
    imgsrc: "img/2.jpg",
    listen: "4,56,7876",
    duration: "3:32",
  },
  {
    id: "3",
    favourite: false,
    songName: "Cartoon -On & On",
    Artist: "Daniel Levi",
    song: "audio/3.mp3",
    imgsrc: "img/3.jpg",
    listen: "67,676,88",
    duration: "3:28",
  },

  {
    id: "4",
    favourite: false,
    songName: "Warriyo",
    Artist: "",
    song: "audio/4.mp3",
    imgsrc: "img/4.jpg",
    listen: "75,87,363",
    duration: "3:50",
  },
  {
    id: "5",
    favourite: false,
    songName: "Ertugal Gazi ",
    Artist: "Ertugrul",
    song: "audio/5.mp3",
    imgsrc: "img/5.jpg",
    listen: "98,765,43",
    duration: "3:40",
  },
  {
    id: "6",
    favourite: false,
    songName: "Electronic Music",
    Artist: "Electro",
    song: "audio/6.mp3",
    imgsrc: "img/6.jpg",
    listen: "23,456,787",
    duration: "4:27",
  },
  {
    id: "7",
    favourite: false,
    songName: "agar tuma sath ",
    Artist: "Tamashaa",
    song: "audio/7.mp3",
    imgsrc: "img/7.jpg",
    listen: "65,433,4567",
    duration: "5:41",
  },
  {
    id: "8",
    favourite: false,
    songName: "Suna Hai",
    Artist: "Neha Kakkar",
    song: "audio/8.mp3",
    imgsrc: "img/8.jpg",
    listen: "34,567,876",
    duration: "3:13",
  },
  {
    id: "9",
    favourite: false,
    songName: "Dilbr",
    Artist: "Satyameva Jayate",
    song: "audio/9.mp3",
    imgsrc: "img/9.jpg",
    listen: "98,576,654",
    duration: "3:04",
  },
  {
    id: "10",
    favourite: false,
    songName: "Duniya",
    Artist: "Luka Chuppi",
    song: "audio/10.mp3",
    imgsrc: "img/10.jpg",
    listen: "9,86,8776",
    duration: "3:42",
  },
  {
    id: "11",
    favourite: false,
    songName: "punya pap",
    Artist: "Divine",
    song: "audio2/359.mp3",
    imgsrc: "img1/punya paap.jpg",
    listen: "56,565,753",
    duration: "4:32",
  },
  {
    id: "12",
    favourite: false,
    songName: " Bewafa",
    Artist: "Imaran Khan",
    song: "audio2/13 Bewafa.mp3",
    imgsrc: "img1/bewafa.jpg",
    listen: "56,565,753",
    duration: "3:42",
  },
  {
    id: "13",
    favourite: false,
    songName: "295",
    Artist: "Siddhu Mossewala",
    song: "audio2/295.mp3",
    imgsrc: "img1/295.jpg",
    listen: "56,565,753",
    duration: "4:30",
  },
  {
    id: "14",
    favourite: false,
    songName: "Amplifier",
    Artist: "ImranKhan",
    song: "audio2/Amplifier.mp3",
    imgsrc: "img1/1000024126.jpg",
    listen: "77,565,753",
    duration: "3:48",
  },
  {
    id: "15",
    favourite: false,
    songName: "Baller",
    Artist: "Shubh",
    song: "audio2/Baller.mp3",
    imgsrc: "img1/Baller.jpg",
    listen: "77,565,753",
    duration: "2:33",
  },
  // {
  //   id: "16",
  //   favourite: false,
  //   songName: "Call Aundi",
  //   Artist: "Yo yo Honey Singh",
  //   song: "audio2/Call Aundi.mp3",
  //   imgsrc: "img1/Call Aundi.jpg",
  //   listen: "77,565,753",
  //   duration: "3:36",
  // },
  // {
  //   id: "17",
  //   favourite: false,
  //   songName: "Dark Love",
  //   Artist: "Siddhu Mossewala",
  //   song: "audio2/Dark Love.mp3",
  //   imgsrc: "img1/dark love.jpg",
  //   listen: "10,565,753",
  //   duration: "3:40",
  // },
  // {
  //   id: "18",
  //   favourite: false,
  //   songName: "Dhakka",
  //   Artist: "Siddhu Mossewala",
  //   song: "audio2/Dhakka.mp3",
  //   imgsrc: "img1/dhakka.jpg",
  //   listen: "77,565,753",
  //   duration: "4:05",
  // },
  // {
  //   id: "19",
  //   favourite: false,
  //   songName: "Do You Know",
  //   Artist: "Diljit Dosanja",
  //   song: "audio2/Do You Know.mp3",
  //   imgsrc: "img1/Do You Know.jpg",
  //   listen: "19,565,753",
  //   duration: "3:49",
  // },
  // {
  //   id: "20",
  //   favourite: false,
  //   songName: "Downtown",
  //   Artist: "Guru Randhawa",
  //   song: "audio2/Downtown.mp3",
  //   imgsrc: "img1/Downtown.jpg",
  //   listen: "59,785,753",
  //   duration: "3:36",
  // },
  // {
  //   id: "21",
  //   favourite: false,
  //   songName: "Horn Blow",
  //   Artist: "Hardy Sandhu",
  //   song: "audio2/Hornn Blow.mp3",
  //   imgsrc: "img1/Horn Blow.jpg",
  //   listen: "56,987,753",
  //   duration: "2:26",
  // },
  // {
  //   id: "22",
  //   favourite: false,
  //   songName: "Just Listen",
  //   Artist: "Siddhu MooseWala",
  //   song: "audio2/Just Listen.mp3",
  //   imgsrc: "img1/Just listen.jpg",
  //   listen: "56,987,753",
  //   duration: "2:26",
  // },
  // {
  //   id: "23",
  //   favourite: false,
  //   songName: "Dua Karo",
  //   Artist: "Arjit Singh",
  //   song: "audio2/Dua Karo.mp3",
  //   imgsrc: "img1/Dua Karo.jpg",
  //   listen: "16,087,753",
  //   duration: "4:29",
  // },
  // {
  //   id: "24",
  //   favourite: false,
  //   songName: "Fillhal",
  //   Artist: "B-Prak",
  //   song: "audio2/Filhaal.mp3",
  //   imgsrc: "img1/Fillhall.jpg",
  //   listen: "45,087,346",
  //   duration: "4:15",
  // },
  // {
  //   id: "25",
  //   favourite: false,
  //   songName: "Kaho Na Kaho",
  //   Artist: "Emraan Hashmi",
  //   song: "audio2/Kaho Na Kaho.mp3",
  //   imgsrc: "img1/kaho na kaho.jpg",
  //   listen: "77,087,346",
  //   duration: "5:12",
  // },
  // {
  //   id: "26",
  //   favourite: false,
  //   songName: "Libas",
  //   Artist: "KaKa",
  //   song: "audio2/Libas.mp3",
  //   imgsrc: "img1/Libass.jpg",
  //   listen: "43,787,346",
  //   duration: "4:27",
  // },
  // {
  //   id: "27",
  //   favourite: false,
  //   songName: " Nana Isaq na ho",
  //   Artist: "Arjit singhr",
  //   song: "arjit_audio/1.mp3",
  //   imgsrc: "arjit_img/1.jpg",
  //   listen: "78,565,753",
  //   duration: "3:46",
  // },

  // {
  //   id: "28",
  //   favourite: false,
  //   songName: "Khairiyat",
  //   Artist: "Arjit singh",
  //   song: "arjit_audio/2.mp3",
  //   imgsrc: "arjit_img/2.jpg",
  //   listen: "6,005,753",
  //   duration: "3:32",
  // },
  // {
  //   id: "29",
  //   favourite: false,
  //   songName: "Desh Mere",
  //   Artist: "Arjit Singh,Arko",
  //   song: "arjit_audio/3.mp3",
  //   imgsrc: "arjit_img/3.jpg",
  //   listen: "76,500,753",
  //   duration: "3:23",
  // },

  // {
  //   id: "30",
  //   favourite: false,
  //   songName: "Dhokha",
  //   Artist: "Arjit Singh",
  //   song: "arjit_audio/4.mp3",
  //   imgsrc: "arjit_img/4.jpg",
  //   listen: "7,565,753",
  //   duration: "4:05",
  // },
  // {
  //   id: "31",
  //   favourite: false,
  //   songName: " Tera Yaar ho Main",
  //   Artist: "Arjit Singh",
  //   song: "arjit_audio/5.mp3",
  //   imgsrc: "arjit_img/5.jpg",
  //   listen: "87,565,753",
  //   duration: "4:06",
  // },
  // {
  //   id: "32",
  //   favourite: false,
  //   songName: "Mai teri chunariya ",
  //   Artist: "Arjit Singh",
  //   song: "arjit_audio/6.mp3",
  //   imgsrc: "arjit_img/6.jpg",
  //   listen: "98,565,753",
  //   duration: "4:29",
  // },
  // {
  //   id: "33",
  //   favourite: false,
  //   songName: "Galti Se Mistake",
  //   Artist: "Arjit Singh",
  //   song: "arjit_audio/7.mp3",
  //   imgsrc: "arjit_img/7.jpg",
  //   listen: "45,565,753",
  //   duration: "3:23",
  // },
  // {
  //   id: "34",
  //   favourite: false,
  //   songName: " Hamari aduri khani ",
  //   Artist: "Arjit Sing",
  //   song: "arjit_audio/8.mp3",
  //   imgsrc: "arjit_img/8.jpg",
  //   listen: "68,57,753",
  //   duration: "6:38",
  // },
  // {
  //   id: "35",
  //   favourite: false,
  //   songName: "Traffic ",
  //   Artist: "Arjit Singh",
  //   song: "arjit_audio/9.mp3",
  //   imgsrc: "arjit_img/9.jpg",
  //   listen: "076,65,753",
  //   duration: "4:59",
  // },
  // {
  //   id: "36",
  //   favourite: false,
  //   songName: " Villain ",
  //   Artist: "Arjit Singh",
  //   song: "arjit_audio/10.mp3",
  //   imgsrc: "arjit_img/10.jpg",
  //   listen: "8,765,753",
  //   duration: "4:20",
  // },
  // {
  //   id: "37",
  //   favourite: false,
  //   songName: "Mera Yaraa ",
  //   Artist: "Arjit Singh",
  //   song: "arjit_audio/11.mp3",
  //   imgsrc: "arjit_img/11.jpg",
  //   listen: "245,565,753",
  //   duration: "4:45",
  // },
  // {
  //   id: "38",
  //   favourite: true,
  //   songName: "PUNJABI_MASHUP",
  //   Artist: "Mashup studio",
  //   song: "Mashup/Broken_Love.mp3",
  //   imgsrc: "img/10.jpg",
  //   listen: "15,86,8776",
  //   duration: "8:18",

  // },
  // {  id: "39",
  //   favourite: false,
  //   songName: "Her",
  //   Artist: "Mashup studio",
  //   song: "Mashup/Her.mp3",
  //   imgsrc: "img/11.jpg",
  //   listen: "7,86,8776",
  //   duration: "2:59",
  // },
  // {
  //   id: "40",
  //   favourite: false,
  //   songName: "Love Dose",
  //   Artist: "Yo Yo Honey singh",
  //   song: "Mashup/Love Dose.mp3",
  //   imgsrc: "img/honey.jpg",
  //   listen: "367,98,097",
  //   duration: "3:48",
  // },
  // {
  //   id: "41",
  //   favourite: true,
  //   songName: "Lut Gaye",
  //   Artist: "Jubin Nuatiyal",
  //   song: "Mashup/Lut Gaye.mp3",
  //   imgsrc: "img1/Lut Gaye.jpg",
  //   listen: "17,48,767",
  //   duration: "3:48",
  // },
  // {
  //   id: "42",
  //   favourite: false,
  //   songName: "Nazar",
  //   Artist: "Pulki&Kabir ",
  //   song: "Mashup/Nazar.mp3",
  //   imgsrc: "img1/nazar.jpg",
  //   listen: "177,48,767",
  //   duration: "3:27",
  // },
  // {
  //   id: "43",
  //   favourite: true,
  //   songName: "No-Love",
  //   Artist: "Shubh",
  //   song: "Mashup/No-Love.mp3",
  //   imgsrc: "img1/no love.jpg",
  //   listen: "123,748,767",
  //   duration: "2:50",
  // },
  // {
  //   id: "44",
  //   favourite: false,
  //   songName: "Prada",
  //   Artist: "",
  //   song: "Mashup/Prada.mp3",
  //   imgsrc: "img1/Prada.jpg",
  //   listen: "737,08,767",
  //   duration: "3:05",
  // },
  // {
  //   id: "45",
  //   favourite: false,
  //   songName: "Sanam Re",
  //   Artist: "Mithoon & Arjit Singh",
  //   song: "Mashup/Sanam Re.mp3",
  //   imgsrc: "img1/sanam re.jpg",
  //   listen: "107,48,767",
  //   duration: "5:08",
  // },
  // {
  //   id: "46",
  //   favourite: false,
  //   songName: "Shape",
  //   Artist: "KaKa",
  //   song: "Mashup/Shape.mp3",
  //   imgsrc: "img1/shape.jpg",
  //   listen: "179,97,078",
  //   duration: "3:17",
  // },
  // {
  //   id: "47",
  //   favourite: true,
  //   songName: "So High",
  //   Artist: "Sidhu Moosewala",
  //   song: "Mashup/So High.mp3",
  //   imgsrc: "img1/So High.jpg",
  //   listen: "789,88,887",
  //   duration: "3:38",
  // },
  // {
  //   id: "48",
  //   favourite: false,
  //   songName: "Temporary Pyar",
  //   Artist: "KAKA",
  //   song: "Mashup/Temporary Pyar.mp3",
  //   imgsrc: "img1/shape.jpg",
  //   listen: "345,88,887",
  //   duration: "4:19",
  // },
  // {
  //   id: "49",
  //   favourite: false,
  //   songName: "Tera Mera Viah",
  //   Artist: "Jass Manak",
  //   song: "Mashup/Tera Mera Viah.mp3",
  //   imgsrc: "img1/tera mera viah.jpg",
  //   listen: "875,12,234",
  //   duration: "3:15",
  // },
  // {
  //   id: "50",
  //   favourite: false,
  //   songName: "These Days ",
  //   Artist: "Bohemia & Sidhu ",
  //   song: "Mashup/These Days Full.mp3",
  //   imgsrc: "img1/these days.jpg",
  //   listen: "235,19,734",
  //   duration: "3:31",
  // },
  // {
  //   id: "51",
  //   favourite: true,
  //   songName: "Titliaan",
  //   Artist: "Hardy Sandhu",
  //   song: "Mashup/Titliaan.mp3",
  //   imgsrc: "img1/titliyan.jpg",
  //   listen: "876,35,234",
  //   duration: "3:15",
  // },
  // {
  //   id: "52",
  //   favourite: false,
  //   songName: "We Rollin",
  //   Artist: "Shubh",
  //   song: "Mashup/We Rollin.mp3",
  //   imgsrc: "img1/Rollin.jpg",
  //   listen: "076,35,234",
  //   duration: "3:19",
  // },


  
];
export { songs };