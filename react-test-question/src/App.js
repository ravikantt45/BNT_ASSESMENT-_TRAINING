import React, { useState } from 'react';

// 1. Counter Component
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>1. Counter Component</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Count: {count}</p>
    </div>
  );
}

// 2. Toggle Text
function ToggleText() {
  const [text, setText] = useState(true);
  return (
    <div>
      <h3>2. Toggle Text</h3>
      <button onClick={() => setText(!text)}>
        {text ? 'Hello' : 'Welcome Back'}
      </button>
    </div>
  );
}

// 3. Parent to Child Props
function Child({ message }) {
  return <p>{message}</p>;
}
function Parent() {
  return (
    <div>
      <h3>3. Parent ➝ Child</h3>
      <Child message="Good morning" />
    </div>
  );
}

// 4. GrandParent ➝ Parent ➝ Child
function GChild({ message }) {
  return <p>{message}</p>;
}
function GParent({ message }) {
  return (
    <div>
      <h3>4. GrandParent ➝ Parent ➝ Child</h3>
      <MidParent message={message} />
    </div>
  );
}
function MidParent({ message }) {
  return <GChild message={message} />;
}

// 5. Render list using map
function NameList() {
  const names = ['John', 'Jane', 'Alex'];
  return (
    <div>
      <h3>5. Render List</h3>
      <ul>{names.map(name => <li key={name}>{name}</li>)}</ul>
    </div>
  );
}

// 6. Checkbox
function CheckboxComponent() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h3>6. Checkbox</h3>
      <input type="checkbox" onChange={e => setChecked(e.target.checked)} />
      {checked && <p>You checked the box!</p>}
    </div>
  );
}

// 7. Controlled Component
function ControlledInput() {
  const [value, setValue] = useState('');
  return (
    <div>
      <h3>7. Controlled Input</h3>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <p>You typed: {value}</p>
    </div>
  );
}

// 8. Reusable InputField
function InputField({ label, placeholder, name, onChange, value }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <label htmlFor={name} style={{ display: 'block', marginBottom: '5px' }}>
        {label}:
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ padding: '5px', width: '200px' }}
      />
    </div>
  );
}

// 9. Login Form with Button Disabled
function LoginForm() {
  const [user, setUser] = useState({ username: '', password: '' });
  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h3>9. Login Form</h3>
      <InputField
        label="Username"
        name="username"
        placeholder="Enter username"
        onChange={handleChange}
        value={user.username}
      />
      <InputField
        label="Password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        value={user.password}
      />
      <button disabled={!user.username || !user.password}>Submit</button>
    </div>
  );
}

// 10. List with Delete
function DeleteList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const handleDelete = index => {
    const newList = [...items];
    newList.splice(index, 1);
    setItems(newList);
  };
  return (
    <div>
      <h3>10. List with Delete</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 11. Todo App
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const handleAdd = () => {
    if (task) setTodos([...todos, task]);
    setTask('');
  };
  const handleDelete = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <h3>11. Todo App</h3>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 12. Counter Reset at 10
function SmartCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(prev => (prev >= 10 ? 0 : prev + 1));
  return (
    <div>
      <h3>12. Smart Counter</h3>
      <button onClick={handleClick}>Count: {count}</button>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Counter />
      <ToggleText />
      <Parent />
      <GParent message="Hello from GrandParent" />
      <NameList />
      <CheckboxComponent />
      <ControlledInput />
      <LoginForm />
      <DeleteList />
      <TodoApp />
      <SmartCounter />
    </div>
  );
}

export default App;