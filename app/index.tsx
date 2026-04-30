import { RefreshControl, ScrollView, Text, View } from "react-native";

//* ScrollView : componente que permite el desplazamiento vertical u horizontal de los componentes hijos, permitiendo que la pantalla se ajuste al contenido

export default function Index() {
  return (

    <ScrollView
      // estilo que tiene el componente ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}

      // mostrar/ocultar barras de desplazamiento  
      showsVerticalScrollIndicator={true} // muestra el indicador de desplazamiento vertical
      showsHorizontalScrollIndicator={true} // muestra el indicador de desplazamiento horizontal

      // configurar el comportamiento del desplazamiento
      horizontal={false}  // false : desplazamiento vertical; true : desplazamiento horizontal
      scrollEnabled={true} // true : permite el desplazamiento; false : deshabilita el desplazamiento

      // rebote del scroll al llegar al final del desplazamiento(IOS/ANDROID)  
      bounces={true} // true : permite el rebote; false : deshabilita el rebote
      
      // controlar el desplazamiento mediante el teclado
      keyboardShouldPersistTaps="always" // siempre mantiene el teclado visible
      
      // Color del indicador de refresh
      refreshControl={
        <RefreshControl
          refreshing={false} // Estado del refresh
          onRefresh={()=>{}} // Función que se ejecuta al hacer refresh
          tintColor='#49ADC4' // Color del indicador de refresh
        />
      }
      
      // Padding al hacer scroll
      contentInsetAdjustmentBehavior="automatic" // Ajusta el padding al contenido
      contentInset={{
        top:100,
        bottom:100,
        left:100,
        right:100
      }}

      // Evento cuando termina el desplazamiento(scroll)
      onScrollEndDrag={()=>{
        console.log("fin del desplazamiento")
      }}

      // Evento cuando empieza el desplazamiento(scroll)
      onScrollBeginDrag={()=>{
        console.log("inicio del desplazamiento")
      }}
      
      // Evento cuando se detiene el desplazamiento(scroll)
      onMomentumScrollEnd={()=>{
        console.log("detencion del desplazamiento")
      }}

      // Estilo de paginación(solo funciona con horizontal={true})
      pagingEnabled={true}      
    >
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Component ScrollView</Text>

    </View>
    </ScrollView>
  );
}
