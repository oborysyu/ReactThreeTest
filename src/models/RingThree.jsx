/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: automicgoldapril (https://sketchfab.com/automicgoldapril)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/au-40995-eng-v3-058d46a9b90e48028cf2ac932b96302e
Title: AU-40995 Eng V3
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RingThree(props) {
  const { nodes, materials } = useGLTF('/ring_three/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.001, 0.001]} rotation={[-Math.PI, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.3}>
          <mesh geometry={nodes.Object_1_WhiteMetal_0.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes.Object_2_WhiteMetal_0.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes.Object_3_WhiteMetal_0.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes.Object_4_WhiteMetal_0.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes.Object_5_WhiteMetal_0.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes['Object_6_Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480_0'].geometry} material={materials['Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480']} />
          <mesh geometry={nodes['Object_6_Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480_0_1'].geometry} material={materials['Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480']} />
          <mesh geometry={nodes['Object_6_Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480_0_2'].geometry} material={materials['Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480']} />
          <mesh geometry={nodes['Object_6_Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480_0_3'].geometry} material={materials['Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480']} />
          <mesh geometry={nodes['Object_6_Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480_0_4'].geometry} material={materials['Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480']} />
          <mesh geometry={nodes['Object_6_Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480_0_5'].geometry} material={materials['Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480']} />
          <mesh geometry={nodes['Object_6_Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480_0_6'].geometry} material={materials['Yellow_Gold-8508952d-1574-41b6-8512-d7f9eb00d480']} />
          <mesh geometry={nodes.Diamond_Round_Material_7_0.geometry} material={materials.Material_7} />
          <mesh geometry={nodes.Diamond_Round_2_Material_7_0.geometry} material={materials.Material_7} />
          <mesh geometry={nodes.Diamond_Round_3_Material_7_0.geometry} material={materials.Material_7} />
          <mesh geometry={nodes.Diamond_Round_4_Material_7_0.geometry} material={materials.Material_7} />
          <mesh geometry={nodes.Diamond_Round_5_Material_7_0.geometry} material={materials.Material_7} />
          <mesh geometry={nodes.Diamond_Round_6_Material_7_0.geometry} material={materials.Material_7} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ring_three/scene.gltf')
