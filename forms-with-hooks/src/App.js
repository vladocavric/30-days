import { useState } from 'react';
import './App.css';

function App() {
	const [fName, setFName] = useState('');
  const [secondForm, setSecondForm] = useState(
    {
      fName: '',
      lName: '',
      country: '',
      title: ''
    }
  )

  const options = [
    {
      value: '',
      label: '-- Select Country--',
    },
    {
      value: 'Finland',
      label: 'Finland',
    },
    {
      value: 'Sweden',
      label: 'Sweden',
    },
    {
      value: 'Norway',
      label: 'Norway',
    },
    {
      value: 'Denmark',
      label: 'Denmark',
    },
  ]

  const handleSecondFormSubmit = (e) => {
    e.preventDefault()
    console.log(secondForm)
  }
	return (
		<div className='App'>
			<div className='first'>
				<label htmlFor='fName'> First Name</label>
				<input
					id='fName'
					name='fName'
					type='text'
					onChange={(e) => setFName(e.target.value)}
				/>
				<h1>{fName}</h1>
			</div>
			<div className='second'>
      <form onSubmit={handleSecondFormSubmit}>
      <h1>Add Student</h1>
      <input type='text' id='firstName' name='fName' onChange={e => setSecondForm({...secondForm, fName: e.target.value})}/>
      <input type='text' id='lName' name='lName' onChange={e => setSecondForm({...secondForm, lName: e.target.value})}/>
      <select id='country' name='country' onChange={e => setSecondForm({...secondForm, country: e.target.value})}>
        {options.map(option => <option value={option.value}>{option.label}</option>)}
      </select>
      <input type='text' id='title' name='title' onChange={e => setSecondForm({...secondForm, title: e.target.value})}/>
      <button>Submit</button>
      </form>
      </div>
		</div>
	);
}

export default App;
