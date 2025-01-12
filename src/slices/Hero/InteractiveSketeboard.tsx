'use client'
import { SkateBoard } from '@/components/SkateBoard'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

type Props = {}

const InteractiveSketeboard = (props: Props) => {

  return (
    <div className='absolute inset-0 z-10 flex justify-center items-center'>
      <Canvas className='min-h-[60rem] w-full'
        camera={{
          position:[1.5,1,1.4], fov:55
        }}
      >
        <Suspense>
          <Scene/>
        </Suspense>
      </Canvas>
    </div>
  )
}


function Scene(){
  return(
    <group>
      <OrbitControls/>
      <Environment files={'/hdr/warehouse-256.hdr'}/>
        <SkateBoard/>
        <ContactShadows opacity={0.6} position={[0,-0.08,0]}/>
    </group>
  )
}
export default InteractiveSketeboard

