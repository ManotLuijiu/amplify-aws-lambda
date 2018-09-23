// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const CreateTodo = gql`
  mutation CreateTodo($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      name
      description
    }
  }
`;
export const UpdateTodo = gql`
  mutation UpdateTodo($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      id
      name
      description
    }
  }
`;
export const DeleteTodo = gql`
  mutation DeleteTodo($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      id
      name
      description
    }
  }
`;
