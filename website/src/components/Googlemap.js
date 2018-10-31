import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import '../index.css';

const AnyReactComponent = ({text}) => <div>{text}</div>

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 43.60,
            lng: -79.59
        },
        zoom: 14
    };

    render() {
        return (
            <div className='mapcontainer'>
                <GoogleMapReact
                    bootstrapURLKeys = {{
                        key: 'my key'
                    }}
                    defaultCenter = {this.props.center}
                    defaultZoom = {this.props.zoom}
                >
                    <AnyReactComponent
                        lat = {43.6048}
                        lng = {-79.5907}
                        text = {'PCCSH, Mississauga, ON'}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;