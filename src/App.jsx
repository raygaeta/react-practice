import {useState} from 'react';

import Form from './components/Form.jsx';
import Synced from './components/Synced.jsx';
import Reducer from './components/Reducer.jsx';
import Ref from './components/Ref.jsx';

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

export default function App({}) {
   const [text, setText] = useState('');

   const handleText = (e) =>
   {
      setText(e.target.value);
   }

  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-y-auto h-screen">
        {/* Form */}
      {/* {statuses.map(status => (
        <section key={status} className="p-4 border border-gray-300 rounded-md">
          <h4 className="text-lg font-semibold">Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))} */}

    
      <Synced label="one" text={text} onChange={handleText}/>
      <Synced label="two" text={text} onChange={handleText}/>
      <Reducer />
      <Ref />
    </div>
  );
}

