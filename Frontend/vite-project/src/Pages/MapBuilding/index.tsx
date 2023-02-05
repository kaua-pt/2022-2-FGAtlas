import { GoogleMap,useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useEffect ,useContext} from 'react';
import { FgAtlasContexts } from "../../Contexts"
import styled from 'styled-components';
import Loading from '../../Components/Loading';
import SubjectInfos from '../../Components/SubjectsInfos';
import BuildingsInfos from '../../Components/BuildingsInfo';

interface room {
  identification:string ,
  level: number,
  latitude:number,
  longitude: number,
  buildingName: string
}

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

export default function MapBuilding() {
    const { 
      getBuildings,
      buildingsInfo,
      buildingPlaceInfo,
    } = useContext(FgAtlasContexts);

    useEffect(() => {
      getBuildings();
    },[]);  

    const {isLoaded} = useJsApiLoader({
        id:"google-map-script",
        googleMapsApiKey:"AIzaSyDa3iBeFvaccXIS0lAAMZUhRdBl_Mof72Q"
    })

    const center = {
      lat: -15.98973715145267,
      lng: -48.04470473324397
    };

    return (
      <div>
          {isLoaded ? ( 
          <Container>
            <SideBar>
              <p>Selecione o prédio para ver no mapa:</p>
                  <List>
                    {buildingsInfo.length != undefined ?
                        (
                            buildingsInfo.map((info: any, i: number) => {
                                return (
                                    <BuildingsInfos props={info} key={i}/>
                                )
                            })
                        )
                    : 
                        (
                            
                            <div className="load_component">
                                <Loading />
                            </div>
                        )
                    }
                  </List>
            </SideBar>
          <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}>
              {
                buildingPlaceInfo.length != undefined ? 
                buildingPlaceInfo.map((info: any) => {
                    return (
                        <MarkerF position={{lat: info.latitude, lng: info.longitude}}/>
                        )
                  
                })
                :
                <></>
              }
          </GoogleMap>
          </Container>
          )          
          :
          (<h1>Carregando</h1>)
          }

      </div>

    )
  }

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
`

const SideBar = styled.div`
  min-width: 20%;
  height: 100vh;
  padding: 20px;
  overflow-y: hidden;
`
const List = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-right: 20px;
`