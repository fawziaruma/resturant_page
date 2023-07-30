import jhonDeo from '../assets/john-doe-image.png'
import {BiSolidStar} from 'react-icons/bi'

const Testmonial = () => {
  return (
    <div className="testmonial-section-wraper">
        <div className="testmonial-section-top">
             <p className="work-subhaeding">Testimonial</p>
             <h1 className="work-heading"> What They Are Saying </h1>
             <p className="work-text" id='small-text'>
             Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
             magna non et elit. Dolor  turpis molestie dui <br />
             magnis facilisis at fringilla quam.
             </p>
        </div>
        <div className="testmonial-section-bottom">
            <img src={jhonDeo} alt="" />
            <p className='work-text'>Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
               magna non et elit. Dolor  turpis molestie dui <br />
               magnis facilisis at fringilla quam.</p>
               <div className="testmonial-icon">
               <BiSolidStar/>
               <BiSolidStar/>
               <BiSolidStar/>
               <BiSolidStar/>
               <BiSolidStar/>
               </div>
               <h5 className='heading'>John Doe</h5>
        </div>

    </div>
  )
}

export default Testmonial