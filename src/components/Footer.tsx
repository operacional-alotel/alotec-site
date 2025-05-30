/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Footer() {
    return(
        <>
        <footer className="w-full py-4 flex md:flex-row flex-col items-center justify-center md:gap-14 gap-4 border-t border-[#fff]">
      <Link href="/" target="_self"><img src="/logo/logo.png" alt="Logomarca" width={150} height={120} /></Link>
        <div id="contact" className="md:block hidden"><div className="flex items-center gap-6">
          <Link href="/#index" target="_self" className="font-bold text-xl text-black">Início</Link>
          <Link href="/#about-us" target="_self" className="font-bold text-xl text-black">Sobre nós</Link>
          <Link href="/#services" target="_self" className="font-bold text-xl text-black">Produtos</Link>
          <Link href="https://wa.me/551920187198/" target="_blank" className="font-bold text-xl text-black">Fale com a gente</Link>
        </div></div>
        <div className="flex items-center gap-2">
          <Link href="https://www.facebook.com/profile.php?id=61576724577141" target="_blank"><img src="/icon/facebook.svg" alt="Facebook" width={40} height={40} /></Link>
          <Link href="https://www.instagram.com/alotecequipamentos" target="_blank"><img src="/icon/instagram.svg" alt="Instagram" width={40} height={40} /></Link>
          <Link href="mailto:contato@alotecequipamentos.com.br" target="_blank"><img src="/icon/email.svg" alt="Email" width={40} height={40} /></Link>
        </div>
      </footer>
      <div className="flex items-center justify-center w-full text-lg pb-4 text-center px-4 md:px-0">&copy; Alotec. Todos os direitos reservados.</div>
        </>
    )
}