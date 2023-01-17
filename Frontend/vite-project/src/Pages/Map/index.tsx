import { GoogleMap,useJsApiLoader, MarkerF } from '@react-google-maps/api';
import { useEffect ,useContext} from 'react';
import { FgAtlasContexts } from "../../Contexts"
import styled from 'styled-components';
import Loading from '../../Components/Loading';
import SubjectInfos from '../../Components/SubjectsInfos';

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

export default function Map() {
    const { 
      subjectPlaceInfo, 
      getSubjects, 
      subjectsInfos, 
    } = useContext(FgAtlasContexts);

    useEffect(() => {
      getSubjects();
    },[]);  

    const {isLoaded} = useJsApiLoader({
        id:"google-map-script",
        googleMapsApiKey:"AIzaSyDa3iBeFvaccXIS0lAAMZUhRdBl_Mof72Q"
    })

    const center = {
      lat: -15.98973715145267,
      lng: -48.04470473324397
    };

    // console.log(subjectPlaceInfo.room)

    return (
      <div>
          {isLoaded ? ( 
          <Container>
            <SideBar>
              <p>Selecione a turma para ver no mapa:</p>
                  <List>
                    {subjectsInfos.length != undefined ?
                        (
                            subjectsInfos.map((info: any) => {
                                return (
                                    <SubjectInfos props={info}/>
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
                subjectPlaceInfo.room != undefined ? 
                <MarkerF position={{lat: subjectPlaceInfo.room[0].latitude, lng: subjectPlaceInfo.room[0].longitude}}/>
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