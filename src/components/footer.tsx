
import { styles } from '../util/style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../util/constants';

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col justify-start mr-10'>
                <img src={logo} alt="logo" className='w-[250px] h-[72px] object-contain'/>
                <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>To'lovlarni oson, ishonchli va xavfsiz qilishning yangi usuli</p>
            </div>
            <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md-mt-0 mt-10 '>
                {footerLinks.map(link => (
                  <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                    <h4 className='font-montserrat font-medium text-[18px] leading-[27px] text-white'>
                        {link.title}
                        <ul className='list-none mt-4'>
                            {link.links.map((item,idx)=> (
                                <li key={item.name} className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer
                                ${idx !==link.links.length-1 ? "mb-4" : "mb-0"}`}>{item.name} </li>
                            ))}
                        </ul>
                    </h4>
                  </div>
                ))}
            </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
            <p className={`${styles.paragraph}`}>Copyright © 2024 Prime.  All Right Reserved</p>
            <div className='flex flex-row md:mt-0 mt-6 '>
                {socialMedia.map((social,idx)=> (
                    <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${idx !== socialMedia.length-1 ? "mr-6": "mr-0"}`} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Footer;