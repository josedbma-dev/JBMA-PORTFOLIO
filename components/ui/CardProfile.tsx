import Image from 'next/image';
import profile from '../../public/profile.jpg';

export const CardProfile = () => {
  return (
    <div className="card-css w-full min-w-[35vw]">
        <div className="lines" />
        <div className="imgBx">
          <Image
            className="absolute z-10 w-[calc(100%-20px)] h-[calc(100%-20px)] top-[10px] left-[10px] grayscale"
            src={ profile }
            alt='Profile'
          />
        </div>
        <div className="content">
            <div className="details">
              <h2 className="text-2xl mb-5">Jose Bolivar <br /><span>Full Stack / Developer</span></h2>
              <div className="data">
                <h3>Software <br /><span>Developer</span></h3>
                <h3>Data <br /><span>Analytics</span></h3>
                <h3>Support <br /><span>Specialist</span></h3>
              </div>
              <div className="actionBtn">
                <a href="/RESUME_JOSE_DAVID_BOLIVAR_MAYORA.pdf"
                 target="_blank"
                 rel="noreferrer"
                >
                  <button>Resume</button>
                </a>
                <button>Message</button>
              </div>
            </div>
          </div>
          
    </div>
  )
}
