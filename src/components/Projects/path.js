import BurgerInterfaceImage from '../../assets/vídeo-burger-interface.gif'
import CalculatorImage from '../../assets/vídeo-calculator.gif'
import CodeBurgerImage from '../../assets/vídeo-codeburger.gif'
import CurrencyConverterImage from '../../assets/vídeo-currency-converter.gif'
import DevContabilImage from '../../assets/vídeo-dev-contábil.gif'
import PSImage from '../../assets/vídeo-ps-store.gif'
import ReactFormImage from '../../assets/vídeo-react-form.gif'
import UserRegistrationImage from '../../assets/vídeo-user-registration.gif'

const path = [
  {
    name: 'CodeBurger',
    description: `O projeto se trata de um e-commerce completo de uma 
      hamburgueria, desde o front-end com a interface, até o back-end com a 
      api, verificação por JWT e a conexão com os bancos de 
      dados. No projeto o usuário cria a conta, e na hora de fazer login
      caso seja um admnistrador ele é redirecionado para o painel de admnistrador,
      caso seja um usuário comum ele cai na página inicial onde há
      dois carrosséis, um com as ofertas e outro com as categorias, e pode navegar para 
      outras telas como a de carrinho, ou onde todos os produtos são
      exibidos.`,
    image: CodeBurgerImage,
    technologies:
      'React, Styled Components, Node, Express, Yup, Axios, React-Hook-Form, React Router Dom, React-Elastic-Carousel, React Toastify, Postgres, MongoDB, Sequelize, Mongoose.',
    link: 'https://github.com/EduardoSimioni/code-burger-interface'
  },
  {
    name: 'React-Form',
    description: `Foi um projeto desenvolvido como teste para uma vaga, consiste em uma 
    interface para compras de adesivos, onde o usuário escolhe quais adesivos quer e a quantidade,
    tendo os botões personalizados para o input.`,
    image: ReactFormImage,
    technologies:
      'React, React-Hook-Form, React-Router-Dom, Yup, Styled-Components',
    link: 'https://github.com/EduardoSimioni/react-form'
  },
  {
    name: 'Burger-Interface',
    description: `O projeto foi um desafio proposto no curso DevClub para realizarmos uma 
    aplicação que guardasse o nome e o pedido de clientes em uma hamburgueria, um projeto simples
    apenas para fixar os conhecimentos em react.`,
    image: BurgerInterfaceImage,
    technologies:
      'React, React-Router-Dom, Axios, Styled-Components, Node, Express.js',
    link: 'https://github.com/EduardoSimioni/burguer-screen'
  },
  {
    name: 'PS-Store',
    description: `O projeto é uma tela de uma loja de controles de playstation 5 totalmente
    responsiva.`,
    image: PSImage,
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://github.com/EduardoSimioni/playstation-store'
  },
  {
    name: 'Currency-Converter',
    description: `A aplicação é um conversor de moedas que pega o valor do dólar, euro e 
    bitcoin em tempo real de uma API.`,
    image: CurrencyConverterImage,
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://github.com/EduardoSimioni/currency-converter'
  },
  {
    name: 'User-Registration',
    description: `Esse foi meu primeiro projeto utilizando React.js, é uma tela de registro de usuários,
    onde a pessoa insere o nome e a idade e os dados ficam salvos e são exibidos em outra página.`,
    image: UserRegistrationImage,
    technologies:
      'React, React-Router-Dom, Axios, Styled-Components, Node, Express.js',
    link: 'https://github.com/EduardoSimioni/user-registration-list'
  },
  {
    name: 'Dev-Contábil',
    description: `O projeto é uma página responsiva de uma contabilidade, com informações sobre os serviços, história
    da empresa e uma parte para contato, que só é exibida ao clicar no botão.`,
    image: DevContabilImage,
    technologies: 'HTML, CSS, JavaScript',
    link: 'https://github.com/EduardoSimioni/dev-contabil'
  },
  {
    name: 'Calculator',
    description: `Esse foi um dos meus primeiros projetos, foi uma calculadora simples e funcional para treinar
    o conhecimento e a lógica em JavaScript, e aprender um pouco sobre display grid.`,
    image: CalculatorImage,
    technologies: 'HTML, CSS (Display Grid), JavaScript',
    link: 'https://github.com/EduardoSimioni/calculator'
  }
]

export default path
