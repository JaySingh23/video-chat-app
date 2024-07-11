import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

import styles from '@/styles/home.module.css'
import { useState } from 'react';

export default function Home() {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const createAndJoin = () => {
    const roomId = uuidv4()
    router.push(`/${roomId}`)
  }

  const joinRoom = () => {
    if (roomId) router.push(`/${roomId}`)
    else {
      alert("Please provide a valid room id")
    }
  }
  return (
    <div className={styles.homeContainer}>
        <h1 className = {styles.title}>Video Chat App</h1>
        <div className={styles.enterRoom}>
          <input className={styles.input} placeholder='Enter Room ID' value={roomId} onChange={(e) => setRoomId(e?.target?.value)}/>
          <Button variant="outline" onClick={joinRoom}>Join Room</Button>
        </div>
        <span  className={styles.separatorText} >--------------- OR ---------------</span>
        <Button variant="outline" onClick={createAndJoin}>Create a new room</Button>
    </div>
  )
}