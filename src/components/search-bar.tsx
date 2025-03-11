export function SearchBar ({children} : {children: React.ReactNode}) {

  return(

    <header className='flex gap-3 '>

      <div className='bg-gray-900 p-3 flex gap-3 items-center border rounded-md border-gray-800'>

        <i className='bx bx-search text-xl'></i>

        <input type="text" id='txtCity' className='outline-none bg-gray-900'/>

      </div>

      {children}

    </header>

  )

}