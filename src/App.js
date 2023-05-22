import {React,Component} from "react";
import Logo from "./Components/Logo/Logo";
import Input from "./Components/Input/Input";
import Body from "./Components/Body/Body";


class App extends Component{
  constructor(){
    super()
   this.state={
    input:"",
    imageUrl:''
   }
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value})
  }
  onSubmit =()=>{
    this.setState({imageUrl:this.state.input})
    console.log(this.state.imageUrl)
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