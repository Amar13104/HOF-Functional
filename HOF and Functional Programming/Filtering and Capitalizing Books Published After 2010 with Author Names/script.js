const books = [
    {
        name:"Agnibeena",
        author:"Kazi Najrul Islam",
        year:1922
    },

    {
        name:"Eternal India",
        author:"Indira Gandhi",
        year:1978
    },

    {
        name:"Beautiful Things",
        author:"Hunter Biden",
        year:2021
    },

    {
        name:"A House for Mr. Biswas",
        author:"V.S. Naipaul",
        year:1961
    },

    {
        name:"An Era of Darkness",
        author:"Shashi Tharoor",
        year:2016
    },
];

const result = books.filter( book => book.year >= 2010).map( book => {
    return {
        name : book.name ,
        author : book.author.toUpperCase() ,
        year : book.year 
    }
})

console.log(result);