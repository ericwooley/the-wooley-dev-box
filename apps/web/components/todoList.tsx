import React from 'react';
import {
  useMyListsQuery,
  useCreateListMutation,
  useAddTodoItemMutation,
  useToggleTodoItemMutation,
} from '@the-wooley-devbox/graphql-sdk';
import Logo from './logo';
import { Button } from './button';
import { AnimatePresence, motion } from 'framer-motion';
export const TodoList = () => {
  const [delayMultiplier, setDelayMultiplier] = React.useState(1);
  const [toggleTodoItem] = useToggleTodoItemMutation();
  const [createList] = useCreateListMutation();
  const [addTodoItem] = useAddTodoItemMutation();
  const { data, loading, error, refetch } = useMyListsQuery({ ssr: false });
  if (loading || !data) return <h3>Loading...</h3>;
  if (error)
    return (
      <h3>
        Uh oh, something went wrong!
        <hr />
        <button onClick={() => refetch()}>Try again</button>
      </h3>
    );
  return (
    <div>
      <Button
        onClick={() => {
          createList({
            variables: {
              name:
                prompt('What do you want to name your list?') ||
                'Untitled List',
            },
          }).then(() => refetch());
        }}
      >
        Create New List
      </Button>
      {data.myLists.length === 0 && (
        <h4>Looks like you don't have any lists yet.</h4>
      )}
      {data.myLists.map((list) => (
        <div key={list.id}>
          <Logo name={list.name}>
            {list.items
              ?.slice()
              .sort((a, b) => {
                return parseInt(a.id, 10) - parseInt(b.id, 10);
              })
              .map((todo, index) => (
                <motion.div
                  key={todo.id}
                  transition={{
                    delay: ((index * 50) / 1000) * delayMultiplier,
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 0.8,
                  }}
                >
                  <label
                    style={{
                      padding: '10px 0',
                      display: 'block',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={todo.done}
                      onChange={(e) => {
                        toggleTodoItem({
                          variables: {
                            done: e.target.checked,
                            todoId: parseInt(todo.id, 10),
                          },
                        }).then(() => refetch());
                      }}
                    />
                    &nbsp;
                    <span className={todo.done ? 'strike' : ''}>
                      {todo.name}
                    </span>
                  </label>
                </motion.div>
              ))}
            <Button
              onClick={() => {
                setDelayMultiplier(0);
                addTodoItem({
                  variables: {
                    listId: parseInt(list.id, 10),
                    todoName:
                      prompt('What do you want to name your todo?') ||
                      'Untitled Todo',
                  },
                }).then(() => refetch());
              }}
            >
              + Add Todo Item
            </Button>
          </Logo>
        </div>
      ))}
    </div>
  );
};
