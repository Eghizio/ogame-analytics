// todo: move to /api ?
export const BASE_URL = "http://werseter.ddns.net:3008";

export const ENDPOINTS = {
    alliances:      `${BASE_URL}/api/alliances`,    //Updateinterval 1 day
    highscore:      `${BASE_URL}/api/highscore`,    //Updateinterval 1 hour
    localization:   `${BASE_URL}/api/localization`, //Updateinterval 1 day
    playerData:     `${BASE_URL}/api/playerData`,   //Updateinterval 1 week
    players:        `${BASE_URL}/api/players`,      //Updateinterval 1 day
    serverData:     `${BASE_URL}/api/serverData`,   //Updateinterval 1 day
    universe:       `${BASE_URL}/api/universe`,     //Updateinterval 1 week
    universes:      `${BASE_URL}/api/universes`
} as const;