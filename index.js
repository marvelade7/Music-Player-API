const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();


const PORT = process.env.PORT;
const BASE_URL = `http://localhost:${PORT}`;

app.use("/music", express.static("public/music"));
app.use("/images", express.static("public/images"));

const music = [
    {
        id: 1,
        name: "Jugular Jugular",
        artist: "Lawrence Oyor ft Greatman Takit",
        duration: "4:35",
        image: `${BASE_URL}/images/jugular-jugular.jpg`,
        audio: `${BASE_URL}/music/Jugular_Jugular.mp3`,
    },
    {
        id: 2,
        name: "Finidi George",
        artist: "Greatman Takit",
        duration: "2:45",
        image: `${BASE_URL}/images/finidi-george.jpg`,
        audio: `${BASE_URL}/music/finidi_george.mp3`,
    },
    {
        id: 3,
        name: "No Turning Back",
        artist: "Gaise Baba ft Lawrence Oyor",
        duration: "4:59",
        image: `${BASE_URL}/images/no-turning-back.jpg`,
        audio: `${BASE_URL}/music/No_Turning_Back.mp3`,
    },
    {
        id: 4,
        name: "Set Me Free",
        artist: "Jaymikee",
        duration: "3:20",
        image: `${BASE_URL}/images/set-me-free.jpg`,
        audio: `${BASE_URL}/music/Set_Me_Free.mp3`,
    },
    {
        id: 5,
        name: "Promise Keeper",
        artist: "Sound of Salem",
        genre: "Inspirational",
        duration: "3:04",
        image: `${BASE_URL}/images/promise-keeper.jpg`,
        audio: `${BASE_URL}/music/Promise_Keeper.mp3`,
    },
    {
        id: 6,
        name: "Rest",
        artist: "Limoblaze",
        genre: "Inspirational",
        duration: "2:45",
        image: `${BASE_URL}/images/rest.jpg`,
        audio: `${BASE_URL}/music/Rest.mp3`,
    },
    {
        id: 7,
        name: "Hallelujah",
        artist: "Misister Blessed ft SOP",
        duration: "4:07",
        image: `${BASE_URL}/images/hallelujah.jpg`,
        audio: `${BASE_URL}/music/Hallelujah.mp3`,
    },
    {
        id: 8,
        name: "Joy In Chaos",
        artist: "Holy Drill",
        genre: "Inspirational",
        duration: "1:07",
        image: `${BASE_URL}/images/joy-in-chaos.jpg`,
        audio: `${BASE_URL}/music/Joy_In_Chaos.mp3`,
    },
    {
        id: 9,
        name: "Holy Spirit",
        artist: "Greatman Takit",
        duration: "4:12",
        image: `${BASE_URL}/images/holy-spirit.jpg`,
        audio: `${BASE_URL}/music/Holy_Spirit.mp3`,
    },
    {
        id: 10,
        name: "Miracle No Dey Tire Jesus",
        artist: "Moses Bliss ft Festizie & Chizie",
        duration: "4:20",
        image: `${BASE_URL}/images/miracle-no-dey-tire.jpg`,
        audio: `${BASE_URL}/music/Miracle_No_Dey_Tire_Jesus.mp3`,
    },
    {
        id: 11,
        name: "This Year (Blessings)",
        artist: "Victor Thompson & Ehis D’Greatest",
        duration: "4:00",
        image: `${BASE_URL}/images/this-year-blessings.jpg`,
        audio: `${BASE_URL}/music/This_Year_Blessings.mp3`,
    },
    {
        id: 12,
        name: "God No Go Shame Us",
        artist: "Prinx Emmanuel",
        duration: "4:05",
        image: `${BASE_URL}/images/god-no-go-shame-us.jpg`,
        audio: `${BASE_URL}/music/God_No_Go_Shame_Us.mp3`,
    },
    {
        id: 13,
        name: "Ifunanya",
        artist: "Prinx Emmanuel",
        duration: "3:55",
        image: `${BASE_URL}/images/ifunanya.jpg`,
        audio: `${BASE_URL}/music/Ifunanya.mp3`,
    },
    {
        id: 14,
        name: "Jireh (My Provider)",
        artist: "Limoblaze",
        duration: "3:50",
        image: `${BASE_URL}/images/jireh.jpg`,
        audio: `${BASE_URL}/music/Jireh_My_Provider.mp3`,
    },
    {
        id: 15,
        name: "Correct",
        artist: "Greatman Takit ft Ko’Rale",
        duration: "3:50",
        image: `${BASE_URL}/images/correct.jpg`,
        audio: `${BASE_URL}/music/Correct.mp3`,
    },
    {
        id: 16,
        name: "We Outside",
        artist: "Gaise Baba",
        duration: "3:50",
        image: `${BASE_URL}/images/we-outside.jpg`,
        audio: `${BASE_URL}/music/We_Outside.mp3`,
    },
    {
        id: 17,
        name: "Daddy Wey Dey Pamper (Gbedu Version)",
        artist: "Moses Bliss ft Greatman Takit & Prinx Emmanuel",
        duration: "3:55",
        image: `${BASE_URL}/images/daddy-wey-dey-pamper.jpg`,
        audio: `${BASE_URL}/music/Daddy_Wey_Dey_Pamper.mp3`,
    },

    {
        id: 18,
        name: "Congratulations",
        artist: "Ada Ehi",
        duration: "4:10",
        image: `${BASE_URL}/images/congratulations.jpg`,
        audio: `${BASE_URL}/music/Congratulations.mp3`,
    },
    {
        id: 19,
        name: "Too Faithful",
        artist: "Moses Bliss",
        duration: "3:45",
        image: `${BASE_URL}/images/too-faithful.jpg`,
        audio: `${BASE_URL}/music/Too_Faithful.mp3`,
    },
    {
        id: 20,
        name: "Obinasom",
        artist: "Mercy Chinwo",
        duration: "4:50",
        image: `${BASE_URL}/images/obinasom.jpg`,
        audio: `${BASE_URL}/music/Obinasom.mp3`,
    },
    {
        id: 21,
        name: "Run",
        artist: "Greatman Takit",
        duration: "3:45",
        image: `${BASE_URL}/images/run.jpg`,
        audio: `${BASE_URL}/music/Run.mp3`,
    },

    {
        id: 22,
        name: "Logo",
        artist: "Gaise Baba",
        duration: "4:10",
        image: `${BASE_URL}/images/logo.jpg`,
        audio: `${BASE_URL}/music/Logo.mp3`,
    },
    {
        id: 23,
        name: "Sound of Rain",
        artist: "Greatman Takit",
        duration: "4:30",
        image: `${BASE_URL}/images/sound-of-rain.jpg`,
        audio: `${BASE_URL}/music/Sound_of_Rain.mp3`,
    },
    
    {
        id: 24,
        name: "I Know My God",
        artist: "Evans Ighodalo",
        duration: "4:20",
        image: `${BASE_URL}/images/i-know-my-god.jpg`,
        audio: `${BASE_URL}/music/I_Know_My_God.mp3`,
    },
    {
        id: 25,
        name: "More Than Gold",
        artist: "Judikay ft Mercy Chinwo",
        duration: "4:05",
        image: `${BASE_URL}/images/more-than-gold.jpg`,
        audio: `${BASE_URL}/music/More_Than_Gold.mp3`,
    },
    {
        id: 26,
        name: "When You Say A Thing",
        artist: "Mercy Chinwo",
        duration: "4:00",
        image: `${BASE_URL}/images/when-you-say-a-thing.jpg`,
        audio: `${BASE_URL}/music/When_You_Say_A_Thing.mp3`,
    },
    {
        id: 27,
        name: "Radical For Jesus",
        artist: "Frank Edwards",
        duration: "4:10",
        image: `${BASE_URL}/images/radical-for-jesus.jpg`,
        audio: `${BASE_URL}/music/Radical_For_Jesus.mp3`,
    },
    {
        id: 28,
        name: "Nara",
        artist: "Tim Godfrey ft Travis Greene",
        duration: "4:05",
        image: `${BASE_URL}/images/nara.jpg`,
        audio: `${BASE_URL}/music/Nara.mp3`,
    },
    {
        id: 29,
        name: "Way Maker",
        artist: "Sinach",
        duration: "4:28",
        image: `${BASE_URL}/images/way-maker.jpg`,
        audio: `${BASE_URL}/music/Way_Maker.mp3`,
    },
    {
        id: 30,
        name: "Alagbara",
        artist: "Onos Ariyo",
        duration: "4:10",
        image: `${BASE_URL}/images/alagbara.jpg`,
        audio: `${BASE_URL}/music/Alagbara.mp3`,
    },
    {
        id: 31,
        name: "I Testify",
        artist: "Ada Ehi",
        duration: "4:15",
        image: `${BASE_URL}/images/i-testify.jpg`,
        audio: `${BASE_URL}/music/I_Testify.mp3`,
    },
    {
        id: 32,
        name: "Victory",
        artist: "Eben",
        duration: "4:05",
        image: `${BASE_URL}/images/victory.jpg`,
        audio: `${BASE_URL}/music/Victory.mp3`,
    },
];

app.get("/api/music", (req, res) => {
    res.json(music);
});

app.get("/api/music/:id", (req, res) => {
    const song = music.find(m => m.id === parseInt(req.params.id));
    
    if (!song) {
        return res.status(404).json({ message: "Song not found" });
    }

    res.json(song);
});

app.listen(PORT, () => {
    console.log(`I am running on port ${PORT}`);
});