import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { NavLink } from 'react-router-dom';
import { type Link } from '@/utils';

type NavbarAccProps = {
  accText: string;
  links: Link[];
};

function NavbarAccordion({ accText, links }: NavbarAccProps) {
  return (
    <Accordion type='multiple' className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger className='uppercase text-xl'>
          {accText}
        </AccordionTrigger>
        {links.map(({ href, label }) => {
          return (
            <AccordionContent className='pl-4' key={href}>
              <NavLink
                to={href}
                className={({ isActive }) => {
                  return `capitalize text-base ${
                    isActive ? 'text-primary' : ''
                  }`;
                }}
              >
                {label}
              </NavLink>
            </AccordionContent>
          );
        })}
      </AccordionItem>
    </Accordion>
  );
}

export default NavbarAccordion;
