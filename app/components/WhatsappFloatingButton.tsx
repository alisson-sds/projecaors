import { IoLogoWhatsapp } from "react-icons/io";


export default function WhatsappFloatingButton() {

    const phoneNumber = "5551995185674"; 
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed lg:bottom-12 lg:right-12 bottom-8 right-8 z-50"
            aria-label="Contato via WhatsApp"
        >
            <div className="flex items-center justify-center w-20 h-20 text-7xl rounded-full text-green-500  
                            bg-white transition-all duration-300 hover:shadow-2xl transform hover:scale-110 hover:opacity-100
                            opacity-85">
                <IoLogoWhatsapp />                                
            </div>
        </a>
    )
}