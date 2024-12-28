import { View, Text, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from './CustomButton'
import { images } from '../constants'

const EmptyState = ({ title, subtitle}) => {
  return (
    <View className='justify-center items-center px-4'>
      <Image
        source={images.empty} className='w-[270px] h-[215]' resizeMode='contain'
      />
      <Text className='text-xl text-center font-pSemiBold text-white mt-2'>{title}</Text>
      <Text className='font-pMedium text-sm text-gray-100'>{subtitle}</Text>

      <CustomButton 
        title='Create a video'
        handlePress={() => router.push('/create')}
        containerStyles='w-full my-5'
      />
    </View>
  )
}

export default EmptyState