import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

const uploadPostSchemata = Yup.object().shape({
  imageUrl: Yup.string().url().required("A url is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});

const PLACEHOLDER_IMG =
  "https://img.icons8.com/material-outlined/2x/ffffff/image.png";

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    // <View>
    //   <Text style={{ color: "white" }}>Formik</Text>
    // </View>
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
          <View>
            <Image />
          </View>
          <TextInput placeholder="Write a caption"
           placeholderTextColor="gray" />
                     <TextInput placeholder="Enter Image Url"
           placeholderTextColor="gray" />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;

const styles = StyleSheet.create({});
