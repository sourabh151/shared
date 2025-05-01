//import React from 'react'
//import moment from 'moment'
import { ArticleSchema } from './data.ts'
const Article = ({ data }: { key: number, data: ArticleSchema }) => {
  return <div className='w-full p-4 bg-myBg'>
    <h3 className='font-medium tracking-widest text-2xl text-myAccent'>{data.title}</h3>
    <div className='flex italic'>
      <p className='mr-4'>{data.date.toDateString()}</p>
      <p>{data.length} min read</p>
    </div>
    <p>{data.snippet}</p>
  </div>
}

export default Article
