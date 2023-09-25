import React from 'react'

const Contato = () => {
  return (
    <div name='Contato' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>

            <div className='pb-8'>

                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Contato
                    </p>
                

                <div className='flex justify-center items-center'>

                    <form action="https://getform.io/f/419987c4-5750-4392-81da-223831f42fd1" method='POST' className='flex flex-col w-full p-10  md:w-2/3'>
                        <input
                         type="text" 
                         name='name'
                         placeholder='Digite aqui o seu nome'
                         className='p-2 bg-transparent border-2 rounded-md text-white focus: outline-none' 
                         />
                         <input
                         type="text" 
                         name='email' 
                         placeholder='Digite aqui o seu e-mail' 
                         className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus: outline-none' 
                         />
                         <textarea
                         name='message'
                         rows='10'
                         placeholder='Digite aqui sua mensagem'
                         className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>
                        </textarea><br/>

                        <button className='text-white bg-gradient-to-b  from-cyan-500 to-blue-500 px-5 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'> Vamos conversar

                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contato