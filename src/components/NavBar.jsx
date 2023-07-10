import React from 'react'
import { useState,useRef,useEffect } from 'react'

function NavBar() {
    const [dropdown,setDropdown] = useState(false);
    const ref = useRef()
    useEffect(()=>{
        const handler = (event) => {
            if(dropdown && ref.current && !ref.current.contains(event.target)){
                setDropdown(false);
            }
        }
        document.addEventListener('mousedown',handler)
    },[dropdown])

  return (
    <>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}><button onClick={()=>setDropdown((prev)=>!prev)}>service <span>&#8595;</span></button>
        { dropdown &&
        <ul>
            <li>Design</li>
            <li>Development</li>
        </ul>
        }
        </li>
      </ul>
    </nav>
      
    </>
  )
}

export default NavBar
