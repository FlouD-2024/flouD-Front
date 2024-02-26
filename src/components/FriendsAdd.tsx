import React from 'react'
import Typography from './Typography'
import Image from "next/image";
import ProfileImg from '../images/profileImg.png'

type Props = {}

export default function FriendsAdd({}: Props) {
  return (
    <>
        <Typography title={'Add Friends'} type={'bold20'} />
        <Image src={ProfileImg} />
    </>
  )
}