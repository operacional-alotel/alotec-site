/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="w-full h-[75vh] bg-custom-1">
        <div className="w-full h-full flex flex-col gap-20 items-center justify-start bg-black bg-opacity-50 py-4 md:px-24 px-4">
          <div className="w-full flex items-center justify-center md:justify-between">
            <Link href="/" target="_self"><img src="/logo/logo_white.png" alt="Logomarca Alotec" width={150} height={120} /></Link>
            <div className="md:block hidden">
              <div className="flex items-center gap-6">
                <Link href="/#index" target="_self" className="text-white text-xl font-semibold">Início</Link>
                <Link href="/#about-us" target="_self" className="text-white text-xl font-semibold">Sobre nós</Link>
                <Link href="/#services" target="_self" className="text-white text-xl font-semibold">Produtos</Link>
                <Link href="https://loja-alotecequipamentos.loja.click/" target="_blank" className="text-white text-xl font-semibold">Loja Alotec</Link>
              </div>
            </div>
          </div>
          <div id="index" className="w-full flex flex-col gap-2 items-center justify-center">
            <h1 className="text-white text-5xl font-bold md:max-w-96 max-w-full text-center">ALOTEC</h1>
            <p className="text-white text-2xl md:max-w-[35rem] max-w-full text-center">Soluções em tecnologia para infraestrutura e conectividade</p>
          </div>
        </div>
      </nav>
    )
}