import pickMeals from '../assets/pick-meals-image.png'
import chooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const Work = () => {
   const workInfoData = [
     {
       image:pickMeals,
       title:"pick Meals",
       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur obcaecati"
       
     },
     {
       image:chooseMeals,
       title:"Choose How Often ",
       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur obcaecati,"
     },
     {
       image: DeliveryMeals  ,
       title:"Choose How Often ",
       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum consequatur obcaecati,"
     }
    

   ]
  return (
    <div className='work-section-wraper'>
        <div className="work-section-top">
             <p className="work-subhaeding">Work</p>
             <h1 className="work-heading"> How It Works </h1>
             <p className="work-text" >  
             Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
             magna non et elit. Dolor  turpis molestie dui <br />
             magnis facilisis at fringilla quam.
             </p>
        </div>
        <div className="work-section-bottom">
            {
              workInfoData.map((data) => (
                 <div className="work-section-info" key={data.title} >
                    <div className="info-boxes-img-container">
                       <img src={ data.image } alt="" />
                    </div>

                    <h2>{ data.title }</h2>
                    <p>{ data.text }</p>

                 </div>
              ) ) 
            }
        </div>
    </div>
  )
}

export default Work