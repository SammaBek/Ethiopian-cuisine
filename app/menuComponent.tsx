import Image from 'next/image';
import RatingComponent from './ratingComponent';

// Here i defined an interface with TypeScript to specify the tyes of variables im expecting

interface MenuProps {
  menuName?: string;
  menuImageUrl?: string;
  menuDescription?: string;
  menuPrice?: string;
}


export default function MenuComponent({ menuDescription, menuImageUrl, menuName, menuPrice }: MenuProps) {
  return (

    <div className='flex flex-col transition-transform duration-500 hover:scale-105 max-w-[500px]'>
      <div className='group relative rounded-lg overflow-hidden h-[30vh]'>
        <img
          className="w-full h-full object-cover"
          src={menuImageUrl}
          alt=""
        />

        { /* This tailwind classes combination gives the Menu items a special hover behaviour - reduces bg color by 50 and shows Menu Description
         */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/50 transition duration-300">
          <span className='text-white font-serif px-2 text-md font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {menuDescription}
          </span>
        </div>
      </div>

      <div className='flex text-gray-400 space-x-4 mt-2'>
        <div className='flex'>
          { /* Here im importing a Rating Component (my own) for start rating */}
          <RatingComponent />
        </div>
        <p className='text-sm'>{menuName}</p>
        <div className='flex text-sm'>
          {menuPrice}
        </div>
      </div>
    </div>
  )
}