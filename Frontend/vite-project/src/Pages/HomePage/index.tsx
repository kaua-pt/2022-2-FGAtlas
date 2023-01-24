//Colocar link nos botões

import Style from "./style"
import Logo from './../../Images/Logo.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import buttonTheme from "../../GlobalStyles/ButtonStyle/themes";
import { TfiEmail, TfiGithub } from "react-icons/tfi";
import { ThemeProvider, Typography } from "@mui/material";
import DevelopersInfo from "../../Components/DevelopersInfo";
import muiStyle from "../../GlobalStyles/ButtonStyle/muiStyles";
import arrayImagesDevelopers from "./arrayImagesDevelopers";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
const navigate = useNavigate();

    return (
        <>
            <Style.FirstPart>
                <Style.ToolBar>
                    <img src={Logo} alt="Logo"/>
                    <div className="links">
                        <p onClick={() => window.scrollTo(0, 2000)}>Contato</p>
                        <p onClick={() => window.scrollTo(0, 1000)}>Sobre</p>
                        <p onClick={() => navigate('/map')}>Mapa</p>
                    </div>
                </Style.ToolBar>
                <Style.Left>
                    <div className="image"></div>
                </Style.Left>
                <Style.Right>
                    <div>
                        <p>
                            Olá, somos a FGAtlas, uma página na qual você pode consultar aonde está a localização da sua 
                            sala na FGA-UNB, para isto, apenas clique no botão abaixo e selecione sua turma!!
                        </p>

                        <ThemeProvider theme={buttonTheme}>
                            <Stack direction="row" spacing={2}>
                                <Button onClick={() => navigate('/map')} variant="contained" sx={muiStyle.style.button}>Encontrar sala</Button>
                            </Stack>
                        </ThemeProvider>
                    </div>
                </Style.Right>
            </Style.FirstPart>
            <Style.Container>
        <Style.ContainerAbout>
            <Typography sx={muiStyle.style.firstText}>
                FGAtlas é um projeto web que fornece a localização dos prédios e salas da FGA, a fim de auxiliar calouros e veteranos a encontrarem os locais onde terão suas aulas. A ideia surgiu após a equipe realizar, em grupos da faculdade, uma pesquisa via forms na qual questionava os estudantes qual era a maior dificuldade dos mesmos no campus, a grande parte das respostas foram direcionadas à questões envolvendo localização. Nosso time de desenvolvimento:
            </Typography>
            <Style.DevelopersContainer>
                {arrayImagesDevelopers.map((obj:any, index:number) => 
                  <DevelopersInfo image={obj.image} link={obj.link}></DevelopersInfo>
                )}
            </Style.DevelopersContainer>
            </Style.ContainerAbout>
            
        </Style.Container>
        <Style.Footer>
                <div>
                    <h1><TfiEmail/><span/> fgatlas@gmail.com</h1>
                    <h1><TfiGithub /><span/>fga-eps/2022-2-Squad04</h1>
                </div>
            </Style.Footer> 
        </>
    )
}