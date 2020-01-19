import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { todoList } from "reducers/todoList"

import { Header } from "components/Header"
import { AddTodo } from "components/AddTodo"
import { TodoList } from "components/TodoList"
import { CompletedTodoList } from "components/CompletedTodoList"
const reducer = combineReducers({
  todoList: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => (
  <Provider store={store}>
    <Header />
    <AddTodo />
    <TodoList />
    <CompletedTodoList />
  </Provider>
)
