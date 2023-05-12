import styles from './SobreMim.module.css';

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Anderson!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Anderson Roberto da Silva sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, como vai!? Espero que esteja maravilhosamente bem! Estou muito animado(a) em compartilhar um pouco sobre mim com você!
            </p>

            <p className={styles.paragrafo}>
                Como estudante de Engenharia de Software, sempre tive um forte interesse em tecnologia e desenvolvimento de software. Recentemente, optei por me especializar como desenvolvedor Front End por meio do programa ONE (Oracle Next Education), oferecido pela parceria entre as empresas Oracle e Alura.
            </p>

            <p className={styles.paragrafo}>
                No entanto, minha jornada não foi linear. Em 2017, concluí um curso de Web Design e comecei a explorar minhas habilidades nessa área. Mas, devido às necessidades da região, acabei voltando meus estudos para a área industrial, realizando cursos técnicos em Química e Mecânica Agrícola.
            </p>

            <p className={styles.paragrafo}>
                Mas nunca perdi de vista meu objetivo de trabalhar como desenvolvedor Front End. Em 2021, ingressei no cargo de Lubrificador Industrial, mas planejei cuidadosamente minha saída em dezembro de 2022 para me dedicar integralmente aos estudos em programação. Sou uma pessoa comprometida e dedicada, e estou sempre em busca de novos desafios e oportunidades de aprendizado para alcançar meu objetivo.
            </p>

            <p className={styles.paragrafo}>
                Ao longo dos anos, tenho me esforçado para aprender tudo o que posso sobre desenvolvimento Front End, incluindo HTML, CSS, JavaScript e outras tecnologias relevantes. Além disso, participei de projetos em equipe para aprimorar minhas habilidades de comunicação e colaboração, sempre buscando feedback construtivo para me aperfeiçoar.
            </p>

            <p className={styles.paragrafo}>
                Minha paixão pela área de desenvolvimento Front End continua crescendo a cada dia, e estou animado(a) com as oportunidades que surgem no mercado de trabalho. Estou disposto(a) a trabalhar duro e a aprender continuamente para me tornar um desenvolvedor Front End altamente qualificado, capaz de criar experiências incríveis para os usuários e ajudar a construir um futuro digital melhor para todos. Acredito que minha determinação, perseverança e comprometimento me levarão ao sucesso nessa área, e mal posso esperar para começar essa jornada emocionante!
            </p>


        </PostModelo>
    )
}