export default function Form({ status }) {
    if (status === 'success') {
      return <h1>That's right!</h1>
    }
    return (
      <>
      <h1><b>Form</b></h1>
      <form>
        <textarea disabled={
          status === 'submitting'
        } style={{ outline: '1px solid black' }} />
        <br />
        <button disabled={
          status === 'empty' ||
          status === 'submitting'
        } style={{ outline: '1px solid black' }}>
          Submit
        </button>
        {status === 'error' &&
          <p className="Error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
      </>
    );
  }  