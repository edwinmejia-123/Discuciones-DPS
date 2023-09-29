import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  return (
    <>
      <ScrollView>
        <View styles={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={require("./src/img/bg.jpg")} />
        </View>
        <View styles={styles.contenedor}>
          <Text style={styles.titulo}>¿Que hacer en El Salvador?</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad1.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad3.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad4.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require("./src/img/actividad5.jpg")}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/img/mejores1.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/img/mejores2.jpg")}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require("./src/img/mejores3.jpg")}
              />
            </View>
          </ScrollView>
        </View>
        {/* <View styles={styles.caja3}></View>
        <View styles={styles.caja4}></View> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  ciudad: {
    width: 250,
    height: 250,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
});
