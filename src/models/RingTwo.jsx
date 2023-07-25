/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 scene.gltf 
Author: automicgoldapril (https://sketchfab.com/automicgoldapril)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/au-53412-v4-e20f584ff39248f4b53e41f55dbd6605
Title: AU-53412-V4
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RingTwo(props) {
  const { nodes, materials } = useGLTF('/ring_two/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.3}>
          <mesh geometry={nodes.Diamond_Round_Material_1_0.geometry} material={materials.Material_1} />
          <mesh geometry={nodes.Diamond_Round_2_Material_1_0.geometry} material={materials.Material_1} />
          <mesh geometry={nodes.Object_2_WhiteMetal_0.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes.Object_2_WhiteMetal_0_1.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes.Object_2_WhiteMetal_0_2.geometry} material={materials.WhiteMetal} />
          <mesh geometry={nodes.Gem_Round_None_0.geometry} material={materials.None} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ring_two/scene.gltf')
