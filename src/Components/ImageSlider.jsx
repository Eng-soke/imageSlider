 import { useState } from "react"


function ImageSlider(){

    const [index, setIndex] = useState(0)

        const handleNext =()=>{
            if(index < Images.length -1){
                
                setIndex(index + 1)
            }
            
                
            
            
        }

        const handlePrev=()=>{
            if(index > 0){

                setIndex(index -1)
            }
        }





        const Images = [
            "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1200",
            "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
            "https://images.pexels.com/photos/1332313/pexels-photo-1332313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/432072/pexels-photo-432072.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=1200"
        ]


    return <div className="flex justify-center py-10 font-Soke text-secondColor">
       <div className="text-center py-10 sm:py-0">
      <img className="bg-secondColor sm:w-[900px] sm:h-[400px] rounded-2xl w-[330px] h-[250px] object-cover" src={Images[index]}></img>
        <button onClick={handleNext} className="bg-primary sm:w-[100px] sm:h-[40px] w-[150px] h-[60px] rounded m-2 mt-10 ">Next</button>
        <button onClick={handlePrev} className="bg-primary sm:w-[100px] sm:h-[40px] w-[150px] h-[60px] rounded m-2 mt-10">Prev</button>
       </div>
    </div>
}
export default ImageSlider