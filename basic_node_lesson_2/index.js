import express from "express"
import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

// to start the server write in terminal > node index.js
app.listen(3000, () => {
    console.log("Server is started (to stop press: 'ctrl' + 'c')")
})
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.use(express.static(__dirname + '/public'))

const  carouselImg = [
    {
        nameImg: "Grouplove_1.jpg"
    },
    {
        nameImg: "Grouplove_2.jpg"
    },
    {
        nameImg: "Grouplove_3.jpg"
    },
    {
        nameImg: "Grouplove_4.webp"
    },
    {
        nameImg: "Grouplove_5.jpg"
    },
]

// Home
app.get('/', (req, res) => {
    res.render('home', {name: 'Diana', mainTitle: 'Home', carouselImg: carouselImg})
})

const disc = [
    {
        album: "Never Trust a Happy Song",
        released: "September 5, 2011",
        tracks: [
            { no: 1, name: "Itchin' on a Photograph", length: "4:20" },
            { no: 2, name: "Tongue Tied", length: "3:38" },
            { no: 3, name: "Lovely Cup", length: "4:18" },
            { no: 4, name: "Colours", length: "4:18" },
            { no: 5, name: "Slow", length: "3:38" },
            { no: 6, name: "Naked Kids", length: "3:30" },
            { no: 7, name: "Spun", length: "3:26" },
            { no: 8, name: "Betty's a Bombshell", length: "3:35" },
            { no: 9, name: "Chloe", length: "3:18" },
            { no: 10, name: "Love Will Save Your Soul", length: "3:48" },
            { no: 11, name: "Cruel and Beautiful World", length: "4:03" },
            { no: 12, name: "Close Your Eyes and Count to Ten", length: "4:49" },
            { no: 13, name: "Je Pense Toujours a Toi", length: "2:22" },
        ]
    },
    {
        album: "Spreading Rumours",
        released: "September 17, 2013",
        tracks: [
            { no: 1, name: "I'm With You", length: "5:33" },
            { no: 2, name: "Borderlines and Aliens", length: "3:50" },
            { no: 3, name: "Schoolboy", length: "3:52" },
            { no: 4, name: "Ways to Go", length: "3:35" },
            { no: 5, name: "Shark Attack", length: "3:58" },
            { no: 6, name: "Sit Still", length: "4:04" },
            { no: 7, name: "Hippy Hill", length: "2:56" },
            { no: 8, name: "What I Know", length: "3:54" },
            { no: 9, name: "Didn't Have to Go", length: "3:44" },
            { no: 10, name: "Bitin' the Bullet", length: "4:08" },
            { no: 11, name: "News to Me", length: "3:46" },
            { no: 12, name: "Raspberry", length: "3:15" },
            { no: 13, name: "Save the Party", length: "3:31" },
            { no: 14, name: "Girl", length: "4:18" },
            { no: 15, name: "Flowers", length: "4:14" },
            { no: 16, name: "Beans on Pizza", length: "2:50" },
        ]
    },
    {
        album: "Big Mess",
        released: "September 9, 2016",
        tracks: [
            { no: 1, name: "Welcome to Your Life", length: "3:47" },
            { no: 2, name: "Do You Love Someone", length: "3:50" },
            { no: 3, name: "Standing in the Sun", length: "4:15" },
            { no: 4, name: "Enlighten Me", length: "3:52" },
            { no: 5, name: "Good Morning", length: "3:40" },
            { no: 6, name: "Spinning", length: "4:02" },
            { no: 7, name: "Cannonball", length: "3:17" },
            { no: 8, name: "Traumatized", length: "3:00" },
            { no: 9, name: "Heart of Mine", length: "3:16" },
            { no: 10, name: "Don't Stop Making It Happen", length: "3:00" },
            { no: 11, name: "Hollywood", length: "4:10" },
            { no: 12, name: "Remember That Night", length: "3:03" },
        ]
    },
    {
        album: "Healer",
        released: "March 13, 2020",
        tracks: [
            { no: 1, name: "Deleter", length: "3:54" },
            { no: 2, name: "Inside Out", length: "3:28" },
            { no: 3, name: "Expectations", length: "5:14" },
            { no: 4, name: "The Great Unknown", length: "3:57" },
            { no: 5, name: "Youth", length: "4:48" },
            { no: 6, name: "Places", length: "3:18" },
            { no: 7, name: "Promises", length: "4:18" },
            { no: 8, name: "Ahead of Myself", length: "3:50" },
            { no: 9, name: "Hail to the Queen", length: "4:16" },
            { no: 10, name: "Burial", length: "4:03" },
            { no: 11, name: "This Is Everything", length: "4:08" },
        ]
    },
    {
        album: "This Is This",
        released: "March 12, 2021",
        tracks: [
            { no: 1, name: "Primetime", length: "3:21" },
            { no: 2, name: "This Is The End", length: "3:11" },
            { no: 3, name: "Deadline", length: "3:39" },
            { no: 4, name: "Scratch", length: "3:26" },
            { no: 5, name: "Oxygen Swimming", length: "3:33" },
            { no: 6, name: "Just What You Want", length: "3:18" },
            { no: 7, name: "Seagulls", length: "3:06" },
            { no: 8, name: "Shake That Ass", length: "3:57" },
            { no: 9, name: "Shout", length: "5:57" },
        ]
    },
]

// Discography
app.get('/discography', (req, res) => {
    res.render('discography', {mainTitle: 'Discography', disc: disc})
})

const band = [
    {
        id: 1,
        name: "Christian", 
        surname: "Zucconi",
        job: "lead and backing vocals, guitars",
        born: "November 3, 1979",
        cop: true
    },
    {
        id: 2,
        name: "Hannah",
        surname: "Hooper",
        job: "lead and backing vocals, keyboards",
        born: "February 23, 1982",
        cop: true
    },
    {
        id: 3,
        name: "Andrew",
        surname: "Wessen",
        job: "guitars, backing vocals",
        born: "April 7, 1987",
        cop: true
    },
    {
        id: 4,
        name: "Daniel",
        surname: "Gleason",
        job: "bass",
        cop: true
    },
    {
        id: 5,
        name: "Benjamin",
        surname: "Homola",
        job: "drums",
        cop: true
    },
    {
        id: 6,
        name: "Sean",
        surname: "Gadd",
        job: "bass, backing vocals",
        cop: false
    },
    {
        id: 7,
        name: "Ryan",
        surname: "Rabin",
        job: "drums, various instruments",
        born: "8 October, 1985",
        cop: false
    }
]

// Band members
app.get('/members', (req, res) => {
    res.render('members', {mainTitle: 'Band members', band: band})
})

// // member id
// app.get('/member/:band_id', (req, res) => {
//     // res.send(req.params)
//     const member = band.find((us) => us["id"] === parseInt(req.params["band_id"]))
//     res.render('member',  {mainTitle: 'member', member: member})
// })

// Search
app.post('/search', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})