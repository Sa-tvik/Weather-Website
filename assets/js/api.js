'use strict';

const api_key = "2487fa140142185045761d3e79015c3e";

/**
 * Fetch data from server
 * @param {string} URL  API
 * @param {function} callback  callback
 */

// export const fetchData = function(URL, callback){
//     fetch(`${URL}&appid=${api_key}`)
//         .then(res => res.json())
//         .then(data => callback(data));
// } 

export const fetchData = function(URL, callback){
    fetch(`${URL}&appid=${api_key}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => callback(data))
        .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can pass the error to the callback function
            // callback(null, error);
        });
}


export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat, lon){
        return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon){
        return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * 
     * @param {string} query Search query ex: "London," "New York"
     * @returns 
     */
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}