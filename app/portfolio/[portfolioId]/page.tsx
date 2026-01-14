"use client";
import Navbar from '@/app/components/Navbar';
import portfolioData from '../../../public/json-data/portfolio-data.json'
import { useParams } from 'next/navigation';
import WhatsAppButton from '@/app/components/WhatsAppButton';
import Footer from '@/app/components/Footer';
import { Merriweather, Roboto } from 'next/font/google';
import WhatsappFloatingButton from '@/app/components/WhatsappFloatingButton';

const merriweather = Merriweather({
    weight: '400',
    style: 'italic',
    subsets: ['latin'],
})

const roboto400 = Roboto({
    weight: '400',
    subsets: ['latin'],
    variable: '--font-roboto'
})

export default function DetalhesPortfolio() {
    const params = useParams();
    const registro = portfolioData.find(item => item.id === params.portfolioId);

    type ActionKeys = "PROJECT" | "EXECUTION" | "CONSTRUCTION";

    const allActions: Record<ActionKeys, string> = {
        "PROJECT": "Projeto ✅",
        "EXECUTION": "Execução ✅",
        "CONSTRUCTION": "Construção ✅",
    };

    const hasValidItems = (array: string[] | undefined): boolean => {
        return (array?.filter(photo => photo.trim() !== "").length ?? 0) >= 2;
    };

    return (
        <>
            <Navbar />
            <WhatsappFloatingButton />
            <main className="h-3/4 w-full bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url('../portfolio-images/${registro?.mainPhoto}` }}>
                <div className="h-full w-full text-[#F8F1E7] opacity-40 flex justify-center items-center text-center" style={{ background: '#000000' }}>
                    <h1 className={`text-6xl lg:text-8xl select-none ${merriweather.className}`}>{registro?.name}</h1>
                </div>
            </main>
            <div style={{ background: '#F8F1E7' }}
                className='text-start text-2xl flex items-center justify-center flex-col'>
                <div className='flex h-full justify-between  w-full items-center p-8 lg:p-16'>

                    <div className='flex flex-col w-full h-full'>
                        <div className={`text-3xl flex w-full h-full ${hasValidItems(registro?.extraPhotos) ? 'flex-col' : 'lg:flex-row  justify-center lg:items-center flex-col'} gap-3 ${roboto400.className}`}>
                            <div className='flex flex-wrap h-full justify-center gap-3'>
                                {hasValidItems(registro?.extraPhotos) ? (
                                    registro?.extraPhotos.map((photo, index) => (
                                        <div className="h-[30vh] w-[45vh] bg-cover bg-center shadow-2xl" key={index} style={{ backgroundImage: `url(../portfolio-images/${photo})` }} />
                                    ))) :
                                    <div className=" h-[75vh] w-[55vh] bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(../portfolio-images/${registro?.mainPhoto})` }} />
                                }
                            </div>
                            <div className={` h-full flex flex-col items-center text-center ${hasValidItems(registro?.extraPhotos) ? 'w-full mt-10' : 'lg:w-1/2'}`}>
                                {registro?.detail ? <p>{registro?.detail}</p> : ""}
                                <div className='text-center items-center'>
                                    <br/>
                                    {(registro?.extraDetail || []).map((detail, index) => (
                                        <p key={index} className='text-2xl'>
                                            • {detail}
                                        </p>
                                    ))}
                                    <br/>
                                </div>
                                <p >Ano: {registro?.year}</p>
                                <p>{registro?.city}</p>
                                {registro?.actions.map((action: string, index) => (
                                    <p key={index}>{allActions[action as keyof typeof allActions]}</p>
                                ))}
                                {registro?.company ? <p className=''>Construção: {registro?.company} </p> : ""}
                                {registro?.companyLogo ? <div className="h-[35vh] w-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(../company-logos/${registro?.companyLogo})` }} /> : ""}
                            </div>
                        </div>
                        <div>
                            {registro?.videos.map((video, index) => (
                                <div className='lg:h-[80vh] h-[50vh] w-full flex items-center justify-center mt-12' key={index}>
                                    <iframe
                                        className='h-full w-full'
                                        src={video}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ))
                            }
                        </div>
                    </div>
                </div>
                <WhatsAppButton />
            </div>

            <div
                className='lg:h-[30vh] h-[30vh] text-center text-2xl px-8 flex lg:items-center justify-center '
                id='servicos'
                style={{ background: '#1B3124' }}>
                <Footer source="" />
            </div>
        </>
    )
}
