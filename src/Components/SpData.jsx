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

import FlatmatchImg from "./img/flatmatch.jpg";
import FlatmatchGif from "./img/flatmatch.gif";

import flixImg from "./img/flix.jpg";
import flixGif from "./img/flix.gif";

import gbarbosaImg from "./img/gbarbosa.jpg";
import gbarbosaGif from "./img/gbarbosa.gif";

import guiavetImg from "./img/guiavet.png";
import guiavetGif from "./img/guiavet.gif";

import ioasysImg from "./img/ioasys.jpg";
import ioasysGif from "./img/ioasys.gif";

import monitorImg from "./img/monitor.png";
import monitorGif from "./img/monitor.gif";

import netcosImg from "./img/netcos.png";
import netcosGif from "./img/netcos.gif";

import searchImg from "./img/search.png";
import searchGif from "./img/search.gif";

import surfmappersImg from "./img/surfmappers.jpg";
import surfmappersGif from "./img/surfmappers.gif";

import tinnovaImg from "./img/tinnova.jpg";
import tinnovaGif from "./img/tinnova.gif";

import vguardImg from "./img/vguard.png";
import vguardGif from "./img/vguard.gif";

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
    animate: "fade-right",
  },
  {
    title: "Caash Beneficiário App",
    desc: "Aplicativo para clientes beneficiários",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para clientes beneficiários, sendo possível ver descontos, localização e distância dos estabelecimentos, pagamento com QR-Code, recarga de celular, cartão de débito e crédito, integrado com 3 aplicações.",
    link: "",
    src: BeneficiarioAppImg,
    gifCell: BeneficiarioAppGif,
    animate: "fade-right",
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
    animate: "fade-right",
  },
  {
    title: "Do2me Cliente",
    desc: "Aplicativo onde clientes tem acesso a profissionais da beleza para contratar seus serviços no conforto da sua casa.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, onde clientes tem acesso a profissionais da beleza para contratar seus serviços no conforto da sua casa, podendo agendar o dia e a hora que o profissional estiver disponível, mostrando a localização dos profissionais mais perto e ao final de cada serviço, uma nota é dada para o profissinal e para o cliente..",
    link: "",
    src: Do2meclient,
    gifCell: Do2meclientGif,
    animate: "fade-right",
  },
  {
    title: "Kakareco",
    desc: "Website para comercialização de produtos (E-commerce).",
    descMore: "Website desenvolvido em ReacJS, para pessoas ou empresas oferecerem seus produtos e os clientes comprarem.",
    link: "",
    src: KakarecoImg,
    gifWeb: KakarecoGif,
    animate: "fade-right",
  },
  {
    title: "Climão",
    desc: "Website responsivo que você pode ver os dados meteorológicos da sua localização ou de qualquer lugar do mundo.",
    descMore: "Website desenvolvido em ReacJS, desafio de uma entrevista de emprego, que você pode ver os dados meteorológicos da sua localização ou de qualquer lugar do mundo.",
    link: "https://alexjou.github.io/climao/",
    src: Climao,
    gifWeb: ClimaoGif,
    animate: "fade-left",
  },
  {
    title: "Netcos",
    desc: "Website para gerencimanto de Influenciadores Digitais.",
    descMore: "Website desenvolvido com ReactJS e o banco de dados no Firebase, onde os influenciadores digitais se cadastravam e integravam com suas redes sociais para monitoramento dos posts.",
    link: "",
    src: netcosImg,
    gifWeb: netcosGif,
    animate: "fade-left",
  },
  {
    title: "Busca de Perfil",
    desc: "Website para busca de perfil do github.",
    descMore: "Website desenvolvido com VueJS, para busca de perfil do github e exibição de suas informações.",
    link: "https://search-profile.vercel.app/",
    src: searchImg,
    gifWeb: searchGif,
    animate: "fade-left",
  },
  {
    title: "Monitor Twitter",
    desc: "Website para exibição de Twitts.",
    descMore: "Website desenvolvido com ReactJS e API criada em NodeJS, desafio de entrevista de emprego da Globo, para monitoramento de determinada hashtag no Twitter, para ser aceito ou não e ser exibido em um monitor.",
    link: "https://github.com/alexjou/show_tweets",
    src: monitorImg,
    gifWeb: monitorGif,
    animate: "fade-right",
  },
  {
    title: "V-Guard",
    desc: "Website responsivo europeu, desenvolvido para um cliente de Portugal para marketing de produto.",
    descMore: "Website responsivo europeu, desenvolvido para um cliente de Portugal para marketing de produto.",
    link: "",
    src: vguardImg,
    gifWeb: vguardGif,
    animate: "fade-right",
  },
  {
    title: "GuiaVet",
    desc: "Website para administrar vacinas de seus pets.",
    descMore: "Website responsivo feito em ReactJS para administrar vacinas de seus pets e ter acesso a veterinários.",
    link: "https://www.guia.vet/",
    src: guiavetImg,
    gifWeb: guiavetGif,
    animate: "fade-right",
  },
  {
    title: "Surfmappers",
    desc: "Aplicativo para facilitar a comunicação entre os fotógrafos e os surfistas.",
    descMore: "Aplicativo desenvolvido com React Native CLI, para que os fotógrafos coloquem a venda as fotos tiradas de surfistas, podendo marca-los.",
    link: "https://www.surfmappers.com/home",
    src: surfmappersImg,
    gifCell: surfmappersGif,
    animate: "fade-left",
  },
  {
    title: "Flix",
    desc: "Aplicativo para clientes com plano residencial.",
    descMore: "Aplicativo desenvolvido em React Native com Expo, onde clientes podem alterar seus dados e seus plano.",
    link: "https://www.flix.com.vc/",
    src: flixImg,
    gifCell: flixGif,
    animate: "fade-left",
  },
  {
    title: "Tinnova",
    desc: "Aplicativo para cadastro e edição de dados dos usuários.",
    descMore: "Aplicativo desenvolvido com React Native com Expo, desafio de empresa onde teria que pegar os dados da api e modificar localmente, para incrementar criei um banco de dados no Firebase para fazer a criação e modificação desses usuários.",
    link: "https://github.com/alexjou/tinnova",
    src: tinnovaImg,
    gifCell: tinnovaGif,
    animate: "fade-left",
  },
  {
    title: "IOASYS",
    desc: "Aplicativo para exibição de informações de livros.",
    descMore: "Aplicativo desenvolvido com React Native com Expo, desafio de entrevista de emprego, onde integrei com a API da empresa para fazer login e pegar os livros exibir no app.",
    link: "https://github.com/alexjou/ioasys",
    src: ioasysImg,
    gifCell: ioasysGif,
    animate: "fade-right",
  },
  {
    title: "Gbarbosa",
    desc: "Aplicativo de compras.",
    descMore: "Aplicativo desenvolvido em React Native CLI, onde clientes podem obter cupons, promoções e efetuar compras.",
    link: "https://www.gbarbosa.com.br/",
    src: gbarbosaImg,
    gifCell: gbarbosaGif,
    animate: "fade-right",
  },
  {
    title: "Flatmatch",
    desc: "Aplicativo para ajudar clientes que querem alugar com proprietários de imóveis.",
    descMore: "Aplicativo desenvolvido em React Native CLI, onde clientes interessados em dividir o aluguel procuram por imóveis e outras pessoas com o mesmo interesse.",
    link: "https://www.flatmatch.com.br/",
    src: FlatmatchImg,
    gifCell: FlatmatchGif,
    animate: "fade-right",
  },
  {
    title: "Meu DinDin App",
    desc: "Aplicativo para controle financeiro.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para controle de gastos e receitas (e mostrar quanto foi gasto em cada categoria, ex.: Farmácia, alimentação, em construção).",
    link: "http://bit.ly/MeuDinDin",
    src: MeuDinDin,
    gifCell: MeuDinDinGif,
    animate: "fade-up",
  },  
  {
    title: "TrilhaTur",
    desc: "Aplicativo para mostrar as belezas naturais do Brasil.",
    descMore: "Aplicativo desenvolvido em React Native utilizando Expo, para mostrar as belezas naturais do Brasil, todo feito com fotos autorais e usar para disponibilizar meus futuros passeios(em construção).",
    link: "",
    src: Turismo,
    gifCell: TurismoGif,
    animate: "fade-up",
  },
  
];
export default SpData;
