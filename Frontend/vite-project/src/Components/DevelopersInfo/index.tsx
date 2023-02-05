import { Typography } from '@mui/material';
import Image from '../ImageDeveloperInfo';
import { styles } from './styleds/muiStyles';
import Styles from './styleds/styles';

export default function DevelopersInfo (props:any) {
  return (
    <Styles.Container>
        <a href={props.link} target='_blank'><Image img={props.image}/></a>
      <Typography sx={styles.developerInfo}> Estudante de Engenharia de Software</Typography>
    </Styles.Container>
  );
}
