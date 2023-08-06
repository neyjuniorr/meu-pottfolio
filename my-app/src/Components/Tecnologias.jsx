import React from 'react'

import html from '../imagens/html.png';
import css from '../imagens/css.png';
import javascript from '../imagens/javascript.png';
import node from '../imagens/node.png';
import react from '../imagens/react.png';
import tailwind from '../imagens/tailwind.png';


const Tecnologias = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title:'CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 3,
            src: javascript,
            title:'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: node,
            title:'NODE',
            style: 'shadow-green-500'
        },
        {
            id: 5,
            src: react,
            title:'REACT',
            style: 'shadow-blue-500'
        },
        {
            id: 6,
            src: tailwind,
            title:'TAILWIND',
            style: 'shadow-blue-300'
        },
        
    ]
  return (
    <div name='Tecnologias' 
    className='bg-gradient-to-b from-black via-black to-black w-full h-screen'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Tecnologias
                </p>
                <p className='py-5'> Linguagens de programação que estou me aperfeiçoando. </p>
            </div>
            



            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                 
            {techs.map(({ id, src, title, style }) => (
                        <div 
                        key={id}
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                ))}
               
            </div>  
            </div>
        </div>
  )
}

export default Tecnologias