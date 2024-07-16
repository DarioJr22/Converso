
//Tirei os dados porquê tinham dados sensíveis
//Se tu não tiver uma string pra converter pra xml e tiver só o xml, 
//usa da conversão pra frente minha bença.
const xmlString = ""

//Decodifique o string da maneira que lhe aprazir
const stringDecoded = xmlString
.replace(/&lt;/g,"<")
.replace(/&gt;/g,">")
.replace(/&quot;/g,"\"")
.replace(/&amp;/g, "&");

//Formatos indicados pelo gepeto 

const parser = new DOMParser();
const xmlDoc = parser.parseFromString(stringDecoded,'application/xml');


function xmlToJson(xml){
    let obj = {};

    // Tratando apenas elementos e garantindo que são elementos com filhos
    if (xml.nodeType === 1 && xml.hasChildNodes()) {
      const children = xml.childNodes;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.nodeType === 3) {  // Nó de texto
          const text = child.nodeValue.trim();
          if (text.length > 0) obj.text = (obj.text ? obj.text + ' ' : '') + text;  // Concatena textos se necessário
        } else if (child.nodeType === 1) {  // Nó de elemento
          const childJson = this.xmlToJson(child);
          if (obj[child.nodeName]) {
            if (!Array.isArray(obj[child.nodeName])) {
              obj[child.nodeName] = [obj[child.nodeName]];
            }
            obj[child.nodeName].push(childJson);
          } else {
            obj[child.nodeName] = childJson;
          }
        }
      }
    }
    return obj;
  }

xmlToJson(xmlDoc.documentElement)