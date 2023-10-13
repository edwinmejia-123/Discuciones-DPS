import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Formulario(props) {
  const { busqueda, guardarbusqueda } = props;
  const { pais } = busqueda;

  return (
    <>
      <View>
        <View>
          <Text style={styles.input}>Pais</Text>
        </View>
        <View>
          <Picker style={styles.itempais} selectedValue={pais}>
            <Picker.Item label="--Seleccione un pais--" value="" />
            <Picker.Item label="Canada" value="ca" />
            <Picker.Item label="El Salvador" value="sv" />
            <Picker.Item label="Guatemala" value="gt" />
            <Picker.Item label="Honduras" value="hn" />
            <Picker.Item label="Nicaragua" value="ni" />
            <Picker.Item label="Panama" value="pa" />
            <Picker.Item label="Costa Rica" value="cr" />
            <Picker.Item label="Mexico" value="mx" />
            <Picker.Item label="Argentina" value="ar" />
            <Picker.Item label="Estados Unidos" value="us" />
            <Picker.Item label="Colombia" value="co" />
            <Picker.Item label="España" value="es" />
            <Picker.Item label="Peru" value="pe" />
          </Picker>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.btnBuscar}>
            <Text style={styles.textBuscar}>Buscar País</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  itempais: {
    height: 60,
    backgroundColor: "#fff",
  },
  btnBuscar: {
    marginTop: 20,
    height: 50,
    backgroundColor: "#000",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  textBuscar: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
  },
});
