//import React from 'react'
import LessonCard from './LessonCard'
//import { gql, useQuery } from '@apollo/client'
import { useGetLessonsQuery } from '../graphql/generated'

/* const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: publishedAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}` */

/* interface GetLessonsQueryResponse{
   lessons:Array<{

}> 
lessons:{
  id: string
  lessonType: 'live'| 'class'
  availableAt: string
  title: string
  slug: string
}[]
} */

function Sidebar() {
//const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
  const {data} = useGetLessonsQuery( )

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>Cronograma de aulas</span>
    <div className='flex flex-col gap-8'>
      {data?.lessons.map(lesson => (
        <LessonCard title={lesson.title}
        key={lesson.id}
        slug={lesson.slug}
        availableAt={new Date(lesson.availableAt)}
        type={lesson.lessonType}
      />))}


    </div>
</aside>
  )
}

export default Sidebar