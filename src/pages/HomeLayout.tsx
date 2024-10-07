import { Loading, Navbar } from '@/components';
import { Outlet, useNavigation } from 'react-router-dom';

function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <div className='grid lg:flex lg:justify-start lg:items-start'>
      <Navbar />

      <main className='align-element py-8 grid w-full lg:max-w-[80rem] lg:block mt-20 lg:mt-0'>
        {isPageLoading ? <Loading /> : <Outlet />}
      </main>
    </div>
  );
}

export default HomeLayout;
