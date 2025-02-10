const reactElement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector("#root");

function customRender(reactElement,container)
{
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children;
    /*
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */
   for(const prop in reactElement.props)
   {
      if(prop===reactElement.children)
        continue;
       domElement.setAttribute(prop,reactElement.props[prop])
   }
    container.appendChild(domElement)
}

customRender(reactElement,mainContainer)

