import styles from "../style";
import { CRFQ } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex flex-col md:flex-row justify-between items-start mb-12">
      {/* Logo */}
      <div className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
        <img
          src={CRFQ}
          alt="CRFQ Logo"
          className="w-[266px] h-[72.14px] object-contain"
        />
      </div>

      {/* Links */}
      <div className="flex-[2] flex flex-wrap justify-center md:justify-end gap-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className="min-w-[150px]">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mb-4">
              {footerlink.title}
            </h4>
            <ul className="list-none space-y-3">
              {footerlink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Footer bottom */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2025 CRFQ. All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-6 mt-6 md:mt-0">
        <p className="font-poppins font-normal text-center text-[16px] leading-[20px] text-dimWhite mb-4 md:mb-0">
          Hecho por{" "}
          <span className="text-secondary font-semibold">PhantomCT</span>
        </p>
        <div className="flex space-x-6">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className="w-[21px] h-[21px] object-contain cursor-pointer"
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
