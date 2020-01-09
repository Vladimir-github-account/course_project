export default async function loadJson(url, options){
  try {
    const response = await fetch(url, options);
    return response.json();
  } catch(e) {
    console.error(e);
  }
}