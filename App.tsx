/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Task from './components/Task';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState<any>([]);
  const [editindex , setEditIndex] = useState<number | null>();
  const handleAddTask = () => {
    if (task) {
        if (editindex !== null && editindex !== undefined) {
            const updatedTaskList = [...taskItems];
            updatedTaskList[editindex].text = task;
            setTaskItems(updatedTaskList); 
            setEditIndex(null);
        } else {
            setTaskItems([...taskItems, { text: task, completed: false }]);
        }
        setTask('');
    }
};


  const completeTask = (index: number) => {
    const taskList = [...taskItems];
    taskList[index].completed = !taskList[index].completed;
    setTaskItems(taskList);
  };

  const handleEdit = (index : any) =>{
    const taskList = [...taskItems];
    setTask(taskList[index].text);
    setEditIndex(index);
  }

  const handleDelete = (index : any) =>{
    const updatedTaskList = [...taskItems];
    updatedTaskList.splice(index,1);
    setTaskItems(updatedTaskList);
  }


  return (
    <View style={styles.container}>
      <View style={styles.TaskWrapper}>
        <Text style={styles.Title}>Today's task</Text>
        <View>
          {taskItems.map((item: any, index: number) => (
            <View key={index}>
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task text={item.text} completed={item.completed} index={index} handleEdit={handleEdit} handleDelete={handleDelete} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>

      {/* fotter part */}
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskContainer}>
        <TextInput
          style={styles.inputBar}
          value={task}
          onChangeText={text => setTask(text)} // Corrected prop name
          placeholder="Write Your Task"
        />
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleAddTask}>
          <View style={styles.addButton}>
            <Text style={styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#E8EAED',
    flex: 1,
  },
  TaskWrapper: {},
  buttonWrapper: {
    width: '20%',
  },
  buttonText: {
    fontSize: 40,
    color: '#C0C0C0',
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 52,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  writeTaskContainer: {
    position: 'absolute',
    bottom: 30,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    columnGap: 15,
    paddingHorizontal: 15,
  },
  inputBar: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '85%',
  },
  Title: {
    paddingTop: 40,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },

});

export default App;
