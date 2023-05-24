import React from 'react';

class Main extends React.Component {

    constructor(props){
        super(props);
        this.state={
            error: false,
            searchFor: '',
            cityName: '',
            lat: '',
            lon: '',
            forecast: [],
            movies: []
        };
        this.locationApiKey = process.env.REACT_APP_LOCATION_IQ_API_KEY;
        this.locationUrl = "https://us1.locationiq.com/v1/search.php?format=json";
        // this.locationUrl = process.env.REACT_APP_LOCATION_IQ_URL;
        this.server = process.env.REACT_APP_SERVER_LOCAL;
        // this.server = process.env.REACT_APP_SERVER_REMOTE;
        this.forecastArr = [];
    }

    render() {
        return (
        <div className="Main">
            <h1>The main div!</h1>
        </div>
        )
    }
}

export default Main;