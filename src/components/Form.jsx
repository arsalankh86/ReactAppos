import React, { Component } from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: "abc"

    };
this.update = this.update.bind(this);
  }

update(e){
this.setState({data:e.target.value});
}
updateState(e) {
    this.setState({data: e.target.value});
 }

  render() {
    return (    <div> 

<input type="text" value={this.state.data} onChange={this.update} >

</input>
<br></br>
{this.state.data}
    </div>  );
};
}

export default Form;
