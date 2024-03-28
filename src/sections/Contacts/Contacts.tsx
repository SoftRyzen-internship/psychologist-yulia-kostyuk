import { Form } from '@/components/common/Form';
import { Socials } from '@/components/ui/Socials';

import IconLocation from '@/../public/icons/address.svg';
import IconPhone from '@/../public/icons/phone.svg';
import IconMail from '@/../public/icons/mail.svg';

import links from '@/data/linkContact.json';

import data from '@/data/contacts.json';

export const Contacts = () => {
  return (
    <section
      id="contacts"
      className="w-full border-t-[1px] border-solid border-accent/80 bg-footerBcg pb-10 pt-20 md:pb-[50px] md:pt-[100px] xl:py-[120px]"
    >
      <div className="container xl:flex xl:flex-row-reverse xl:justify-between">
        <h2 className="section-title font-tenor font-normal not-italic text-accent md:text-start xl:hidden smOnly:mb-10 mdOnly:mb-12">
          {data.contactsTitle}
        </h2>
        <Form />
        <div className="flex flex-col items-center md:items-start smOnly:mt-10 mdOnly:mt-[50px] notXL:gap-8">
          <h2 className="section-title mb-6 text-start font-tenor font-normal not-italic text-accent notXL:hidden">
            {data.contactsTitle}
          </h2>
          <div className="md:flex md:gap-4 xl:mb-16 xl:flex-col">
            <p className="text flex items-center gap-2 font-montserrat font-normal not-italic text-text xl:mb-6 smOnly:mb-4">
              <IconLocation width={20} height={20} />
              {data.location.label}
            </p>
            <ul className="flex flex-col gap-4 md:flex-row md:items-center">
              {links.map(item => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target={item.target}
                    rel={item.rel}
                    className="text flex items-center gap-2 font-montserrat font-normal not-italic text-text transition hover:text-accent focus-visible:text-pressed"
                  >
                    {item.name === 'phone' && (
                      <IconPhone width={20} height={20} />
                    )}
                    {item.name === 'mail' && (
                      <IconMail width={20} height={20} />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Socials />
        </div>
      </div>
    </section>
  );
};
