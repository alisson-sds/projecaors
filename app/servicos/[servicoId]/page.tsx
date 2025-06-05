"use client";
import Navbar from '@/app/components/Navbar';
import servicosData from '../../../public/json-data/servicos-data.json';
import { useParams } from 'next/navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import Footer from '@/app/components/Footer';
import { Roboto } from 'next/font/google';
import WhatsappFloatingButton from '@/app/components/WhatsappFloatingButton';

const roboto700 = Roboto({
    weight: '700',
    subsets: ['latin'],
    variable: '--font-roboto-bold',
})

const roboto400 = Roboto({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-roboto'
})

export default function Detalhe() {
    const params = useParams();
    const registro = servicosData.find(item => item.id === params.servicoId);

    return (
        <>
            <Navbar />
            <WhatsappFloatingButton/>
            <main className="h-3/4 w-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('../servicos-images/${registro?.mainPhoto}` }}>
                <div className="h-full w-full text-[#F8F1E7] opacity-40 flex justify-center items-center text-center" style={{ background: '#000000' }}>
                    <h1 className={`text-6xl lg:text-8xl select-none ${roboto700.className}`}>{registro?.name}</h1>
                </div>
            </main>
            <section style={{ background: '#F8F1E7' }}
                className={`text-center text-2xl lg:px-8 px-2 lg:py-8 py-2 flex flex-col lg:items-center ${roboto400.className}`}
                id='servicos'>
                <div className='h-full w-full flex lg:flex-row flex-col items-center mb-14 lg:mb-12'>
                    <div className="lg:h-[60vh] lg:w-[100vh]  h-[30vh] w-full bg-cover bg-center shadow-2xl mb-8 lg:mr-4" style={{ backgroundImage: `url('../servicos-images/${registro?.mainPhoto}` }} />
                    <div className='h-full lg:w-1/2 w-full '>
                        <p className='text-5xl font-bold mb-4'>{registro?.name}</p>
                        <p className='text-3xl mb-2 lg:text-center text-start'>{registro?.detail}</p>                       
                        {registro?.extraDetail.map((detail, index) => (
                            <p key={index} className='text-3xl text-start'>• {detail}</p>
                        ))
                        }
                    </div>
                </div>
                <WhatsAppButton />

            </section>

            <section
                className='lg:h-[30vh] h-[30vh] text-center text-2xl px-8 flex lg:items-center justify-center '
                id='servicos'
                style={{ background: '#1B3124' }}>
                <Footer source="" />
            </section>
        </>
    )
}
