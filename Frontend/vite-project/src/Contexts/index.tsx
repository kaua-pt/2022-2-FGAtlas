import React, { createContext, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const URL = "https://backend-fgatlas.onrender.com"

export const FgAtlasContexts = React.createContext<any | null>(null);;

type ButtonProps = {
    children: React.ReactNode;
  };

export const FgAtlasProvider: React.FunctionComponent<ButtonProps> = ({ children }) => {

    const [ subjectsInfos, setSubjectsInfos ] = useState({});
    const [ subjectChoosed, setSubjectChoosed ] = useState({name: null, id: null})
    const [ subjectPlaceInfo, setSubjectPlaceInfo ] = useState({});
    const [buildingsInfo, setBuildingInfo] = useState({});
    const [ buildingChoosed, setBuildingChoosed ] = useState({name: null});
    const [ buildingPlaceInfo, setBuildingPlaceInfo ] = useState({});
    console.log(buildingPlaceInfo)

    const getSubjects = () => {
        axios.get(`${URL}/api/subject/`)
        .then((answer) => {setSubjectsInfos(answer.data)})
        .catch((e) => console.log(e.response.data))
    }

     const getSubjectLocalization = (id: number) => {
        axios.get(`${URL}/api/class/${id}`)
        .then((answer) => {
            console.log(answer.data);
            setSubjectPlaceInfo(answer.data)
           })
        .catch((e)=>{console.log(e.response.data)})
    }

    const getBuildings = () => {
      axios.get(`${URL}/api/building/`)
        .then((answer) => {setBuildingInfo(answer.data)})
        .catch((e) => console.log(e.response.data))
    }

    const getBuildingLocalization = (name: string) => {
        axios.get(`${URL}/api/rooms/${name}`)
        .then((answer) => {
            setBuildingPlaceInfo(answer.data)
           })
        .catch((e)=>{console.log(e.response.data)})
    }

    return (
        <FgAtlasContexts.Provider
            value = {{
                subjectsInfos,
                getSubjects,
                setSubjectChoosed,
                subjectChoosed,
                getSubjectLocalization,
                subjectPlaceInfo,
                setSubjectPlaceInfo,
                getBuildings,
                buildingsInfo,
                setBuildingInfo,
                buildingChoosed,
                setBuildingChoosed,
                buildingPlaceInfo,
                setBuildingPlaceInfo,
                getBuildingLocalization,
            }}>
                { children }
        </FgAtlasContexts.Provider>
    )
}
