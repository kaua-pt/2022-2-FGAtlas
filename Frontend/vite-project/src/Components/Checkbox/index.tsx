import { Checkbox, FormControlLabel } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FgAtlasContexts } from "../../Contexts";

export default function CheckBox(infos: any) {
    const { label, style, subjectId, subjectName } = infos;
    const { 
        setSubjectChoosed, 
        subjectChoosed, 
        getSubjectLocalization,
        setSubjectPlaceInfo
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
        if(subjectChoosed.id == subjectId) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    },[subjectChoosed.id]);

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
                selectSubject();
            }}
            />} 
        />
    )

}