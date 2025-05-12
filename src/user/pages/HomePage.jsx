import fozilbek from '../../assets/img/fozilbek.jpg'
import instagram from '../../assets/img/instagram-icon.svg'
import telegram from '../../assets/img/telegram-icon.svg'
import github from '../../assets/img/github-icon.svg'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div className='flex justify-between mt-[50px]'>
      <div>
        <img className='rounded-[10px] shadow-lg hover:-translate-y-1 hover:scale-105 delay-150 duration-300 ease-in' src={fozilbek} alt="Fozilbek Fayzullayev" width={390} height={453}/>
      </div>
      <div className='mt-[55px]'>
        <h1 className='text-[3rem] font-heading font-bold text-heading'>Fozilbek Fayzullayev</h1>
        <h2 className='text-[2rem] font-heading font-medium text-second-text'>Frondend developer</h2>
        <p className='mb-[15px]'>Zerikishdan blog yozishga qaror qildim.</p>
        <div className='flex items-center mb-[20px] gap-x-[10px]'>
          <Link to='https://www.instagram.com/fay_zek_art/' target='_blank' className='hover:opacity-80 transition-opacity duration-75 ease-in'>
            <img src={instagram} alt="instagram" />
          </Link>
          <Link to='https://t.me/wzworld' target='_blank' className='hover:opacity-80 transition-opacity duration-75 ease-in'>
            <img src={telegram} alt="telegram" />
          </Link>
          <Link to='https://github.com/ffozilbek' target='_blank' className='hover:opacity-80 transition-opacity duration-75 ease-in'>
            <img src={github} alt="github" />
          </Link>
        </div>
        <div className='flex gap-x-[15px]'>
          <Link to='blog' className='bg-orange text-white border-2 border-orange px-[16px] py-[8px] font-heading font-semibold rounded-[10px] hover:bg-white hover:text-orange transition-colors duration-75 ease-in shadow-lg'>Read Blog</Link>
          <Link to='about' className='bg-white text-orange border-2 border-orange px-[16px] py-[8px] font-heading font-semibold rounded-[10px] hover:bg-orange hover:text-white transition-colors duration-75 ease-in shodow-lg'>About Me</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage