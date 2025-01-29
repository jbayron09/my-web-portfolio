import DarkModeToggleBtn from '@/layouts/main/navbar/DarkModeToggleBtn'
import clsx from 'clsx'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function Home() {
  return (
      <main className='relative  flex justify-center items-center flex-col overflow-auto mx-auto sm:px-10'>
        <div className="max-w-7xl w-full">
          <h1 className='text-red-500 dark:text-red-300'>hello, portfolio</h1>
          <DarkModeToggleBtn/>
          <button className="relative px-6 py-3 font-bold text-white rounded-lg overflow-hidden bg-gradient-to-r from-violet-300 to-violet-800 transition-all duration-200 before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-800 before:to-violet-300 before:opacity-0 before:transition-all before:duration-200 before:z-0 hover:before:opacity-100">
            <span className="relative z-10">Click Me</span>
          </button>

          {/*<div className="fixed right-0 top-1/4 z-50 lg:top-[300px]">*/}
          {/*  <button*/}
          {/*      className={clsx(*/}
          {/*          'group relative h-10 w-10 overflow-hidden rounded-l-full pl-3 transition-all hover:w-24',*/}
          {/*          'font-bold text-white bg-gradient-to-r from-violet-300 to-violet-800 transition-all duration-500 before:absolute before:inset-0 before:bg-gradient-to-r before:from-violet-800 before:to-violet-300 before:opacity-0 before:transition-all before:duration-200 before:z-0 hover:before:opacity-100',*/}
          {/*      )}*/}
          {/*      // theme-controller w-90px h-10 bg-200 bg-gradient-secondary hover:bg-[-100%] rounded-l-full text-whiteColor px-10px flex items-center transition-all duration-300 font-sora*/}
          {/*      onClick={() => toggleDarkMode()}*/}
          {/*  >*/}
          {/*    <div className="absolute inset-y-0 left-3 flex items-center">*/}
          {/*      <MdLightMode className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>*/}
          {/*      <MdDarkMode className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>*/}
          {/*    </div>*/}
          {/*    <span className="relative z-10 ml-6 opacity-0 transition-opacity group-hover:opacity-100">*/}
          {/*      {isDarkMode ? 'Dark' : 'Light'}*/}
          {/*    </span>*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </main>
  )
}
