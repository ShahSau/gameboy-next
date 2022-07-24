const Details=({detail, slicedArray})=> {
  return (
    <div>
        {/*Create a go to homepage button */}
        {detail.title}
        {slicedArray.map(result => (
            result.title !== detail.title &&
            <h2>{result.title}</h2>
        ))}
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
    const tags =['mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports','social',
                 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel',
                'zombie', 'turn-based', 'first-person', 'third-Person','top-down', 
                'tank', 'space', 'sailing', 'side-scroller', 'superhero','permadeath',
                'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime',
                'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action','military', 
                'martial-arts', 'flight', 'low-spec', 'tower-defense', 'horror','mmorts']
    //getting the details of the game
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '09cfa80fdfmshfab9bb2e6524034p10409ejsn8327b13fb216',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};  
    const res = await fetch(url, options)
                .then(res => res.json())
    
    // getting the similar games
    const tag = tags.includes(res.genre.toLowerCase()) ? res.genre.toLowerCase() : tags[Math.floor(Math.random() * (tags.length - 1) + 1)]
    const url2 = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${tag}`;
    const more= await fetch(url2, options)
                .then(res => res.json())
    const slicedArray = more.slice(0, 5);



    return {
      props: {
        detail: res,
        slicedArray:slicedArray,
      },
    };
	
  };

export default Details