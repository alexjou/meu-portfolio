import Portfolio from "./img/Portfolio.jpg";
import MeuDinDin from "./img/meudindin.png";
import Doclist from "./img/doclist.png";
import Climao from "./img/web.gif";

const SpData = [
  {
    title: "Meu primeiro Portfolio",
    desc:
      "Desenvolvi em ReacJS, tanto para aprendizado quanto para exibir minhas habilidades.",
    link: "https://alexjou.github.io/portfolio",
    src: Portfolio,
    animate: "fade-right",
  },
  {
    title: "Doclist App",
    desc: "Aplicativo para administrar pacientes.",
    link: "",
    src: Doclist,
    animate: "fade-left",
  },
  {
    title: "Meu DinDin App",
    desc: "Aplicativo para controle financeiro.",
    link: "http://bit.ly/MeuDinDin",
    src: MeuDinDin,
    animate: "fade-right",
  },
  {
    title: "Climão",
    desc:
      "Site responsivo que você pode ver os dados meteorológicos da sua localização ou de qualquer lugar do mundo.",
    link: "https://alexjou.github.io/climao/",
    src: Climao,
    animate: "fade-right",
  },
];
export default SpData;
