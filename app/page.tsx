import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Country List</h1>

<Link href ="/country/pakistan" style={{margin:"10px", borderRadius:"10px", border:"2px solid black", padding:"5px"}}>Pakistan</Link>
<Link href ="/country/india" style={{margin:"10px", borderRadius:"10px", border:"2px solid black", padding:"5px"}}>India</Link>
<Link href ="/country/korea" style={{margin:"10px", borderRadius:"10px", border:"2px solid black", padding:"5px"}}>Korea</Link> 
<Link href ="/country/japan" style={{margin:"10px", borderRadius:"10px", border:"2px solid black", padding:"5px"}}>Japan</Link>     
    
    
    
    </div>
    
  );
}
    