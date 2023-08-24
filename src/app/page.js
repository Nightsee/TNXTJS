'use client'
import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {

  const [data, setdata] = useState(null)
  useEffect(()=>{
    async function fetchdata(){
      let tmp = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      let tmpapi = await axios.get('/api')
      setdata(tmp)
      console.log('tmp :',tmp)
    console.log('api :', tmpapi)
    }
    fetchdata()
  }, [])
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div>
        <p>content</p>
      </div>
    </main>
  )
}
