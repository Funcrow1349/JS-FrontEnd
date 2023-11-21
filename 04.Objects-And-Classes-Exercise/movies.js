function movies(entryData) {
    let movieObjects = []

    for (let movieData of entryData) {
        if (movieData.includes("addMovie")) {
            let movieName = movieData.split('addMovie ')[1]
            movieObjects.push({name: movieName})

        } else if (movieData.includes("directedBy")) {
            let [movieName, director] = movieData.split(" directedBy ")
            let searching = movieObjects.find((el) => el.name === movieName)

            if (searching) {
                searching['director'] = director
            }
         
        } else {
            let [movieName, date] = movieData.split(" onDate ")
            let searching = movieObjects.find((el) => el.name === movieName)

            if (searching) {
                searching['date'] = date
            }
        }
    }

    for (const movie of movieObjects) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie))
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )