const data = {
    headerTitulo: 'Getting Started',
    headerDescripcion: 'Descripcion',
    mainSectionTitulo: 'Main Section',
    articles: [
        { titulo: 'Titulo 1', descripcion: 'Descripcion 1' },
        { titulo: 'Titulo 2', descripcion: 'Descripcion 2' },
        { titulo: 'Titulo 3', descripcion: 'Descripcion 3' }
    ],
    asideTitulo: 'Links',
    links: [
        { href: '#', texto: 'Link 1' },
        { href: '#', texto: 'Link 2' },
        { href: '#', texto: 'Link 3' },
        { href: '#', texto: 'Link 4' },
        { href: '#', texto: 'Link 5' }
    ],
};

function Cabecera(props) {
    return ( <header>
        <h1> { data.headerTitulo } </h1>
        <h2> { data.headerDescripcion } </h2>
        <h3> { data.mainSectionTitulo } </h3>
        {props.mainSectionArticles.map(mainSectionArticles => {
            return <div>
            <h1>{mainSectionArticles.titulo}</h1>
            <p> {mainSectionArticles.descripcion} </p>
            </div>
        })}
        <h3> { data.asideTitulo } </h3>
        {props.links.map(link => {
            return <div>
                <a> {links.href} </a>
                 </div>
        })}
        </header>
    );
};

function Articles (props) {
return (
    <article></article>
)
}

ReactDOM.render( <
    Cabecera headerTitulo = { data.headerTitulo }
    headerDescripcion = { data.headerDescripcion }
    mainSectionTitulo = { data.mainSectionTitulo }
    mainSectionArticles = { data.articles }
    asideTitulo = { data.asideTitulo }
    asideLinks = { data.links }
    />,

    document.getElementById('container')
);