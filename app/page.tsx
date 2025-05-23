"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx'
import { SetStateAction, useState } from 'react';
import { Roboto } from 'next/font/google';
import { IoLocationOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import PortfolioSection from './components/PortfolioSection';
import ServicosSection from './components/ServicosSection';
import Footer from './components/Footer';


const roboto700 = Roboto({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-roboto-bold',
})

const roboto500 = Roboto({
  weight: '500',
  subsets: ['latin'],
})

const roboto400 = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto'
})

export default function Home() {

  const slides = [
    {
      url: 'servicos-images/projetos.png',
      title: 'PROJETOS',
      subtitle: "Transformamos suas ideias em realidade"
    },
    {
      url: 'servicos-images/construcao.png',
      title: 'CONSTRUÇÃO',
      subtitle: "Tornamos o seu sonho de construir no litoral em realidade"
    }
    
  ]

  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isFirstSlide = currentIndex === slides.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex: SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div style={{ overflowX: 'hidden' }}>

      <Navbar />
      <div id="main-content" className='h-[100vh]  w-full m-auto group '>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover duration-100'>
          <div className="h-full w-full  text-[#F8F1E7] flex flex-col justify-center items-center relative" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='h-3/5 w-full flex flex-col  items-center  justify-between absolute bottom-0'>
              <div className='flex flex-col items-center text-center'>
                <h1 className={`text-5xl lg:text-8xl select-none mb-4 ${roboto700.className}`}>{slides[currentIndex].title}</h1>
                <h3 className={`text-xl lg:text-2xl select-none p-2 ${roboto400.className}`}>{slides[currentIndex].subtitle}</h3>
              </div>
              <div className='flex py-2'>
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-4xl cursor-pointer'>
                    <RxDotFilled />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        aria-label="Slide anterior">
          <BsChevronCompactLeft onClick={prevSlide} size={30} /></div>
        <div className='lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        aria-label="Próximo Slide">
          <BsChevronCompactRight onClick={nextSlide} size={30} /></div>

      </div>
      <section className='h-[calc(100%-96px)] text-center text-4xl' id='portfolio'>
        <div className='relative h-full w-full'>
          <Image
            src='/fundo-projeto.png'
            alt='Fundo do portfólio'
            fill
            style={{objectFit: "cover"}}
            className='opacity-10' // Ajuste de opacidade
          />
          <div className='relative z-10  flex flex-col items-center lg:px-36 px-16 py-12'>
            <h1 className={roboto700.className}>PORTFÓLIO</h1>
            <PortfolioSection />
            <Link
              className={`h-12 mt-8 lg:w-1/4 w-3/4 text-lg border-2 border-yellow-600 flex items-center shadow-xl hover:shadow-[0_15px_15px_rgba(0,0,0,0.50)] justify-center ${roboto500.className}`}
              href='/portfolio'
              aria-label="Ver mais projetos do portfólio"
              style={{ background: '#F8F1E7' }}>
              VER MAIS
            </Link>
          </div>
        </div>
      </section>


      <section style={{ background: 'linear-gradient(to right, #1B3124, #061f16)' }}
        className='h-[calc(100%-96px)] text-center text-4xl px-12 lg:px-36 py-12 flex flex-col items-center' id='servicos'>
        <h1 className={`text-[#F8F1E7] ${roboto700.className}`}>SERVIÇOS</h1>
        <ServicosSection />
        <Link className={`h-12 w-3/4 lg:w-1/4 text-lg border-2 border-yellow-600 text-[#A77A37] mt-10 lg:mt-12 shadow-xl hover:shadow-[0_15px_15px_rgba(0,0,0,0.50)] flex items-center justify-center ${roboto500.className}`}
          href="/servicos"
          aria-label="Ver mais serviços da Empresa"> VER MAIS</Link>
      </section>

      <section className='h-[calc(200%-96px)] px-12 py-12 flex flex-col gap-8 items-center text-center' id='quemsomos'>
        <h1 className={`text-4xl mb-4 ${roboto700.className}`}>FAMÍLIA PROJEÇÃO</h1>
        <div className={`flex lg:flex-row flex-col-reverse h-2/5 justify-between gap-3 w-5/6 items-center ${roboto400.className}`}>
          <div className="lg:h-[50vh] h-[30vh] lg:w-2/5 flex flex-col">
            <div className="h-full w-full bg-cover bg-center rounded-2xl shadow-xl" style={{ backgroundImage: "url('/historia-images/escritorio.png" }} />
            <h3 className="text-xs lg:text-lg text-center">(Elizabeth, Mário Sérgio e Marlene Barrionuevo em frente ao Chalé Verde)</h3>
          </div>
          <p className='text-xs lg:text-xl lg:w-2/4'>
            A Projeção é uma empresa familiar com raízes profundas em
            Capão da Canoa e uma história que remonta ao final dos
            anos 80. Fundada por Mário Sérgio Jacobs Barrionuevo,
            engenheiro civil formado pela PUCRS em 1983, a Projeção
            iniciou sua trajetória focada em projetos de arquitetura e
            engenharia. Nossa primeira sede estava localizada na
            Avenida Paraguassu, mas, em meados dos anos 90,
            mudamos para o emblemático Chalé Verde, na esquina da
            Rua Pindorama, onde funcionava a imobiliária do pai de
            Mário, Alcides Castilhos Barrionuevo, e que por muitos anos
            foi o lar da família Barrionuevo.</p>
        </div>

        <div className={`flex flex-col h-2/5 justify-between gap-3 w-5/6 items-center lg:flex-row  ${roboto400.className}`}>
          <p className='text-xs lg:text-xl lg:w-2/4'>
            Mário Sérgio não foi apenas um engenheiro talentoso, mas também
            um professor dedicado e uma figura respeitada em Capão da Canoa.
            Ele contribuiu ativamente para o desenvolvimento da cidade,
            ocupando um papel importante no setor de obras da prefeitura. Era
            comum que profissionais e cidadãos o procurassem para esclarecer
            dúvidas sobre processos da prefeitura, o funcionamento da
            administração e até para resolver problemas complexos. Sempre
            disposto a compartilhar seu conhecimento, Mário adorava explicar e
            orientar, e por isso era amplamente admirado por sua generosidade e
            dedicação à comunidade.</p>
          <div className="lg:h-[50vh] h-[30vh] lg:w-2/5 flex flex-col ">
            <div className="h-full w-full bg-cover bg-center rounded-2xl shadow-xl" style={{ backgroundImage: "url('/historia-images/mario.png" }} />
            <h3 className="text-xs lg:text-lg text-center">(Legenda: Mário Sérgio fundador da empresa Projeção)</h3>
          </div>
        </div>
        <div className={`flex h-2/5 justify-between w-5/6 items-center flex-col-reverse lg:flex-row gap-3  ${roboto400.className}`}>
          <div className="lg:h-[50vh] h-[30vh] lg:w-2/5  flex flex-col">
            <div className="h-full w-full bg-cover bg-center rounded-2xl shadow-xl" style={{ backgroundImage: "url('/historia-images/formatura.png" }} />
            <h3 className="text-xs lg:text-lg text-center">(Legenda: Ramiro e Isadora, Formatura de Engenharia Civil 2022/1 PUCRS)</h3>
          </div>
          <p className='text-xs lg:text-xl lg:w-2/4'>
            Ao longo das décadas, a Projeção evoluiu e se modernizou, mantendo a essência de
            qualidade e comprometimento com o cliente. Em 2016, Ramiro Nunes Barrionuevo, filho de
            Mário Sérgio e também engenheiro civil formado pela PUCRS, passou a integrar a
            liderança da empresa, trazendo uma visão renovada e implementando novos processos que
            levaram a Projeção a  expandir seus horizontes. No ano de 2020, a construtora da Projeção
            foi oficialmente inaugurada sob a direção de Ramiro. Nesse mesmo período, a filha de
            Mário Sérgio, Isadora, ainda estudante de engenharia civil, começou seu estágio na
            empresa, contribuindo para a  continuidade da história da família no setor. Em 2021, com
            o falecimento de Mário Sérgio, seus filhos assumiram plenamente a liderança da Projeção,
            mantendo vivo o legado de dedicação e excelência deixado por ele. Após a formatura de
            Isadora em 2022, a empresa continuou sua trajetória de expansão, atuando não apenas
            em Capão da Canoa e Xangri-lá, mas também em outras cidades como Porto Alegre e Gramado.</p>
        </div>
      </section>

      <section style={{ background: '#1B3124' }}
        className={`h-[calc(140%-96px)] text-center text-4xl px-36 py-16 flex flex-col items-center gap-16 ${roboto500.className}`} id='contato'>
        <div className='flex lg:w-full h-2/4 items-center justify-center lg:flex-row flex-col'>
          <div className='flex flex-col  h-3/4 w-[40vh] lg:w-2/5 items-start gap-2 '>
            <h1 className="font-bold text-[#F8F1E7] text-6xl">Contato:</h1>
            <div className='flex items-center text-2xl gap-4 text-start'>
              <IoLocationOutline className='text-[#F8F1E7] text-5xl' />
              <h3 className='text-[#F8F1E7]'>Rua Peri, 1777, Sala 302, Centro, Capão da Canoa/RS</h3>
            </div>
            <div className='flex items-center text-2xl gap-4'>
              <MdLocalPhone className='text-[#F8F1E7] text-5xl' />
              <h3 className='text-[#F8F1E7]'>51 99518-5674</h3>
            </div>
            <div className='flex items-center text-2xl gap-4'>
              <FaWhatsapp className='text-[#F8F1E7] text-5xl' />
              <h3 className='text-[#F8F1E7]'>51 99518-5674</h3>
            </div>
            <div className='flex items-center text-2xl gap-4'>
              <PiEnvelopeSimpleLight className='text-[#F8F1E7] text-5xl' />
              <h3 className='text-[#F8F1E7]'>contato@projecaors.com</h3>
            </div>
          </div>
          <div className='w-[40vh] lg:w-2/5 h-3/4 '>
            <form action="https://formsubmit.co/contato@projecaors.com" method="POST" className='w-full h-full flex flex-col items-start gap-3 lg:mt-10'>
              <input id="name" type="text" name="name" required className="border-2 border-yellow-600 w-full text-2xl outline-none placeholder:text-lg" placeholder='Digite seu nome*'></input>
              <input id="email" type="email" name="email" required className="border-2 border-yellow-600 w-full text-2xl outline-none placeholder:text-lg" placeholder='Digite seu E-mail*'></input>
              <textarea id="text" name="message" required className="border-2 border-yellow-600 w-full h-full text-2xl outline-none placeholder:text-lg" placeholder='Digite sua mensagem*'></textarea>
              <button type="submit" className={`w-full text-lg border-2 border-yellow-600 text-[#A77A37] hover:shadow-[0_15px_15px_rgba(0,0,0,0.50)] ${roboto500.className}`}>ENVIAR MENSAGEM</button>
              <input type="hidden" name="_subject" value="Novo Contato!"></input>
              <input type="hidden" name="_captcha" value="false"></input>
            </form>
          </div>

        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d865.9319525534949!2d-50.017724510561!3d-29.756589710652964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95228320911045f1%3A0x3bba1caa90c3b287!2sProje%C3%A7%C3%A3o%20Arquitetura%20e%20Engenharia!5e0!3m2!1spt-BR!2sbr!4v1737053648924!5m2!1spt-BR!2sbr"
          className="w-[40vh] h-[50vh] lg:w-[140vh] lg:h-[60vh] shadow-xl mb-2" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Projeção Engenharia no Google Maps" />

      </section>
      <section
        className='lg:h-[30vh] h-[30vh] text-center text-2xl px-16 flex lg:items-center justify-center '
        id='servicos'>

        <Footer source="White" />
      </section>
    </div>
  )
}
