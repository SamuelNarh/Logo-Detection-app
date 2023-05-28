import {React,Component} from "react";
import Logo from "./Components/Logo/Logo";
import Input from "./Components/Input/Input";
import Body from "./Components/Body/Body";


class App extends Component{
  constructor(){
    super()
   this.state={
    input:'',
    imageUrl:'',
    box:{}
   }
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }
  onSubmit =()=>{
  this.setState({imageUrl:this.state.input})
  this.imageTarget(this.state.imageUrl)
 
  }

  imageTarget =(url)=>{
      
// URL of image to use. Change this to your image.
const IMAGE_URL = url

const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": IMAGE_URL
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + '18634bdaf0e14327a3f17b58ded316a3'
    },
    body: raw
};

// NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
// https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
// this will default to the latest version_id

fetch(`https://api.clarifai.com/v2/models/logo-detection-v2/versions/09f3acb13bde404592c81254c5d87ae1/outputs`, requestOptions)
    .then(response => response.json())
    .then(result => this.boxModelling(this.onResult(result)))
    .catch(error => console.log('error', error));
  
  


  }
  // .region_info.bounding_box
  onResult =(input)=>{
    let result=input.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('picture');
    const width =  Number(image.width);
    const height= Number(image.height);
    console.log(result.left_col)
    return{
          top_row:(result.top_row * width)+300,
          left_col:(result.top_row *height),
          right_col: width-(result.right_col*width),
          bottom_row:height-(result.bottom_row*height)
    }
    // console.log('left',left_col,'right',right_col,'top_row',top_row,'bottom_row',bottom_row)
  // result.forEach(element => {
  //   const answer= element.region_info.bounding_box
  //      let top_row= answer.top_row;
  //   let left_col= answer.left_col;
  //   let bottom_row= answer.bottom_row;
  //   let right_col= answer.right_col;
  //   left_col= left_col * width;
  //   top_row=top_row* height;
  //   right_col= width- (right_col*width);
  //   bottom_row= height-( bottom_row*height)
  //  const all ={
  //         left_col:left_col,
  //         top_row:top_row,
  //         right_col:right_col,
  //         bottom_row:bottom_row
  //       }
        
  //      return this.setState({box:all})
  // }
  
  // );
  // console.log(results)
  
  // results.forEach(element => {
 
  //   
    // this.state.box
  }
  // )

  boxModelling =(box)=>{
    console.log(box)
    this.setState({box:box})
  }
  


  
  render()
  {
    return(
     <div>
       <Logo/>
        <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <Body image={this.state.imageUrl} boxmodel={this.state.box}/>
     </div>
    );
  }
}


export default App;