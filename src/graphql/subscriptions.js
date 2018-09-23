// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const OnCreateTodo = gql`
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
    }
  }
`;
export const OnUpdateTodo = gql`
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
    }
  }
`;
export const OnDeleteTodo = gql`
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
    }
  }
`;
