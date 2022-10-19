import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo2.png'
import Loader from "react-loader-spinner";
import User from "../../services/User";
import { logoutUser, storeUserInfo } from "../../redux/user/actions";


class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      name:"",
      password:"",
      emailerror:"",
      passwordError:"",
      nameError:"",
      loading:false,
      genericError:''

    }
  }

   onSubmit=()=>{
     const{email,name,password}=this.state
     this.setState({genericError:''})

     const emailRegex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
     if(email.trim().length===0){
       this.setState({emailerror:'Please Enter Email'})

     }else if(!emailRegex.test(email)){
      this.setState({emailerror:'Please Enter Valid Email'})
    }else if(name.trim().length===0){
      this.setState({nameError:'Please Enter Name'})

     }
     else if(name.trim().length<4){
      this.setState({nameError:'Name should contain atleast 4 characters'})

     }
     else if(password.trim().length===0){
      this.setState({passwordError:'Please Enter Password'})

     }
     else if(password.trim().length<8){
      this.setState({passwordError:'Password should contain atleast 8 characters'})

     }else{
      this.setState({loading:true})
      let data={
        full_name:name,
        email:email,
        password:password,
        device_type:"ios",
        device_model:"iPhone 8",
        device_os_ver:"13.3",
        app_version:"1.1.5 (269)",
        project_id: "115G1WZI"
    }
    console.log('api call');
      User.signup(data).then(res=>{
        console.log('res on signup==>',res.data);
        if(res.data.status==200){
          this.props.reduxstoreUserInfo(res.data)

        }else{
          this.setState({genericError:res.data.message})
        }
      }).catch(err=>{
        console.log('err on signup==>',err);
      }).finally(()=>{
        this.setState({loading:false})
      })
     }

  }

  render() {
    return (
      <div style={{overflow:'auto'}} className="containerWrapper">
      <img src={logo} className="logo" />
      <div className="innerWrapper">
        <h6 className="wrapperHeading">Sign Up to your account</h6>
        <div className="inputsContainer form-group">
          <input disabled={this.state.loading} style={{backgroundColor:this.state.emailerror?'#ffe6e6':'#FAFAFB'}} autocomplete="off" value={this.state.email} type="email" onChange={e=>this.setState({email:e.target.value,emailerror:""})} className="form-control" placeholder="Your email" />
          {this.state.emailerror && <p className='inputError'>{this.state.emailerror}</p> }
          <input disabled={this.state.loading} style={{backgroundColor:this.state.nameerror?'#ffe6e6':'#FAFAFB'}} autocomplete="off" value={this.state.name} onChange={e=>this.setState({name:e.target.value,nameError:""})} type="text" className="form-control" placeholder="Your name" />
          {this.state.nameError && <p className='inputError'>{this.state.nameError}</p> }
          <input
          disabled={this.state.loading}
          style={{backgroundColor:this.state.passwordError?'#ffe6e6':'#FAFAFB'}}
          value={this.state.password}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              this.onSubmit();
            }
          }}
          onChange={e=>this.setState({password:e.target.value,passwordError:""})}
            type="password"
            autocomplete="off"
            className="form-control"
            placeholder="Create Password"
          />
          {this.state.passwordError && <p className='inputError'>{this.state.passwordError}</p> }
          {this.state.genericError && <p className='inputError'>{this.state.genericError}</p> }



        </div>
        <div className="buttonsContainer">
          <button disabled={this.state.loading} onClick={this.onSubmit}  className="btn signButton">{this.state.loading? <Loader
        type="ThreeDots"
        color="white"
        style={{marginTop:5}}
        height={30}
        width={30}
      />:"SIGN UP"}</button>
         {this.state.loading? <h5 style={{opacity:0.5,cursor:"not-allowed"}} className="bottomLink">SIGN IN</h5>:
          <h5  className="bottomLink"><Link disabled={this.state.loading} to={'./login'}>SIGN IN</Link></h5>}

        </div>
      </div>
    </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    reduxstoreUserInfo: (user) => dispatch(storeUserInfo(user)),
    reduxlogoutUser: () => dispatch(logoutUser()),

  };
};
const mapStateToProps = (state) => {
  console.log('redux state==>',state);
  return {
    user: state.user.user,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#94958B",
  },
  text: {
    color: "white",
  },
  input: {
    height: 40,
    width: "70%",
    marginBottom: 20,
    borderRadius: 20,
    paddingLeft: 20,
  },
};
