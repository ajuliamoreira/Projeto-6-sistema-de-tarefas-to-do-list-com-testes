import React from 'react'
import {render, screen, fireEvent } from '@testing-library/react'
import ListaTarefas from '../components/ListaTarefas'

test('renderiza input e botão corretamente', () => {
    render(<ListaTarefas />)
    const input = screen.getByPlaceholderText('Nova tarefa')
    const botao = screen.getByText('Adicionar')

    expect(input).toBeInTheDocument()
    expect(input).toBeInTheDocument()
})

test('adicionar tarefa à lista', () => {
    render(<ListaTarefas />)
    const input = screen.getByPlaceholderText('Nova tarefa')
    const botao = screen.getByText('Adicionar')

    fireEvent.change(input, { target: { value: 'Estudar React'}})
    fireEvent.click(botao)

    expect(screen.getByText('Estudar React')).toBeInTheDocument()
})