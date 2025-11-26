import Navbar from "../../components/Navbar";
import { Content, ContentBox, Wrapper } from "./styles";

export function Home() {
    return (
        <Wrapper>
            <Navbar/>
            <Content>
                <ContentBox>
                    <h2>Bem-vindo!</h2>
                    <p>Esta aplicação contém as funcionalidades de:</p>
                    <ul>
                        <li>Contador</li>
                        <li>Cronômetro</li>
                    </ul>
                    <p>Fique à vontade para utilizá-las conforme a sua necessidade.</p>
                    <p>Para navegar entre as aplicações, utilize o navbar.</p>
                </ContentBox>
            </Content>  
        </Wrapper>
    )
}