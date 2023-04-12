// Defining simple example data

const movies = [
    {
        id: '1',
        title: 'Avatar',
        director: 'James Cameron',
        duration: '2h 42m',
        poster: './assets/Avatar_poster.jpg'
    },
    {
        id: '2',
        title: 'La La Land',
        director: 'Damien Chazelle',
        duration: '2h 8m',
        poster: './assets/Lalaland_poster.jpg'
    },
    {
        id: '3',
        title: 'Harry Potter and The Philosoper Stone',
        director: 'Chris Columbus',
        duration: '2h 32m',
        poster: './assets/Harry_Potter_poster.jpg'
    },
    {
        id: '4',
        title: 'How to Train your Dragon',
        director: 'Dean DeBlois',
        duration: '1h 38m',
        poster: './assets/How_to_train_your_dragon_poster.jpg'
    },
    {
        id: '5',
        title: 'Shrek',
        director: 'Andrew Adamson',
        duration: '1h 30m',
        poster: './assets/Shrek_poster.jpg'
    }
]

// Defining a simple GraphQL resolvers
// Resolvers define how to fetch the types defined in the schema

const resolvers = {
    Query: {
        movies: () => movies
    }
}

export { resolvers };