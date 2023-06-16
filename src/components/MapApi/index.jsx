import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';


const MapApi = (titleCountry ) => {
    console.log(titleCountry.xСoordinate);
    {
        return (<>

{titleCountry.xСoordinate !== 0 &&

            <div className="justify-content-around m-0 p-0 mt-3 row">
                <YMaps>

                    <Map width="100%" height="25vh"
                        defaultState={{
                            center: [titleCountry.xСoordinate, titleCountry.yСoordinate],
                            zoom: 3,
                            controls: ["zoomControl", "fullscreenControl"],
                        }}
                        modules={["control.ZoomControl", "control.FullscreenControl"]}

                    >
                        <Placemark defaultGeometry={[titleCountry.xСoordinate, titleCountry.yСoordinate]} />
                    </Map>


                </YMaps>
            </div>
    }

    {titleCountry === 0 && 
    <div className="justify-content-around m-0 p-0 mt-3 row">
        </div>

    }
            <br />
        </>);
    }

};

export default MapApi