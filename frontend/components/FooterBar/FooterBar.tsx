import Link from 'next/link';
import Collapse from './Collapse';
import Logo from '@/utils/Logo';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const FooterLinks = {
  Category: [
    { title: 'Post Blood Request', links: '/' },
    { title: 'Register As Donar', links: '/' },
    { title: 'Register As Volunteer', links: '/' },
    { title: 'Register As Team Member', links: '/' }
  ],
  Store: [
    { title: 'Blood Request', links: '/' },
    { title: 'Donar Registration', links: '/' },
    { title: 'Volunteer Registration', links: '/' },
    { title: 'Team Member Registration', links: '/' },
    { title: 'Blood Bank', links: '/' },
    { title: 'Hospital', links: '/' }
  ],
  About: [
    { title: 'Service', links: '/' },
    { title: 'Press & News', links: '/' },
    { title: 'Privacy Policy', links: '/' },
    { title: 'Terms & Conditions', links: '/' },
    { title: 'Help & Support', links: '/' },
    { title: 'Trust & Safety', links: '/' }
  ],
  Social: [
    {
      title: 'Facebook',
      links: 'https://www.facebook.com/dutypedia',
      icon: <Facebook />,
      color: 'text-white'
    },
    {
      title: 'Instagram',
      links: 'https://www.instagram.com/dutypedia',
      icon: <Instagram />,
      color: 'text-white'
    },
    {
      title: 'Twitter',
      links: 'https://twitter.com/dutypedia',
      icon: <Twitter />,
      color: 'text-white'
    },
    {
      title: 'Linkedin',
      links: 'https://www.linkedin.com/company/dutypedia',
      icon: <Linkedin />,
      color: 'text-white'
    }
  ]
};

const FooterBar = () => {
  return (
    <div className='w-full h-auto bg-defult-secondary'>
      <footer className="container h-auto m-auto p-5 ">
      <div className="md:border-t py-16 text-[17px]  text-white hover:text-gray-100">
        {/* Mobile version */}
        <div className="grid gap-2 md:hidden">
          <Collapse title="Category">
            <div className="mt-2 space-y-2">
              {FooterLinks.Category?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </Collapse>

          <Collapse title="Store">
            <div className="mt-2 space-y-2">
              {FooterLinks.Store?.map((item, idx) => (
                <Link
                  key={idx}
                  href={item?.links}
                  className="block transition-colors duration-300 "
                >
                  {item?.title}
                </Link>
              ))}
            </div>
          </Collapse>

          <Collapse title="About">
            <div className="mt-2 space-y-2">
              {FooterLinks.About.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300 "
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </Collapse>

          <Collapse title="Contact Us">
            <div>
              <div className="mt-2 space-y-2">
                <p className="transition-colors duration-300 ">
                  Phone no: +8801811107751
                </p>
                <p className="transition-colors duration-300 ">
                  Email: made.in.bd.apps@gmail.com
                </p>
                <p className="transition-colors duration-300 ">
                  Location: Mohakhali DOHS, Dhaka, Bangladesh
                </p>
              </div>
              <div className="flex items-center pt-4 space-x-4 sm:mt-0">
                {FooterLinks.Social.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.links}
                    className={`${item.color} w-8 aspect-square bg-white rounded-full shadow-md flex justify-center items-center`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </Collapse>
        </div>

        {/* Desktop version */}
        <div className="grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 hidden md:grid">
          <div>
            <p className="font-bold uppercase tracking-wide text-white">Category</p>
            <div className="mt-2 space-y-2 font-semibold">
              {FooterLinks.Category.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300  text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-wide text-white">Store</p>
            <div className="mt-2 space-y-2 font-semibold">
              {FooterLinks.Store.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300  text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-wide text-white">About</p>
            <div className="mt-2 space-y-2 font-semibold">
              {FooterLinks.About.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.links}
                  className="block transition-colors duration-300  text-base"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-wide text-white">Contact Us</p>
            <div className="mt-2 space-y-2 text-base font-semibold">
              <p className="transition-colors duration-300 ">
                Phone no: +8801811107751
              </p>
              <p className="transition-colors duration-300 ">
                Email: made.in.bd.apps@gmail.com
              </p>
              <p className="transition-colors duration-300 ">
                Location:  Mohakhali DOHS, Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-center pt-4 space-x-4 sm:mt-0">
              {FooterLinks.Social.map((item, idx) => (
                <a
                  key={idx}
                  href={item.links}
                  className={`${item.color} w-8 aspect-square   flex justify-center items-center`}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </footer>
    <div className='w-full h-auto bg-none'>
    <div className="container m-auto flex flex-col items-center justify-between py-5 border-t sm:flex-row ">
        <Logo />
        <div className="text-sm text-white">
          All right reserved © {new Date().getFullYear()}
          <Link href='/'>{'"'}Made In Bangladesh{'"'}</Link>.
        </div>
        <div />
      </div>
    </div>
    </div>
  );
};

export default FooterBar;