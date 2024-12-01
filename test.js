import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import App from './App'; // Replace './App' with the path to your component

describe('To-Do List App'), () => {
  it('should add a new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const newItemInput = getByPlaceholderText('Ajouter un article');
    const addButton = getByText('Ajouter');

    fireEvent.changeText(newItemInput, 'Buy milk');
    await act(() => addButton.props.onPress());

    expect(getByText('Buy milk')).toBeTruthy();
  })};

  it('should toggle the checked status of an item'), async () => {
    const { getByText } = render(<App />);

    const newItemInput = getByPlaceholderText('Ajouter un article');
    const addButton = getByText('Ajouter');

    fireEvent.changeText(newItemInput, 'Take a walk');
    await act(() => addButton.props.onPress)
  }