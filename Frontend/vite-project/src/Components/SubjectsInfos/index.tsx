import style from "./style"
import Box from '@mui/material/Box';
import { Collapse,  } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from "react";
import { TfiAngleDown, TfiAngleRight } from "react-icons/tfi";
import FormGroup from '@mui/material/FormGroup';
import CheckBox from "../Checkbox";


export default function SubjectInfos(infos: any) {
    const [ checked, setChecked ] = useState(false);

    const { props } = infos;
    const { Class } = props;

    const handleChange = () => {
        setChecked(!checked);
    };

    const controlLabelStyle = {
        width: '100%', 
        boxSizing: 'border-box', 
        margin: '0px',
        color: 'white',
        backgroundColor: '#E9932E',
        padding: '10px',
        borderRadius: `${checked ? '5px 5px 0px 0px' : '5px'}`,
    }


    const formGroupSyle = {
        width: 'auto',
        color: 'white',
        margin: '0px',
    }

    return (
        <style.Card id='card-subject'>
            <Box sx={{ width: '100%', height: 'auto', h1: { paddingLeft: '10px', fontSize: '16px' }}} >
                <FormControlLabel
                    control={checked ? <TfiAngleDown /> : <TfiAngleRight />}
                    label={<h1>{props.name}</h1>}
                    sx = {controlLabelStyle}
                    onClick={handleChange}
                />
                <Box sx={{width:'100%', display: 'flex'}}>
                    <Collapse in={checked} sx={{ width: '100%'}}>
                        {
                            Class.map((infos: any, i: number) => {return (
                                <style.Infos key={i}>
                                    <FormGroup sx={{ width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CheckBox subjectName={props.name} subjectId={infos.id} style={formGroupSyle} label={undefined} />
                                    </FormGroup>
                                    <div className="general_information">
                                        <p>Professor: <b>{infos.teacher}</b></p>
                                        <p className="end">Horário: <b>{infos.timeAndDay}</b></p>
                                        <p className="end">Turma: <b>{infos.idClass}</b></p>
                                    </div>
                                </style.Infos>
                            )})
                        }
                        
                    </Collapse>
                </Box>
            </Box>
        </style.Card>
    )
}