/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Services() {
    return(
        <div id="services" className="w-full bg-[#DB551B] py-14 flex items-center justify-center flex-col gap-4 mt-14">
        <p className="text-4xl font-bold text-center text-white max-w-[35rem]">NOSSOS PRODUTOS</p>
        <div className="w-[80%] grid grid-cols-1 gap-16 my-10">
          <div id="services" className="w-full flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="w-full h-full">
              <img src="/images/telefone-ip.png" alt="Background" width={600} height={600} className="w-full h-96 object-cover rounded-md" />
            </div>
            <div className="w-full h-full flex flex-col gap-6">
              <p className="text-3xl font-bold text-white md:text-left text-center">Telefonia</p>
              <p className="text-xl text-white md:text-left text-center">Descubra nossa linha de telefones IP, projetados para oferecer comunicação de voz com alta qualidade, flexibilidade e recursos avançados.</p>
              <div className="flex md:items-start md:justify-start items-center justify-center">
                <Link href="https://loja-alotecequipamentos.loja.click/categoria/telefonia-ip" target="_blank" className="bg-[#1FB2A7] text-white px-8 py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-2xl font-bold mt-6 border border-white">Compre Agora</Link>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="w-full h-full">
              <img src="/images/cabeamento.png" alt="Background" width={600} height={600} className="w-full h-96 object-cover object-top rounded-md" />
            </div>
            <div className="w-full h-full flex flex-col gap-6">
              <p className="text-3xl font-bold text-white md:text-left text-center">Cabeamento Estruturado</p>
              <p className="text-xl text-white md:text-left text-center">Explore nossas soluções de cabeamento estruturado, essenciais para garantir uma infraestrutura de rede organizada.</p>
              <div className="flex md:items-start md:justify-start items-center justify-center">
                <Link href="https://loja-alotecequipamentos.loja.click/categoria/redes-cabeamento" target="_blank" className="bg-[#1FB2A7] text-white px-8 py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-2xl font-bold mt-6 border border-white">Compre Agora</Link>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="w-full h-full">
              <img src="/images/router-switch.png" alt="Background" width={600} height={600} className="w-full h-96 object-cover rounded-md" />
            </div>
            <div className="w-full h-full flex flex-col gap-6">
              <p className="text-3xl font-bold text-white md:text-left text-center">Roteadores e Switches</p>
              <p className="text-xl text-white md:text-left text-center">Navegue pela nossa seleção de roteadores e switches, feito especialmente para construir redes eficientes e seguras.</p>
              <div className="flex md:items-start md:justify-start items-center justify-center">
                <Link href="https://loja-alotecequipamentos.loja.click/categoria/roteadores-e-switches" target="_blank" className="bg-[#1FB2A7] text-white px-8 py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-2xl font-bold mt-6 border border-white">Compre Agora</Link>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="w-full h-full">
              <img src="/images/servers.png" alt="Background" width={600} height={600} className="w-full h-96 object-cover rounded-md" />
            </div>
            <div className="w-full h-full flex flex-col gap-6">
              <p className="text-3xl font-bold text-white md:text-left text-center">Servidores</p>
              <p className="text-xl text-white md:text-left text-center">Conheça nossos servidores, projetados para oferecer o desempenho, a segurança e a escalabilidade que sua empresa precisa.</p>
              <div className="flex md:items-start md:justify-start items-center justify-center">
                <Link href="https://loja-alotecequipamentos.loja.click/categoria/servidores" target="_blank" className="bg-[#1FB2A7] text-white px-8 py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-2xl font-bold mt-6 border border-white">Compre Agora</Link>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="w-full h-full">
              <img src="/images/rack.png" alt="Background" width={600} height={600} className="w-full h-96 object-cover rounded-md" />
            </div>
            <div className="w-full h-full flex flex-col gap-6">
              <p className="text-3xl font-bold text-white md:text-left text-center">Racks</p>
              <p className="text-xl text-white md:text-left text-center">Descubra nossas opções de racks, ideais para organizar, proteger e otimizar o espaço dos seus equipamentos de TI.</p>
              <div className="flex md:items-start md:justify-start items-center justify-center">
                <Link href="https://loja-alotecequipamentos.loja.click/categoria/racks" target="_blank" className="bg-[#1FB2A7] text-white px-8 py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-2xl font-bold mt-6 border border-white">Compre Agora</Link>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center justify-center gap-8">
            <div className="w-full h-full">
              <img src="/images/access-point.png" alt="Background" width={600} height={600} className="w-full h-96 object-cover rounded-md" />
            </div>
            <div className="w-full h-full flex flex-col gap-6">
              <p className="text-3xl font-bold text-white md:text-left text-center">Access Point</p>
              <p className="text-xl text-white md:text-left text-center">Explore nossa linha de access points, desenvolvidos para expandir e otimizar sua rede Wi-Fi.</p>
              <div className="flex md:items-start md:justify-start items-center justify-center">
                <Link href="https://loja-alotecequipamentos.loja.click/categoria/access-point" target="_blank" className="bg-[#1FB2A7] text-white px-8 py-2 rounded-full hover:bg-opacity-80 transition duration-300 text-2xl font-bold mt-6 border border-white">Compre Agora</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}