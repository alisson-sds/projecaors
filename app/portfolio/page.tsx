"use client";
import PortfolioItem from '../components/PortfolioItem'
import portfolioData from '../../public/json-data/portfolio-data.json'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Roboto } from 'next/font/google';
import WhatsappFloatingButton from '../components/WhatsappFloatingButton';

const roboto700 = Roboto({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-roboto-bold',
})

export default function Portifolio() {
  const registro = portfolioData.find(item => item.id === "20");

  return (
    <>
      <Navbar />
      <WhatsappFloatingButton/>
      <main className="h-full w-full in-h-screen bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('../../portfolio-images/${registro?.mainPhoto}'` }}>

        <div className="h-full w-full opacity-60 text-[#F8F1E7] flex justify-center items-center" style={{ background: '#000000' }}>
          <h1 className={`text-8xl select-none ${roboto700.className}`}>Portfólio</h1>
        </div>
      </main>
      <section className='relative text-center text-4xl px-16 lg:px-36 lg:py-12 py-4' id='portfolio'>
        <div
          className='absolute top-0 left-0 w-full h-full opacity-10 -z-10'
          style={{
            backgroundImage: "url('/fundo-projeto.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "contain"
          }}
        />
        <div className='relative flex flex-wrap h-full justify-center lg:gap-12'>
          {Object.entries(portfolioData)
            .reverse()
            .map(([key, { name, mainPhoto, id }]) => (
              <PortfolioItem
                name={name}
                imagePath={mainPhoto}
                id={id}
                key={id}
              />
            ))}
        </div>
      </section>

      <section
        className='lg:h-[30vh] h-[30vh] text-center text-2xl px-8 flex lg:items-center justify-center '
        id='servicos' style={{ background: '#1B3124' }}>
        <Footer source="" />
      </section>
    </>
  )
}
