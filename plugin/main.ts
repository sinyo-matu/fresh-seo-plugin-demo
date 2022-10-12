export default function main(config:Config) {
    const pathname = document.location.pathname;
    createNameMetaElement("description",config.routes[pathname].description);
    createNameMetaElement("keyword",config.routes[pathname].title);
    createPropertyMetaElement("og:url",document.location.href);

}
function createNameMetaElement(metaName:string,attrContent:string){
    const el = document.createElement("meta");
    el.setAttribute("name",metaName);
    el.setAttribute("content",attrContent);
    document.head.appendChild(el);
}
function createPropertyMetaElement(metaProperty:string,attrContent:string){
    const el = document.createElement("meta");
    el.setAttribute("property",metaProperty)
    el.setAttribute("content",attrContent);
    document.head.appendChild(el);
}


export interface Config {
    routes:Record<string,PageMeta>
    selfURL:string
}

export interface PageMeta {
    title:string,
    description:string
}