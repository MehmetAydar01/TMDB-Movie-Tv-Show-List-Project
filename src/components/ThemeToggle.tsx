import { Moon, Palette, Sun } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useAppDispatch } from '@/hooks';
import { setTheme } from '@/features/theme/themeSlice';

function ThemeToggle() {
  const dispatch = useAppDispatch();

  return (
    <Accordion type='multiple' className='w-full'>
      <AccordionItem value='dark'>
        <AccordionTrigger className='uppercase text-xl'>
          themes
        </AccordionTrigger>
        <AccordionContent className='pl-4'>
          <span
            className='capitalize text-base cursor-pointer hover:transition-all hover:text-primary'
            onClick={() => dispatch(setTheme('dark'))}
          >
            <Moon className='inline-block mr-2' /> dark
          </span>
        </AccordionContent>
        <AccordionContent className='pl-4'>
          <span
            className='capitalize text-base cursor-pointer hover:transition-all hover:text-primary'
            onClick={() => dispatch(setTheme('light'))}
          >
            <Sun className='inline-block mr-2' /> light
          </span>
        </AccordionContent>
        <AccordionContent className='pl-4'>
          <span
            className='capitalize text-base cursor-pointer hover:transition-all hover:text-primary'
            onClick={() => dispatch(setTheme('system'))}
          >
            <Palette className='inline-block mr-2' /> system
          </span>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ThemeToggle;
