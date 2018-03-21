const header = React.DOM.header;
const h1 = React.DOM.h1;
const p = React.DOM.p;
const section = React.DOM.section;
const h2 = React.DOM.h2;
const article = React.DOM.article;
const h3 = React.DOM.h3;
const aside = React.DOM.aside;
const h4 = React.DOM.h4;
const hr = React.DOM.hr;
const ul = React.DOM.ul;
const li = React.DOM.li;
const a = React.DOM.a;

//const div = React.DOM.div;

function Header() {
    const titulo = 'Getting Started';
    const parrafo = 'Descripción';

    const elemento = header(null,
        h1(null, titulo), p(null, parrafo)
    );
    return elemento;
};

function Section() {
    const textH2 = 'Main Section';
    const textH3Uno = 'Título 1';
    const textPUno = 'Descripcion 1';
    const textH3Dos = 'Título 2';
    const textPDos = 'Descripcion 2';
    const textH3Tres = 'Título 3';
    const textPTres = 'Descripcion 3';

    const elementoSection = section({ id: "main", style: { width: "70%", float: "left" } },
        h2(null, textH2), article(null,
            h3(null, textH3Uno), p(null, textPUno), hr(null, null)), article(null,
            h3(null, textH3Dos), p(null, textPDos), hr(null, null)), article(null,
            h3(null, textH3Tres), p(null, textPTres), hr(null, null))
    );
    return elementoSection;
};

function Aside() {
    const textH4 = 'Links';
    const a1 = 'Link 1';
    const a2 = 'Link 2';
    const a3 = 'Link 3';
    const a4 = 'Link 4';
    const a5 = 'Link 5';

    const elementoAside = aside({ style: { width: "25%", float: "right" } },
        h4(null, textH4), ul(null, li(null, a({ href: "#" }, a1)),
            li(null, a({ href: "#" }, a2)),
            li(null, a({ href: "#" }, a3)),
            li(null, a({ href: "#" }, a4)),
            li(null, a({ href: "#" }, a5)),
        ));

    return elementoAside;
};

function Cabecera() { //funcion que va a contener todas las funciones anteriores, para llamar sólo esta funcion en el render
    const container = React.DOM.div;

    return container(null, Header(), Section(), Aside());
};



ReactDOM.render(
    Cabecera(),
    document.getElementById('react-container'),
);