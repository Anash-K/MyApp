import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface TaskProps {
  text: string;
  completed: boolean;
  index: number;
  handleDelete: any;
  handleEdit: any;
}

const Task: React.FC<TaskProps> = ({
  text,
  completed,
  index,
  handleEdit,
  handleDelete,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={[styles.text, completed && styles.completedText]}>
          {text}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleEdit(index)}>
        <Text style={styles.Edit}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDelete(index)}>
        <Text style={styles.Delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:  {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    color: 'black',
    borderWidth: 2,
    borderColor: '#F6F6F6',
    borderStyle: 'solid',
    borderRadius: 3,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    columnGap: 10,
  },
  text: {
    fontSize: 14,
    flexShrink: 1,
    flexWrap: 'wrap',
    textTransform: 'capitalize',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#55BCF6',
  },
  leftPart: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    columnGap: 15,
    flex: 1, // Ensures that the leftPart uses available space and text can wrap inside it
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    borderRadius: 4,
    opacity: 0.5,
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 3,
  },
  Edit: {},
  Delete: {},
});

export default Task;
