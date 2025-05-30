/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function AboutUs() {
    return(
        <div id="about-us" className="w-full flex items-center md:flex-row flex-col md:items-start justify-center py-14 px-4 md:px-0">
        <div className="md:w-1/2 w-full flex md:items-end md:justify-end items-center justify-center">
          <img src="/images/deposit.png" alt="Homem trabalhando no notebook" width={1000} height={1000} className="md:w-[30rem] md:h-[30rem] w-44 h-44 rounded-full object-cover" />
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center flex-col gap-4">
          <div className="flex flex-col items-center justify-center md:items-start md:max-w-[30rem] max-w-full gap-6">
            <div className="flex"><p className="text-3xl font-semibold text-[#DB551B] border-b-4 border-b-[#DB551B] md:text-left text-center">Sobre Nós</p></div>
            <p className="text-xl md:text-left text-center">Na Alotec, conectamos o seu negócio ao futuro com soluções de tecnologia de ponta. Somos especialistas em fornecer infraestrutura de TI robusta e inovadora, incluindo telefones IP, access points, roteadores, switches, racks e servidores de alta performance.</p>
            <p className="text-xl md:text-left text-center">Nosso compromisso é entender suas necessidades e oferecer os equipamentos ideais para otimizar sua comunicação e conectividade, garantindo eficiência e segurança. Mais que fornecedores, somos parceiros estratégicos dedicados ao seu sucesso.</p>
            <div className="flex"><Link href="https://api.whatsapp.com/send?phone=551920187198" target="_blank" className="bg-[#DB551B] text-white px-8 py-2 rounded-full hover:opacity-80 transition duration-300 text-xl">Saiba Mais</Link></div>
          </div>
        </div>
      </div>
    )
}