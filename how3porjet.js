import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  // State for items with unique IDs and checked status
  const [items, setItems] = useState([]);

  // State for new item text input
  const [newItem, setNewItem] = useState('');

  // Function to add a new item to the list
  const addItem = () => {
    const trimmedText = newItem.trim(); // Trim whitespace for better data integrity

    if (trimmedText !== '') {
      setItems([
        ...items,
        { id: Date.now(), name: trimmedText, checked: false },
      ]);
      setNewItem(''); // Clear input field after successful addition
    }
  };

  // Function to delete an item from the list
  const deleteItem = (itemId) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  // Function to toggle the checked status of an item
  const toggleItem = (itemId) => {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Render item component for the FlatList
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ flex: 1 }}>{item.name}</Text>
      <Button
        title={item.checked ? 'Décocher' : 'Cocher'}
        onPress={() => toggleItem(item.id)}
      />
      <Button title="Supprimer" onPress={() => deleteItem(item.id)} />
    </View>
  );

  return (
    <View>
      <TextInput
        value={newItem}
        onChangeText={(text) => setNewItem(text)}
        placeholder="Ajouter un article"
      />
      <Button title="Ajouter" onPress={addItem} />
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};

export default App;