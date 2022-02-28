import React, { useState, useEffect, useCallback, useRef } from 'react'
import { compose, withProps } from 'recompose'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps'

import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox'
import { Card } from '@material-ui/core'

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
        loadingElement: <div className="h-full" />,
        containerElement: <div className="h-400" />,
        mapElement: <div className="h-full" />,
    }),
    withScriptjs,
    withGoogleMap
)(({defaultCenter, position, displayText, onMarkerClick}) => (
    <GoogleMap defaultZoom={8}
    defaultCenter={{ lat: defaultCenter?.lat || -34.397, lng: defaultCenter?.lng || 150.644 }}
    >
        <Marker
            isMarkerShown={false}
            position={{ lat: position?.lat || -34.397, lng: position?.lng || 150.644 }}
            onClick={onMarkerClick}
        >
            <InfoBox
                options={{ closeBoxURL: ``, enableEventPropagation: true }}
            >
                <Card className="p-4">
                    <p className="whitespace-pre m-0">{displayText || 'Hello World'}</p>
                </Card>
            </InfoBox>
        </Marker>
    </GoogleMap>
))

const MarkerMap = (props) => {
    const timer = useRef(null)
    const [isMarkerShown, setIsMarkerShown] = useState(false)

    const delayedShowMarker = useCallback(() => {
        timer.current = setTimeout(() => {
            setIsMarkerShown(true)
        }, 3000)
    }, [])

    const handleMarkerClick = () => {
        setIsMarkerShown(false)
        delayedShowMarker()
    }

    useEffect(() => {
        delayedShowMarker()
        return () => {
            if (timer.current) clearTimeout(timer.current)
        }
    }, [delayedShowMarker])

    return (
        <MyMapComponent
            isMarkerShown={isMarkerShown}
            onMarkerClick={handleMarkerClick}
            {...props}
        />
    )
}

export default MarkerMap
