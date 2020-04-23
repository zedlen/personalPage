export const ABOUT = {
    TITLE: 'Acerca de mi',
    id: "about",
    info:[{
        title: "¿Quien soy?",
        body: "Soy Luis Arturo Melendez, nací un 2 de febrero, soy Full Stack Engineer, me apasiona codear y aprender de nuevas tecnologias, tambien disfruto mucho de empezar nuevos proyectos, así como dirigir y acompañar a mis amigos en el camino al éxito.",
        image: "/static/images/me.jpg"
    },{
        title: "Mis gustos",
        body: "Soy muy apacionado a los superheroes, mi favorito es The Flash, lo considero el mejor heroe en todos los aspectos. De igual manera disfruto mucho ver series, anime y peliculas. Ultimamente me ha interesado el mundo de la fotografia, he estado aprendiendo a tomar buenas fotos y a editar. Tambien me gusta mucho salir de viaje, pasear y conocer nuevos lugares.",
        image: "/static/images/edit.jpg"
    },{
        title: "¿Que hago?",
        body: "Desarrollo aplicaciones web y moviles, desde el diseño y maquetado, hasta la puesta en produccion, incluyendo el desarrollo de API's, base de datos y todo lo que el backend de tu aplicacion requiera.",
        image: "/static/images/app.jpg"
    }]
}


export const TECHS = {
    TITLE: 'Tecnologias que uso',
    id: 'techs',
    data: [
        {
            name: 'NodeJS',
            url: 'https://nodejs.org/es/',
            image: 'https://nodejs.org/static/images/logo.svg',
            background: 'dark'
        },
        {
            name: 'ReactJS',
            url: 'https://es.reactjs.org/',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
            background: 'ligth'
        },
        {
            name: 'Angular',
            url: 'https://angular.io/',
            image: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
            background: 'dark'
        },
        {
            name: 'Vue.js',
            url: 'https://vuejs.org/',
            image: 'https://vuejs.org/images/logo.png',
            background: 'ligth'
        },
        {
            name: 'GatsbyJS',
            url: 'https://www.gatsbyjs.org/',
            image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDYgMjgiIGZvY3VzYWJsZT0iZmFsc2UiPgogIDxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik02Mi45IDEyaDIuOHYxMGgtMi44di0xLjNjLTEgMS41LTIuMyAxLjYtMy4xIDEuNi0zLjEgMC01LjEtMi40LTUuMS01LjMgMC0zIDItNS4zIDQuOS01LjMuOCAwIDIuMy4xIDMuMiAxLjZWMTJ6bS01LjIgNWMwIDEuNiAxLjEgMi44IDIuOCAyLjggMS42IDAgMi44LTEuMiAyLjgtMi44IDAtMS42LTEuMS0yLjgtMi44LTIuOC0xLjYgMC0yLjggMS4yLTIuOCAyLjh6bTEzLjUtMi42VjIyaC0yLjh2LTcuNmgtMS4xVjEyaDEuMVY4LjZoMi44VjEyaDEuOXYyLjRoLTEuOXptOC41IDBjLS43LS42LTEuMy0uNy0xLjYtLjctLjcgMC0xLjEuMy0xLjEuOCAwIC4zLjEuNi45LjlsLjcuMmMuOC4zIDIgLjYgMi41IDEuNC4zLjQuNSAxIC41IDEuNyAwIC45LS4zIDEuOC0xLjEgMi41cy0xLjggMS4xLTMgMS4xYy0yLjEgMC0zLjItMS0zLjktMS43bDEuNS0xLjdjLjYuNiAxLjQgMS4yIDIuMiAxLjIuOCAwIDEuNC0uNCAxLjQtMS4xIDAtLjYtLjUtLjktLjktMWwtLjYtLjJjLS43LS4zLTEuNS0uNi0yLjEtMS4yLS41LS41LS44LTEuMS0uOC0xLjkgMC0xIC41LTEuOCAxLTIuMy44LS42IDEuOC0uNyAyLjYtLjcuNyAwIDEuOS4xIDMuMiAxLjFsLTEuNCAxLjZ6bTYuMS0xLjFjMS0xLjQgMi40LTEuNiAzLjItMS42IDIuOSAwIDQuOSAyLjMgNC45IDUuM3MtMiA1LjMtNSA1LjNjLS42IDAtMi4xLS4xLTMuMi0xLjZWMjJIODNWNS4yaDIuOHY4LjF6bS0uMyAzLjdjMCAxLjYgMS4xIDIuOCAyLjggMi44IDEuNiAwIDIuOC0xLjIgMi44LTIuOCAwLTEuNi0xLjEtMi44LTIuOC0yLjgtMS43IDAtMi44IDEuMi0yLjggMi44em0xMyAzLjVMOTMuNyAxMkg5N2wzLjEgNS43IDIuOC01LjdoMy4ybC04IDE1LjNoLTMuMmwzLjYtNi44ek01NCAxMy43aC03djIuOGgzLjdjLS42IDEuOS0yIDMuMi00LjYgMy4yLTIuOSAwLTUtMi40LTUtNS4zUzQzLjEgOSA0NiA5YzEuNiAwIDMuMi44IDQuMiAyLjFsMi4zLTEuNUM1MSA3LjUgNDguNiA2LjMgNDYgNi4zYy00LjQgMC04IDMuNi04IDguMXMzLjQgOC4xIDggOC4xIDgtMy42IDgtOC4xYy4xLS4zIDAtLjUgMC0uN3pNMjUgMTRoLTd2Mmg0LjhjLS43IDMtMi45IDUuNS01LjggNi41TDUuNSAxMWMxLjItMy41IDQuNi02IDguNS02IDMgMCA1LjcgMS41IDcuNCAzLjhsMS41LTEuM0MyMC45IDQuOCAxNy43IDMgMTQgMyA4LjggMyA0LjQgNi43IDMuMyAxMS42bDEzLjIgMTMuMkMyMS4zIDIzLjYgMjUgMTkuMiAyNSAxNHptLTIyIC4xYzAgMi44IDEuMSA1LjUgMy4yIDcuNiAyLjEgMi4xIDQuOSAzLjIgNy42IDMuMkwzIDE0LjF6Ii8+CiAgPHBhdGggZD0iTTE0IDBDNi4zIDAgMCA2LjMgMCAxNHM2LjMgMTQgMTQgMTQgMTQtNi4zIDE0LTE0UzIxLjcgMCAxNCAwek02LjIgMjEuOEM0LjEgMTkuNyAzIDE2LjkgMyAxNC4yTDEzLjkgMjVjLTIuOC0uMS01LjYtMS4xLTcuNy0zLjJ6bTEwLjIgMi45TDMuMyAxMS42QzQuNCA2LjcgOC44IDMgMTQgM2MzLjcgMCA2LjkgMS44IDguOSA0LjVsLTEuNSAxLjNDMTkuNyA2LjUgMTcgNSAxNCA1Yy0zLjkgMC03LjIgMi41LTguNSA2TDE3IDIyLjVjMi45LTEgNS4xLTMuNSA1LjgtNi41SDE4di0yaDdjMCA1LjItMy43IDkuNi04LjYgMTAuN3oiIGZpbGw9IiM2MzkiLz4KPC9zdmc+Cg==',
            background: 'dark'
        },
        {
            name: 'Next.js',
            url: 'https://nextjs.org/',
            image: 'https://damiandeluca.com.ar/wp-content/uploads/2019/07/cropped-next-js.png',
            background: 'ligth'
        },
        {
            name: 'Python',
            url: 'https://www.python.org/',
            image: 'https://www.python.org/static/img/python-logo.png',
            background: 'dark'
        },
        {
            name: 'PHP',
            url: 'https://www.php.net/',
            image: 'https://www.php.net/images/logos/php-logo.svg',
            background: 'ligth'
        },
        {
            name: 'Ionic',
            url: 'https://ionicframework.com/',
            background: 'dark',
            image: 'https://1.bp.blogspot.com/-FSP5WOusVAI/WiqqkqqFNVI/AAAAAAAACTs/C1R1vMKS1kIab9jHT_hHoUVD7PvyjNGnQCLcBGAs/s1600/1_ypyKHfdnTbM-DZG-nZ5tRg.png'
        },
        {
            name: 'React Native',
            url: 'https://reactnative.dev/',
            background: 'ligth',
            image: 'https://tech.tribalyte.eu/wp-content/uploads/2018/05/ionic.png'
        },
        {
            name: 'SailsJS',
            url: 'https://sailsjs.com/',
            background: 'dark',
            image: 'https://sailsjs.com/images/logo_sails.png'
        },
        {
            name: 'Express',
            url: 'https://expressjs.com/es/',
            background: 'ligth',
            image: 'https://camo.githubusercontent.com/fc61dcbdb7a6e49d3adecc12194b24ab20dfa25b/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67'
        },
        {
            name: 'MySQL',
            url: 'https://www.mysql.com/',
            background: 'dark',
            image: 'https://cdn.worldvectorlogo.com/logos/mysql.svg'
        },
        {
            name: 'MongoDB',
            url: 'https://www.mongodb.com/',
            background: 'ligth',
            image: 'https://www.josebernalte.com/wp-content/uploads/2018/02/mongoDB.png'
        },
        {
            name: 'Vercel',
            url: 'https://vercel.com/',
            background: 'dark',
            image: 'https://blogwp.geek.co.jp/wp/wp-content/uploads/2019/09/now.png'
        },
    ]
}