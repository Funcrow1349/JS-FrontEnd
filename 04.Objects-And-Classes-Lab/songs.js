function selectSongs (input) {
    let numberOfSongs = Number(input[0])
    let typeOfSongs = input[numberOfSongs + 1]
    let arrayOfSongs = []

    class Song {
        constructor (type, name) {
            this.type = type
            this.name = name
        }
    }

    for (let index = 1; index < input.length - 1; index++) {
        let currentSong = input[index].split("_")
        let currentSongType = currentSong[0]
        let currentSongName = currentSong[1]
        arrayOfSongs.push(new Song(currentSongType, currentSongName))
    }

    for (let song of arrayOfSongs) {
        if (song.type === typeOfSongs || typeOfSongs === "all") {
            console.log(song.name)
        }
    }
}

selectSongs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
selectSongs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58', 'favourite_Live It Up_3:48', 'listenLater'])
selectSongs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all'])