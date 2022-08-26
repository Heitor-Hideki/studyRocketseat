const booksByCategory = [
    {
        Category:"Riqueza",
        books:  [
            {
                title: "O segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
booksByCategory.forEach(function(nome, i){
    console.log(nome, i)}
   )
//for(let category of booksByCategory){
//    console.log('Total de livros da categoria', category)
//}

//for (let i=0; i < booksByCategory.length; i = i + 1) {
//   console.log(booksByCategory[i]);
//}