import Form from './components/Form.jsx';

let statuses = [
  'empty',
  'typing',
  'submitting',
  'success',
  'error',
];

export default function App() {
   
  return (
    <div className="flex flex-col items-center justify-center gap-4 overflow-y-auto h-screen">
        {/* Form */}
      {/* {statuses.map(status => (
        <section key={status} className="p-4 border border-gray-300 rounded-md">
          <h4 className="text-lg font-semibold">Form ({status}):</h4>
          <Form status={status} />
        </section>
      ))} */}

      
    </div>
  );
}

