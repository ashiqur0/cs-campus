import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center gap-2'>
            <Image
                src={'https://i.ibb.co.com/dsXvJ20w/logo-cs-campus.png'}
                alt='logo-cs-campus'
                width={50}
                height={40}
            />
            {/* <h2 className='text-xl font-bold'>CS <span className='text-primary'>Campus</span></h2> */}
        </Link>
    );
};

export default Logo;