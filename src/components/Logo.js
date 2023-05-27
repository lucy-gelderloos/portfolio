import React from "react";

// this takes props (color, complexity) and renders the appropriate svg logo
// should size be controlled here or by the logo's container div? for now I'm thinking container div
class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.mainColor = "";
        this.shadow = false;
        this.shadowColor = "";
        this.complex = false;
        this.accentColor = "";
        this.outline = false;
        this.outlineColor = "";
        this.outlineAccent = "";
        this.outlineAccentColor = "";
    }

    render() {
        return(
            <div className="project">

            </div>
        );
    }

}

export default Logo;
