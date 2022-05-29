const getImagen = async() => {
    const apiKey = "gYdMLXhiFNYCA0Feh7k4bRcE4brjzJwF";
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const url = data.images.original.url;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
}

getImagen();
