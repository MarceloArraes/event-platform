import { CheckCircle } from 'phosphor-react'
import { useState } from 'react';

interface LessonProps{
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live'| 'class';

}

function LessonCard(props: LessonProps) {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <a href='#'>
      <span className='text-gray-300'>{props.availableAt.toString()}</span>
      <div className='rounded border boder-gray-500 p-4 mt-2 '>
      <header className='flex items-center justify-between'>
      {isAvailable ? 
      <span className='flex items-center gap-2 text-sm text-blue-500 font-medium'>
        <CheckCircle size={20}/>
        Conteúdo liberado
      </span>:
      <span className='flex items-center gap-2 text-sm text-orange-500 font-medium'>
        <CheckCircle size={20}/>
        Em breve
      </span>
      }
      <span className='text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold'>
        {props.type==='live' ? 'Aula ao vivo' : 'Aula presencial'}
      </span>
      </header>
      <strong className='text-gray-200 mt-5 block'>{props.title}</strong>
      </div>
    </a>
  )
}

export default LessonCard