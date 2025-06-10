import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Projeção Engenharia | Construção e Projetos em Capão da Canoa",
  description: "Projetos estruturais e laudos técnicos para Capão da Canoa e região. Soluções personalizadas para obras residenciais e comerciais com garantia de qualidade.",
  twitter: {
    card: "summary_large_image",
    title: "Projeção Engenharia - Construção e Projetos",
    description: "Projetos estruturais e laudos técnicos para Capão da Canoa e região",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Projeção Engenharia",
    "description": "Construção, Projetos, Laudo Técnico, Obras e Engenharia Civil",
    "image": "https://www.projecaors.com.br/logo-site.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Peri, 1777",
      "addressLocality": "Capão da Canoa",
      "addressRegion": "RS",
      "postalCode": "95555-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-29.756083709308847",
      "longitude": "-50.01771833645189"
    },
    "telephone": "+5551990909090",
    "url": "https://www.projecaors.com.br",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/projecaors",
      "https://www.instagram.com/projecaors"
    ]
  }

  return (
    <html lang='pt-br'>
      <body className='bg-[#F8F1E7] text-[#151318] h-screen'>{children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
