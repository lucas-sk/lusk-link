// buscar os links salvos 
export async function getLinksSave(key){
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// salvar um link no localstorage
export async function saveLink(key, newLink){
  let linksStored = await getLinksSave(key);

  // se já tiver um link salvo com algum id eu não vou deixa duplicar
  const hasLink = linksStored.some( Link=> Link.id === newLink.id);

  if(hasLink) {
    console.log('esse Link já existe na sua lista')
    return;
  }
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log('link salvo com sucesso');
}

// deletar algum link salvo

export function deleteLink(links, id){
  let myLinks = links.filter( item => {
    return (item.id !== id)
  });

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks));
  console.log('link deletado');

  return myLinks;
}