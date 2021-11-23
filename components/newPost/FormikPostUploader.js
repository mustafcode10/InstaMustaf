import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements";

const uploadPostSchemata = Yup.object().shape({
  imageUrl: Yup.string().url().required("A url is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

const PLACEHOLDER_IMG =
  "https://img.icons8.com/material-outlined/2x/ffffff/image.png";

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchemata}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100,   }}
            />
            <View style={{flex: 1, marginLeft: 12,}}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholder="Write a caption..."
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.1} orientation="vertical" />
          <TextInput
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
