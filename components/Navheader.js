import Image from 'next/image';
import Link from 'next/link';
import ModalExample from "../components/Modal";
import Data from '../components/data-atual';


function Navheader() {
  return (
    <div className='hidden sm:flex justify-evenly items-center'>
      <div>
        <h3>LinsTur</h3>
      </div>
      <div className='flex border border-gray-400 rounded-full items-center py-2 px-10 my-2 space-x-8'>
        <Link href='/resumo'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/relatorio.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href='/km'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/odometer.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>

        <a className='w-1/5 py-2 rounded-full border-2 border-blue-500 hover:shadow-blue'>
          <ModalExample />
        </a>
        <Link href='/combustivel'>
          <a className='w-1/5text-center'>
            <Image
              src="/icons/gas-station.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href='/'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/exit.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>
      </div>
      <div>
        <Data />
      </div>
    </div>
  )
}

export default Navheader