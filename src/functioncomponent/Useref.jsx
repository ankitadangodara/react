import React,{useRef} from 'react'

const Useref = () => {
    let ref = useRef();
    function handleClick() {
      ref.current = ref.current + 2;
      alert('You clicked ' + ref.current  + ' times!');
    }
    // second
    const inputele = useRef('');
    const focusinput = () =>{
        inputele.current.focus();
        inputele.current.style.color='red'
    }
    
  return (
    <>
        <button onClick={handleClick}>Click me! </button> <br /> <br />
        {/* second  */}
        <input type="text" ref={inputele} /><button onClick={focusinput}>click for focus</button>
    </>
  )
}

export default Useref
