import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Footer(){
    return (
        <div className='bg-slate-400'>
           <footer className={styles.footer}>
              <a
                href="https://github.com/jia-ayo/mossiak-p"
                target="_blank"
                rel="noopener noreferrer"
              >
                Created by {' '}
                <span className={styles.logo}>
                  <Image src="/jiaFav.png" alt="jia Logo" width={16} height={16} />
                </span>
              </a>
            </footer>
        </div>
    )
}
export default Footer
