const scrapeIt = require("scrape-it");

scrapeIt("http://www.nuestrasvoces.com.ar/category/investigaciones/", {
    // Lista Articulos
    articulos: {
        listItem: ".post"
      , data: {
 
            // Fecha publicada 
            fecha: {
                selector: ".post-author"
              
            }
 
            // Titulo 
          , titulo: ".post-title"
 
            // Categoria 
          , categoria: ".post-meta"
             
          
        }
    }
 
    // Paginas
  , pages: {
        listItem: "li.page"
      , name: "pages"
      , data: {
            title: "a"
          , url: {
                selector: "a"
              , attr: "href"
            }
        }
    }
 
    // 
  , title: ".header h1"
  , desc: ".header h2"
  , avatar: {
        selector: ".header img"
      , attr: "src"
    }
}, (err, page) => {
    console.log(err || page);
});
