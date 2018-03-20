const data = {
    headerTitulo: 'Getting Started',
    headerDescripcion: 'Descripcion',
    mainSectionTitulo: 'Main Section',
    articles: [
      { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
      { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
      { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
    ],
    asideTitulo: 'Links',
    links: [
      { href: '#', texto: 'Link 1'},
      { href: '#', texto: 'Link 2'},
      { href: '#', texto: 'Link 3'},
      { href: '#', texto: 'Link 4'},
      { href: '#', texto: 'Link 5'}
    ],
  };

function Cabecera(props) {
    return (
        <header>
            <h1>{data.headerTitulo}</h1>
            <h2>{data.headerDescripcion}</h2>
            <h3>{data.mainSectionTitulo}</h3>
            <div>{data.articles[0].descripcion}</div>
            <div>{data.articles[0].titulo}</div>
            <div>{data.articles[1].titulo}</div>
            <div>{data.articles[2].titulo}</div>
            <h3>{data.asideTitulo}</h3>
            
        </header>
    )
}
      
ReactDOM.render(
    <Cabecera
          headerTitulo={data.headerTitulo}
          headerDescripcion={data.headerDescripcion}
          mainSectionTitulo={data.mainSectionTitulo}
          mainSectionArticles={data.articles}
          asideTitulo={data.asideTitulo}
          asideLinks={data.links}
        />,
        document.getElementById('container')
);