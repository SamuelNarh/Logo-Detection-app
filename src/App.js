import {React,Component} from "react";
import Logo from "./Components/Logo/Logo";
import Input from "./Components/Input/Input";
import Body from "./Components/Body/Body";


class App extends Component{
  constructor(){
    super()
   this.state={
    input:'',
    imageUrl:''
   }
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }
  onSubmit =()=>{
    this.setState({imageUrl:this.state.input})
    
const raw = JSON.stringify({
  "user_app_id": {
    "user_id": "clarifai",
    "app_id": "main"
  },
  "inputs": [
      {
          "data": {
              "image": {
                  "url": this.state.imageUrl
              }
          }
      }
  ]
});

const requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + 'b0deb4f279bd4e1faef4051a6081b314'
    },
    body: raw
};


fetch(`https://api.clarifai.com/v2/models/logos-yolov5/versions/d4e85f4d37d24fdd9a1f04cca91a3510/outputs`, requestOptions)
    .then(response => response.json())
    .then(result => this.onResult(result))
    .catch(error => console.log('error', error));
  
  }

  onResult =(input)=>{
    let result=input.outputs[0].data.regions;
    // console.log('input',result.length,result)
   result.forEach(element => {
    console.log(element.region_info.bounding_box)
   });
  }

  bounding_box =()=>{
    
  }
  
  render()
  {
    return(
     <div>
       <Logo/>
        <Input onInputChange={this.onInputChange} onSubmit={this.onSubmit} />
        <Body image={this.state.imageUrl} />
     </div>
    )
  }
}


export default App;