import Image from 'next/image'
import styles from './LandingPage.module.css'
import Logo from '../../../public/barbearia-logo.png'
import Lua from '../../../public/moon.png'
import Sol from '../../../public/sun.png'

export default function LandingPage() {
  return (
    <section className={`${styles.landpage_container} ligth-mode`}>
      <header>
        <div className={styles.header}>
          <Image src={Logo} className={styles.logo}/>
          <button>
            <Image src={Lua} className={styles.icon}/> Dark
          </button>
        </div>
      </header>
      <section className={styles.banner}></section>
      <section className={styles.body}>
        <h1>Bem-vindo a Barber Shop</h1>
        <p>
          Nossa barbearia sempre oferece profissionais de qualidade e
          estamos prontos para lidar com suas maiores expectativas.
        </p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal.
          Aqui temos uma equipe premiada que demonstrou o talento
          de mestres barbeiros em vários concursos de estilo.
          Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
        </p>
        <p>S. Kelly</p>
      </section>
    </section>
  )
}