


export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const CLEAN_VIDEOGAME_DETAIL = "CLEAN_VIDEOGAME_DETAIL";
export const CLEAN_VIDEOGAMES = "CLEAN_VIDEOGAMES";
export const GET_SOURCES = "GET_SOURCES";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const CHANGE_STATE_SEARCH = "CHANGE_STATE_SEARCH";
export const CHANGE_PAGE = "CHANGE_PAGE";





const urlGames =
  "https://videogames-project-backend.vercel.app/videogames";
const urlGenres =
  "https://videogames-project-backend.vercel.app/genres";
const urlPlatforms =
  "https://videogames-project-backend.vercel.app/platforms";

export const getVideogames = (page = 1, size = 15) => {
  return async (dispatch) => {
    const response = await fetch(`${urlGames}?page=${page}&size=${size}`);
    const data = await response.json();
    if (data.gamesData.length === 0) window.alert("no more games");
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData,
    });
  };
};

export const getVideogameDetail = (id) => {
  return async (dispatch) => {
    const response = await fetch(`${urlGames}/${id}`);
    const data = await response.json();
    
    dispatch({
      type: GET_VIDEOGAME_DETAIL,
      payload: data,
    });
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    const response = await fetch(`${urlGenres}`);
    const data = await response.json()
     if (data.length === 0) window.alert("no more games");
    dispatch({
      type: GET_GENRES,
      payload: data,
    });
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    const response = await fetch(`${urlPlatforms}`);
    const data = await response.json();
    if (data.length === 0) window.alert("no more games");
    dispatch({
      type: GET_PLATFORMS,
      payload: data,
    });
  };
};

export const getVideogamesByName = (name) => {
  return async (dispatch) => {
    try{
    const response = await fetch(`${urlGames}?name=${name.toLowerCase()}`);
    const data = await response.json();
    if(data.length===0) window.alert(`video game ${name} not found`)
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data,
    });
  }catch(error){
    window.alert(`video game ${name} not found`)
  }
}
};

export const getVideogamesByGenre = (genre, page = 1, size = 15) => {
  return async (dispatch) => {
    const response = await fetch(
      `${urlGames}?filterByGenre=${genre.toLowerCase()}&page=${page}&size=${size}`
    );
    const data = await response.json();
     if (!data.gamesData) window.alert(`videogames not found with this genre ${genre} and this page ${page}`);
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData? data.gamesData : [],
    });
  };
};

export const getVideogamesByPlatform = (platform, page = 1, size = 15) => {
  return async (dispatch) => {
    const response = await fetch(
      `${urlGames}?filterByPlatform=${platform.toLowerCase()}&page=${page}&size=${size}`
    );
    const data = await response.json();
    if (!data.gamesData) window.alert(`videogames not found with this platform ${platform} and this page ${page}`);
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData? data.gamesData : [],
    });
  };
};

export const getVideogamesBySource = (source, page = 1, size = 15) => {
  return async (dispatch) => {
    const response = await fetch(
      `${urlGames}?filterBySource=${source.toLowerCase()}&page=${page}&size=${size}`
    );
    const data = await response.json();
    if (!data.gamesData) window.alert(`videogames not found with this source ${source} and this page ${page}`);
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData? data.gamesData : [],
    });
  };
};

export const getVideogamesByGenreAndSource = (
  genre,
  source,
  page = 1,
  size = 15
) => {
  return async (dispatch) => {
    const response = await fetch(
      `${urlGames}?filterByGenre=${genre.toLowerCase()}&filterBySource=${source.toLowerCase()}&page=${page}&size=${size}`
    );
    const data = await response.json();
      if (!data.gamesData) window.alert(`videogames not found with this genre ${genre} and this source ${source} and this page ${page}`);   
    
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData? data.gamesData : [],
    });
  };
};

export const getVideogamesByPlatformAndSource = (
  platform,
  source,
  page = 1,
  size = 15
) => {
  return async (dispatch) => {
    const response = await fetch(
      `${urlGames}?filterByPlatform=${platform.toLowerCase()}&filterBySource=${source.toLowerCase()}&page=${page}&size=${size}`
    );
    const data = await response.json();
    if (!data.gamesData) window.alert(`videogames not found with this platform ${platform} and this source ${source} and this page ${page}`);
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData? data.gamesData : [],
    });
  };
};

export const getVideogamesByGenreAndPlatform = (
  genre,
  platform,
  page = 1,
  size = 15
) => {
  return async (dispatch) => {
    const response = await fetch(
      `${urlGames}?filterByGenre=${genre.toLowerCase()}&filterByPlatform=${platform.toLowerCase()}&page=${page}&size=${size}`
    );
    const data = await response.json();
    if (!data.gamesData) window.alert(`videogames not found with this genre ${genre} and this platform ${platform} and this page ${page}`);
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData? data.gamesData : [],
    });
  };
};

export const getVideogamesByGenreAndPlatformAndSource = (
  genre,
  platform,
  source,
  page = 1,
  size = 15
) => {
  return async (dispatch) => {
    const response = await fetch(
      `${urlGames}?filterByGenre=${genre.toLowerCase()}&filterByPlatform=${platform.toLowerCase()}&filterBySource=${source.toLowerCase()}&page=${page}&size=${size}`
    );
    const data = await response.json();
    if (!data.gamesData) window.alert(`videogames not found with this genre ${genre} and this platform ${platform} and this source ${source} and this page ${page}`);
      
    dispatch({
      type: GET_VIDEOGAMES,
      payload: data.gamesData? data.gamesData : [],
    });
  };
};

export const cleanVideogameDetail = () => {
  return {
    type: CLEAN_VIDEOGAME_DETAIL,
  };
};

export const cleanVideogames = () => {
  return {
    type: CLEAN_VIDEOGAMES,
  };
};




export const changeStateSearch = (state) => {
  return {
    type: CHANGE_STATE_SEARCH,
    payload: state
  };
}

export const changeFilter = (data) => {
  
  return {
    type: CHANGE_FILTER,
    payload: data
  };
}

export const orderBy = (games) => {
  return {
    type: GET_VIDEOGAMES,
    payload: games
  };

}

export const changePage = (page) => {
  return {
    type: CHANGE_PAGE,
    payload: page
  };
}