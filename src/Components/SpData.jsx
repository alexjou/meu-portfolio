import Portfolio from "./img/Portfolio.jpg";
import MeuDinDin from "./img/meudindin.jpg";
import MeuDinDinGif from "./img/meudindin.gif";

import Turismo from "./img/turismo.jpg";
import TurismoGif from "./img/turismo.gif";

import Doclist from "./img/doclist.jpg";
import DoclistGif from "./img/doclist.gif";

import BeneficiarioAppImg from "./img/caashbeneficiario.jpg";
import BeneficiarioAppGif from "./img/beneficiarioMobile.gif";
import BeneficiarioWebGif from "./img/beneficiarioWeb.gif";
import BeneficiarioWebImg from "./img/beneficiarioWeb.png";

import CredenciadoAppImg from "./img/caashcredenciado.jpg";
import CredenciadoAppGif from "./img/credenciadoMobile.gif";
import CredenciadoWebGif from "./img/credenciadoWeb.gif";
import CredenciadoWebImg from "./img/credenciadoWeb.png";

import Do2mepro from "./img/do2mepro.jpg";
import Do2meproGif from "./img/do2meProfessional.gif";
import Do2meclient from "./img/do2meclient.jpg";
import Do2meclientGif from "./img/do2meClient.gif";

import KakarecoImg from "./img/kakarecoWeb.png";
import KakarecoGif from "./img/kakareko.gif";

import Climao from "./img/climao.png";
import ClimaoGif from "./img/web.gif";

const SpData = [
  {
    title: "Meu primeiro Portfolio",
    desc: "Website desenvolvido em ReacJS, quando estava aprendendo.",
    descMore: "Desenvolvi em ReacJS, tanto para aprendizado quanto para exibir minhas habilidades.",
    link: "https://alexjou.github.io/portfolio",
    src: Portfolio,
    gifWeb: Portfolio,
    animate: "fade-right",
  },
  {
    title: "Doclist App",
    desc: "Aplicativo para administrar pacientes.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para os médicos administrarem seus pacientes. Salvando seus exames, diagnósticos, procedimentos, equipe médica e sua evolução.",
    link: "",
    src: Doclist,
    gifCell: DoclistGif,
    animate: "fade-left",
  },
  {
    title: "Caash Beneficiário App",
    desc: "Aplicativo para clientes beneficiários",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para clientes beneficiários, sendo possível ver descontos, localização e distância dos estabelecimentos, pagamento com QR-Code, recarga de celular, cartão de débito e crédito, integrado com 3 aplicações.",
    link: "",
    src: BeneficiarioAppImg,
    gifCell: BeneficiarioAppGif,
    animate: "fade-left",
  },
  {
    title: "Caash Dashboard Web",
    desc: "Website para gerenciamento dos clientes",
    descMore: "Website desenvolvido em ReacJS, para gerenciamento de credenciados, beneficiários e seus cartões.",
    link: "",
    src: BeneficiarioWebImg,
    gifWeb: BeneficiarioWebGif,
    animate: "fade-left",
  },
  {
    title: "Caash Credenciado App",
    desc: "Aplicativo para empresas credenciadas oferecerem promoções de seus produtos.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para empresas credenciadas oferecerem promoções de seus produtos, com recebimento através de cartão de crédito ou QR-Code.",
    link: "",
    src: CredenciadoAppImg,
    gifCell: CredenciadoAppGif,
    animate: "fade-left",
  },
  {
    title: "Caash Credenciado Web",
    desc: "Website para empresas credenciadas oferecerem promoções de seus produtos.",
    descMore: "Website desenvolvido em ReacJS, para empresas credenciadas oferecerem promoções de seus produtos, com recebimento através de cartão de crédito ou QR-Code.",
    link: "",
    src: CredenciadoWebImg,
    gifWeb: CredenciadoWebGif,
    animate: "fade-left",
  },
  {
    title: "Do2me Profissional",
    desc: "Aplicativo onde profissionais da beleza podem oferecer seus serviços no conforto da casa do cliente.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, onde profissionais da beleza podem oferecer seus serviços no conforto da casa do cliente, disponibilizando seus trabalhos, seus horários, sua localização, tipo de locomoção, tempo até a chegada do profissial e ao final de cada serviço, uma nota é dada para o profissinal e para o cliente.",
    link: "",
    src: Do2mepro,
    gifCell: Do2meproGif,
    animate: "fade-left",
  },
  {
    title: "Do2me Cliente",
    desc: "Aplicativo onde clientes tem acesso a profissionais da beleza para contratar seus serviços no conforto da sua casa.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, onde clientes tem acesso a profissionais da beleza para contratar seus serviços no conforto da sua casa, podendo agendar o dia e a hora que o profissional estiver disponível, mostrando a localização dos profissionais mais perto e ao final de cada serviço, uma nota é dada para o profissinal e para o cliente..",
    link: "",
    src: Do2meclient,
    gifWeb: Do2meclientGif,
    animate: "fade-left",
  },  
  {
    title: "Climão",
    desc: "Website responsivo que você pode ver os dados meteorológicos da sua localização ou de qualquer lugar do mundo.",
    descMore: "Website desenvolvido em ReacJS, desafio de uma entrevista de emprego, que você pode ver os dados meteorológicos da sua localização ou de qualquer lugar do mundo.",
    link: "https://alexjou.github.io/climao/",
    src: Climao,
    gifWeb: ClimaoGif,
    animate: "fade-right",
  },
  {
    title: "Meu DinDin App",
    desc: "Aplicativo para controle financeiro.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para controle de gastos e receitas (e mostrar quanto foi gasto em cada categoria, ex.: Farmácia, alimentação, em construção).",
    link: "http://bit.ly/MeuDinDin",
    src: MeuDinDin,
    gifCell: MeuDinDinGif,
    animate: "fade-right",
  },
  {
    title: "Kakareco",
    desc: "Website para comercialização de produtos (E-commerce).",
    descMore: "Website desenvolvido em ReacJS, para pessoas ou empresas oferecerem seus produtos e os clientes comprarem.",
    link: "",
    src: KakarecoImg,
    gifWeb: KakarecoGif,
    animate: "fade-left",
  },
  {
    title: "TrilhaTur",
    desc: "Aplicativo para mostrar as belezas naturais do Brasil.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para mostrar as belezas naturais do Brasil, todo feito com fotos autorais e usar para disponibilizar meus futuros passeios(em construção).",
    link: "",
    src: Turismo,
    gifCell: TurismoGif,
    animate: "fade-right",
  },
  
];
export default SpData;
