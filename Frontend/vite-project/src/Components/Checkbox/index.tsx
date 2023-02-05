import { Checkbox, FormControlLabel } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FgAtlasContexts } from "../../Contexts";

export default function CheckBox(infos: any) {
    const { label, style, subjectId, subjectName, buildingName, buildingId } = infos;

    const { 
        setSubjectChoosed, 
        subjectChoosed, 
        getSubjectLocalization,
        setSubjectPlaceInfo,
        buildingChoosed,
        setBuildingChoosed,
        getBuildingLocalization,
        setBuildingPlaceInfo,
     } = useContext(FgAtlasContexts);
    const [ checked, setChecked ] = useState(false);

    const checkBoxStyle = {
        color: '#black',
        '&.Mui-checked': {
          color: 'green',
        },
        '&.Mui-disabled': {
            color: 'grey'
        }
    }
    useEffect(() => {
        if(subjectChoosed.id == subjectId && buildingId == undefined) {   
            setChecked(true);
        } else if( buildingChoosed.name == buildingId && subjectId == undefined) {
            setChecked(true);
        }else {
            setChecked(false);
        }
    },[subjectChoosed.id, buildingChoosed.name]);

    function selectSubject() {
        if(subjectChoosed.id == subjectId) {
            setSubjectChoosed({name: null, id: null});
            setChecked(false);
            setSubjectPlaceInfo({});
        } else {
            setSubjectChoosed({name: subjectName, id: subjectId});
            getSubjectLocalization(subjectId);
        }
    }

    function selectBuilding() {
        console.log(buildingChoosed)
        if(buildingChoosed.name == buildingId) {
            setBuildingChoosed({name: null});
            setChecked(false);
            setBuildingPlaceInfo({});
        } else {
            setBuildingChoosed({name: buildingId});
            setBuildingPlaceInfo({});
            getBuildingLocalization(buildingId);
        }
    }

    return (
        <FormControlLabel 
        sx={style} 
        label={label} 
        control={
            <Checkbox 
            sx={checkBoxStyle} 
            disabled={false}
            checked={checked} 
            onClick={() =>{
                selectSubject(); selectBuilding();
            }}
            />} 
        />
    )

}