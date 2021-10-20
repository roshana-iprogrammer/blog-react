import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label} >Enter Title: </Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
            />
            <Text style={styles.label} >Enter Content: </Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={setContent}
            />
            <Button title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
}

BlogPostForm.defaultProps ={
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginHorizontal: 10,
        marginBottom: 5

    },
    label: {
        marginHorizontal: 10,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
});

export default BlogPostForm;