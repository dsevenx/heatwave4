import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/" className="mb-4 text-white">
            <img src="/images/heatwave.png" alt="Logo"
              width={150} className="invert hover:scale-125 transition-transform duration-300" />
          </a>
          <p
            className="mt-6 text-base leading-7 text-white-400"
          >Get Shoes ready for the new term at your online store. Get Rewards.</p>

          <div className="flex gap-4 mt-10">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="invert hover:scale-125 transition-transform duration-300">
              <img src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="invert hover:scale-125 transition-transform duration-300">
              <img src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="invert hover:scale-125 transition-transform duration-300" >
              <img src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
          </div>

          <div className="flex flex-1 justify-between gap-32 flex-wrap mt-10">
            {footerLinks.map((sectionfooter) => (
              <div key={sectionfooter.title}>
                <h4 className="font-palanquin text-lg font-bold text-white-400 mb-4">X{sectionfooter.title}</h4>
                <ul className="text-slate-500">
                  {sectionfooter.links.map((link) => (
                    <li key={link.name} className="text-white-400 mb-1 hover:text-white transition-colors duration-300 font-montserrat text-base leading-normal">
                      <a href={link.link} className="hover-for-footer">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-24 max-sm:flex-col max-sm:items-center text-white-400">
          <p className="cursor-pointer hover-for-footer">© 2024 Heatwave. All rights reserved.</p>
          <p className="cursor-pointer hover-for-footer">Privacy Policy</p>
          <p className="cursor-pointer hover-for-footer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer