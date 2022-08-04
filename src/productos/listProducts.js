const listProducts = [
  {
    Id: 1,
    Modelo: "300",
    Marca: "Chrysler",
    Año: 2010,
    Stock: 25,
    Precio: 25945,
    Color: "Turquoise",
    img: "https://acnews.blob.core.windows.net/imgnews/extralarge/NAZ_509acbf3e75342a081f05102c15bc5a9.jpg",
  },
  {
    Id: 2,
    Modelo: "Tacoma",
    Marca: "Toyota",
    Año: 2002,
    Stock: 24,
    Precio: 23477,
    Color: "Indigo",
    img: "https://www.elcarrocolombiano.com/wp-content/uploads/2020/01/20200107-TOYOTA-PRODUCCION-DE-TACOMA-EN-GUANAJUATO-MEXICO-01.jpg",
  },
  {
    Id: 3,
    Modelo: "650",
    Marca: "BMW",
    Año: 2006,
    Stock: 29,
    Precio: 15818,
    Color: "Yellow",
    img: "https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20100120_0319/full.jpg",
  },
  {
    Id: 4,
    Modelo: "E250",
    Marca: "Ford",
    Año: 2007,
    Stock: 16,
    Precio: 11154,
    Color: "Gris",
    img: "https://www.manualesdetodo.net/wp-content/uploads/2021/05/e-2502010-r-1.jpg",
  },
  {
    Id: 5,
    Modelo: "Park Avenue",
    Marca: "Buick",
    Año: 1992,
    Stock: 22,
    Precio: 18725,
    Color: "Orange",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/16/2001_Buick_Park_Avenue.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listProducts);
    }, 500);
  });
};
