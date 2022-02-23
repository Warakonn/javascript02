class Song {
    constructor(title, artist) {
        this.title = title;
        this.ackList = artist;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
console.log(mySong.title);