import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
} from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { markers as markers } from "./Markers";
import { Card, Image } from "react-native-elements";

export default function MarkerScreen() {
  const [state, setState] = useState({
    markers: markers,
    modalVisible: false,
    title: "Title",
    image: "Image",
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={state.modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.centeredView}>
            <Card style={styles.title}>
              <Image
                source={{ uri: state.image }}
                style={{ with: 300, height: 200 }}
              />
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setState({ modalVisible: false });
                }}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </TouchableHighlight>
            </Card>
          </View>
        </View>
      </Modal>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 13.7159035,
          longitude: -89.1558874,
          latitudeDelta: 2.0,
          longitudeDelta: 2.0,
        }}
      >
        <Marker
          coordinate={{ latitude: 13.7159035 }}
          title="Universidad Don Bosco"
          description="Universidad Don Bosco Campus Soyapango"
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => {
              setState({
                modalVisible: true,
                title: marker.title,
                image: marker.image,
              });
            }}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
