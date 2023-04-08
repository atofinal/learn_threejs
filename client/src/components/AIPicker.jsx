import React from 'react';

import CustomButton from './CustomButton';

const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (    
    <div>Hello</div>

    // <div className="aipicker-container">
    //   <textarea 
    //     className="aipicker-textarea"
    //     placeholder="Ask me AI.."
    //     rows={5}
    //     value={prompt}
    //     onChange={(e) => setPrompt(e.target.value)}
    //   />
    //   <div className="flex flex-warp gap-3">
    //     {generatingImg ? (
    //       <CustomButton 
    //         type="outline"
    //         title="Ask me AI...."
    //         customStyles="text xs"
    //       />
    //     ) : (
    //       <>
    //         <CustomButton 
    //           type="outline"
    //           title="AI Logo"
    //           handleClick={()=> handleSubmit('logo')} 
    //           customStyles="text-xs"            
    //         />

    //         <CustomButton 
    //           type="filled"
    //           title="AI Full"
    //           handleClick={()=> handleSubmit('full')}
    //           customStyles="text-xs"            
    //         />
    //       </>
    //     )}
    //   </div>
    // </div>
  )
}

export default AIPicker