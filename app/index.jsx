import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href='/home' />

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: '100px' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image 
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className='max-w--[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Descubre la nueva manera de gestionar tus consultas e información con {' '}
              <Text className='text-secondary-200'>MercadosApp</Text>
            </Text>
          </View>

          <Text className='text-sm font-pRegular text-gray-100 mt-7 text-center'>
            Donde todo es mas fácil y rápido. ¡Recuerda! para empezar debes ser usuario en los mercados de San Salvador
          </Text>
          <CustomButton 
            title='Continuar con un correo electrónico'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}


/*Esta es el componente principal de la aplicación que ha sido modificado
para funcionar con expo router en vez de un componente App.js, también al
utilizar expo router traemos la funcionalidad router para conectar pantallas.

Para el estilo se ha instalado el nativeWind que es para estilizar
como en tailwind configurando babel.config y tailwind.config.

El CustomButton es el botón para acceder al registro o ingreso,
también importamos el useGlobalContext para asegurar el inicio correcto*/